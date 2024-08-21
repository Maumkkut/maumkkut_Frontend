import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { TcommentPayload } from '@/types/community';
import {
  usePostBoardComment,
  useUpdateBoardComment,
} from '@/hooks/queries/board';

type ParamsType = {
  page: string;
};

type TComment = 'comment' | 'commentEdit' | 'reply' | 'replyEdit';

interface ICommentInput {
  commentType: TComment;
  commentId?: number;
  handler?: (flag: boolean) => void;
}

const CommentInput = ({ commentType, commentId, handler }: ICommentInput) => {
  const queryClient = useQueryClient();
  const { page: postId } = useParams() as ParamsType;
  const { register, handleSubmit, resetField } = useForm<TcommentPayload>();
  const { mutateAsync: commentMutate } = usePostBoardComment();
  const { mutateAsync: commentEditMutate } = useUpdateBoardComment();

  const commentSubmit = (formValues: TcommentPayload) => {
    const payload = {
      content: { content: formValues.content },
      postId: postId,
      commentId: commentId,
    };

    switch (commentType) {
      case 'comment':
        commentMutate(payload);
        break;
      case 'commentEdit':
        if (handler) {
          commentEditMutate(payload);
          handler(false);
        }
        break;
      case 'reply':
        break;
      case 'replyEdit':
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

  return (
    <form
      className="flex h-14 w-full"
      onSubmit={handleSubmit(commentSubmit)}
    >
      <textarea
        id=""
        className="grow resize-none border-[1px] px-4 py-1"
        {...commentRegister}
      ></textarea>
      <button className="w-[100px] bg-mk-logo2 text-white">작성</button>
    </form>
  );
};

export default CommentInput;
