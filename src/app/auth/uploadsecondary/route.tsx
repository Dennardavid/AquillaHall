import { createClient } from "@/utils/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

/* This route handles the upload of the result to the DB */
export async function POST(request: NextRequest) {
  const supabase = createClient();
  const body = await request.json();

  // Extract student name
  const { student_name, ...grades } = body;

  // Verify authentication
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    console.error(authError);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Insert the result data
  const { data, error } = await supabase
    .from("secondary_school")
    .insert([
      {
        student_name,
        user_id: user.id,
        // All subject scores, totals, and grades
        mathematics_ca1: grades.mathematics_ca1,
        mathematics_ca2: grades.mathematics_ca2,
        mathematics_exam: grades.mathematics_exam,
        mathematics_total: grades.mathematics_total,
        mathematics_grade: grades.mathematics_grade,

        english_ca1: grades.english_ca1,
        english_ca2: grades.english_ca2,
        english_exam: grades.english_exam,
        english_total: grades.english_total,
        english_grade: grades.english_grade,

        basic_science_ca1: grades.basic_science_ca1,
        basic_science_ca2: grades.basic_science_ca2,
        basic_science_exam: grades.basic_science_exam,
        basic_science_total: grades.basic_science_total,
        basic_science_grade: grades.basic_science_grade,

        business_studies_ca1: grades.business_studies_ca1,
        business_studies_ca2: grades.business_studies_ca2,
        business_studies_exam: grades.business_studies_exam,
        business_studies_total: grades.business_studies_total,
        business_studies_grade: grades.business_studies_grade,

        agricultural_science_ca1: grades.agricultural_science_ca1,
        agricultural_science_ca2: grades.agricultural_science_ca2,
        agricultural_science_exam: grades.agricultural_science_exam,
        agricultural_science_total: grades.agricultural_science_total,
        agricultural_science_grade: grades.agricultural_science_grade,

        civic_eductaion_ca1: grades.civic_eductaion_ca1,
        civic_eductaion_ca2: grades.civic_eductaion_ca2,
        civic_eductaion_exam: grades.civic_eductaion_exam,
        civic_eductaion_total: grades.civic_eductaion_total,
        civic_eductaion_grade: grades.civic_eductaion_grade,

        computer_studies_ca1: grades.computer_studies_ca1,
        computer_studies_ca2: grades.computer_studies_ca2,
        computer_studies_exam: grades.computer_studies_exam,
        computer_studies_total: grades.computer_studies_total,
        computer_studies_grade: grades.computer_studies_grade,

        christian_religious_studies_ca1: grades.christian_religious_studies_ca1,
        christian_religious_studies_ca2: grades.christian_religious_studies_ca2,
        christian_religious_studies_exam:
          grades.christian_religious_studies_exam,
        christian_religious_studies_total:
          grades.christian_religious_studies_total,
        christian_religious_studies_grade:
          grades.christian_religious_studies_grade,

        basic_technology_ca1: grades.basic_technology_ca1,
        basic_technology_ca2: grades.basic_technology_ca2,
        basic_technology_exam: grades.basic_technology_exam,
        basic_technology_total: grades.basic_technology_total,
        basic_technology_grade: grades.basic_technology_grade,

        home_economics_ca1: grades.home_economics_ca1,
        home_economics_ca2: grades.home_economics_ca2,
        home_economics_exam: grades.home_economics_exam,
        home_economics_total: grades.home_economics_total,
        home_economics_grade: grades.home_economics_grade,

        phe_ca1: grades.phe_ca1,
        phe_ca2: grades.phe_ca2,
        phe_exam: grades.phe_exam,
        phe_total: grades.phe_total,
        phe_grade: grades.phe_grade,

        social_studies_ca1: grades.social_studies_ca1,
        social_studies_ca2: grades.social_studies_ca2,
        social_studies_exam: grades.social_studies_exam,
        social_studies_total: grades.social_studies_total,
        social_studies_grade: grades.social_studies_grade,

        literature_in_english_ca1: grades.literature_in_english_ca1,
        literature_in_english_ca2: grades.literature_in_english_ca2,
        literature_in_english_exam: grades.literature_in_english_exam,
        literature_in_english_total: grades.literature_in_english_total,
        literature_in_english_grade: grades.literature_in_english_grade,

        diction_ca1: grades.diction_ca1,
        diction_ca2: grades.diction_ca2,
        diction_exam: grades.diction_exam,
        diction_total: grades.diction_total,
        diction_grade: grades.diction_grade,

        // Overall total only (removed overall grade)
        overall_total_score: grades.overall_total_score,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
