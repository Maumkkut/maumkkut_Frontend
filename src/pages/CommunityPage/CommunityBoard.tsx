import CommunityBoardItem from '@components/community/CommunityBoardItem';
import { communityBoarditem } from '@/types/community';
import { useNavigate } from 'react-router-dom';

const CommunityBoard = () => {
  const dummyData: communityBoarditem = {
    id: 1,
    title: '[여행 후기 게시글] 게시판 이용 안내(2024.05.02 업데이트)',
    date: 20240613,
    author: 'faker',
  };

  const navigate = useNavigate();

  const handlePostBtn = () => {
    navigate('/community/post');
  };

  return (
    <div className="flex flex-col items-center gap-y-14">
      {/* set article filtering */}
      <div className="flex w-[270px] justify-between pt-14">
        <button
          className="h-[50px] w-[120px] rounded-md border-2 border-mk-newgrey"
          type="button"
        >
          최신순 ✨
        </button>
        <button
          className="h-[50px] w-[120px] rounded-md border-2 border-mk-newgrey"
          type="button"
        >
          인기순 🔥
        </button>
      </div>

      {/* board */}
      <div className="w-[1000px]">
        {/* board info */}
        <div className="flex items-center justify-between">
          <div>
            <span>
              총 <span className="font-bold text-mk-logo3">510</span>개 글
            </span>
          </div>
          <div className="flex items-center gap-x-5">
            {/* dropdown */}
            <div className="flex h-[50px] w-[150px] items-center justify-center border-[1px] border-mk-newgrey">
              <span>전체 기간</span>
            </div>
            <div className="flex h-[50px] w-[150px] items-center justify-center border-[1px] border-mk-newgrey">
              <span>제목 + 내용</span>
            </div>

            {/* ect btn */}
            <input className="h-[50px] w-[200px] rounded-md border-[1px] border-mk-newgrey"></input>
            <button
              className="h-10 w-[70px] rounded-md bg-mk-logo3"
              type="button"
            >
              <span className="text-white">검색</span>
            </button>
            <button
              className="border-mk-darkgray h-10 w-[90px] rounded-md border-[1px]"
              type="button"
              onClick={() => handlePostBtn()}
            >
              <span className="text-mk-darkgray">글쓰기</span>
            </button>
          </div>
        </div>
        {/* board table */}
        <div className="mt-10 flex flex-col">
          {/* board title Line */}
          <div className="flex h-[50px] items-center border-b-2 border-t-2 border-black">
            {/* article num */}
            <div className="w-[150px] text-center">
              <span className="text-xl font-semibold">번호</span>
            </div>
            {/* article title */}
            <div className="w-[500px] text-center">
              <span className="text-xl font-semibold">제목</span>
            </div>
            {/* article date */}
            <div className="w-[152px] text-center">
              <span className="text-xl font-semibold">날짜</span>
            </div>
            {/* article author */}
            <div className="w-[152px] text-center">
              <span className="text-xl font-semibold">작성자</span>
            </div>
          </div>
          {/* board item */}
          <CommunityBoardItem data={dummyData} />
        </div>
      </div>
    </div>
  );
};

export default CommunityBoard;
