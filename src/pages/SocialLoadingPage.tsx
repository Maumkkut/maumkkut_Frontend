import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { instance } from '@/api/axios';

const SocialLoadingPage = () => {
  // const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  console.log('SocialLoadingPage');

  const handleSocialLogin = async (code: string) => {
    try {
      const res = await instance.get('/accounts/google/callback/', {
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
  }, []);
  return (
    <div>
      <p>loading</p>
    </div>
  );
};

export default SocialLoadingPage;
