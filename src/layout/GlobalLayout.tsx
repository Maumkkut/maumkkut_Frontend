import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Outlet } from 'react-router-dom';

const GlobalLayout = () => {
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
