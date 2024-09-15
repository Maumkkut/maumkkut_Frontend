import { instance } from '@api/axios';
import { userSignin, userSignup } from '@/types/user';
import { UserInfoOrNull } from '@/types/user';
import { IAddInfo } from '@/types/user';

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
  const res = await instance
    .post('accounts/registration/', payload)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
  return res;
};

const originSignin = async (payload: userSignin) => {
  const res = await instance.post('accounts/login/', payload);
  return res.data.key;
};

const fetchcheckUserName = async (username: string) => {
  const params = {
    username: username,
  };
  const res = await instance
    .get('accounts/check/username/', { params })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
  return res;
};

const fetchcheckNickname = async (nickname: string) => {
  const params = {
    nickname: nickname,
  };
  const res = await instance
    .get('accounts/check/nickname/', { params })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
  return res;
};

const socialAddInfo = async (payload: IAddInfo) => {
  await instance.post('accounts/add-user-info/', payload);
};

export {
  socialLogin,
  originSignup,
  originSignin,
  fetchUserInfo,
  fetchcheckUserName,
  fetchcheckNickname,
  socialAddInfo,
};
