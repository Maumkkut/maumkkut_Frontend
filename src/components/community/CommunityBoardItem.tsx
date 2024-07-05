import { communityBoarditem } from '@/types/community';

const CommunityBoardItem = ({ data }: { data: communityBoarditem }) => {
  console.log(data.author);
  return (
    <div className="border-mk-darkgray flex h-[50px] items-center border-b-[1px]">
      {/* article num */}
      <div className="w-[150px] text-center">
        <span className="text-mk-darkgray text-xl">{data.id}</span>
      </div>
      {/* article title */}
      <div className="w-[500px] text-center">
        <span className="text-mk-darkgray text-xl">{data.title}</span>
      </div>
      {/* article date */}
      <div className="w-[152px] text-center">
        <span className="text-mk-darkgray text-xl">{data.date}</span>
      </div>
      {/* article author */}
      <div className="w-[152px] text-center">
        <span className="text-mk-darkgray text-xl">{data.author}</span>
      </div>
    </div>
  );
};

export default CommunityBoardItem;
