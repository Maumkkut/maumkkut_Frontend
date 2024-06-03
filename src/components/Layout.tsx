import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
