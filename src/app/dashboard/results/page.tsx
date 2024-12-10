import { createClient } from "../../../utils/supabase/server";
import PrimaryTable from "@/components/primarytable";
import NuseryTable from "@/components/nurserytable";

export default async function Results() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log(error);
  } else {
    console.log(data);
  }
  const userClass: string = data?.user?.user_metadata?.class;

  return (
    <div>
      {userClass === "Nursery1" || userClass === "Nursery2" ? (
        <NuseryTable />
      ) : (
        <PrimaryTable />
      )}
    </div>
  );
}
