import { Routes, Route } from 'react-router-dom';
import CreateRandomTravel from './CreateRandomTravel';
import MyRandomTravel from './MyRandomTravel';
import ContentLayout from '@/layout/ContentLayout';
import dice from '@/assets/images/HomePage/dice.jpg';
const RandomTravelPage = () => {
  return (
    <>
      <HeroSection />
      <Routes>
        <Route
          path="/"
          element={<CreateRandomTravel />}
        />
        <Route
          path="my"
          element={<MyRandomTravel />}
        />
      </Routes>
    </>
  );
};

const HeroSection = () => {
  return (
    <>
      {/* relative라는 클래스 없으면 다른 버튼들이 안눌림.. */}
      <div className="relative mb-[80px] h-[310px] overflow-hidden">
        <img
          className="h-full w-full object-cover brightness-50"
          src={dice}
          alt="dice"
        />
        <div className="absolute inset-0">
          <ContentLayout>
            <div className="left-[144px] my-[96px] ms-[162px] w-[1224px] text-center">
              <p className="text-[32px] font-extralight text-white">
                랜덤으로 떠나요, 강원도
              </p>
              <h2 className="mt-[10px] font-tantan text-[48px] text-[#FFD74A]">
                랜덤 여행지 추천
              </h2>
            </div>
          </ContentLayout>
        </div>
      </div>
    </>
  );
};

export default RandomTravelPage;
