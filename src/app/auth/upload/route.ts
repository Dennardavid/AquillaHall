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
    .from("nursery_school")
    .insert([
      {
        student_name,
        // All subject scores and totals
        numeracy_ca1: grades.numeracy_ca1,
        numeracy_ca2: grades.numeracy_ca2,
        numeracy_exam: grades.numeracy_exam,
        numeracy_total: grades.numeracy_total,

        literacy_ca1: grades.literacy_ca1,
        literacy_ca2: grades.literacy_ca2,
        literacy_exam: grades.literacy_exam,
        literacy_total: grades.literacy_total,

        science_ca1: grades.science_ca1,
        science_ca2: grades.science_ca2,
        science_exam: grades.science_exam,
        science_total: grades.science_total,

        quantitative_reasoning_ca1: grades.quantitative_reasoning_ca1,
        quantitative_reasoning_ca2: grades.quantitative_reasoning_ca2,
        quantitative_reasoning_exam: grades.quantitative_reasoning_exam,
        quantitative_reasoning_total: grades.quantitative_reasoning_total,

        physical_health_social_ca1: grades.physical_health_social_ca1,
        physical_health_social_ca2: grades.physical_health_social_ca2,
        physical_health_social_exam: grades.physical_health_social_exam,
        physical_health_social_total: grades.physical_health_social_total,

        jolly_phonics_ca1: grades.jolly_phonics_ca1,
        jolly_phonics_ca2: grades.jolly_phonics_ca2,
        jolly_phonics_exam: grades.jolly_phonics_exam,
        jolly_phonics_total: grades.jolly_phonics_total,

        understanding_the_world_ca1: grades.understanding_the_world_ca1,
        understanding_the_world_ca2: grades.understanding_the_world_ca2,
        understanding_the_world_exam: grades.understanding_the_world_exam,
        understanding_the_world_total: grades.understanding_the_world_total,

        christian_religious_studies_ca1: grades.christian_religious_studies_ca1,
        christian_religious_studies_ca2: grades.christian_religious_studies_ca2,
        christian_religious_studies_exam: grades.christian_religious_studies_exam,
        christian_religious_studies_total: grades.christian_religious_studies_total,

        art_design_ca1: grades.art_design_ca1,
        art_design_ca2: grades.art_design_ca2,
        art_design_exam: grades.art_design_exam,
        art_design_total: grades.art_design_total,

        practical_life_ca1: grades.practical_life_ca1,
        practical_life_ca2: grades.practical_life_ca2,
        practical_life_exam: grades.practical_life_exam,
        practical_life_total: grades.practical_life_total,

        rhymes_ca1: grades.rhymes_ca1,
        rhymes_ca2: grades.rhymes_ca2,
        rhymes_exam: grades.rhymes_exam,
        rhymes_total: grades.rhymes_total,

        verbal_reasoning_ca1: grades.verbal_reasoning_ca1,
        verbal_reasoning_ca2: grades.verbal_reasoning_ca2,
        verbal_reasoning_exam: grades.verbal_reasoning_exam,
        verbal_reasoning_total: grades.verbal_reasoning_total,

        handwriting_ca1: grades.handwriting_ca1,
        handwriting_ca2: grades.handwriting_ca2,
        handwriting_exam: grades.handwriting_exam,
        handwriting_total: grades.handwriting_total,

        literature_ca1: grades.literature_ca1,
        literature_ca2: grades.literature_ca2,
        literature_exam: grades.literature_exam,
        literature_total: grades.literature_total,

        // Overall results
        overall_total_score: grades.overall_total_score,
        grade: grades.grade,
        position: grades.position || 0,
      },
    ])
    .select();

  if (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}
