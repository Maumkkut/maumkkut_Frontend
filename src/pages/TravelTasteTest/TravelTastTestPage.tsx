import { Routes, Route } from 'react-router-dom';
import TestEntryPage from '@/pages/TravelTasteTest/TestEntryPage';
import TestPage from '@/pages/TravelTasteTest/TestPage';
import TestHistoryPage from '@/pages/TravelTasteTest/TestHistoryPage';
import sea from '@/assets/images/TravelTasteTest/sea.jpg';
import ContentLayout from '@/layout/ContentLayout';
const TravelTasteTest = () => {
  return (
    <>
      {/* 히어로섹션 */}
      <HeroSection />
      {/* /TravelTasteTest 이후의 경로에 따라 엔트리페이지, 테스트페이지, 결과페이지로 넘어가기 */}
      <Routes>
        <Route
          path="/"
          element={<TestEntryPage />}
        />
        <Route
          // 라우터 경로가 (/TravelTasteTest/test) 인 경우
          path="test"
          element={<TestPage />}
        />
        <Route
          path="history"
          element={<TestHistoryPage />}
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
          src={sea}
          alt="sea"
        />
        <div className="absolute inset-0">
          <ContentLayout>
            <div className="left-[144px] my-[96px] ms-[162px] w-[1224px] text-center">
              <p className="text-[32px] text-white">내 여행 MBTI는 뭘까?</p>
              <h2 className="mt-[10px] font-tantan text-[48px] text-[#FFD74A]">
                무료 여행 취향 테스트
              </h2>
            </div>
          </ContentLayout>
        </div>
      </div>
    </>
  );
};

export default TravelTasteTest;
