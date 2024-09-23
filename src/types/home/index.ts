export type Festival = {
  tour_id: number;
  title: string;
  image: string;
};

export type FestivalListResponse = {
  message: string;
  result: Festival[];
};
