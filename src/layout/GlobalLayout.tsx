import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useUserInfo } from '@/hooks/queries/user';
import { Outlet } from 'react-router-dom';

const GlobalLayout = () => {
  useUserInfo();

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
