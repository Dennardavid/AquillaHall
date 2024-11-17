"use client";
import { StudentData } from "@/Types/StudentData";
import Grading from "./grading";
import { useState, useEffect } from "react";

export default function PrimaryTable() {
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch("/auth/getnurseryresult");
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

  let average_score = studentData.overall_total_score / 16;
  let rounded = Number.parseFloat(average_score.toFixed(2));

  return (
    <>
      <table className="min-w-full bg-white border-collapse border border-slate-500">
        <thead>
          <tr>
            <th
              colSpan={13}
              className="py-2 border border-slate-500 text-gray-800 text-center text-lg font-bold"
            >
              <div className="flex items-center justify-center">
                <img src="/Aquila.png" alt="aquila" width={700} />
              </div>
              <p className="font-normal text-blue-500">
                Incarnate Road, Off Location Road, Umuebele 2, Etche LGA, Rivers
                state
              </p>
            </th>
          </tr>
          <tr>
            <th
              colSpan={13}
              className="py-2 text-center text-lg font-extrabold
            "
            >
              NURSERY CONTINUOUS ASSESSMENT REPORT SHEET
            </th>
          </tr>

          <tr>
            <th colSpan={6} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Name :
                </span>
                <span className="flex-1 font-normal px-2">
                  {studentData.student_name}
                </span>
              </div>
            </th>
            <th colSpan={7} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Gender :
                </span>
                <span className="flex-1 font-normal px-2">Male</span>
              </div>
            </th>
          </tr>

          <tr>
            <th colSpan={3} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Age :
                </span>
                <span className="flex-1 font-normal px-2">11</span>
              </div>
            </th>
            <th colSpan={3} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Class :
                </span>
                <span className="flex-1 font-normal px-2">Primary 2</span>
              </div>
            </th>
            <th colSpan={4} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Term :
                </span>
                <span className="flex-1 font-normal px-2">First</span>
              </div>
            </th>
            <th colSpan={3} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Year :
                </span>
                <span className="flex-1 font-normal px-2">2023/2024</span>
              </div>
            </th>
          </tr>

          <tr>
            <th colSpan={6} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-5 w-24 font-semibold border-r border-slate-500 block">
                  Closing Date :
                </span>
                <span className="flex-1 font-normal px-2">26th July, 2024</span>
              </div>
            </th>
            <th colSpan={7} className="border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Second term begins :
                </span>
                <span className="flex-1 font-normal px-2">
                  9th September, 2024
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={1}>NO</td>
            <td colSpan={2}>SUBJECTS</td>
            <td
              colSpan={1}
              className="[writing-mode:vertical-lr] rotate-180 py-1"
            >
              CA 1(20 marks)
            </td>
            <td
              colSpan={1}
              className="[writing-mode:vertical-lr] rotate-180 py-1"
            >
              CA 2(20 marks)
            </td>
            <td
              colSpan={1}
              className="[writing-mode:vertical-lr] rotate-180 py-1"
            >
              EXAM (60 marks)
            </td>
            <td
              colSpan={1}
              className="[writing-mode:vertical-lr] rotate-180 py-1"
            >
              TOTAL (100%)
            </td>
            <td
              colSpan={1}
              className="[writing-mode:vertical-lr] rotate-180 py-1"
            >
              GRADE
            </td>
            <td colSpan={3}>PSYCHOMOTOR & AFFECTIVE SKILLS</td>
            <td colSpan={1} className="border-r-0">
              GRADING
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td colSpan={2} className="text-left pl-1">
              MATHEMATICS
            </td>
            <td>{studentData?.numeracy_ca1}</td>
            <td>{studentData?.numeracy_ca2}</td>
            <td>{studentData?.numeracy_exam}</td>
            <td>{studentData.numeracy_total}</td>
            <td>{studentData.numeracy_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Attentiveness
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>2</td>
            <td colSpan={2} className="text-left pl-1">
              ENGLISH LANGUAGE
            </td>
            <td>{studentData?.literacy_ca1}</td>
            <td>{studentData.literacy_ca2}</td>
            <td>{studentData.literacy_exam}</td>
            <td>{studentData.literacy_total}</td>
            <td>{studentData.literacy_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Creativity
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2} className="text-left pl-1">
              BASIC SCIENCE
            </td>
            <td>{studentData.science_ca1}</td>
            <td>{studentData.science_ca2}</td>
            <td>{studentData.science_exam}</td>
            <td>{studentData.science_total}</td>
            <td>{studentData.science_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Participation in class
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>4</td>
            <td colSpan={2} className="text-left pl-1">
              QUANTITATIVE REASONING
            </td>
            <td>{studentData.quantitative_reasoning_ca1}</td>
            <td>{studentData.quantitative_reasoning_ca2}</td>
            <td>{studentData.quantitative_reasoning_exam}</td>
            <td>{studentData.quantitative_reasoning_total}</td>
            <td>{studentData.quantitative_reasoning_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Leadership traits
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>5</td>
            <td colSpan={2} className="text-left pl-1">
              AGRICULTURAL SCIENCE
            </td>
            <td>{studentData.physical_health_social_ca1}</td>
            <td>{studentData.physical_health_social_ca2}</td>
            <td>{studentData.physical_health_social_exam}</td>
            <td>{studentData.physical_health_social_total}</td>
            <td>{studentData.physical_health_social_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Honesty
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td colSpan={2} className="text-left pl-1">
              CIVIC EDUCATION
            </td>
            <td>{studentData.jolly_phonics_ca1}</td>
            <td>{studentData.jolly_phonics_ca2}</td>
            <td>{studentData.jolly_phonics_exam}</td>
            <td>{studentData.jolly_phonics_total}</td>
            <td>{studentData.jolly_phonics_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Punctuality
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>7</td>
            <td colSpan={2} className="text-left pl-1">
              COMPUTER STUDIES
            </td>
            <td>{studentData.understanding_the_world_ca1}</td>
            <td>{studentData.understanding_the_world_ca2}</td>
            <td>{studentData.understanding_the_world_exam}</td>
            <td>{studentData.understanding_the_world_total}</td>
            <td>{studentData.understanding_the_world_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Verbal fluency
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>8</td>
            <td colSpan={2} className="text-left pl-1">
              CHRISTIAN RELIGIOUS STUDIES
            </td>
            <td>{studentData.christian_religious_studies_ca1}</td>
            <td>{studentData.christian_religious_studies_ca2}</td>
            <td>{studentData.christian_religious_studies_exam}</td>
            <td>{studentData.christian_religious_studies_total}</td>
            <td>{studentData.christian_religious_studies_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Attitude to work
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>9</td>
            <td colSpan={2} className="text-left pl-1">
              VOCATIONAL STUDIES
            </td>
            <td>{studentData.art_design_ca1}</td>
            <td>{studentData.art_design_ca2}</td>
            <td>{studentData.art_design_exam}</td>
            <td>{studentData.art_design_total}</td>
            <td>{studentData.art_design_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Emotional stability
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>10</td>
            <td colSpan={2} className="text-left pl-1">
              HOME ECONOMICS
            </td>
            <td>{studentData.practical_life_ca1}</td>
            <td>{studentData.practical_life_ca2}</td>
            <td>{studentData.practical_life_exam}</td>
            <td>{studentData.practical_life_total}</td>
            <td>{studentData.practical_life_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Initiative
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>11</td>
            <td colSpan={2} className="text-left pl-1">
              PHYSICAL & HEALTH EDUCATION
            </td>
            <td>{studentData.rhymes_ca1}</td>
            <td>{studentData.rhymes_ca2}</td>
            <td>{studentData.rhymes_exam}</td>
            <td>{studentData.rhymes_total}</td>
            <td>{studentData.rhymes_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Neatness
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>12</td>
            <td colSpan={2} className="text-left pl-1">
              SOCIAL STUDIES
            </td>
            <td>{studentData.verbal_reasoning_ca1}</td>
            <td>{studentData.verbal_reasoning_ca2}</td>
            <td>{studentData.verbal_reasoning_exam}</td>
            <td>{studentData.verbal_reasoning_total}</td>
            <td>{studentData.verbal_reasoning_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Politeness
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>13</td>
            <td colSpan={2} className="text-left pl-1">
              VERBAL REASONING
            </td>
            <td>{studentData.handwriting_ca1}</td>
            <td>{studentData.handwriting_ca2}</td>
            <td>{studentData.handwriting_exam}</td>
            <td>{studentData.handwriting_total}</td>
            <td>{studentData.handwriting_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Relationship with teachers
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>14</td>
            <td colSpan={2} className="text-left pl-1">
              HAND WRITING
            </td>
            <td>{studentData.literacy_ca1}</td>
            <td>{studentData.literacy_ca2}</td>
            <td>{studentData.literacy_exam}</td>
            <td>{studentData.literacy_total}</td>
            <td>{studentData.literacy_grade}</td>
            <td
              className="text-left pl-1 border-b border-slate-500"
              colSpan={3}
            >
              Relationship with pupils
            </td>
            <td className="border-b border-slate-500" colSpan={2}>
              5
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td colSpan={2} className="text-left pl-1">
              SPEELLING & DICTION
            </td>
            <td>{studentData.literacy_ca1}</td>
            <td>{studentData.literacy_ca2}</td>
            <td>{studentData.literacy_exam}</td>
            <td>{studentData.literacy_total}</td>
            <td>{studentData.literacy_grade}</td>
          </tr>
          <tr>
            <td>16</td>
            <td colSpan={2} className="text-left pl-1">
              IGBO LANAGUAGE
            </td>
            <td>{studentData.literacy_ca1}</td>
            <td>{studentData.literacy_ca2}</td>
            <td>{studentData.literacy_exam}</td>
            <td>{studentData.literacy_total}</td>
            <td>{studentData.literacy_grade}</td>
          </tr>
          <tr>
            <td colSpan={3} className="font-extrabold border-b-0">
              TOTAL
            </td>
            <td colSpan={10} className="border-b-0">
              {studentData.overall_total_score}
            </td>
          </tr>
          <tr>
            <td colSpan={9}></td>
            <td className="text-left pl-1" colSpan={3}></td>
            <td></td>
          </tr>
          <tr className="border-t-0">
            <td
              colSpan={4}
              className="text-left pl-1 font-extrabold border-t-0"
            >
              TERM AVERAGE
            </td>
            <td colSpan={2} className="border-t-0">
              {rounded}
            </td>
            <td colSpan={5} className="font-extrabold border-t-0">
              OVERALL GRADING
            </td>
            <td colSpan={2} className="border-t-0">
              A
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="text-left pl-1 font-extrabold">
              Class Teacher's Remark
            </td>
            <td colSpan={9}>An excellent result . You are a star.</td>
          </tr>
          <tr>
            <td colSpan={4} className="text-left pl-1 font-extrabold">
              Head Teacher's Remark
            </td>
            <td colSpan={9}>Promoted to the next class</td>
          </tr>
          <tr>
            <td colSpan={4} className="text-left pl-1 font-extrabold">
              Signature and School Stamp
            </td>
            <td colSpan={9} className="text-left pl-1"></td>
          </tr>
        </tbody>
      </table>

      <img
        src="/stamp.png"
        alt="school stamp"
        width={200}
        className="relative bottom-16 left-[45%] "
      />
      
      <div className="-mt-32">
        <Grading />
      </div>
    </>
  );
}
