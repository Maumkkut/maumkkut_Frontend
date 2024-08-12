import { useQuery, useMutation } from '@tanstack/react-query';
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
