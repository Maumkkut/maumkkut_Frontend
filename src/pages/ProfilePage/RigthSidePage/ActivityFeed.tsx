import {
  useFetchProfileFeedCounts,
  useFetchProfileCommentList,
  useFetchProfileLikeList,
  useFetchProfilePostList,
} from '@/hooks/queries/profile';
import { useNavigate } from 'react-router-dom';

import { useUserInfo } from '@/hooks/queries/user';
import { TProfilePostList, TProfileCommentList } from '@/types/profile';
import { useState } from 'react';

export default function ActivityFeed() {
  const [selectType, setSelectType] = useState(0);
  const { data: feedCountsData } = useFetchProfileFeedCounts();
  const { data: userInfo } = useUserInfo();
  return (
    <div className="flex flex-col items-center gap-y-14 px-10 text-mk-darkgray">
      <div className="w-[500px] border-b border-mk-darkgray px-5 py-10 text-center">
        <h1 className="text-3xl">커뮤니티 활동내역</h1>
      </div>
      {/* feed count */}
      <div className="flex items-center gap-x-10">
        <span className="font-bold">{userInfo?.nickname}</span>
        <div className="flex w-[400px] justify-between text-sm">
          <div className="flex flex-col items-center">
            <span>작성글수</span>
            <span>{feedCountsData?.post_count}</span>
          </div>
          <div className="flex flex-col items-center">
            <span>작성 댓글 수</span>
            <span>{feedCountsData?.comment_count}</span>
          </div>
          <div className="flex flex-col items-center">
            <span>받은 좋아요 수</span>
            <span>{feedCountsData?.total_likes}</span>
          </div>
        </div>
      </div>

      {/* nav */}
      <div className="flex justify-between">
        <button
          className={`h-[50px] w-[170px] ${selectType === 0 && `border-b-2 border-mk-logo2`}`}
          onClick={() => setSelectType(0)}
        >
          <span>내가 쓴 글</span>
        </button>
        <button
          className={`h-[50px] w-[170px] ${selectType === 1 && `border-b-2 border-mk-logo2`}`}
          onClick={() => setSelectType(1)}
        >
          <span>내가 쓴 댓글</span>
        </button>
        <button
          className={`h-[50px] w-[170px] ${selectType === 2 && `border-b-2 border-mk-logo2`}`}
          onClick={() => setSelectType(2)}
        >
          <span>좋아요한 게시물</span>
        </button>
      </div>

      {/* 리스트들 */}
      <FeedList selectType={selectType} />
    </div>
  );
}

function FeedList({ selectType }: { selectType: number }) {
  const navigate = useNavigate();
  const { data: postListData } = useFetchProfilePostList();
  const { data: LikeListData } = useFetchProfileLikeList();
  const { data: commentListData } = useFetchProfileCommentList();

  const handleMovePostDetail = (id: number, boardType: string) => {
    navigate(`/community/${boardType}/detail/${id}`);
  };

  if (!postListData) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  switch (selectType) {
    case 0:
      return (
        <div className="w-full">
          {postListData.total_count === 0 && (
            <p className="text-center">작성한 게시글이 없습니다.</p>
          )}
          {postListData.results.map((item: TProfilePostList) => (
            <div
              className="flex cursor-pointer gap-x-3 border-b border-mk-darkgrey py-3"
              key={item.id}
              onClick={() => handleMovePostDetail(item.id, item.board_type)}
              aria-hidden="true"
            >
              <div className="grow">
                <span>{item.title}</span>
              </div>
              <div className="w-[150px] text-center">
                <span>{item.created_at}</span>
              </div>
            </div>
          ))}
        </div>
      );
    case 1:
      return (
        <div className="w-full">
          {commentListData.total_count === 0 && (
            <p className="text-center">작성한 댓글이 없습니다.</p>
          )}
          {commentListData.results.map((item: TProfileCommentList) => (
            <div
              className="flex cursor-pointer gap-x-3 border-b border-mk-darkgrey py-3"
              key={item.id}
              onClick={() => handleMovePostDetail(item.id, item.post_title)}
              aria-hidden="true"
            >
              <div className="grow">
                <span>{item.content}</span>
              </div>
              <div className="w-[150px] text-center">
                <span>{item.created_at}</span>
              </div>
            </div>
          ))}
        </div>
      );
    case 2:
      return (
        <div className="w-full">
          {LikeListData.total_count === 0 && (
            <p className="text-center">좋아요를 누른 게시물이 없습니다.</p>
          )}
          {LikeListData.results.map((item: TProfilePostList) => (
            <div
              className="flex cursor-pointer gap-x-3 border-b border-mk-darkgrey py-3"
              key={item.id}
              onClick={() => handleMovePostDetail(item.id, item.board_type)}
              aria-hidden="true"
            >
              <div className="grow">
                <span>{item.title}</span>
              </div>
              <div className="w-[150px] text-center">
                <span>{item.created_at}</span>
              </div>
            </div>
          ))}
        </div>
      );
  }
}
