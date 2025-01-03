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
    .from("primary_school")
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

        quantitative_reasoning_ca1: grades.quantitative_reasoning_ca1,
        quantitative_reasoning_ca2: grades.quantitative_reasoning_ca2,
        quantitative_reasoning_exam: grades.quantitative_reasoning_exam,
        quantitative_reasoning_total: grades.quantitative_reasoning_total,
        quantitative_reasoning_grade: grades.quantitative_reasoning_grade,

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

        vocational_studies_ca1: grades.vocational_studies_ca1,
        vocational_studies_ca2: grades.vocational_studies_ca2,
        vocational_studies_exam: grades.vocational_studies_exam,
        vocational_studies_total: grades.vocational_studies_total,
        vocational_studies_grade: grades.vocational_studies_grade,

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

        verbal_reasoning_ca1: grades.verbal_reasoning_ca1,
        verbal_reasoning_ca2: grades.verbal_reasoning_ca2,
        verbal_reasoning_exam: grades.verbal_reasoning_exam,
        verbal_reasoning_total: grades.verbal_reasoning_total,
        verbal_reasoning_grade: grades.verbal_reasoning_grade,

        handwriting_ca1: grades.handwriting_ca1,
        handwriting_ca2: grades.handwriting_ca2,
        handwriting_exam: grades.handwriting_exam,
        handwriting_total: grades.handwriting_total,
        handwriting_grade: grades.handwriting_grade,

        spelling_diction_ca1: grades.spelling_diction_ca1,
        spelling_diction_ca2: grades.spelling_diction_ca2,
        spelling_diction_exam: grades.spelling_diction_exam,
        spelling_diction_total: grades.spelling_diction_total,
        spelling_diction_grade: grades.spelling_diction_grade,

        igbo_ca1: grades.igbo_ca1,
        igbo_ca2: grades.igbo_ca2,
        igbo_exam: grades.igbo_exam,
        igbo_total: grades.igbo_total,
        igbo_grade: grades.igbo_grade,

        Attentiveness: grades.Attentiveness,
        Creativity: grades.Creativity,
        Participation_in_class: grades.Participation_in_class,
        Leadership_traits: grades.Leadership_traits,
        Honesty: grades.Honesty,
        Punctuality: grades.Punctuality,
        Verbal_fluency: grades.Verbal_fluency,
        Emotional_stability: grades.Emotional_stability,
        Initiative: grades.Initiative,
        Neatness: grades.Neatness,
        Politeness: grades.Politeness,
        Relationship_with_teacher: grades.Relationship_with_teacher,
        Relationship_with_pupil: grades.Relationship_with_pupil,

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
