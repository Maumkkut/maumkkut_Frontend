import { TBoardComment } from '@/types/community';

import CommunityReply from '@components/community/CommunityReply';

const CommunityComment = ({ data }: { data: TBoardComment }) => {
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-3">
        <p className="font-bold">{data.author_username}</p>
        <p>{data.content}</p>
        <div className="flex items-center gap-x-3 text-mk-newgrey">
          <span>신고</span>
          <span>답글 달기</span>
        </div>
      </div>
      {data.replies.length !== 0 &&
        data.replies.map((item) => (
          <CommunityReply
            key={item.id}
            data={item}
            parent_author={data.author_username}
          />
        ))}
    </div>
  );
};

export default CommunityComment;
