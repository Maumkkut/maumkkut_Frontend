export type ImportanceList = {
  importance_list: number[];
};

export type TravelPreferenceTest = {
  mesasge: string;
  result: TravelPreference;
};

export type TravelPreference = {
  test_id: number;
  character_type: string;
  character_description: string;
  recommend_place: string;
  recommend_reason: string;
  best_match: string;
  match_reason: string;
};

export type TravelPreferenceTestList = {
  mesasge: string;
  result: TravelPreferenceSummary[];
};

export type TravelPreferenceSummary = {
  id: number;
  character_type: string;
  created_at: string;
};

export type Message = {
  message: string;
};
