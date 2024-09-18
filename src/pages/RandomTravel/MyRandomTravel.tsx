import ContentLayout from '@/layout/ContentLayout';
import { Link } from 'react-router-dom';
import Kakaomap from '@/components/Kakaomap';
import useRTStore from '@/store/useRTStore';

const MyRandomTravel = () => {
  return (
    <ContentLayout>
      <CreateOrMy />
      <ResultDetail />
    </ContentLayout>
  );
};

const CreateOrMy = () => {
  return (
    <div className="mx-auto flex w-[410px] justify-between text-center text-[16px] font-bold text-mk-darkgray">
      <div className="h-[30px]">
        <Link to="..">
          <button>랜덤 여행지 만들기</button>
        </Link>
      </div>
      <div className="h-[30px] border-b-2 border-mk-logo2">
        <Link to="">
          <button>나의 랜덤 여행지</button>
        </Link>
      </div>
    </div>
  );
};
const ResultDetail = () => {
  return (
    <div className="flex">
      <LeftSideBar />
      <div>
        <ResultDetailHeader />
        <ResultDetailBody />
      </div>
    </div>
  );
};

const ResultDetailHeader = () => {
  return (
    <>
      <div className="mx-auto my-[80px] text-center">
        <div className="mx-auto flex w-[1060px] items-center justify-between text-[30px] font-bold text-mk-logo3">
          <hr className="w-[30%] border-t border-black" />
          <span className="whitespace-nowrap">저장된 여행 코스</span>
          <hr className="w-[30%] border-t border-black" />
        </div>
      </div>
    </>
  );
};

const ResultDetailBody = () => {
  const dummy = [
    {
      title: '안인해변(안인해수욕장)',
      addr1: '강원특별자치도 강릉시 강동면 안인진리',
      mapx: 128.9904199396,
      mapy: 37.7343114116,
    },
    {
      title: '옥계해변',
      addr1: '강원특별자치도 강릉시 옥계면 금진솔밭길 104-32',
      mapx: 129.0480708236,
      mapy: 37.6280637014,
    },
    {
      title: '순긋해변',
      addr1: '강원특별자치도 강릉시 해안로 682-5',
      mapx: 128.8931261433,
      mapy: 37.8168194119,
    },
    {
      title: '사근진해중공원 전망대',
      addr1: '강원특별자치도 강릉시 해안로604번길 16',
      mapx: 128.8988285332,
      mapy: 37.8127616594,
    },
    {
      title: '김동명문학관',
      addr1: '강원특별자치도 강릉시 사천면 샛돌1길 30-2',
      mapx: 128.8376949134,
      mapy: 37.8206040035,
    },
  ];
  return (
    <div className="mx-[30px]">
      <Kakaomap data={dummy} />
    </div>
  );
};

const LeftSideBar = () => {
  const dummyList = [
    '저장된 여행코스 1',
    '저장된 여행코스 2',
    '저장된 여행코스 3',
    '저장된 여행코스 4',
    '저장된 여행코스 5',
  ];
  const { index, setIndex } = useRTStore();
  return (
    <>
      <div className="h-[30px]" />
      <div className="min-h-[700px] w-[400px] border-r border-mk-gray-2">
        <hr className="w-[75%]" />
        <div className="w-[300px] text-center">
          {dummyList.map((item, idx) => (
            <div
              key={idx}
              className="my-[32px] flex w-full justify-center p-2 text-left text-[20px] font-bold"
            >
              <button
                onClick={() => setIndex(idx)}
                className={index === idx ? 'text-mk-logo4' : 'text-mk-gray-2'}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyRandomTravel;
