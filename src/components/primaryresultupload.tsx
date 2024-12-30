"use client";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { Subject, Grades } from "@/Types/StudentData";

const subjects: Subject[] = [
  {
    name: "MATHEMATICS",
    fields: ["mathematics_ca1", "mathematics_ca2", "mathematics_exam"],
  },
  {
    name: "ENGLISH LANGUAGE",
    fields: ["english_ca1", "english_ca2", "english_exam"],
  },
  {
    name: "BASIC SCIENCE",
    fields: ["basic_science_ca1", "basic_science_ca2", "basic_science_exam"],
  },
  {
    name: "QUANTITATIVE REASONING",
    fields: [
      "quantitative_reasoning_ca1",
      "quantitative_reasoning_ca2",
      "quantitative_reasoning_exam",
    ],
  },
  {
    name: "AGRICULTURAL SCIENCE",
    fields: [
      "physical_health_social_ca1",
      "physical_health_social_ca2",
      "physical_health_social_exam",
    ],
  },
  {
    name: "CIVIC EDUCATION",
    fields: ["jolly_phonics_ca1", "jolly_phonics_ca2", "jolly_phonics_exam"],
  },
  {
    name: "COMPUTER STUDIES",
    fields: [
      "understanding_the_world_ca1",
      "understanding_the_world_ca2",
      "understanding_the_world_exam",
    ],
  },
  {
    name: "CHRISTIAN RELIGIOUS STUDIES",
    fields: [
      "christian_religious_studies_ca1",
      "christian_religious_studies_ca2",
      "christian_religious_studies_exam",
    ],
  },
  {
    name: "VOCATIONAL STUDIES",
    fields: ["art_design_ca1", "art_design_ca2", "art_design_exam"],
  },
  {
    name: "HOME ECONOMICS",
    fields: ["practical_life_ca1", "practical_life_ca2", "practical_life_exam"],
  },
  {
    name: "PHYSICAL & HEALTH EDUCATION",
    fields: ["rhymes_ca1", "rhymes_ca2", "rhymes_exam"],
  },
  {
    name: "SOCIAL STUDIES",
    fields: [
      "verbal_reasoning_ca1",
      "verbal_reasoning_ca2",
      "verbal_reasoning_exam",
    ],
  },
  {
    name: "VERBAL REASONING",
    fields: ["handwriting_ca1", "handwriting_ca2", "handwriting_exam"],
  },
  {
    name: "HAND WRITING",
    fields: ["literature_ca1", "literature_ca2", "literature_exam"],
  },
  {
    name: "SPEELLING & DICTION",
    fields: ["literature_ca1", "literature_ca2", "literature_exam"],
  },
  {
    name: "IGBO LANAGUAGE",
    fields: ["literature_ca1", "literature_ca2", "literature_exam"],
  },
];

export default function PrimaryResultsUploadForm() {
  const supabase = createClient();
  const [studentName, setStudentName] = useState<string>("");
  const [grades, setGrades] = useState<Grades>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const calculateSubjectTotal = (subjectFields: string[]) => {
    return subjectFields.reduce(
      (total, field) => total + (grades[field] || 0),
      0
    );
  };

  const calculateOverallTotal = () => {
    return subjects.reduce((total, subject) => {
      return total + calculateSubjectTotal(subject.fields);
    }, 0);
  };

  const calculateSubjectGrade = (total: number) => {
    if (total >= 80) return "A";
    if (total >= 70) return "B";
    if (total >= 60) return "C";
    if (total >= 50) return "D";
    return "F";
  };

  const handleGradeChange = (field: string, value: string) => {
    const numValue =
      value === "" ? 0 : Math.min(100, Math.max(0, parseInt(value)));
    setGrades((prev) => ({ ...prev, [field]: numValue }));
  };

  const normalizeSubjectName = (name: string): string => {
    const nameMap: { [key: string]: string } = {
      "Physical Health & Social Skills": "physical_health_social",
      "Literature in English": "literature",
    };

    return (
      nameMap[name] || name.toLowerCase().replace(/ &/g, "").replace(/ /g, "_")
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    if (!studentName.trim()) {
      setSubmitMessage("Please enter a student name");
      setIsSubmitting(false);
      return;
    }

    try {
      // Get current user
      const { data: userData, error: userError } =
        await supabase.auth.getUser();
      if (userError || !userData?.user) {
        throw new Error("Authentication required");
      }

      // Calculate totals and grades for each subject
      const subjectResults = subjects.reduce((acc, subject) => {
        const total = calculateSubjectTotal(subject.fields);
        const subjectName = normalizeSubjectName(subject.name);
        return {
          ...acc,
          [`${subjectName}_total`]: total,
          [`${subjectName}_grade`]: calculateSubjectGrade(total),
        };
      }, {});

      const requestBody = {
        student_name: studentName.trim(),
        ...grades,
        ...subjectResults,
        overall_total_score: calculateOverallTotal(),
      };

      const response = await fetch("/auth/uploadprimary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to upload results");
      }

      setSubmitMessage("Results uploaded successfully!");
      setGrades({});
      setStudentName("");
    } catch (error) {
      console.error("Error uploading results:", error);
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Failed to upload results. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="student_name"
            className="block text-sm font-medium text-gray-700"
          >
            Student Name
          </label>
          <input
            type="text"
            id="student_name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter student's full name"
            required
          />
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Enter Grades</h2>

        {subjects.map((subject) => (
          <div key={subject.name} className="mb-6">
            <h3 className="text-lg font-medium mb-3">{subject.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {subject.fields.map((field) => (
                <div key={field}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field
                      .split("_")
                      .map((word) => word.toUpperCase())
                      .join(" ")}
                  </label>
                  <input
                    type="number"
                    id={field}
                    value={grades[field] || ""}
                    onChange={(e) => handleGradeChange(field, e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    min="0"
                    max="100"
                    required
                  />
                </div>
              ))}
              <div className="md:col-span-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-700">
                    Total: {calculateSubjectTotal(subject.fields)}
                  </p>
                  <p className="text-sm font-medium text-gray-700">
                    Grade:{" "}
                    {calculateSubjectGrade(
                      calculateSubjectTotal(subject.fields)
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-6 border-t pt-4">
          <p className="text-lg font-medium">
            Overall Total: {calculateOverallTotal()}
          </p>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Results"}
        </button>

        {submitMessage && (
          <p
            className={`mt-4 text-center ${
              submitMessage.includes("Failed") ||
              submitMessage.includes("Please enter")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {submitMessage}
          </p>
        )}
      </div>
    </form>
  );
}
