import Link from "next/link";
import { createClient } from "../../utils/supabase/server";

export default async function DashboardOverview() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log(error);
  }

  const userName: string = data?.user?.user_metadata?.user_name;
  const classTaught: string = data?.user?.user_metadata?.class_taught;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{userName}'s Dashboard</h1>
      <h2 className="text-2xl font-bold mb-6">Teaching: {classTaught}</h2>
      <p>
        Welcome back, {userName}! Manage your tasks and students' progress here.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="font-bold text-lg">Upload Results</h2>
          <p>View and upload students' academic performance.</p>
          <Link href="/teacherdashboard/results">
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-600">
              Go to Upload Results
            </button>
          </Link>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="font-bold text-lg">Administer Exams</h2>
          <p>Create and manage exams for your students.</p>
          <Link href="/teacherdashboard/exams">
            <button className="bg-yellow-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-yellow-600">
              Administer Exams
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
