import { StudentData } from "@/Types/StudentData";

export default function NuseryTable({
  studentData,
  rounded,
}: {
  studentData: StudentData;
  rounded: number;
}) {
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
                <span className="flex-1 font-normal px-2">Nursery 2</span>
              </div>
            </th>
            <th colSpan={4} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Term :
                </span>
                <span className="flex-1 font-normal px-2">Third</span>
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
                <span className="py-2 w-24 font-semibold border-r border-slate-500 block">
                  Closing Date :
                </span>
                <span className="flex-1 font-normal px-2">26th July, 2024</span>
              </div>
            </th>
            <th colSpan={7} className="border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Third term begins :
                </span>
                <span className="flex-1 font-normal px-2">
                  9th September, 2024
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <tr className="text-center">
          <td colSpan={9}>COGNITVE DOMAIN REPORT</td>
          <td colSpan={4}>AFFECTIVE & PSYCHOMOTOR DOMAIN REPORT</td>
        </tr> */}
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
            <td
              colSpan={1}
              className="[writing-mode:vertical-lr] rotate-180 py-1"
            >
              POSITION
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
            <td>89</td>
            <td className="text-center pl-1" colSpan={4}>
              ATTITUDE TOWARDS WORK
            </td>
            {/* <td>5</td> */}
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
            <td>89</td>
            <td className="text-left pl-1" colSpan={3}>
              Follow simple directions
            </td>
            <td>5</td>
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
            <td>89</td>
            <td className="text-left pl-1" colSpan={3}>
              Developed an increased concentration
            </td>
            <td>5</td>
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
            <td>89</td>
            <td className="text-left pl-1" colSpan={3}>
              Able to follow routine
            </td>
            <td>5</td>
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
            <td>89</td>
            <td className="text-center pl-1" colSpan={4}>
              SOCIAL DEVELOPMENT
            </td>
            {/* <td>5</td> */}
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
            <td>89</td>
            <td className="text-left pl-1" colSpan={3}>
              Social and loved by the teachers and
            </td>
            <td>5</td>
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
            <td>89</td>
            <td className="text-left pl-1" colSpan={3}>
              Shares materials and toys with others
            </td>
            <td>5</td>
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
            <td>89</td>
            <td className="text-left pl-1" colSpan={3}>
              Enjoy the company of others
            </td>
            <td>5</td>
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
            <td>89</td>
            <td className="text-center pl-1" colSpan={4}>
              OTHER ABILITIES
            </td>
            {/* <td>5</td> */}
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
            <td>89</td>
            <td className="text-left pl-1" colSpan={3}>
              Knows their names
            </td>
            <td>5</td>
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
            <td>89</td>
            <td className="text-left pl-1" colSpan={3}>
              Knows their age
            </td>
            <td>5</td>
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
            <td>89</td>
            <td
              className="text-left pl-1 border-b border-slate-500"
              colSpan={3}
            >
              knows the name of their school
            </td>
            <td className="border-b border-slate-500">5</td>
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
            <td>89</td>
            {/* <td className="text-left pl-1" colSpan={3}>
            Relationship with pupils
          </td>
          <td>5</td> */}
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
            <td>89</td>
            {/* <td className="text-left pl-1" colSpan={3}>
            Creativity
          </td>
          <td>5</td> */}
          </tr>
          <tr>
            <td colSpan={3} className="font-extrabold">
              TOTAL
            </td>
            <td colSpan={6}>{studentData.overall_total_score}</td>

            {/* <td className="text-left pl-1" colSpan={3}>
            Sports
          </td>
          <td>5</td> */}
          </tr>
          {/*  <tr>
          <td colSpan={9}></td>
          <td className="text-left pl-1" colSpan={3}>
            
          </td>
          <td></td>
        </tr> */}
          <tr>
            <td colSpan={4} className="text-left pl-1 font-extrabold">
              TERM AVERAGE
            </td>
            <td colSpan={2}>{rounded}</td>
            <td colSpan={6} className="font-extrabold">
              OVERALL GRADING
            </td>
            <td colSpan={1}>A</td>
          </tr>
          <tr>
            <td colSpan={4} className="text-left pl-1 font-extrabold">
              Caregiver's Remark
            </td>
            <td colSpan={9}>An excellent result . You are a star.</td>
            {/* <td colSpan={4} className="font-extrabold">
            CUM AVERAGE
          </td>
          <td colSpan={1}>90.3</td> */}
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
    </>
  );
}
