import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useUserInfo } from '@/hooks/queries/user';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useEffect } from 'react';

const GlobalLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isSuccess } = useUserInfo();

  useEffect(() => {
    if (isSuccess) {
      const isAuthenticated = sessionStorage.getItem('token');
      console.log(isSuccess, isAuthenticated, data?.nickname);
      if (isAuthenticated && !data?.nickname) {
        Swal.fire({
          icon: 'info',
          title: '추가정보',
          text: '추가정보를 입력해주세요!',
        });
        navigate('/profile/addinfo');
      }
    }
  }, [data?.nickname, isSuccess, location.pathname, navigate]);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="grow">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default GlobalLayout;
