import Swal from 'sweetalert2';
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
      navigate('/');
    },
    onError: () => {
      Swal.fire({
        icon: 'error',
        title: '로그인 실패',
        text: '아이디 또는 비밀번호가 틀렸습니다!',
      });
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
