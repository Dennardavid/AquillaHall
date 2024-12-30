import { createClient } from "../../utils/supabase/server";


export default async function StudentDashboard() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    console.log(error);
  }

  const userName: string = data?.user?.user_metadata?.user_name;
  const userClass: string = data?.user?.user_metadata?.class;

  return (
    <div>
      {/* Welcome Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, {userName}!</h1>
      </header>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div>
              <h2 className="text-xl font-bold">{userName}</h2>
              <p className="text-gray-500">Class: {userClass}</p>
              <p className="text-gray-500">Year: 2024/2025</p>
            </div>
          </div>
          <button className="w-full text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 transition">
            View Profile
          </button>
        </div>

        {/* Quick Links */}
        <div className="bg-white shadow-lg rounded-lg p-6 lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/dashboard/results"
              className="bg-blue-100 hover:bg-blue-200 p-4 rounded-lg text-center"
            >
              <h3 className="text-lg font-bold">View Results</h3>
            </a>
            <a
              href="/dashboard/exams"
              className="bg-yellow-100 hover:bg-yellow-200 p-4 rounded-lg text-center"
            >
              <h3 className="text-lg font-bold">Take Exams</h3>
            </a>
            <a
              href="/dashboard/complaints"
              className="bg-red-100 hover:bg-red-200 p-4 rounded-lg text-center"
            >
              <h3 className="text-lg font-bold">Log Complaint</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
