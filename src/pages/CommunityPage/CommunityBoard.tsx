import CommunityBoardItem from '@components/community/CommunityBoardItem';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useFetchBoardSearch } from '@/hooks/queries/board';
import { BoardItemInterface, FetchBoardInterface } from '@/types/community';
import Pagination from '@/components/Pagination';
import NoContents from '@pages/NoContents';
import { SEARCH_PERIOD, SEARCH_TYPE } from '@/constants/boardType';
import React, { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

const CommunityBoard = () => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const pathSegments = location.pathname.split('/');
  const page = searchParams.get('page') || '1';
  const days = searchParams.get('days') || null;
  const search_type = searchParams.get('search_type') || null;
  const content = searchParams.get('content') || null;

  const { data: boardData, isSuccess } = useFetchBoardSearch(
    pathSegments[2],
    page,
    days,
    search_type,
    content,
  );

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: [`${pathSegments[2]}board`, page],
    });
  }, [page, days, search_type, content, pathSegments, queryClient]);

  if (!boardData) {
    return (
      <div className="mb-40 flex flex-col items-center gap-y-7">
        <CommunityToolbar data={boardData} />
        <NoContents />
      </div>
    );
  }

  if (isSuccess && boardData?.total_count === 0) {
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
            boardData?.results.map((data: BoardItemInterface) => (
              <CommunityBoardItem
                key={data.id}
                data={data}
              />
            ))}
        </div>
      </div>
      <div>
        <Pagination
          currentPage={page}
          totalContents={boardData?.total_count}
          boardType={pathSegments[2]}
        />
      </div>
    </div>
  );
};

const CommunityToolbar = ({ data }: { data: FetchBoardInterface }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isSearchPeriodOpen, setSearchPeriodOpen] = useState(false);
  const [isSearchTypeOpen, setSearchTypeOpen] = useState(false);
  const [searchPeriod, setSearchPeriod] = useState('전체 기간');
  const [searchType, setSearchType] = useState('제목');
  const [searchContent, setSearchContent] = useState('');

  const handleSearchBtn = () => {
    searchParams.set('days', SEARCH_PERIOD[searchPeriod]);
    searchParams.set('search_type', SEARCH_TYPE[searchType]);
    searchParams.set('content', searchContent);

    setSearchParams(searchParams);
  };

  const handlePostBtn = () => {
    navigate('/community/post');
  };

  const handlePeriodDrop = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLButtonElement>,
  ) => {
    if (e.type === 'blur') {
      return setSearchPeriodOpen(false);
    }
    setSearchPeriodOpen(!isSearchPeriodOpen);
  };
  const handleTypeDrop = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLButtonElement>,
  ) => {
    if (e.type === 'blur') {
      return setSearchTypeOpen(false);
    }
    setSearchTypeOpen(!isSearchTypeOpen);
  };

  const handleContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchContent(event.target.value);
  };
  const handlePeriod = (period: string) => {
    setSearchPeriod(period);
    setSearchPeriodOpen(false);
  };

  const handleType = (type: string) => {
    setSearchType(type);
    setSearchTypeOpen(false);
  };

  return (
    <div>
      <div className="flex w-full justify-center gap-x-7 py-14">
        {/* <button
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
        </button> */}
      </div>
      <div className="w-[1000px]">
        <div className="flex items-center justify-between">
          <div>
            <span>
              총{' '}
              <span className="font-bold text-mk-logo3">
                {data ? data.total_count : '0'}
              </span>
              개 글
            </span>
          </div>
          <div className="relative flex items-center gap-x-5">
            {/* dropdown */}
            {/* 기간 옵션 */}
            <button
              className="flex h-[50px] w-[150px] items-center justify-center border-[1px] border-mk-newgrey"
              onClick={(e) => handlePeriodDrop(e)}
              onBlur={(e) => handlePeriodDrop(e)}
            >
              <span className="grow pl-4 text-center">{searchPeriod}</span>

              <span className="material-symbols-outlined cursor-pointer px-2">
                {isSearchPeriodOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
              </span>
              {isSearchPeriodOpen && (
                <div className="absolute top-[50px]">
                  {Object.keys(SEARCH_PERIOD).map((key) => {
                    return (
                      <div
                        className="flex h-[50px] w-[150px] cursor-pointer items-center justify-center border-[1px] border-mk-newgrey bg-white"
                        key={key}
                        onClick={() => handlePeriod(key)}
                        aria-hidden="true"
                      >
                        <span>{key}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </button>
            {/* 검색 옵션 */}
            <button
              className="flex h-[50px] w-[150px] items-center justify-center border-[1px] border-mk-newgrey"
              onClick={(e) => handleTypeDrop(e)}
              onBlur={(e) => handleTypeDrop(e)}
            >
              <span className="grow pl-4 text-center">{searchType}</span>
              <span className="material-symbols-outlined cursor-pointer px-2">
                {isSearchTypeOpen ? 'arrow_drop_up' : 'arrow_drop_down'}
              </span>
              {isSearchTypeOpen && (
                <div className="absolute top-[50px]">
                  {Object.keys(SEARCH_TYPE).map((key) => {
                    return (
                      <div
                        className="flex h-[50px] w-[150px] cursor-pointer items-center justify-center border-[1px] border-mk-newgrey bg-white"
                        key={key}
                        onClick={() => handleType(key)}
                        aria-hidden="true"
                      >
                        <span>{key}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </button>

            {/* ect btn */}
            <input
              className="h-[50px] w-[200px] rounded-md border-[1px] border-mk-newgrey px-3"
              onChange={(event) => handleContent(event)}
            ></input>
            <button
              className="h-10 w-[70px] rounded-md bg-mk-logo3"
              type="button"
              onClick={() => handleSearchBtn()}
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
