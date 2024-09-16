import { REGION_CODE } from '@/constants/regionCode';

import SearchMate from '@/components/SearchMate';
import { useState } from 'react';

const GroupMake = () => {
  const [mateNumber, setMateNumber] = useState<number>(1);

  const handleAddMember = () => {
    setMateNumber(mateNumber + 1);
  };

  return (
    <div className="flex justify-center text-sm">
      <div className="flex flex-col gap-y-20">
        <h1 className="flex justify-center text-3xl font-bold text-mk-logo4">
          <span>새 여행 그룹 만들기</span>
        </h1>

        <div className="flex flex-col">
          {/* group info */}
          <div className="flex flex-col gap-y-4">
            {/* 이름 */}
            <div className="flex h-[40px] items-center gap-x-5">
              <span>그룹 이름</span>
              <div className="flex h-full w-[410px] items-center justify-between">
                <input
                  type="text"
                  className="h-full w-[320px] rounded-md border border-black"
                />
                <button className="h-[30px] w-[70px] rounded-lg bg-mk-newgrey text-xs font-light text-white">
                  중복확인
                </button>
              </div>
            </div>
            {/* 일정 */}
            <div className="flex h-[40px] items-center gap-x-5">
              <span>그룹 일정</span>
              <div className="flex h-full w-[410px] items-center justify-between gap-x-5">
                <input
                  type="date"
                  className="h-full w-[320px] rounded-md border border-black"
                />
                <span> ~ </span>
                <input
                  type="date"
                  className="h-full w-[320px] rounded-md border border-black"
                />
              </div>
            </div>
            {/* 숙소 */}
            <div>
              <span>여행 지역 선택</span>
            </div>
            <div className="flex items-center gap-x-5">
              <div className="grid w-[400px] grow grid-cols-4 gap-3">
                {Object.values(REGION_CODE).map((item) => (
                  <button
                    key={item}
                    className="rounded-md border border-mk-newgrey px-4 py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="font-bold">여행 메이트 검색</span>
            </div>

            <div className="flex flex-col items-center gap-y-3">
              {Array.from({ length: mateNumber }).map((_, index) => (
                <SearchMate key={index} />
              ))}

              <button
                className="h-[30px] w-[90px] rounded-3xl border border-mk-newgrey text-xs"
                onClick={() => handleAddMember()}
              >
                + 인원 추가
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-x-12">
          <button className="h-[40px] w-[100px] rounded-lg bg-mk-newgrey text-sm font-light text-white">
            생성 취소
          </button>
          <button className="h-[40px] w-[100px] rounded-lg bg-mk-logo3 text-sm font-light text-white">
            그룹 생성
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupMake;
