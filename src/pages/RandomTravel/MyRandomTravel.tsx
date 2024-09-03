import ContentLayout from '@/layout/ContentLayout';
import { Link } from 'react-router-dom';
const MyRandomTravel = () => {
  return (
    <ContentLayout>
      <CreateOrMy />
      <div></div>
    </ContentLayout>
  );
};

const CreateOrMy = () => {
  return (
    <div className="mx-auto flex w-[410px] justify-between text-center text-[16px] font-bold text-mk-darkgray">
      <div className="h-[30px]">
        <Link to="..">
          <button>랜덤 여행지 만들기</button>
        </Link>
      </div>
      <div className="h-[30px] border-b-2 border-mk-logo2">
        <Link to="">
          <button>나의 랜덤 여행지</button>
        </Link>
      </div>
    </div>
  );
};

export default MyRandomTravel;
