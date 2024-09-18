export type Tour = {
  order: number;
  tour_id: number;
  tour_name: string;
  tour_address: string;
  tour_mapx: number;
  tour_mapy: number;
};

export type TourResult = {
  tour_list: Tour[];
};

export type TravelRecommendation = {
  message: string;
  result: TourResult;
};

export type TourList = {
  tour_list: number[] | null;
};

export type ConvertedTravelRecommendation = {
  title: string;
  addr1: string;
  mapx: number;
  mapy: number;
};

export type ResultDetailBodyProps = {
  region?: string;
};
