interface BoardNames {
  [key: string]: string;
}

interface ISearch {
  [key: string]: number | string;
}

export const BOARD_TYPE: BoardNames = Object.freeze({
  free: '자유 게시판',
  notice: '공지 게시판',
  travel: '여행 후기 게시판',
});

export const SEARCH_PERIOD: ISearch = Object.freeze({
  '전체 기간': '',
  '지난 1일': 1,
  '지난 일주일': 7,
  '지난 한달': 30,
  '지난 1년': 365,
});

export const SEARCH_TYPE: ISearch = Object.freeze({
  // '제목 + 내용': "",
  제목: 'title',
  내용: 'content',
  작성자: 'author',
});
