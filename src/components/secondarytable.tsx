"use client";
import { createClient } from "../utils/supabase/client";
import { SecStudentData } from "@/Types/StudentData";
import Grading from "./grading";
import { useState, useEffect } from "react";

export default function SecondaryTable() {
  const supabase = createClient();

  const [studentData, setStudentData] = useState<SecStudentData | null>(null);
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
            <td>{studentData?.mathematics_ca1}</td>
            <td>{studentData?.mathematics_ca2}</td>
            <td>{studentData?.mathematics_exam}</td>
            <td>{studentData.mathematics_total}</td>
            <td>{studentData.mathematics_grade}</td>
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
            <td>{studentData?.english_ca1}</td>
            <td>{studentData.english_ca2}</td>
            <td>{studentData.english_exam}</td>
            <td>{studentData.english_total}</td>
            <td>{studentData.english_grade}</td>
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
            <td>{studentData.basic_science_ca1}</td>
            <td>{studentData.basic_science_ca2}</td>
            <td>{studentData.basic_science_exam}</td>
            <td>{studentData.basic_science_total}</td>
            <td>{studentData.basic_science_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Participation in class
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>4</td>
            <td colSpan={2} className="text-left pl-1">
              BUSINESS STUDIES
            </td>
            <td>{studentData.business_studies_ca1}</td>
            <td>{studentData.business_studies_ca2}</td>
            <td>{studentData.business_studies_exam}</td>
            <td>{studentData.business_studies_total}</td>
            <td>{studentData.business_studies_grade}</td>
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
            <td>{studentData.agricultural_science_ca1}</td>
            <td>{studentData.agricultural_science_ca2}</td>
            <td>{studentData.agricultural_science_exam}</td>
            <td>{studentData.agricultural_science_total}</td>
            <td>{studentData.agricultural_science_grade}</td>
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
            <td>{studentData.civic_eductaion_ca1}</td>
            <td>{studentData.civic_eductaion_ca2}</td>
            <td>{studentData.civic_eductaion_exam}</td>
            <td>{studentData.civic_eductaion_total}</td>
            <td>{studentData.civic_eductaion_grade}</td>
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
            <td>{studentData.computer_studies_ca1}</td>
            <td>{studentData.computer_studies_ca2}</td>
            <td>{studentData.computer_studies_exam}</td>
            <td>{studentData.computer_studies_total}</td>
            <td>{studentData.computer_studies_grade}</td>
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
              BASIC TECHNOLOGY
            </td>
            <td>{studentData.basic_technology_ca1}</td>
            <td>{studentData.basic_technology_ca2}</td>
            <td>{studentData.basic_technology_exam}</td>
            <td>{studentData.basic_technology_total}</td>
            <td>{studentData.basic_technology_grade}</td>
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
            <td>{studentData.home_economics_ca1}</td>
            <td>{studentData.home_economics_ca2}</td>
            <td>{studentData.home_economics_exam}</td>
            <td>{studentData.home_economics_total}</td>
            <td>{studentData.home_economics_grade}</td>
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
            <td>{studentData.phe_ca1}</td>
            <td>{studentData.phe_ca2}</td>
            <td>{studentData.phe_exam}</td>
            <td>{studentData.phe_total}</td>
            <td>{studentData.phe_grade}</td>
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
            <td>{studentData.social_studies_ca1}</td>
            <td>{studentData.social_studies_ca2}</td>
            <td>{studentData.social_studies_exam}</td>
            <td>{studentData.social_studies_total}</td>
            <td>{studentData.social_studies_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Politeness
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>13</td>
            <td colSpan={2} className="text-left pl-1">
              LITERATURE IN ENGLISH
            </td>
            <td>{studentData.literature_in_english_ca1}</td>
            <td>{studentData.literature_in_english_ca2}</td>
            <td>{studentData.literature_in_english_exam}</td>
            <td>{studentData.literature_in_english_total}</td>
            <td>{studentData.literature_in_english_grade}</td>
            <td className="text-left pl-1" colSpan={3}>
              Relationship with teachers
            </td>
            <td colSpan={2}>5</td>
          </tr>
          <tr>
            <td>14</td>
            <td colSpan={2} className="text-left pl-1">
              DICTION
            </td>
            <td>{studentData.diction_ca1}</td>
            <td>{studentData.diction_ca2}</td>
            <td>{studentData.diction_exam}</td>
            <td>{studentData.diction_total}</td>
            <td>{studentData.diction_grade}</td>
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
