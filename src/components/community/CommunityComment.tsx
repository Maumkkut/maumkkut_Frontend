import { TBoardComment } from '@/types/community';
import { useState } from 'react';

import CommentInput from '@components/community/CommentInput';
import CommunityReply from '@components/community/CommunityReply';
import { useDeleteBoardComment } from '@/hooks/queries/board';
import { useQueryClient } from '@tanstack/react-query';
import { useUserInfo } from '@/hooks/queries/user';

const CommunityComment = ({
  data,
  boardType,
  postId,
}: {
  data: TBoardComment;
  boardType: string;
  postId: number;
}) => {
  const [isEdit, setEdit] = useState(false);
  const [isOpenReply, setOpenReply] = useState(false);
  const queryClient = useQueryClient();
  const { mutate: deleteCommentMutation } = useDeleteBoardComment();
  const { data: userData } = useUserInfo();
  const isAuthenticated = sessionStorage.getItem('token');

  const handleCommentEdit = () => {
    return setEdit(!isEdit);
  };

  const handleOpenReply = () => {
    return setOpenReply(!isOpenReply);
  };

  const handleCommentDelete = () => {
    const payload = {
      postId: postId,
      commentId: data.id,
    };
    deleteCommentMutation(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [`${boardType}boardDetail`, postId],
        });
      },
    });
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
            previousContent={data.content}
          />
        ) : (
          <p>{data.content}</p>
        )}
        <div className="flex items-center gap-x-3 text-mk-newgrey">
          {data.author_username === userData?.username && (
            <button
              className="cursor-pointer"
              onClick={() => handleCommentEdit()}
              aria-hidden="true"
            >
              수정
            </button>
          )}
          {data.author_username === userData?.username && (
            <button
              className="cursor-pointer"
              onClick={() => handleCommentDelete()}
            >
              삭제
            </button>
          )}
          {/* <span className="cursor-pointer">신고</span> */}

          {isAuthenticated && (
            <button
              className="cursor-pointer text-mk-logo3"
              onClick={() => handleOpenReply()}
            >
              답글 달기
            </button>
          )}
        </div>
      </div>
      {isOpenReply && (
        <div className="flex items-center gap-x-8">
          <span className="material-symbols-outlined text-mk-logo3">
            subdirectory_arrow_right
          </span>

          <div className="flex flex-col gap-y-3">
            <CommentInput
              commentType={'reply'}
              commentId={data.id}
              handler={setOpenReply}
            />
          </div>
        </div>
      )}
      {data.replies.length !== 0 &&
        data.replies.map((item) => (
          <CommunityReply
            key={item.id}
            data={item}
            parent_author={data.author_username}
            boardType={boardType}
            postId={postId}
          />
        ))}
    </div>
  );
};

export default CommunityComment;
