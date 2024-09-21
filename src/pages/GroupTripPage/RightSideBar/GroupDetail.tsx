import Kakaomap from '@/components/Kakaomap';
import ReigonCard from '@/components/ReigonCard';
import { useParams } from 'react-router-dom';

import LoadingPage from '@/pages/LoadingPage';
import {
  useFetchGroupDetailToId,
  useFetchGroupTourListGroupLike,
  useFetchGroupTourListUserLikee,
} from '@/hooks/queries/group';

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

type ParamsType = {
  groupId: string;
};

export default function GroupDetail() {
  const { groupId } = useParams() as ParamsType;

  const { data: groupDetail, isSuccess: isGroupDetail } =
    useFetchGroupDetailToId(parseInt(groupId));
  const { data: groupLikeList, isSuccess: isGroupLikeList } =
    useFetchGroupTourListGroupLike(parseInt(groupId));
  const { data: userLikeList, isSuccess: isUserLikeList } =
    useFetchGroupTourListUserLikee(parseInt(groupId));

  if (!isGroupDetail || !isGroupLikeList || !isUserLikeList) {
    return <LoadingPage />;
  }
  return (
    <div className="flex w-[900px] flex-col gap-y-[50px]">
      {/* 그룹 이름 */}
      <div className="py-5 text-center">
        <h1 className="text-3xl font-bold text-mk-logo4">
          {groupDetail?.name}
        </h1>
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
          {/* {groupLikeList} */}
          {groupLikeList.tour_list.length === 0 ? (
            <div className="flex items-center justify-between text-mk-darkgray">
              <div className="rounded-xl bg-mk-logo0 px-5 py-3">
                <span>그룹에 여행지가 없어요!</span>
              </div>
            </div>
          ) : (
            groupLikeList.tour_list.map((item) => (
              <div
                key={item.tour_id}
                className="flex items-center justify-between text-mk-darkgray"
              >
                <div className="rounded-xl bg-mk-logo0 px-5 py-3">
                  <span>{item.tour_name}</span>
                </div>
                <div>
                  <span>
                    좋아요 {item.like_count}, 싫어요 {item.dislike_count}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* 장소 리스트 */}
      <div className="flex-col gap-y-7">
        <div className="p-5">
          <h1 className="text-4xl font-bold text-mk-darkgray">전체 장소</h1>
        </div>
        <div className="flex justify-center">
          {userLikeList.tour_list.length === 0 ? (
            <div>
              <p className="text-2xl">그룹에 여행지가 없어요!</p>
            </div>
          ) : (
            userLikeList.tour_list.map((item) => (
              <div
                key={item.tour_id}
                className="grid grid-cols-5 gap-x-5 gap-y-10"
              >
                <ReigonCard />
              </div>
            ))
          )}
          {/* <div className="grid grid-cols-5 gap-x-5 gap-y-10">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
