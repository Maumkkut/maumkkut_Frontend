interface userSignin {
  username: string;
  password: string;
}
interface userSignup {
  username: string;
  email: string;
  password1: string;
  password2: string;
  name: string;
  phone_number: string;
  address: string;
  nickname: string;
  date_of_birth: number;
}

interface UserInfoInterface {
  pk: number;
  username: string;
  email: number;
  first_name: string;
  last_name: string;
  nickname: string;
  phone_number: string;
  address: string;
  id: number;
  name: string;
}

interface IAddInfo {
  date_of_birth: number;
  nickname: string;
  name: string;
  phone_number: string;
}

type UserInfoOrNull = UserInfoInterface | null;

export type { userSignin, userSignup, UserInfoOrNull, IAddInfo };
