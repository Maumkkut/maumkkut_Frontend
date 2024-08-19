import { useNavigate } from 'react-router-dom';
import { BoardPaginationInterface } from '@/types/community';

const Pagination = ({
  currentPage,
  totalContents,
  boardType,
}: BoardPaginationInterface) => {
  const navigate = useNavigate();
  const pageNumbers: Array<number> = [];
  const pagesToShow = 5;

  let startPage = Math.max(
    1,
    parseInt(currentPage) - Math.floor(pagesToShow / 2) - 1,
  );
  const endPage = Math.min(
    Math.ceil(totalContents / 10),
    startPage + pagesToShow - 1,
  );

  if (endPage - startPage + 1 < pagesToShow) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (totalContents <= 50) {
    const insertNum = Math.ceil(totalContents / 10);
    pageNumbers.splice(insertNum);
  }

  const handlePageChange = (number: number) => {
    if (number === 0) {
      return;
    }
    if (!pageNumbers.includes(number)) {
      return;
    }
    navigate(`/community/${boardType}/${number}`);
  };

  return (
    <div className="flex items-center gap-x-7">
      <button
        className="h-[50px] w-[50px]"
        onClick={() => handlePageChange(parseInt(currentPage) - 1)}
      >
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`h-[50px] w-[50px] ${parseInt(currentPage) === number ? 'text-mk-logo2' : ''} `}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="h-[50px] w-[50px]"
        onClick={() => handlePageChange(parseInt(currentPage) + 1)}
      >
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
};

export default Pagination;
