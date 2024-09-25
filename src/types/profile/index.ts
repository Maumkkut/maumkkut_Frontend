export type TProfileFeedCount = {
  username: string;
  post_count: number;
  comment_count: number;
  total_likes: number;
};

export type TProfileCommentList = {
  id: number;
  post_id: number;
  content: string;
  post_title: string;
  created_at: string;
  board_type: string;
};
export type TProfilePostList = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  board_type: string;
};

export type TEditPassword = {
  new_password1: string;
  new_password2: string;
  submitError?: string;
};
