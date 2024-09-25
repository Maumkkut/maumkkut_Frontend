import {
  useFetchBoardDetail,
  // useFetchBoardComment,
} from '@/hooks/queries/board';
import { BOARD_TYPE } from '@/constants/boardType';
import { useParams, useLocation } from 'react-router-dom';

import LoadingPage from '@pages/LoadingPage';
import CommunityComment from '@/components/community/CommunityComment';
import CommentInput from '@/components/community/CommentInput';
import { postLiked } from '@/api/board';

import { useQueryClient } from '@tanstack/react-query';

import GoodColoredIcon from '@assets/images/GroupTrip/GoodColoredIcon.svg';

type ParamsType = {
  page: string;
};

const CommunityDetail = () => {
  const location = useLocation();
  const queryClient = useQueryClient();
  const pathSegments = location.pathname.split('/');
  const { page } = useParams() as ParamsType;
  const isAuthenticated = sessionStorage.getItem('token');

  const { data, isPending } = useFetchBoardDetail(
    pathSegments[2],
    parseInt(page),
  );

  const handlePostLike = () => {
    if (!data) return;
    if (isAuthenticated) {
      const payload = {
        boardType: data.board_type,
        postId: data.id,
      };
      postLiked(payload);
      queryClient.invalidateQueries({
        queryKey: [`${data.board_type}boardDetail`, data.id],
      });
    }
  };

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
          <p className="whitespace-pre-line text-xl">{data.content}</p>
        </div>
        <div className="flex justify-center">
          <button
            className="rounded-lg border border-mk-logo1 px-6 py-4"
            onClick={() => handlePostLike()}
          >
            <div className="flex gap-x-2">
              <img
                className="w-5"
                src={GoodColoredIcon}
                alt="GoodIcon"
              />
              <span>{data.liked_users_count}</span>
            </div>
          </button>
        </div>

        <div className="my-4 border-[1px]" />
        {/* 댓글 */}
        <div className="flex flex-col items-center">
          <div className="flex w-[1100px] flex-col items-center gap-y-8">
            {/* 댓글 툴바 */}
            <div className="flex w-full items-center gap-x-4">
              <span className="text-2xl font-bold">댓글</span>
              <span className="grow text-lg">
                총{' '}
                <span className="text-mk-logo2">
                  {data ? data.comments.length : '0'}
                </span>
                개
              </span>
            </div>

            {/* 댓글 작성 input */}
            <CommentInput commentType="comment" />

            {/* 댓글 contents */}
            {data.comments.length === 0 ? (
              <div className="mb-28 flex h-[240px] w-full items-center justify-center bg-mk-ligtgray px-12 py-8 text-xl">
                <p className="text-mk-darkgray">등록된 댓글이 없습니다.</p>
              </div>
            ) : (
              <div className="mb-28 flex w-full flex-col gap-y-10 bg-mk-ligtgray px-12 py-8 text-xl">
                {data.comments.map((item) => (
                  <CommunityComment
                    key={item.id}
                    data={item}
                    boardType={data.board_type}
                    postId={data.id}
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
