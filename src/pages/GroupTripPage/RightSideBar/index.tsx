import Kakaomap from '@components/Kakaomap';

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

const RightSideBar = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <p>그룹을 선택해주세요</p>
      <div className="h-[650px] w-[700px]">
        <Kakaomap data={dummy} />
      </div>
    </div>
  );
};

export default RightSideBar;
