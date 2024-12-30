import { createClient } from "../../../utils/supabase/server";
import NurseryResultsUploadForm from "@/components/nurseryresultupload";
import SecondaryResultsUploadForm from "@/components/secondaryresultupload";
import PrimaryResultsUploadForm from "@/components/primaryresultupload";

export default async function ResultsPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log(error);
  }
  const userClass: string = data?.user?.user_metadata?.class_taught;
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Upload Results</h1>

      {userClass === "Nursery 1" ||
      userClass === "Nursery 2" ||
      userClass === "Nursery 3" ? (
        <NurseryResultsUploadForm />
      ) : userClass === "Primary 1" ||
        userClass === "Primary 2" ||
        userClass === "Primary 3" ||
        userClass === "Primary 4" ||
        userClass === "Primary 5" ||
        userClass === "Primary 6" ? (
        <PrimaryResultsUploadForm />
      ) : (
        <SecondaryResultsUploadForm />
      )}
    </div>
  );
}
