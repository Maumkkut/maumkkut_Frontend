import ContentLayout from '@/layout/ContentLayout';
import HeroImg from '@assets/images/community/Hero Section.png';
import { NavLink } from 'react-router-dom';
// import CommunityBoard from '@pages/CommunityPage/CommunityBoard';
import { useLocation } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

const CommunityPage = () => {
  const location = useLocation();
  return (
    <div>
      {/* Hero section */}
      <div className='overflow-hidden" relative h-[200px]'>
        <img
          className="h-full w-full object-cover brightness-50"
          src={HeroImg}
          alt="banner"
        />
        <div className="absolute inset-0">
          <ContentLayout>
            <div className="flex h-full w-full items-center justify-center">
              <h2 className="font-tantan text-[48px] text-[#FFD74A]">
                커뮤니티
              </h2>
            </div>
          </ContentLayout>
        </div>
      </div>
      {/* select contents type */}
      <ContentLayout>
        <div className="mt-16 flex justify-center">
          <nav className="w-[650px]">
            <ul className="flex justify-between">
              <li
                className={`flex h-[50px] w-[170px] items-center justify-center ${
                  location.pathname.startsWith('/community/all')
                    ? 'border-b-2 border-mk-logo2'
                    : ''
                }`}
              >
                <NavLink to={'/community/all?page=1'}>
                  <span className="font-bold text-mk-darkgray">
                    전체 게시글
                  </span>
                </NavLink>
              </li>
              <li
                className={`flex h-[50px] w-[170px] items-center justify-center ${
                  location.pathname.startsWith('/community/free')
                    ? 'border-b-2 border-mk-logo2'
                    : ''
                }`}
              >
                <NavLink to={'/community/free?page=1'}>
                  <span className="font-bold text-mk-darkgray">
                    자유 게시글
                  </span>
                </NavLink>
              </li>
              <li
                className={`flex h-[50px] w-[170px] items-center justify-center ${
                  location.pathname.startsWith('/community/travel')
                    ? 'border-b-2 border-mk-logo2'
                    : ''
                }`}
              >
                <NavLink to={'/community/travel?page=1'}>
                  <span className="font-bold text-mk-darkgray">
                    여행 후기 게시글
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Outlet />
        </div>
      </ContentLayout>
    </div>
  );
};

export default CommunityPage;
