import { Routes, Route } from 'react-router-dom';
import TestEntryPage from '@/pages/TravelTasteTest/TestEntryPage';
import TestPage from '@/pages/TravelTasteTest/TestPage';
import TestHistoryPage from '@/pages/TravelTasteTest/TestHistoryPage';
import sea from '@/assets/images/TravelTasteTest/sea.jpg';

const TravelTasteTest = () => {
  return (
    <>
      {/* 히어로섹션 */}
      <HeroSection />
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
      <div className="w-mas h-[310px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={sea}
          alt="sea"
        />
      </div>
    </>
  );
};

export default TravelTasteTest;
