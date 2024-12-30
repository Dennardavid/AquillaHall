import NurseryResultsUploadForm from "../../../components/nurseryresultupload"
import SecondaryResultsUploadForm from "../../../components/secondaryresultupload"

export default async function ResultsPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Upload Results</h1>
      {/* <NurseryResultsUploadForm /> */}
      <SecondaryResultsUploadForm />
    </div>
  );
}