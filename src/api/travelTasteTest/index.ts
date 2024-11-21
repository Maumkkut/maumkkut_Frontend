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

export async function testDelete(test_id: number) {
  try {
    const res = await instance.delete('test', {
      data: { test_id }, // DELETE 요청의 body에 test_id 포함
    });
    return res.data;
  } catch (error) {
    // console.error('Failed to delete test result:', error);
    // throw new Error('테스트 결과 삭제에 실패했습니다. 다시 시도해주세요.'); // 에러 처리
  }
}

//
export async function testList(): Promise<TravelPreferenceTestList> {
  const res = await instance.get('test/list/');
  return res.data;
}
