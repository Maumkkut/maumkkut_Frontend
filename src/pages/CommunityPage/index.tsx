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
            <li>
              <NavLink to={'/community'}>
                <span className="text-mk-darkgray font-bold">전체 게시글</span>
              </NavLink>
            </li>
            <li>
              <span className="text-mk-darkgray font-bold">인증 게시글</span>
            </li>
            <li>
              <span className="text-mk-darkgray font-bold">
                여행 후기 게시글
              </span>
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
