import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { TcommentPayload } from '@/types/community';
import {
  usePostBoardComment,
  usePostBoardCommentReply,
  useUpdateBoardComment,
  useUpdateBoardCommentReply,
} from '@/hooks/queries/board';

type ParamsType = {
  page: string;
};

type TComment = 'comment' | 'commentEdit' | 'reply' | 'replyEdit';

interface ICommentInput {
  commentType: TComment;
  commentId?: number;
  previousContent?: string;
  handler?: (flag: boolean) => void;
}

const CommentInput = ({
  commentType,
  commentId,
  previousContent,
  handler,
}: ICommentInput) => {
  const queryClient = useQueryClient();
  const { page: postId } = useParams() as ParamsType;
  const { register, handleSubmit, resetField } = useForm<TcommentPayload>();
  const { mutateAsync: commentMutate } = usePostBoardComment();
  const { mutateAsync: commentEditMutate } = useUpdateBoardComment();
  const { mutateAsync: commentReplyMutate } = usePostBoardCommentReply();
  const { mutateAsync: commentReplyEditMutate } = useUpdateBoardCommentReply();
  const isAuthenticated = sessionStorage.getItem('token');

  const commentSubmit = (formValues: TcommentPayload) => {
    const payload = {
      content: { content: formValues.content },
      postId: postId,
      commentId: commentId,
    };

    switch (commentType) {
      case 'comment':
        console.log('Type comment');
        commentMutate(payload);
        break;
      case 'commentEdit':
        if (handler) {
          console.log('Type comment Edit');
          commentEditMutate(payload);
          handler(false);
        }
        break;
      case 'reply':
        if (handler) {
          console.log('Type replyComment');
          commentReplyMutate(payload);
          handler(false);
        }
        break;
      case 'replyEdit':
        if (handler) {
          console.log('Type replyComment Edit');
          commentReplyEditMutate(payload);
          handler(false);
        }
        break;
    }

    resetField('content');
    queryClient.invalidateQueries({
      queryKey: [`freeboardDetail`, parseInt(postId)],
    });
  };

  const commentRegister = register('content', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  if (!isAuthenticated || isAuthenticated === undefined) {
    return <></>;
  }
  return (
    <form
      className="flex h-14 w-full"
      onSubmit={handleSubmit(commentSubmit)}
    >
      <input
        id=""
        className="grow resize-none border-[1px] px-4 py-1"
        {...commentRegister}
        defaultValue={previousContent}
      ></input>
      <button className="w-[100px] bg-mk-logo2 text-white">작성</button>
    </form>
  );
};

export default CommentInput;
