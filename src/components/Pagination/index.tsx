import { useNavigate } from 'react-router-dom';
import { BoardPaginationInterface } from '@/types/community';

const Pagination = ({
  currentPage,
  totalPages,
  boardType,
}: BoardPaginationInterface) => {
  const navigate = useNavigate();
  const pageNumbers = [];
  const pagesToShow = 5;

  let startPage = Math.max(
    1,
    parseInt(currentPage) - Math.floor(pagesToShow / 2),
  );
  const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

  if (endPage - startPage + 1 < pagesToShow) {
    startPage = Math.max(1, endPage - pagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (totalPages <= 50) {
    pageNumbers.splice(0, pageNumbers.length, 1, Math.ceil(totalPages / 10));
  }

  const handlePageChange = (number: number) => {
    if (number === 0) {
      return;
    }
    if (pageNumbers.length < number) {
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
