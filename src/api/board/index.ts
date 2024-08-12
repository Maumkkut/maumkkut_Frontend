import { instance } from '@api/axios';
import { postBoardType } from '@/types/community';

// 게시판 게시글 조회
const fetchBoard = async (boardType: string) => {
  const res = await instance.get(`board/board/${boardType}/`);
  return res.data;
};

// 게시판 게시글 작성
const postBoard = async (payload: postBoardType) => {
  await instance.post(`board/board/${payload.board_type}/`, payload);
};

export { fetchBoard, postBoard };
