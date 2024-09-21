export type TMakeGroupPayload = {
  leader: number;
  members: Array<number>;
  name: string;
  region: string;
  start_date: string;
  end_date: string;
};

export type TGroup = {
  id: number;
  name: string;
  region: string;
  start_date: string;
  end_date: string;
};

export type TFetchGroup = {
  message: string;
  result: Array<TGroup>;
};

export type TFetchGroupDetail = {
  id: number;
} & TMakeGroupPayload;

export type TGroupTourList = {
  tour_id: number;
  tour_name: string;
  like_count: number;
  dislike_count: number;
  like_members: string[];
  dislike_members: string[];
};
export type TUserLikeTourList = {
  tour_id: number;
  tour_name: string;
  is_liked: boolean;
  is_disliked: boolean;
};

export type TGroupLikeListPayload = {
  group: number;
  tour_list: TGroupTourList[];
};

export type TUserLikeListPayload = {
  group: number;
  tour_list: TUserLikeTourList[];
};

export type TFetchGroupTourList = {
  group: number;
  tour_list: TTourList[];
};

export type TTourList = {
  order: number;
  tour: TTour;
};
export type TTour = {
  id: number;
  title: string;
  addr1: string;
  mapx: number;
  mapy: number;
  image: string;
};

export type TTourLike = {
  tour_id: number;
  is_liked: boolean;
  is_disliked: boolean;
};
