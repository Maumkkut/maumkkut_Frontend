export type TourLocation = {
  tour_id: number;
  addr1: string;
  title: string;
  mapx: number;
  mapy: number;
  image: string; // 이미지 URL이 비어 있을 수 있으므로 string으로 정의
};

export type ApiResponse = {
  message: string;
  result: TourLocation[];
};
