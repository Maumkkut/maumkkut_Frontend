import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/api/axios';

const SocialLoadingPage = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const handleSocialLogin = async (code: string) => {
    try {
      const res = await instance.post('/google/callback/', null, {
        params: {
          code: code,
        },
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code) {
      handleSocialLogin(code);
    } else {
      console.log('로그인 재시도하세요.');
    }
  }, [code, navigate]);
  return;
};

export default SocialLoadingPage;