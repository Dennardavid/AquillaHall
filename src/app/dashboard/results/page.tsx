export default function Results() {
  return (
    <div className="overflow-hidden">
      <table className="min-w-full bg-white border-collapse border border-slate-500">
        <thead>
          <tr>
            <th
              colSpan={4}
              className="py-2 border border-slate-500 text-gray-800 text-center text-lg font-bold"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <img src="/logo.png" alt="Aquilla logo" />
                <h1 className="font-bold text-5xl flex flex-col text-left gap-2 text-blue-950">Aquilla <span className="text-[28px]">Hall College</span></h1>
              </div>
              <div className="font-medium text-xs text-white flex justify-center gap-3 mb-2">
                <span className="bg-yellow-600 py-1 px-4 rounded-full">EARLY YEAR</span>
                <span className="bg-purple-700 py-1 px-4 rounded-full">PRIMARY</span>
                <span className="bg-green-700 py-1 px-4 rounded-full">SECONDARY</span>
              </div>
              <p className="font-normal text-xs text-blue-500">
                Incarnate Road, Off Location Road, Umuebele 2, Etche LGA, Rivers
                state
              </p>
            </th>
          </tr>
          <tr>
            <th colSpan={4} className="py-2 text-center text-lg font-medium">
              SECONDARY CONTINUOUS ASSESSMENT REPORT SHEET
            </th>
          </tr>

          <tr>
            <th colSpan={3} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Name :
                </span>
                <span className="flex-1 font-normal px-2">Chibuo Excel</span>
              </div>
            </th>
            <th colSpan={1} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Gender :
                </span>
                <span className="flex-1 font-normal px-2">Male</span>
              </div>
            </th>
          </tr>

          <tr>
            <th colSpan={1} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Age :
                </span>
                <span className="flex-1 font-normal px-2">11</span>
              </div>
            </th>
            <th colSpan={1} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Class :
                </span>
                <span className="flex-1 font-normal px-2">JSS 1</span>
              </div>
            </th>
            <th colSpan={1} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Term :
                </span>
                <span className="flex-1 font-normal px-2">Third</span>
              </div>
            </th>
            <th colSpan={1} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Year :
                </span>
                <span className="flex-1 font-normal px-2">2023/2024</span>
              </div>
            </th>
          </tr>

          <tr>
            <th colSpan={2} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Closing Date :
                </span>
                <span className="flex-1 font-normal px-2">2023/2024</span>
              </div>
            </th>
            <th colSpan={2} className=" border border-slate-500">
              <div className="flex items-center">
                <span className="py-2 w-24 font-semibold border-r border-slate-500">
                  Third term begins :
                </span>
                <span className="flex-1 font-normal px-2">2023/2024</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
