import { instance } from '@api/axios';
import {
  TMakeGroupPayload,
  TFetchGroup,
  TFetchGroupDetail,
  TGroupLikeListPayload,
  TUserLikeListPayload,
  TFetchGroupTourList,
  TTourLike,
  TPostTourRecommendPayload,
} from '@/types/group';

// 그룹 생성
export async function postMakeGroup(payload: TMakeGroupPayload) {
  const res = await instance.post(`group/`, payload);
  console.log(res.data.result);
  return res.data.result;
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
  return res.data.result;
}

// 나의 그룹 리스트 조회
export async function fetchMyGroupList(): Promise<TFetchGroup> {
  const res = await instance.get(`group/list/`);
  return res.data;
}

//
// export async function fetchGroupTourList(group_id: number) {
//   const params = {
//     group_id: group_id,
//   };
//   const res = await instance.get(`group/tour_list/`, { params });
//   return res.data.result;
// }

// 단체의 여행지 리스트의 좋아요/싫어요 카운트 및 해당 멤버를 조회합니다.
export async function fetchGroupTourListGroupLike(
  group_id: number,
): Promise<TGroupLikeListPayload> {
  const params = {
    group_id: group_id,
  };
  const res = await instance.get(`group/tour_list/like/group/`, { params });
  return res.data.result[0];
}

// 개인의 여행지 리스트의 좋아요/싫어요 카운트 및 해당 멤버를 조회합니다.
export async function fetchGroupTourListUserLike(
  group_id: number,
): Promise<TUserLikeListPayload> {
  const params = {
    group_id: group_id,
  };
  const res = await instance.get(`group/tour_list/like/`, { params });
  return res.data.result[0];
}

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

export async function checkGroupName(group_name: string) {
  const params = { group_name: group_name };
  const res = await instance
    .get(`group/check/`, { params })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
  return res;
}

export async function fetchGroupTourList(
  group_id: number,
): Promise<TFetchGroupTourList> {
  const params = { group_id: group_id };
  const res = await instance.get(`group/tour_list/`, { params });

  return res.data.result[0];
}
export async function updateTourLike(payload: TTourLike) {
  await instance.put(`group/like/`, payload);
}

export async function postTourRecommend(payload: TPostTourRecommendPayload) {
  await instance.post(`group/recommend/`, payload);
}
