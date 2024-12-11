import { createClient } from "../../../utils/supabase/server";
import PrimaryTable from "@/components/primarytable";
import NuseryTable from "@/components/nurserytable";
import SecondaryTable from "@/components/secondarytable";

export default async function Results() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log(error);
  } 
  const userClass: string = data?.user?.user_metadata?.class;

  return (
    <div>
      {userClass === "Nursery 1" ||
      userClass === "Nursery 2" ||
      userClass === "Nursery 3" ? (
        <NuseryTable />
      ) : userClass === "Primary 1" ||
        userClass === "Primary 2" ||
        userClass === "Primary 3" ||
        userClass === "Primary 4" ||
        userClass === "Primary 5" ||
        userClass === "Primary 6" ? (
        <PrimaryTable />
      ) : (
        <SecondaryTable />
      )}
    </div>
  );
}
