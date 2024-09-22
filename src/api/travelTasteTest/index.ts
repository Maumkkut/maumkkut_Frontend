import { instance } from '@api/axios';
import {
  ImportanceList,
  TravelPreference,
  TravelPreferenceTest,
  TravelPreferenceTestList,
} from '@/types/travelTastTest';

// 여행 취향 테스트 결과 생성
export async function testCreate(
  payload: ImportanceList,
): Promise<TravelPreferenceTest> {
  const res = await instance.post<TravelPreferenceTest>('test/', {
    importance_list: payload.importance_list,
  });
  return res.data;
}

// 여행 취향 테스트 디테일 결과 가져오기
export async function testDetail(test_id: number): Promise<TravelPreference> {
  const res = await instance.get('test/', {
    params: {
      test_id: test_id,
    },
  });
  return res.data.result[0];
}

// export async function testDelete(params:type) {

// }

//
export async function testList(): Promise<TravelPreferenceTestList> {
  const res = await instance.get('test/list/');
  return res.data;
}
