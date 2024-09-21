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
  message: string;
  result: {
    id: number;
  } & TMakeGroupPayload;
};
