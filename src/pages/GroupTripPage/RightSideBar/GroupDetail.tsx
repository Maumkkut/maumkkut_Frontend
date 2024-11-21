import Kakaomap from '@/components/Kakaomap';
import ReigonCard from '@/components/ReigonCard';
import { useParams } from 'react-router-dom';

import LoadingPage from '@/pages/LoadingPage';
import {
  useFetchGroupDetailToId,
  useFetchGroupTourListGroupLike,
  useFetchGroupTourListUserLikee,
  useFetchGroupTourList,
} from '@/hooks/queries/group';

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
  const { data: groupTourList, isSuccess: isgroupTourList } =
    useFetchGroupTourList(parseInt(groupId));

  if (
    !isGroupDetail ||
    !isGroupLikeList ||
    !isUserLikeList ||
    !isgroupTourList
  ) {
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
          <Kakaomap
            data={groupTourList.tour_list.map((item) => ({
              title: item.tour.title,
              addr1: item.tour.addr1,
              mapx: item.tour.mapx,
              mapy: item.tour.mapy,
            }))}
          />
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
                className="grop flex items-center justify-between text-mk-darkgray"
              >
                <div className="group relative rounded-xl bg-mk-logo0 px-5 py-3">
                  <span>{item.tour_name}</span>
                  {/* 호버시 */}
                  <div className="absolute -top-1/2 left-full z-20 hidden min-w-36 flex-col gap-y-1 rounded-xl border border-mk-darkgrey bg-mk-logo0 px-7 py-5 group-hover:flex">
                    <span className="text-xl font-bold">좋아요</span>
                    <div className="flex gap-x-2">
                      {groupLikeList.tour_list
                        .filter((tour) => tour.tour_id === item.tour_id)
                        .map((data) =>
                          data.like_members.map((item) => (
                            <p key={item}>{item}</p>
                          )),
                        )}
                    </div>
                    <span className="text-xl font-bold">싫어요</span>
                    <div className="flex gap-x-2">
                      {groupLikeList.tour_list
                        .filter((tour) => tour.tour_id === item.tour_id)
                        .map((data) =>
                          data.dislike_members.map((item) => (
                            <p key={item}>{item}</p>
                          )),
                        )}
                    </div>
                  </div>
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
        <div className="grid grid-cols-5 justify-center">
          {groupTourList.tour_list.length === 0 ? (
            <div>
              <p className="text-2xl">그룹에 여행지가 없어요!</p>
            </div>
          ) : (
            groupTourList.tour_list.map((item) => (
              <div
                key={item.order}
                className="flex items-center justify-center gap-x-5 gap-y-10"
              >
                <ReigonCard
                  data={item.tour}
                  userLikeList={userLikeList.tour_list}
                  groupId={groupDetail.id}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
