import { instance } from '@api/axios';
import { userSignin, userSignup } from '@/types/user';
import { UserInfoOrNull } from '@/types/user';

const socialLogin = async () => {
  instance.get('accounts/google/login/');
};

const fetchUserInfo = async (): Promise<UserInfoOrNull> => {
  const access = sessionStorage.getItem('token');
  if (!access) return null;
  const res = await instance.get('accounts/user/');
  return res.data;
};

const originSignup = async (payload: userSignup) => {
  await instance.post('accounts/registration/', payload);
};

const originSignin = async (payload: userSignin) => {
  const res = await instance.post('accounts/login/', payload);
  return res.data.key;
};

export { socialLogin, originSignup, originSignin, fetchUserInfo };
