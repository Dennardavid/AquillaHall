export interface StudentData {
  id: number;
  created_at: string;
  numeracy_ca1: number;
  numeracy_ca2: number;
  numeracy_exam: number;
  numeracy_total: number;
  literacy_ca1: number;
  literacy_ca2: number;
  literacy_exam: number;
  literacy_total: number;
  science_ca1: number;
  science_ca2: number;
  science_exam: number;
  science_total: number;
  student_name: string;
  quantitative_reasoning_ca1: number;
  quantitative_reasoning_ca2: number;
  quantitative_reasoning_exam: number;
  quantitative_reasoning_total: number;
  physical_health_social_ca1: number;
  physical_health_social_ca2: number;
  physical_health_social_exam: number;
  physical_health_social_total: number;
  jolly_phonics_ca1: number;
  jolly_phonics_ca2: number;
  jolly_phonics_exam: number;
  jolly_phonics_total: number;
  understanding_the_world_ca1: number;
  understanding_the_world_ca2: number;
  understanding_the_world_exam: number;
  understanding_the_world_total: number;
  christian_religious_studies_ca1: number;
  christian_religious_studies_ca2: number;
  christian_religious_studies_exam: number;
  christian_religious_studies_total: number;
  art_design_ca1: number;
  art_design_ca2: number;
  art_design_exam: number;
  art_design_total: number;
  practical_life_ca1: number;
  practical_life_ca2: number;
  practical_life_exam: number;
  practical_life_total: number;
  rhymes_ca1: number;
  rhymes_ca2: number;
  rhymes_exam: number;
  rhymes_total: number;
  verbal_reasoning_ca1: number;
  verbal_reasoning_ca2: number;
  verbal_reasoning_exam: number;
  verbal_reasoning_total: number;
  handwriting_ca1: number;
  handwriting_ca2: number;
  handwriting_exam: number;
  handwriting_total: number;
  literature_ca1: number;
  literature_ca2: number;
  literature_exam: number;
  literature_total: number;
  numeracy_grade: string;
  literacy_grade: string;
  science_grade: string;
  quantitative_reasoning_grade: string;
  physical_health_social_grade: string;
  jolly_phonics_grade: string;
  understanding_the_world_grade: string;
  christian_religious_studies_grade: string;
  art_design_grade: string;
  practical_life_grade: string;
  rhymes_grade: string;
  verbal_reasoning_grade: string;
  handwriting_grade: string;
  literature_grade: string;
  overall_total_score: number;
  user_id: string;
}

export interface PrimaryStudentData {
  id: number;
  created_at: string;
  mathematics_ca1: number;
  mathematics_ca2: number;
  mathematics_exam: number;
  mathematics_total: number;
  english_ca1: number;
  english_ca2: number;
  english_exam: number;
  english_total: number;
  basic_science_ca1: number;
  basic_science_ca2: number;
  basic_science_exam: number;
  basic_science_total: number;
  student_name: string;
  quantitative_reasoning_ca1: number;
  quantitative_reasoning_ca2: number;
  quantitative_reasoning_exam: number;
  quantitative_reasoning_total: number;
  agricultural_science_ca1: number;
  agricultural_science_ca2: number;
  agricultural_science_exam: number;
  agricultural_science_total: number;
  civic_eductaion_ca1: number;
  civic_eductaion_ca2: number;
  civic_eductaion_exam: number;
  civic_eductaion_total: number;
  computer_studies_ca1: number;
  computer_studies_ca2: number;
  computer_studies_exam: number;
  computer_studies_total: number;
  christian_religious_studies_ca1: number;
  christian_religious_studies_ca2: number;
  christian_religious_studies_exam: number;
  christian_religious_studies_total: number;
  vocational_studies_ca1: number;
  vocational_studies_ca2: number;
  vocational_studies_exam: number;
  vocational_studies_total: number;
  home_economics_ca1: number;
  home_economics_ca2: number;
  home_economics_exam: number;
  home_economics_total: number;
  phe_ca1: number;
  phe_ca2: number;
  phe_exam: number;
  phe_total: number;
  social_studies_ca1: number;
  social_studies_ca2: number;
  social_studies_exam: number;
  social_studies_total: number;
  verbal_reasoning_ca1: number;
  verbal_reasoning_ca2: number;
  verbal_reasoning_exam: number;
  verbal_reasoning_total: number;
  hand_writing_ca1: number;
  hand_writing_ca2: number;
  hand_writing_exam: number;
  hand_writing_total: number;
  spelling_diction_ca1: number;
  spelling_diction_ca2: number;
  spelling_diction_exam: number;
  spelling_diction_total: number;
  igbo_ca1: number;
  igbo_ca2: number;
  igbo_exam: number;
  igbo_total: number;
  mathematics_grade: string;
  english_grade: string;
  basic_science_grade: string;
  quantitative_reasoning_grade: string;
  agricultural_science_grade: string;
  civic_eductaion_grade: string;
  computer_studies_grade: string;
  christian_religious_studies_grade: string;
  vocational_studies_grade: string;
  home_economics_grade: string;
  phe_grade: string;
  social_studies_grade: string;
  verbal_reasoning_grade: string;
  hand_writing_grade: string;
  spelling_diction_grade: string;
  igbo_grade: string;
  overall_total_score: number;
  user_id: string;
}

export interface SecStudentData {
  id: number;
  created_at: string;
  mathematics_ca1: number;
  mathematics_ca2: number;
  mathematics_exam: number;
  mathematics_total: number;
  english_ca1: number;
  english_ca2: number;
  english_exam: number;
  english_total: number;
  basic_science_ca1: number;
  basic_science_ca2: number;
  basic_science_exam: number;
  basic_science_total: number;
  student_name: string;
  business_studies_ca1: number;
  business_studies_ca2: number;
  business_studies_exam: number;
  business_studies_total: number;
  agricultural_science_ca1: number;
  agricultural_science_ca2: number;
  agricultural_science_exam: number;
  agricultural_science_total: number;
  civic_eductaion_ca1: number;
  civic_eductaion_ca2: number;
  civic_eductaion_exam: number;
  civic_eductaion_total: number;
  computer_studies_ca1: number;
  computer_studies_ca2: number;
  computer_studies_exam: number;
  computer_studies_total: number;
  christian_religious_studies_ca1: number;
  christian_religious_studies_ca2: number;
  christian_religious_studies_exam: number;
  christian_religious_studies_total: number;
  basic_technology_ca1: number;
  basic_technology_ca2: number;
  basic_technology_exam: number;
  basic_technology_total: number;
  home_economics_ca1: number;
  home_economics_ca2: number;
  home_economics_exam: number;
  home_economics_total: number;
  phe_ca1: number;
  phe_ca2: number;
  phe_exam: number;
  phe_total: number;
  social_studies_ca1: number;
  social_studies_ca2: number;
  social_studies_exam: number;
  social_studies_total: number;
  literature_in_english_ca1: number;
  literature_in_english_ca2: number;
  literature_in_english_exam: number;
  literature_in_english_total: number;
  diction_ca1: number;
  diction_ca2: number;
  diction_exam: number;
  diction_total: number;
  mathematics_grade: string;
  english_grade: string;
  basic_science_grade: string;
  business_studies_grade: string;
  agricultural_science_grade: string;
  civic_eductaion_grade: string;
  computer_studies_grade: string;
  christian_religious_studies_grade: string;
  basic_technology_grade: string;
  home_economics_grade: string;
  phe_grade: string;
  social_studies_grade: string;
  literature_in_english_grade: string;
  diction_grade: string;
  overall_total_score: number;
  user_id: string;
}

export interface Subject {
  name: string;
  fields: string[];
}

export interface Grades {
  [key: string]: number;
}
