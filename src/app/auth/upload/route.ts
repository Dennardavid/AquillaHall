import { createClient } from "@/utils/supabase/server";
import { NextResponse, type NextRequest } from "next/server";


/* This route handles the upload of the result to the DB */
export async function POST(request: NextRequest) {
  const supabase = createClient();
  const body = await request.json();

  const { name, English, Mathematics, Physics, Chemistry, Biology } = body;

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    console.error(authError);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("STUDENTS-RESULT")
    .insert([
      {
        name,
        English,
        Mathematics,
        Physics,
        Chemistry,
        Biology,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
