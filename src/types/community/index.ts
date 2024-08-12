export interface BoardItemInterface {
  id: number;
  title: string;
  content: string;
  author: number;
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
