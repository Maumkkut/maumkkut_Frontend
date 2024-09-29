import { instance } from '@api/axios';
import {
  RandomCourseResponse,
  TourList,
  TravelRecommendation,
} from '@/types/random';

type ResultDetailBodyProps = {
  region?: string;
};
// 랜덤 여행 코스 5개 추천 받기
export async function recommendRandomTravel(
  payload: ResultDetailBodyProps,
): Promise<TravelRecommendation> {
  const res = await instance.post<TravelRecommendation>('random/', {
    region: payload.region,
  });
  return res.data;
}

// 랜덤 여행 코스 조회
export async function getRandomTravelDetail(
  course_id: number,
): Promise<TravelRecommendation> {
  const res = await instance.get('random/course/', {
    params: {
      course_id: course_id,
    },
  });
  // 여기서 res.data를 반환하거나 적절하게 처리할 수 있습니다.
  return res.data;
}

// 랜덤 여행 코스 목록 조회
export async function getRandomTravelList(): Promise<RandomCourseResponse> {
  const res = await instance.get('random/course/list');
  return res.data;
}

// 랜덤 여행 코스 저장
export async function saveRandomTravel(payload: TourList) {
  await instance.post('random/course/', payload);
}
