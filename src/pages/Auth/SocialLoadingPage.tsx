import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '@/api/axios';
import { useUserInfo } from '@/hooks/queries/user';
import AddInfoPage from './AddInfoPage';

const SocialLoadingPage = () => {
  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');

  const [isAddInfo, setAddInfo] = useState(false);

  const { refetch } = useUserInfo();
  const handleSocialLogin = async (code: string) => {
    try {
      const res = await instance.get('/accounts/google/callback/', {
        params: {
          code: code,
        },
      });

      console.log(res);
      if (res.data.add_info) {
        setAddInfo(true);
        alert('추가정보를 입력해주세요');
      } else {
        refetch();
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      navigate('/signin');
    }
  };

  useEffect(() => {
    if (isAddInfo) return;
    if (code) {
      handleSocialLogin(code);
    } else {
      console.log('로그인 재시도하세요.');
    }
  }, [code, navigate]);

  // if (!isAddInfo) {
  //   return (
  //     <div>
  //       <p>카카오 로그인 중...</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <AddInfoPage />
    </div>
  );
};

export default SocialLoadingPage;
