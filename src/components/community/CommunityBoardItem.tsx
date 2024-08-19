import { BoardItemInterface } from '@/types/community';
import { useNavigate } from 'react-router-dom';

const CommunityBoardItem = ({ data }: { data: BoardItemInterface }) => {
  const navigate = useNavigate();
  const date = new Date(data.created_at);

  const handleContent = () => {
    return navigate(`/community/${data.board_type}/detail/${data.id}/`);
  };

  return (
    <div
      className="flex h-[50px] cursor-pointer items-center border-b-[1px] border-mk-darkgray"
      onClick={() => handleContent()}
      aria-hidden="true"
    >
      {/* article num */}
      <div className="w-[150px] text-center">
        <span className="text-xl text-mk-darkgray">{data.id}</span>
      </div>
      {/* article title */}
      <div className="w-[500px] text-center">
        <span className="text-xl text-mk-darkgray">{data.title}</span>
      </div>
      {/* article date */}
      <div className="w-[152px] text-center">
        <span className="text-xl text-mk-darkgray">
          {date.toISOString().split('T')[0]}
        </span>
      </div>
      {/* article author */}
      <div className="w-[152px] text-center">
        <span className="text-xl text-mk-darkgray">{data.author_username}</span>
      </div>
    </div>
  );
};

export default CommunityBoardItem;
