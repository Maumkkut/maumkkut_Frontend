import ContentLayout from '@/layout/ContentLayout';
// import useRTStore from '@/store/useRTStore';
import { Link } from 'react-router-dom';

const CreateRandomTravel = () => {
  return (
    <ContentLayout>
      <CreateOrMy />
      <SelectStart />
      <ShowResult />
    </ContentLayout>
  );
};

const CreateOrMy = () => {
  return (
    <div className="mx-auto mb-[80px] flex w-[410px] justify-between text-center text-[16px] font-bold text-mk-darkgray">
      <div className="h-[30px] border-b-2 border-mk-logo2">
        <Link to="">
          <button>랜덤 여행지 만들기</button>
        </Link>
      </div>
      <div className="h-[30px]">
        <Link to="my">
          <button>나의 랜덤 여행지</button>
        </Link>
      </div>
    </div>
  );
};

const SelectStart = () => {
  // const { startPos } = useRTStore();
  return (
    <>
      <div className="mx-auto my-[80px] text-center">
        <div className="mx-auto flex w-[1060px] items-center justify-between text-[30px] font-bold text-mk-logo3">
          <hr className="w-[30%] border-t border-black" />
          <span className="whitespace-nowrap">
            여행 시작 장소를 선택해주세요
          </span>
          <hr className="w-[30%] border-t border-black" />
        </div>
      </div>
      <div></div>
    </>
  );
};

const ShowResult = () => {
  return (
    <div className="my-[50px] flex justify-center">
      <button className="h-[66px] w-[530px] rounded-[6px] bg-mk-logo3 text-[22px] font-semibold text-white">
        랜덤 여행 코스 결과 보기
      </button>
    </div>
  );
};

export default CreateRandomTravel;
