import ContentLayout from '@/layout/ContentLayout';
import HeroImg from '@assets/images/community/Hero Section.png';
import { NavLink } from 'react-router-dom';
// import CommunityBoard from '@pages/CommunityPage/CommunityBoard';

import { Outlet } from 'react-router-dom';

const CommunityPage = () => {
  return (
    <ContentLayout>
      {/* Hero section */}
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-tantan text-5xl text-mk-logoPoint">커뮤니티</h1>
        </div>
        <img
          src={HeroImg}
          alt="HeroImg"
        />
      </div>
      {/* select contents type */}

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
              <NavLink to={'/community/all/1'}>
                <span className="font-bold text-mk-darkgray">전체 게시글</span>
              </NavLink>
            </li>
            <li
              className={`flex h-[50px] w-[170px] items-center justify-center ${
                location.pathname.startsWith('/community/free')
                  ? 'border-b-2 border-mk-logo2'
                  : ''
              }`}
            >
              <NavLink to={'/community/free/1'}>
                <span className="font-bold text-mk-darkgray">자유 게시글</span>
              </NavLink>
            </li>
            <li
              className={`flex h-[50px] w-[170px] items-center justify-center ${
                location.pathname.startsWith('/community/travel')
                  ? 'border-b-2 border-mk-logo2'
                  : ''
              }`}
            >
              <NavLink to={'/community/travel/1'}>
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
  );
};

export default CommunityPage;
