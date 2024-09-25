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
  totalContents: number;
  boardType: string;
}

export interface FetchBoardInterface {
  total_count: number;
  next: string | null;
  previous: string | null;
  results: object;
}

export type TBoardComment = {
  id: number;
  content: string;
  author_username: string;
  created_at: string;
  replies: Array<TBoardComment>;
};

export type TcommentPayload = {
  content?: object;
  postId: string;
  commentId?: number;
};

export type TcommentDeletePayload = {
  postId: number;
  commentId: number;
};
export type TlikePayload = {
  boardType: string;
  postId: number;
};

export interface FetchBoardDetailInterface extends BoardItemInterface {
  comments: Array<TBoardComment>;
  liked_users_count: number;
}
