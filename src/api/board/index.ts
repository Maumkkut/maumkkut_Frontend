import { instance } from '@api/axios';
import { postBoardType } from '@/types/community';
import { FetchBoardDetailInterface } from '@/types/community';
import { TcommentPayload } from '@/types/community';
// 게시판 게시글 조회
const fetchBoard = async (boardType: string, page: string) => {
  console.log(page, boardType);
  const res = await instance.get(`board/${boardType}/`, {
    params: {
      page: page,
    },
  });
  return res.data;
};

// 게시판 게시글 상세 조회
const fetchBoardDetail = async (
  boardType: string,
  id: number,
): Promise<FetchBoardDetailInterface> => {
  console.log(id, boardType);
  const res = await instance.get(`board/${boardType}/${id}`);
  console.log(res.data);
  return res.data;
};

// 게시판 게시글 댓글 조회
const fetchBoardComment = async (id: number) => {
  console.log(id);
  const res = await instance.get(`board/${id}/comments`);
  console.log(res.data);
  return res.data;
};

// 게시판 게시글 작성
const postBoard = async (payload: postBoardType) => {
  await instance.post(`board/${payload.board_type}/`, payload);
};

// 게시판 댓글 작성
const postBoardComment = async (payload: TcommentPayload) => {
  await instance.post(`board/${payload.postId}/comments/`, payload.content);
};

// 게시판 댓글 수정
const updateBoardComment = async (payload: TcommentPayload) => {
  await instance.put(
    `board/${payload.postId}/comments/${payload.commentId}/`,
    payload.content,
  );
};

export {
  fetchBoard,
  postBoard,
  fetchBoardDetail,
  fetchBoardComment,
  postBoardComment,
  updateBoardComment,
};
