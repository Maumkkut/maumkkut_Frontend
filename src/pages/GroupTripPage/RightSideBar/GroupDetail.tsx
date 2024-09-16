import Kakaomap from '@/components/Kakaomap';
import ReigonCard from '@/components/ReigonCard';

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

export default function GroupDetail() {
  return (
    <div className="flex w-[900px] flex-col gap-y-[50px]">
      {/* 그룹 이름 */}
      <div className="py-5 text-center">
        <h1 className="text-3xl font-bold text-mk-logo4">group Name</h1>
      </div>

      {/* 지도랑 코스 */}
      <div className="flex gap-x-[50px]">
        <div className="flex-1">
          <Kakaomap data={dummy} />
        </div>
        <div className="flex flex-1 flex-col gap-y-7">
          <div className="border-b-2 border-mk-logo4 text-center">
            <h2 className="py-5 text-2xl font-bold">우리만의 여행코스</h2>
          </div>
          {/* 나중에 리스트로 map */}

          <div className="flex items-center justify-between text-mk-darkgray">
            <div className="rounded-xl bg-mk-logo0 px-5 py-3">
              <span>여행지 명</span>
            </div>
            <div>
              <span>좋아요 3, 싫어요 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* 장소 리스트 */}
      <div className="flex-col gap-y-7">
        <div className="p-5">
          <h1 className="text-4xl font-bold text-mk-darkgray">전체 장소</h1>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-5 gap-x-5 gap-y-10">
            <ReigonCard />
            <ReigonCard />
            <ReigonCard />
            <ReigonCard />
            <ReigonCard />
            <ReigonCard />
            <ReigonCard />
            <ReigonCard />
            <ReigonCard />
            <ReigonCard />
            <ReigonCard />
            <ReigonCard />
          </div>
        </div>
      </div>
    </div>
  );
}
