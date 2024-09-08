import { TBoardComment } from '@/types/community';
import { useState } from 'react';
import CommentInput from './CommentInput';
import { useUserInfo } from '@/hooks/queries/user';

import { useQueryClient } from '@tanstack/react-query';
import { useDeleteBoardComment } from '@/hooks/queries/board';

const CommunityReply = ({
  data,
  parent_author,
  boardType,
  postId,
}: {
  data: TBoardComment;
  parent_author: string;
  boardType: string;
  postId: number;
}) => {
  const queryClient = useQueryClient();
  const { mutate: deleteCommentMutation } = useDeleteBoardComment();
  const [isEdit, setEdit] = useState(false);
  const { data: userData } = useUserInfo();

  const handleCommentEdit = () => {
    return setEdit(!isEdit);
  };

  const handleCommentDelete = () => {
    const payload = {
      postId: postId,
      commentId: data.id,
    };
    console.log(payload);
    deleteCommentMutation(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [`${boardType}boardDetail`, postId],
        });
      },
    });
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

          {data.author_username === userData?.username && (
            <button
              className="cursor-pointer"
              onClick={() => handleCommentDelete()}
            >
              삭제
            </button>
          )}
          {/* <span className="text-mk-newgrey">삭제</span> */}
          {/* <span className="text-mk-newgrey">신고</span> */}
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
