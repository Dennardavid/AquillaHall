"use client";

import React, { useState } from "react";

interface Subject {
  name: string;
}

interface Grades {
  [key: string]: string;
}

const subjects: Subject[] = [
  { name: "Mathematics" },
  { name: "Physics" },
  { name: "Chemistry" },
  { name: "English" },
  { name: "Biology" },
];

export default function UploadResults() {
  const [reg_number, setRegNumber] = useState<string>("");
  const [grades, setGrades] = useState<Grades>(
    subjects.reduce(
      (acc, subject) => ({ ...acc, [subject.name]: "" }),
      {} as Grades
    )
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleGradeChange = (subject: string, grade: string) => {
    setGrades((prevGrades) => ({ ...prevGrades, [subject]: grade }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/auth/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...grades,
          reg_number,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to upload results");
      }

      /* const data = await response.json(); */
      setSubmitMessage("Results uploaded successfully!");
      // Reset form after successful submission
      setRegNumber("");
      setGrades(
        subjects.reduce(
          (acc, subject) => ({ ...acc, [subject.name]: "" }),
          {} as Grades
        )
      );
    } catch (error) {
      console.error("Error uploading results:", error);
      setSubmitMessage("Failed to upload results. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Upload Results</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="regNumber" className="block text-lg font-medium mb-2">
            Enter Student Registration Number
          </label>
          <input
            type="text"
            id="reg_number"
            name="reg_number"
            value={reg_number}
            onChange={(e) => setRegNumber(e.target.value)}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter registration number"
            required
          />
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Enter Grades</h2>
          {subjects.map((subject) => (
            <div key={subject.name} className="mb-4">
              <label htmlFor={subject.name} className="block font-medium mb-2">
                {subject.name}
              </label>
              <input
                type="number"
                id={subject.name}
                value={grades[subject.name]}
                onChange={(event) =>
                  handleGradeChange(subject.name, event.target.value)
                }
                className="w-full p-2 border rounded-lg"
                placeholder="Enter grade"
                min="0"
                max="100"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Results"}
          </button>

          {submitMessage && (
            <p
              className={`mt-4 text-center ${
                submitMessage.includes("Failed")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
