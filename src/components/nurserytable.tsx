"use client";
import { createClient } from "../utils/supabase/client";
import { StudentData } from "@/Types/StudentData";
import { useState, useEffect } from "react";

export default function NuseryTable() {
  const supabase = createClient();

  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userClass, setUserClass] = useState<string | null>(null);
  const [userGender, setUserGender] = useState<string | null>(null);
  const [userAge, setUserAge] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data: userData } = await supabase.auth.getUser();
        const extractedUserClass = userData?.user?.user_metadata?.class;
        const extractedUserGender = userData?.user?.user_metadata?.gender;
        const extractedUserAge = userData?.user?.user_metadata?.age;
        setUserClass(extractedUserClass);
        setUserGender(extractedUserGender);
        setUserAge(extractedUserAge);

        const response = await fetch(`/auth/getnurseryresult`);
        if (!response.ok) {
          throw new Error("Failed to fetch student data");
        }

        const data = await response.json();
        setStudentData(data[0]); // Assuming only one record is needed
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
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
                <span className="flex-1 font-normal px-2">{userGender}</span>
              </div>
            </th>
          </tr>

          <tr>
            <th colSpan={3} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Age :
                </span>
                <span className="flex-1 font-normal px-2">{userAge}</span>
              </div>
            </th>
            <th colSpan={3} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Class :
                </span>
                <span className="flex-1 font-normal px-2">{userClass}</span>
              </div>
            </th>
            <th colSpan={4} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Term :
                </span>
                <span className="flex-1 font-normal px-2">Second</span>
              </div>
            </th>
            <th colSpan={3} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Year :
                </span>
                <span className="flex-1 font-normal px-2">2024/2025</span>
              </div>
            </th>
          </tr>

          <tr>
            <th colSpan={6} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-5 w-24 font-semibold border-r border-slate-500 block">
                  Closing Date :
                </span>
                <span className="flex-1 font-normal px-2">14th December, 2024</span>
              </div>
            </th>
            <th colSpan={7} className="border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Second term begins :
                </span>
                <span className="flex-1 font-normal px-2">
                  9th January, 2024
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
            <td colSpan={3}>PSYCHOMOTOR & AFFECTIVE DOMAN</td>
            <td colSpan={1} className="border-r-0">
              GRADING
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td colSpan={2} className="text-left pl-1">
              NUMERACY
            </td>
            <td>{studentData?.numeracy_ca1}</td>
            <td>{studentData?.numeracy_ca2}</td>
            <td>{studentData?.numeracy_exam}</td>
            <td>{studentData.numeracy_total}</td>
            <td>{studentData.numeracy_grade}</td>
            <td className="text-center pl-1" colSpan={5}>
              ATTITUDE TOWARDS WORK
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td colSpan={2} className="text-left pl-1">
              LITERACY
            </td>
            <td>{studentData?.literacy_ca1}</td>
            <td>{studentData.literacy_ca2}</td>
            <td>{studentData.literacy_exam}</td>
            <td>{studentData.literacy_total}</td>
            <td>{studentData.literacy_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Follow simple directions
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2} className="text-left pl-1">
              SCIENCE
            </td>
            <td>{studentData.science_ca1}</td>
            <td>{studentData.science_ca2}</td>
            <td>{studentData.science_exam}</td>
            <td>{studentData.science_total}</td>
            <td>{studentData.science_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Developed an increased concentration
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
              Able to follow routine
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>5</td>
            <td colSpan={2} className="text-left pl-1">
              PHYSICAL & HEALTH AND SOCIAL SKILL
            </td>
            <td>{studentData.physical_health_social_ca1}</td>
            <td>{studentData.physical_health_social_ca2}</td>
            <td>{studentData.physical_health_social_exam}</td>
            <td>{studentData.physical_health_social_total}</td>
            <td>{studentData.physical_health_social_grade}</td>
            <td className="text-center pl-1" colSpan={5}>
              SOCIAL DEVELOPMENT
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td colSpan={2} className="text-left pl-1">
              JOLLY PHONICS
            </td>
            <td>{studentData.jolly_phonics_ca1}</td>
            <td>{studentData.jolly_phonics_ca2}</td>
            <td>{studentData.jolly_phonics_exam}</td>
            <td>{studentData.jolly_phonics_total}</td>
            <td>{studentData.jolly_phonics_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Social and loved by the teachers and
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>7</td>
            <td colSpan={2} className="text-left pl-1">
              UNDERSTANDING THE WORLD
            </td>
            <td>{studentData.understanding_the_world_ca1}</td>
            <td>{studentData.understanding_the_world_ca2}</td>
            <td>{studentData.understanding_the_world_exam}</td>
            <td>{studentData.understanding_the_world_total}</td>
            <td>{studentData.understanding_the_world_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Shares materials and toys with others
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
              Enjoy the company of others
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>9</td>
            <td colSpan={2} className="text-left pl-1">
              ART & DESIGN
            </td>
            <td>{studentData.art_design_ca1}</td>
            <td>{studentData.art_design_ca2}</td>
            <td>{studentData.art_design_exam}</td>
            <td>{studentData.art_design_total}</td>
            <td>{studentData.art_design_grade}</td>
            <td className="text-center pl-1" colSpan={5}>
              OTHER ABILITIES
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td colSpan={2} className="text-left pl-1">
              PRACTICAL LIFE/SENSORIAL
            </td>
            <td>{studentData.practical_life_ca1}</td>
            <td>{studentData.practical_life_ca2}</td>
            <td>{studentData.practical_life_exam}</td>
            <td>{studentData.practical_life_total}</td>
            <td>{studentData.practical_life_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Knows their names
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>11</td>
            <td colSpan={2} className="text-left pl-1">
              RHYMES
            </td>
            <td>{studentData.rhymes_ca1}</td>
            <td>{studentData.rhymes_ca2}</td>
            <td>{studentData.rhymes_exam}</td>
            <td>{studentData.rhymes_total}</td>
            <td>{studentData.rhymes_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Knows their age
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>12</td>
            <td colSpan={2} className="text-left pl-1">
              VERBAL REASONING
            </td>
            <td>{studentData.verbal_reasoning_ca1}</td>
            <td>{studentData.verbal_reasoning_ca2}</td>
            <td>{studentData.verbal_reasoning_exam}</td>
            <td>{studentData.verbal_reasoning_total}</td>
            <td>{studentData.verbal_reasoning_grade}</td>

            <td
              className="text-left pl-1 border-b border-slate-500"
              colSpan={3}
            >
              knows the name of their school
            </td>
            <td className="border-b border-slate-500" colSpan={2}>
              5
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td colSpan={2} className="text-left pl-1">
              HAND WRITING SKILLS
            </td>
            <td>{studentData.handwriting_ca1}</td>
            <td>{studentData.handwriting_ca2}</td>
            <td>{studentData.handwriting_exam}</td>
            <td>{studentData.handwriting_total}</td>
            <td>{studentData.handwriting_grade}</td>
          </tr>
          <tr>
            <td>14</td>
            <td colSpan={2} className="text-left pl-1">
              LITERATURE IN ENGLISH
            </td>
            <td>{studentData.literacy_ca1}</td>
            <td>{studentData.literacy_ca2}</td>
            <td>{studentData.literacy_exam}</td>
            <td>{studentData.literacy_total}</td>
            <td>{studentData.literacy_grade}</td>
          </tr>
          <tr>
            <td colSpan={3} className="font-extrabold">
              TOTAL
            </td>
            <td colSpan={10}>{studentData.overall_total_score}</td>
          </tr>
          <tr>
            <td colSpan={4} className="text-left pl-1 font-extrabold">
              TERM AVERAGE
            </td>
            <td colSpan={2}>{rounded}</td>
            <td colSpan={5} className="font-extrabold">
              OVERALL GRADING
            </td>
            <td colSpan={1}>A</td>
          </tr>
          <tr>
            <td colSpan={4} className="text-left pl-1 font-extrabold">
              Caregiver's Remark
            </td>
            <td colSpan={9}>An excellent result . You are a star.</td>
          </tr>
          <tr>
            <td colSpan={4} className="text-left pl-1 font-extrabold">
              Head Teacher's Comment
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
      <div className="flex justify-end -mt-28">
        <table className="border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="text-center" colSpan={3}>
                KEY TO GRADING
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center px-2">80 - 100%</td>
              <td className="px-2">Excellent</td>
              <td className="px-2">A</td>
            </tr>
            <tr>
              <td className="text-center">70 - 79%</td>
              <td>V. good</td>
              <td>B</td>
            </tr>
            <tr>
              <td className="text-center">60 - 69%</td>
              <td>Good</td>
              <td>C</td>
            </tr>
            <tr>
              <td className="text-center">50 - 59%</td>
              <td>Average</td>
              <td>D</td>
            </tr>
            <tr>
              <td className="text-center">40 - 49%</td>
              <td className="px-1">Below average</td>
              <td>E</td>
            </tr>
            <tr>
              <td className="text-center">Below 40%</td>
              <td className="px-1">Progressing</td>
              <td>F</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
