import ContentLayout from '@/layout/ContentLayout';
// import car from '@/assets/images/RandomTravel/car.png';
// import bike from '@/assets/images/RandomTravel/bike.png';
// import walk from '@/assets/images/RandomTravel/walk.png';
import { Link } from 'react-router-dom';

const CreateRandomTravel = () => {
  return (
    <ContentLayout>
      <CreateOrMy />
      <PickVehicle />
    </ContentLayout>
  );
};

const CreateOrMy = () => {
  return (
    <div className="mx-auto flex w-[410px] justify-between text-center text-[16px] font-bold text-mk-darkgray">
      <div className="h-[30px] border-b-2 border-mk-logo2">
        <Link to="">
          <button>랜덤 여행지 만들기</button>
        </Link>
      </div>
      <div className="h-[30px]">
        <Link to="my">
          <button>나의 랜덤 여행지</button>
        </Link>
      </div>
    </div>
  );
};

const PickVehicle = () => {
  return (
    <>
      <div className="mx-auto my-[80px] text-center">
        <div className="mx-auto flex w-[1060px] items-center justify-between text-[30px] font-bold text-mk-logo3">
          <hr className="w-[30%] border-t border-black" />
          <span className="whitespace-nowrap">교통 수단을 선택해주세요</span>
          <hr className="w-[30%] border-t border-black" />
        </div>
      </div>
    </>
  );
};

// const VehicleButton = () => {
//   return (
//     <div>
//       <div>
//         <img
//           src={car}
//           alt="car"
//         />
//       </div>
//       <div>
//         <p>자동차</p>
//       </div>
//     </div>
//   );
// };

export default CreateRandomTravel;
