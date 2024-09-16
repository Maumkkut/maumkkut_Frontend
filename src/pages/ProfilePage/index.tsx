import HeroImg from '@assets/images/Profile/Hero Section.svg';
import Arrow from '@assets/images/Profile/arrow.svg';

import ContentLayout from '@/layout/ContentLayout';
import RightSidePage from '@pages/ProfilePage/RigthSidePage';
import { useState } from 'react';

export default function ProfilePage() {
  const [selectCategory, setSelectCategory] = useState<number>(0);
  return (
    <ContentLayout>
      <div className="mb-80 flex flex-col">
        <div>
          <img
            src={HeroImg}
            alt="banner"
          />
        </div>

        <div className="mt-40 flex justify-center gap-x-14">
          {/* 왼쪽 사이드바 */}
          <div className="flex w-[300px] flex-col text-xl">
            <button
              className="flex items-center border-b-4 border-mk-logo4 p-7"
              onClick={() => setSelectCategory(0)}
            >
              <span className="text-2xl font-bold text-mk-logo4">
                마이페이지
              </span>
            </button>

            <button
              className="flex items-center border-b border-mk-logo4 p-7"
              onClick={() => setSelectCategory(1)}
            >
              {selectCategory === 1 ? (
                <div className="flex gap-x-2">
                  <img
                    src={Arrow}
                    alt="arrow"
                  />
                  <span className="font-bold text-mk-logo4">
                    커뮤니티 활동내역
                  </span>
                </div>
              ) : (
                <span className="text-mk-logo4">커뮤니티 활동내역</span>
              )}
            </button>
            <button
              className="flex items-center border-b border-mk-logo4 p-7"
              onClick={() => setSelectCategory(2)}
            >
              {selectCategory === 2 ? (
                <div className="flex gap-x-2">
                  <img
                    src={Arrow}
                    alt="arrow"
                  />
                  <span className="font-bold text-mk-logo4">그룹관리</span>
                </div>
              ) : (
                <span className="text-mk-logo4">그룹 관리</span>
              )}
            </button>
            <button
              className="flex items-center border-b border-mk-logo4 p-7"
              onClick={() => setSelectCategory(3)}
            >
              {selectCategory === 3 ? (
                <div className="flex gap-x-2">
                  <img
                    src={Arrow}
                    alt="arrow"
                  />
                  <span className="font-bold text-mk-logo4">
                    회원 정보 수정
                  </span>
                </div>
              ) : (
                <span className="text-mk-logo4">회원 정보 수정</span>
              )}
            </button>
          </div>

          <div className="w-[850px]">
            <RightSidePage
              currentCateory={selectCategory}
              handleCategory={setSelectCategory}
            />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
