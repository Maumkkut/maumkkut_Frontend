interface BoardNames {
  [key: string]: string;
}

export const BOARD_TYPE: BoardNames = Object.freeze({
  free: '자유 게시판',
  notice: '공지 게시판',
  travel: '여행 후기 게시판',
});
