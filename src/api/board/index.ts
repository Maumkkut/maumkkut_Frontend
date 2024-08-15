import { instance } from '@api/axios';
import { postBoardType } from '@/types/community';

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

// 게시판 게시글 작성
const postBoard = async (payload: postBoardType) => {
  await instance.post(`board/${payload.board_type}/`, payload);
};

export { fetchBoard, postBoard };
