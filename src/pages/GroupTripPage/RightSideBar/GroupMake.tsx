const GroupMake = () => {
  return (
    <div className="flex justify-center">
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
              <div className="flex h-full w-[410px] justify-between">
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
            <div className="flex h-[64px] items-center gap-x-5">
              <span>숙소 입력</span>
              <div className="flex h-[64px] w-[410px] flex-col justify-between">
                <input
                  type="text"
                  className="h-[40px] w-full rounded-md border border-black"
                />
                <span className="text-mk-logo4">
                  정확한 숙소 정보가 없을 경우 여행지의 기차역을 작성해주세요
                </span>
              </div>
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
