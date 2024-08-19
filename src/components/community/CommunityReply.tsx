import { TBoardComment } from '@/types/community';

const CommunityReply = ({
  data,
  parent_author,
}: {
  data: TBoardComment;
  parent_author: string;
}) => {
  return (
    <div className="flex gap-x-8">
      <span className="material-symbols-outlined text-mk-logo3">
        subdirectory_arrow_right
      </span>

      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-3">
          <span className="font-bold">{data.author_username}</span>
          <span className="text-mk-newgrey">신고</span>
        </div>
        <div className="flex gap-x-2">
          <span className="font-bold text-mk-logo3">{parent_author}</span>
          <span>{data.content}</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityReply;
