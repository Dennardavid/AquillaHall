import Grading from "@/components/grading";
export default function Results() {
  return (
    <div className="">
      <table className="min-w-full bg-white border-collapse border border-slate-500">
        <thead>
          <tr>
            <th
              colSpan={14}
              className="py-2 border border-slate-500 text-gray-800 text-center text-lg font-bold"
            >
              <div className="flex items-center justify-center">
                <img src="/Aquila.png" alt="aquila" width={700}/>
              </div>
              <p className="font-normal text-blue-500">
                Incarnate Road, Off Location Road, Umuebele 2, Etche LGA, Rivers
                state
              </p>
            </th>
          </tr>
          <tr>
            <th
              colSpan={14}
              className="py-2 text-center text-lg font-extrabold
            "
            >
              SECONDARY CONTINUOUS ASSESSMENT REPORT SHEET
            </th>
          </tr>

          <tr>
            <th colSpan={7} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Name :
                </span>
                <span className="flex-1 font-normal px-2">Chibuo Excel</span>
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
                <span className="flex-1 font-normal px-2">JSS 1</span>
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
            <th colSpan={4} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Year :
                </span>
                <span className="flex-1 font-normal px-2">2023/2024</span>
              </div>
            </th>
          </tr>

          <tr>
            <th colSpan={7} className=" border border-slate-500">
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
          <tr className="text-center">
            <td colSpan={7}>COGNITVE DOMAIN REPORT</td>
            <td colSpan={7}>AFFECTIVE & PSYCHOMOTOR DOMAIN REPORT</td>
          </tr>
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
              3RD TERM TOTAL
            </td>
            <td
              colSpan={1}
              className="[writing-mode:vertical-lr] rotate-180 py-1"
            >
              2ND TERM TOTAL
            </td>
            <td
              colSpan={1}
              className="[writing-mode:vertical-lr] rotate-180 py-1"
            >
              1ST TERM TOTAL
            </td>
            <td
              colSpan={1}
              className="[writing-mode:vertical-lr] rotate-180 py-1"
            >
              CUM AVERAGE
            </td>
            <td
              colSpan={1}
              className="[writing-mode:vertical-lr] rotate-180 py-1"
            >
              GRADE
            </td>
            <td colSpan={1}>BEHAVIOUR & ACTIVITIES</td>
            <td colSpan={1} className="border-r-0">
              GRADING
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td colSpan={2} className="text-left pl-1">
              MATHEMATICS
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Communication</td>
            <td>5</td>
          </tr>
          <tr>
            <td>2</td>
            <td colSpan={2} className="text-left pl-1">
              ENGLISH LANGUAGE
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Participation in activities</td>
            <td>5</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2} className="text-left pl-1">
              BASIC SCIENCE
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Leadership traits roles</td>
            <td>5</td>
          </tr>
          <tr>
            <td>4</td>
            <td colSpan={2} className="text-left pl-1">
              BUSINESS STUDIES
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Honesty</td>
            <td>5</td>
          </tr>
          <tr>
            <td>5</td>
            <td colSpan={2} className="text-left pl-1">
              AGRICULTURAL SCIENCE
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Punctuality</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td colSpan={2} className="text-left pl-1">
              CIVIC EDUCATION
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Obedience</td>
            <td>5</td>
          </tr>
          <tr>
            <td>7</td>
            <td colSpan={2} className="text-left pl-1">
              COMPUTER STUDIES
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Attitude to work</td>
            <td>5</td>
          </tr>
          <tr>
            <td>8</td>
            <td colSpan={2} className="text-left pl-1">
              CHRISTIAN RELIGIOUS STUDIES
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Self control</td>
            <td>5</td>
          </tr>
          <tr>
            <td>9</td>
            <td colSpan={2} className="text-left pl-1">
              BASIC TECHNOLOGY
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Initiative</td>
            <td>5</td>
          </tr>
          <tr>
            <td>10</td>
            <td colSpan={2} className="text-left pl-1">
              HOME ECONOMICS
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Neatness</td>
            <td>5</td>
          </tr>
          <tr>
            <td>11</td>
            <td colSpan={2} className="text-left pl-1">
              PHYSICAL & HEALTH EDUCATION
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Politeness</td>
            <td>5</td>
          </tr>
          <tr>
            <td>12</td>
            <td colSpan={2} className="text-left pl-1">
              SOCIAL STUDIES
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Relationship with teachers</td>
            <td>5</td>
          </tr>
          <tr>
            <td>13</td>
            <td colSpan={2} className="text-left pl-1">
              LITERATURE IN ENGLISH
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Relationship with pupils</td>
            <td>5</td>
          </tr>
          <tr>
            <td>14</td>
            <td colSpan={2} className="text-left pl-1">
              DICTION
            </td>
            <td>18</td>
            <td>19</td>
            <td>53</td>
            <td>88</td>
            <td>84</td>
            <td>95</td>
            <td>89</td>
            <td>A</td>
            <td className="text-left pl-1">Creativity</td>
            <td>5</td>
          </tr>
          <tr>
            <td colSpan={3} className="font-extrabold">
              TOTAL
            </td>
            <td>264</td>
            <td>264</td>
            <td>722</td>
            <td>1250</td>
            <td>1250</td>
            <td>1291</td>
            <td>1264</td>
            <td></td>
            <td className="text-left pl-1">Sports</td>
            <td>5</td>
          </tr>
          <tr>
            <td colSpan={11}></td>
            <td className="text-left pl-1">Games</td>
            <td>5</td>
          </tr>
          <tr>
            <td colSpan={4} className="text-left pl-1 font-extrabold">
              THIRD TERM AVERAGE
            </td>
            <td colSpan={2}>89.3</td>
            <td colSpan={6} className="font-extrabold">
              OVERALL GRADING
            </td>
            <td colSpan={1}>A</td>
          </tr>
          <tr>
            <td colSpan={4} className="text-left pl-1 font-extrabold">
              Form Master's Remark :
            </td>
            <td colSpan={4}>An excellent result . You are a star.</td>
            <td colSpan={4} className="font-extrabold">
              CUM AVERAGE
            </td>
            <td colSpan={1}>90.3</td>
          </tr>
          <tr>
            <td colSpan={4} className="text-left pl-1 font-extrabold">
              Principal's Remark :
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
      
        <img src="/stamp.png" alt="school stamp" width={200} className="relative bottom-16 left-[45%] "/>
      
      <div className="-mt-32">
        <Grading />
      </div>
    </div>
  );
}
