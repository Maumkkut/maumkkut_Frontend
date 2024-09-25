import { useFetchProfileFeedCounts } from '@/hooks/queries/profile';
import { useUserInfo } from '@/hooks/queries/user';
interface RightSidePageProps {
  currentCateory?: number;
  handleCategory: (category: number) => void;
}

export default function ProfileHome({ handleCategory }: RightSidePageProps) {
  const { data } = useFetchProfileFeedCounts();
  const { data: userInfo } = useUserInfo();
  return (
    <div className="flex flex-col items-center gap-y-2 text-xl text-mk-darkgray">
      <p>
        <span>{userInfo?.name}</span>
      </p>
      {/* 활동 정보 */}
      <div className="flex w-[500px] justify-between border-b border-mk-darkgray px-5 py-10 text-sm">
        <div className="flex flex-col items-center">
          <span>작성글수</span>
          <span>{data?.post_count}</span>
        </div>
        <div className="flex flex-col items-center">
          <span>작성 댓글 수</span>
          <span>{data?.comment_count}</span>
        </div>
        <div className="flex flex-col items-center">
          <span>받은 좋아요 수</span>
          <span>{data?.total_likes}</span>
        </div>
      </div>

      {/* 회원 정보 */}
      <div className="flex w-[500px] flex-col gap-y-10 border-b-2 border-mk-logo4 px-7 py-10">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">회원정보</h2>
          <button
            className="font-bold text-mk-logo3"
            onClick={() => handleCategory(3)}
          >
            정보 수정
          </button>
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col">
            <span className="font-bold">이메일</span>
            <span>{userInfo?.email}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">휴대전화</span>
            <span>{userInfo?.phone_number}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold">주소</span>
            <span>{userInfo?.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
