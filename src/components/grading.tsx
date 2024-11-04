export default function Grading() {
  return (
    <div className="flex justify-between mt-5">
      <table className="border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="text-center" colSpan={2}>
              KEYS TO RATING
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center" colSpan={1}>
              5
            </td>
            <td colSpan={4}>
              Maintains an excellent degree of observable traits
            </td>
          </tr>
          <tr>
            <td className="text-center" colSpan={1}>
              4
            </td>
            <td colSpan={4}>Maintains a high level of observable traits</td>
          </tr>
          <tr>
            <td className="text-center" colSpan={1}>
              3
            </td>
            <td colSpan={4}>
              Maintains an acceptable level of observable traits
            </td>
          </tr>
          <tr>
            <td className="text-center" colSpan={1}>
              2
            </td>
            <td colSpan={4}>Shows minimal regards for observable traits</td>
          </tr>
          <tr>
            <td className="text-center" colSpan={1}>
              1
            </td>
            <td colSpan={4}>has no regards for observable traits</td>
          </tr>
        </tbody>
      </table>
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
            <td>Pass</td>
            <td>D</td>
          </tr>
          <tr>
            <td className="text-center">40 - 49%</td>
            <td>Poor</td>
            <td>E</td>
          </tr>
          <tr>
            <td className="text-center">Below 40%</td>
            <td>Fail</td>
            <td>F</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
