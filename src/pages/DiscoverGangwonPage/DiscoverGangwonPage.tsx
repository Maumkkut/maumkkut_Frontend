import ContentLayout from '@/layout/ContentLayout';
import { Routes, Route } from 'react-router-dom';
import ourTravel from '@/assets/images/HomePage/ourTravel.jpg';
import DiscoverEntry from './DiscoverEntry';
import DiscoverDetail from './DiscoverDetail';

const DiscoverGangwon = () => {
  return (
    <>
      <HeroSection />
      <Routes>
        <Route
          path="/"
          element={<DiscoverEntry />}
        />
        <Route
          path=":type"
          element={<DiscoverDetail />}
        />
      </Routes>
    </>
  );
};

const HeroSection = () => {
  return (
    <>
      {/* relative라는 클래스 없으면 다른 버튼들이 안눌림.. */}
      <div className="relative mb-[130px] h-[310px] overflow-hidden">
        <img
          className="h-full w-full object-cover brightness-75"
          src={ourTravel}
          alt="sea"
        />
        <div className="absolute inset-0">
          <ContentLayout>
            <div className="left-[144px] ms-[162px] mt-[120px] w-[1224px] text-center">
              <h2 className="my-auto font-tantan text-[48px] text-[#FFD74A]">
                강원도 이곳저곳
              </h2>
            </div>
          </ContentLayout>
        </div>
      </div>
    </>
  );
};

export default DiscoverGangwon;
