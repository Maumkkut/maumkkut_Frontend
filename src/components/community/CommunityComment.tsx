import { TBoardComment } from '@/types/community';
import { useState } from 'react';

import CommentInput from '@components/community/CommentInput';
import CommunityReply from '@components/community/CommunityReply';

const CommunityComment = ({ data }: { data: TBoardComment }) => {
  const [isEdit, setEdit] = useState(false);

  const handleCommentEdit = () => {
    return setEdit(!isEdit);
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-3">
        <p className="font-bold">{data.author_username}</p>
        {isEdit ? (
          <CommentInput
            commentType="commentEdit"
            commentId={data.id}
            handler={handleCommentEdit}
          />
        ) : (
          <p>{data.content}</p>
        )}
        <div className="flex items-center gap-x-3 text-mk-newgrey">
          <span
            className="cursor-pointer"
            onClick={() => handleCommentEdit()}
            aria-hidden="true"
          >
            수정
          </span>
          <span className="cursor-pointer">신고</span>
          <span className="cursor-pointer">답글 달기</span>
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
