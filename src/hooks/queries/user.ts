import { useQuery, useMutation, queryOptions } from '@tanstack/react-query';
import {
  originSignin,
  // originSignup,
  // socialLogin,
  fetchUserInfo,
} from '@api/user';

import { useNavigate } from 'react-router-dom';

export const useUserSignin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: originSignin,
    onSuccess: async (data) => {
      sessionStorage.setItem('token', data);
      fetchUserInfo;
      navigate('/');
    },
    onError: () => {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    },
  });
};

export const useUserInfo = () => {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: fetchUserInfo,
    staleTime: Infinity,
    retry: 1,
  });
};

export function userInfoQueryHelper() {
  return queryOptions({
    queryKey: ['userInfo'],
    queryFn: fetchUserInfo,
    staleTime: Infinity,
  });
}
