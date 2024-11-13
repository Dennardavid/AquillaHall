"use client";

import Grading from "@/components/grading";
import NuseryTable from "@/components/nurserytable";
import { useState, useEffect } from "react";
import { StudentData } from "@/Types/StudentData";

export default function Results() {
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch("/auth/getresult");
        if (!response.ok) {
          throw new Error("Failed to fetch student data");
        }
        const data = await response.json();
        setStudentData(data[0]); // Assuming we're showing one student's record
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!studentData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        No data found
      </div>
    );
  }

  let average_score = studentData.overall_total_score / 14;
  let rounded = Number.parseFloat(average_score.toFixed(2));

  return (
    <div>
      <NuseryTable studentData={studentData} rounded= {rounded} />

      <img
        src="/stamp.png"
        alt="school stamp"
        width={200}
        className="relative bottom-16 left-[45%] "
      />

      <div className="-mt-32">
        <Grading />
      </div>
    </div>
  );
}
