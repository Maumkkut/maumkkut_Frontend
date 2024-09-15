import { instance } from '@api/axios';
import { postBoardType } from '@/types/community';
import {
  FetchBoardDetailInterface,
  TcommentDeletePayload,
  TlikePayload,
} from '@/types/community';
import { TcommentPayload } from '@/types/community';

// 게시판 조회 & 검색
const fetchBoardSearch = async (
  boardType: string = 'all',
  page: string = '1',
  days: string | null = null,
  search_type: string | null = null,
  content: string | null = null,
) => {
  const params = {
    board_type: boardType,
    page,
    ...(days && { days }),
    ...(search_type && { search_type }),
    ...(content && { content }),
  };
  const res = await instance.get(`board/${boardType}/`, {
    params,
  });
  return res.data;
};

// // 게시판 게시글 조회
// const fetchBoard = async (boardType: string, page: string) => {
//   const res = await instance.get(`board/${boardType}/`, {
//     params: {
//       page: page,
//     },
//   });
//   return res.data;
// };

// 게시판 게시글 상세 조회
const fetchBoardDetail = async (
  boardType: string,
  id: number,
): Promise<FetchBoardDetailInterface> => {
  const res = await instance.get(`board/${boardType}/${id}`);
  return res.data;
};

// 게시판 게시글 댓글 조회
const fetchBoardComment = async (id: number) => {
  console.log(id);
  const res = await instance.get(`board/${id}/comments`);
  return res.data;
};

// 게시판 게시글 작성
const postBoard = async (payload: postBoardType) => {
  await instance.post(`board/${payload.board_type}/`, payload);
};

// 게시판 댓글 작성
const postBoardComment = async (payload: TcommentPayload) => {
  console.log('comment palyload', payload);
  await instance.post(`board/${payload.postId}/comments/`, payload.content);
};

// 게시판 댓글 수정
const updateBoardComment = async (payload: TcommentPayload) => {
  console.log('copmment edit palyload', payload);
  await instance.put(
    `board/${payload.postId}/comments/${payload.commentId}/`,
    payload.content,
  );
};

// 게시판 대댓글 작성
const postBoardCommentReply = async (payload: TcommentPayload) => {
  console.log('reply palyload', payload);
  await instance.post(
    `board/${payload.postId}/comments/${payload.commentId}/detail/`,
    payload.content,
  );
};

// 게시판 대댓글 수정
const updateBoardCommentReply = async (payload: TcommentPayload) => {
  console.log('reply edit palyload', payload);
  await instance.put(
    `board/${payload.postId}/comments/${payload.commentId}/`,
    payload.content,
  );
};

// 게시판 댓글 삭제
const deleteBoardComment = async (payload: TcommentDeletePayload) => {
  await instance.delete(
    `board/${payload.postId}/comments/${payload.commentId}/`,
  );
};

// 게시글 좋아요

const postLiked = async (payload: TlikePayload) => {
  await instance.post(`board/${payload.boardType}/${payload.postId}/like/`);
};

export {
  // fetchBoard,
  postLiked,
  postBoard,
  fetchBoardDetail,
  fetchBoardComment,
  postBoardComment,
  updateBoardComment,
  fetchBoardSearch,
  postBoardCommentReply,
  updateBoardCommentReply,
  deleteBoardComment,
};
