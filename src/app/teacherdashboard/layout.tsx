import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Teachernavigation from "@/components/teachernavigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    console.error("Error fetching user:", error?.message);

    redirect("/teacher");
  }

  return (
    <section className="flex min-h-[100dvh] h-[100dvh] overflow-hidden">
      <Teachernavigation />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </section>
  );
}
