import { TBoardComment } from '@/types/community';
import { useState } from 'react';
import CommentInput from './CommentInput';

const CommunityReply = ({
  data,
  parent_author,
}: {
  data: TBoardComment;
  parent_author: string;
}) => {
  const [isEdit, setEdit] = useState(false);

  const handleCommentEdit = () => {
    return setEdit(!isEdit);
  };

  return (
    <div className="flex gap-x-8">
      <span className="material-symbols-outlined text-mk-logo3">
        subdirectory_arrow_right
      </span>

      <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-3">
          <span className="font-bold">{data.author_username}</span>
          <button
            className="text-mk-newgrey"
            onClick={() => handleCommentEdit()}
          >
            수정
          </button>
          <span className="text-mk-newgrey">삭제</span>
          <span className="text-mk-newgrey">신고</span>
        </div>
        {isEdit ? (
          <CommentInput
            commentType="replyEdit"
            commentId={data.id}
            handler={handleCommentEdit}
            previousContent={data.content}
          />
        ) : (
          <div className="flex gap-x-2">
            <span className="font-bold text-mk-logo3">{parent_author}</span>
            <p>{data.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityReply;
