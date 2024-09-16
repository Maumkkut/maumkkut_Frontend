import { instance } from '@api/axios';
import { TProfileFeedCount, TEditPassword } from '@/types/profile';

// 사용자의 피드 갯수 fetch
export async function fetchProfileFeedCounts(): Promise<TProfileFeedCount> {
  const res = await instance.get(`profiles/user/counts/`);
  return res.data;
}
// 사용자의 댓글 목록 fetch
export async function fetchProfileCommentList() {
  const res = await instance.get(`profiles/user/comments/`);
  return res.data;
}
// 사용자의 좋아요 목록 fetch
export async function fetchProfileLikeList() {
  const res = await instance.get(`profiles/user/liked-posts/`);
  return res.data;
}
// 사용자의 게시글 목록 fetch
export async function fetchProfilePostList() {
  const res = await instance.get(`profiles/user/posts/`);
  return res.data;
}
// 사용자의 비밀번호 변경
export async function updatePassword(payload: TEditPassword) {
  await instance.post(`accounts/password/change/`, payload);
}
