import { instance } from '@api/axios';
import {
  TMakeGroupPayload,
  TFetchGroup,
  TFetchGroupDetail,
} from '@/types/group';

// 그룹 생성
export async function postMakeGroup(payload: TMakeGroupPayload) {
  await instance.post(`group/`, payload);
}

// 그룹ID로 그룹 상세 리스트 조회
export async function fetchGroupDetailToId(
  payload: number,
): Promise<TFetchGroupDetail> {
  const params = {
    group_id: payload,
  };
  const res = await instance.get(`group/`, {
    params,
  });
  return res.data;
}

// 나의 그룹 리스트 조회
export async function fetchMyGroupList(): Promise<TFetchGroup> {
  const res = await instance.get(`group/list/`);
  return res.data;
}

//
export async function searchUser(username: string) {
  const params = { username: username };
  const res = await instance
    .get(`accounts/check/username/`, { params })
    .then(() => {
      return;
    })
    .catch((error) => {
      if (error.response.status === 409) {
        return error.response.data.result.userPk;
      }
    });
  return res;
}
