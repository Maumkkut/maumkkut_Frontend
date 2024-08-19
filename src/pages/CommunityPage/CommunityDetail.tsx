import {
  useFetchBoardDetail,
  // useFetchBoardComment,
} from '@/hooks/queries/board';
import { BOARD_TYPE } from '@/constants/boardType';

import { useParams, useLocation } from 'react-router-dom';

import LoadingPage from '@pages/LoadingPage';
import CommunityComment from '@/components/community/CommunityComment';

type ParamsType = {
  page: string;
};

const CommunityDetail = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const { page } = useParams() as ParamsType;

  const { data, isPending } = useFetchBoardDetail(
    pathSegments[2],
    parseInt(page),
  );

  if (isPending) {
    return <LoadingPage />;
  }

  if (!data) {
    return <LoadingPage />;
  }

  return (
    <div className="item flex flex-col items-center justify-center">
      <div className="w-[1207px]">
        {/* 위 제목 및 정보 */}
        <div className="flex flex-col gap-y-7">
          <p className="text-2xl font-bold">{data.title}</p>
          <div className="flex gap-x-8 text-xl text-mk-darkgray">
            <p>{BOARD_TYPE[data.board_type]}</p>
            <p className="grow">{data.author_username}</p>
            <p>댓글 {data.comments.length}</p>
            <p>추천 {data.liked_users_count}</p>
          </div>
        </div>
        <div className="my-4 border-[1px]" />
        {/* 본문 */}
        <div className="py-9">
          <p className="whitespace-normal text-xl">{data.content}</p>
        </div>
        <div className="my-4 border-[1px]" />
        {/* 댓글 */}
        <div className="flex flex-col items-center">
          <div className="flex w-[1100px] flex-col items-center gap-y-8">
            {/* 댓글 툴바 */}
            <div className="flex w-full items-center gap-x-4">
              <span className="text-2xl font-bold">댓글</span>
              <span className="grow text-lg">
                총 <span className="text-mk-logo2">{data.comments.length}</span>
                개
              </span>
            </div>

            {/* 댓글 작성 input */}
            <form className="flex h-14 w-full">
              <textarea
                name=""
                id=""
                className="grow resize-none border-[1px] px-4 py-1"
              ></textarea>
              <button className="w-[100px] bg-mk-logo2 text-white">작성</button>
            </form>

            {/* 댓글 contents */}
            {data.comments.length === 0 ? (
              <div className="bg-mk-ligtgray mb-28 h-[240px] w-full px-12 py-8 text-xl">
                <p>아직 댓글이 없어요!</p>
              </div>
            ) : (
              <div className="bg-mk-ligtgray mb-28 flex w-full flex-col gap-y-10 px-12 py-8 text-xl">
                {data.comments.map((item) => (
                  <CommunityComment
                    key={item.id}
                    data={item}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetail;
