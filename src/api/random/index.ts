import { instance } from '@api/axios';
import { TourList, TravelRecommendation } from '@/types/random';

type ResultDetailBodyProps = {
  region?: string;
};
// 랜덤 여행 코스 5개 추천 받기
export async function recommendRandomTravel(
  payload: ResultDetailBodyProps,
): Promise<TravelRecommendation> {
  console.log(payload);
  const res = await instance.post<TravelRecommendation>('random/', {
    region: payload.region,
  });
  return res.data;
}

// 랜덤 여행 코스
export async function getRandomTravel(
  course_id: number,
): Promise<TravelRecommendation> {
  const res = await instance.post('random/course/', {
    params: {
      course_id: course_id,
    },
  });
  // 여기서 res.data를 반환하거나 적절하게 처리할 수 있습니다.
  return res.data;
}

// 랜덤 여행 코스 저장
export async function saveRandomTravel(payload: TourList) {
  const res = await instance.post('random/course/', payload);
  console.log(res)
}
