import { useForm } from 'react-hook-form';
// import { ErrorMessage } from '@hookform/error-message';
import { usePostBoard } from '@/hooks/queries/board';
import { useQueryClient } from '@tanstack/react-query';
import { userInfoQueryHelper } from '@/hooks/queries/user';
import { useNavigate } from 'react-router-dom';

interface PostType {
  title: string;
  content: string;
  board_type: string;
}

const CommunityPost = () => {
  const {
    register,
    handleSubmit,
    // resetField,
  } = useForm<PostType>();

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync } = usePostBoard();

  const communityPostSubmit = async (formValues: PostType) => {
    const userData = queryClient.getQueryData(userInfoQueryHelper().queryKey);

    if (!userData) {
      return;
    }
    const payload = {
      title: formValues.title,
      content: formValues.content,
      author: userData.pk,
      board_type: formValues.board_type,
    };

    mutateAsync(payload, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [`${formValues.board_type}board`],
        });
        navigate(`/community/${formValues.board_type}/1`);
      },
    });
  };

  const titleRegister = register('title', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  const contentRegister = register('content', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });
  const boardTypeRegister = register('board_type', {
    required: {
      value: true,
      message: '해당 칸이 빈칸입니다.',
    },
  });

  return (
    <div className="my-16 flex flex-col items-center gap-y-14">
      {/* 제목 */}
      <div className="flex justify-center">
        <h2 className="p-2 text-2xl font-bold text-mk-logo4">게시글 작성</h2>
      </div>

      {/* 작성 폼 */}
      <form
        className="flex w-[1200px] flex-col gap-y-3"
        onSubmit={handleSubmit(communityPostSubmit)}
      >
        <div>
          <select
            id="boardType"
            className="h-14 border-2 border-mk-darkgray px-5"
            {...boardTypeRegister}
          >
            <option value="free">자유게시판</option>
            <option value="travel">여행후기 게시판</option>
            <option value="notice">공지사항</option>
          </select>
        </div>
        <div>
          <input
            className="h-14 w-full border-2 border-mk-darkgray px-5 text-xl font-normal"
            placeholder="제목"
            {...titleRegister}
          />
        </div>

        <div>
          <textarea
            className="h-[600px] w-full resize-none border-2 border-mk-darkgray px-5 py-4 text-xl font-normal"
            placeholder="내용 작성하는 공간"
            {...contentRegister}
          />
        </div>
        <div className="flex w-full justify-center">
          <button className="mt-14 h-[60px] w-[180px] bg-mk-logo0 text-mk-logo3">
            작성
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommunityPost;
