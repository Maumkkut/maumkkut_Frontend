export interface BoardItemInterface {
  id: number;
  title: string;
  content: string;
  author_username: string;
  created_at: string;
  board_type: string;
  comment_count: number;
}

export interface postBoardType {
  title: string;
  content: string;
  author: number;
  board_type: string;
}

export interface BoardPaginationInterface {
  currentPage: string;
  totalPages: number;
  boardType: string;
}

export interface FetchBoardInterface {
  total_count: number;
  next: string | null;
  previous: string | null;
  results: object;
}
