import ContentLayout from '@/layout/ContentLayout';
import { NavLink } from 'react-router-dom';
import logoImg from '@assets/images/logo/Logo.png';

const Header = () => {
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
            <NavLink to={'/'}>우리여행 코스추천</NavLink>
            <NavLink to={'/'}>랜덤 여행지 추천</NavLink>
            <NavLink to={'/community/free?page=1'}>커뮤니티</NavLink>
            {/* <NavLink to={'/'}>마이페이지</NavLink> */}
          </div>

          {/* login */}
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
        </div>
      </ContentLayout>
    </div>
  );
};

export default Header;
