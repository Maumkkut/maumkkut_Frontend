import { BoardItemInterface } from '@/types/community';

const CommunityBoardItem = ({ data }: { data: BoardItemInterface }) => {
  const date = new Date(data.created_at);

  return (
    <div className="flex h-[50px] items-center border-b-[1px] border-mk-darkgray">
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
        <span className="text-xl text-mk-darkgray">{data.author}</span>
      </div>
    </div>
  );
};

export default CommunityBoardItem;
