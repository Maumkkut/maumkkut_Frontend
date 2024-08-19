import CommunityBoardItem from '@components/community/CommunityBoardItem';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useFetchBoard } from '@/hooks/queries/board';
import { BoardItemInterface, FetchBoardInterface } from '@/types/community';
import Pagination from '@/components/Pagination';
import NoContents from '@pages/NoContents';

const CommunityBoard = () => {
  // const dummyData: communityBoarditem = {
  //   id: 1,
  //   title: '[여행 후기 게시글] 게시판 이용 안내(2024.05.02 업데이트)',
  //   date: 20240613,
  //   author: 'faker',
  // };
  const location = useLocation();
  const { page } = useParams();

  const currentPage = page ?? '1';
  const pathSegments = location.pathname.split('/');

  const { data: boardData, isSuccess } = useFetchBoard(
    pathSegments[2],
    currentPage,
  );

  if (isSuccess && boardData.results.length === 0) {
    return (
      <div className="mb-40 flex flex-col items-center gap-y-7">
        <CommunityToolbar data={boardData} />
        <NoContents />
      </div>
    );
  }
  if (!boardData) {
    return (
      <div className="mb-40 flex flex-col items-center gap-y-7">
        <CommunityToolbar data={boardData} />
        <NoContents />
      </div>
    );
  }

  return (
    <div className="mb-40 flex flex-col items-center gap-y-7">
      <CommunityToolbar data={boardData} />
      {/* board */}
      <div className="w-[1000px]">
        {/* board table */}
        <div className="flex flex-col">
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
          {isSuccess &&
            boardData.results.map((data: BoardItemInterface) => (
              <CommunityBoardItem
                key={data.id}
                data={data}
              />
            ))}
        </div>
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalContents={boardData?.total_count}
          boardType={pathSegments[2]}
        />
      </div>
    </div>
  );
};

const CommunityToolbar = ({ data }: { data: FetchBoardInterface }) => {
  const navigate = useNavigate();

  const handlePostBtn = () => {
    navigate('/community/post');
  };

  return (
    <div>
      <div className="flex w-full justify-center gap-x-7 py-14">
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
      <div className="w-[1000px]">
        <div className="flex items-center justify-between">
          <div>
            <span>
              총{' '}
              <span className="font-bold text-mk-logo3">
                {data?.total_count}
              </span>
              개 글
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
              className="h-10 w-[90px] rounded-md border-[1px] border-mk-darkgray"
              type="button"
              onClick={() => handlePostBtn()}
            >
              <span className="text-mk-darkgray">글쓰기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityBoard;
