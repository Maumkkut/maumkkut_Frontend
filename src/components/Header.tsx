import ContentLayout from '@/layout/ContentLayout';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImg from '@assets/images/logo/Logo.svg';
import downArrow from '@assets/images/Profile/downArrow.svg';
import userIcon from '@assets/images/Profile/userIcon.svg';
import { logout } from '@/api/user';
import { useUserInfo } from '@/hooks/queries/user';

import { useQueryClient } from '@tanstack/react-query';

const Header = () => {
  const isAuthenticated = sessionStorage.getItem('token');

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data } = useUserInfo();
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    queryClient.removeQueries({ queryKey: ['userInfo'] });
    logout();
    navigate('/');
  };
  return (
    <div className="h-[84px]">
      <ContentLayout>
        <div className="flex h-full items-center">
          {/* 로고영역 */}
          <div className="ml-[69px]">
            <NavLink to={'/'}>
              <img
                src={logoImg}
                alt="logo"
              />
            </NavLink>
          </div>

          {/* navitem */}
          {/* 추후 navlink 연결 필요 */}
          <div className="ml-[81px] flex w-[859px] justify-between font-dotum">
            <NavLink to={'/'}>강원도 이곳저곳</NavLink>
            <NavLink to={'/TravelTasteTest'}>여행 취향 테스트</NavLink>
            <NavLink to={'/grouptrip'}>우리여행 코스추천</NavLink>
            <NavLink to={'/RandomTravel'}>랜덤 여행지 추천</NavLink>
            <NavLink to={'/community/all'}>커뮤니티</NavLink>

            {/* <NavLink to={'/'}>마이페이지</NavLink> */}
          </div>

          {/* login */}
          {isAuthenticated ? (
            <div className="group relative z-30 ml-32 flex w-[183px] justify-center">
              <div className="flex items-center gap-x-1 py-1">
                <img
                  src={userIcon}
                  alt="userIcon"
                />
                <p>{data?.nickname}</p>
                <img
                  src={downArrow}
                  alt="downArrow"
                />
              </div>
              <div className="absolute hidden w-full translate-y-1/3 flex-col items-center rounded-md bg-mk-ligtgray group-hover:flex">
                <NavLink
                  className={`w-full`}
                  to={'/profile'}
                >
                  <button className="w-full rounded-md p-3 hover:bg-mk-logo3 hover:text-white">
                    <span>마이페이지</span>
                  </button>
                </NavLink>
                <button
                  className="w-full rounded-md p-3 hover:bg-mk-logo3 hover:text-white"
                  onClick={() => handleLogout()}
                >
                  <span>로그아웃</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="ml-32 flex w-[183px] justify-between font-tantan">
              <NavLink to={'/signin'}>
                <button className="h-[40px] w-[78px] rounded-md bg-white text-mk-logo3">
                  로그인
                </button>
              </NavLink>
              <NavLink to={'/signup'}>
                <button className="h-[40px] w-[91px] rounded-md bg-mk-logo3 text-white">
                  회원가입
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </ContentLayout>
    </div>
  );
};

export default Header;
