import ContentLayout from '@/layout/ContentLayout';
import useRTStore from '@/store/useRTStore';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { testList } from '@/api/travelTasteTest';

const CreateRandomTravel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const data = await testList();
        if (!data.result || data.result.length === 0) {
          Swal.fire({
            icon: 'info',
            title: '여행 취향 테스트 결과가 없습니다',
            text: '랜덤 여행지 추천은 여행 취향 테스트 완료 후 진행할 수 있습니다.',
            confirmButtonText: '확인',
          }).then(() => {
            // 여행취향테스트
            navigate('../../TravelTasteTest/');
          });
        }
      } catch (error) {
        console.error('Failed to fetch test results:', error);
        Swal.fire({
          icon: 'error',
          title: '오류가 발생했습니다.',
          text: '데이터를 불러오지 못했습니다. 다시 시도해주세요.',
        });
      }
    };

    fetchTestResults();
  }, [navigate]);

  return (
    <ContentLayout>
      <CreateOrMy />
      <SelectStart />
      <StartPositions />
      <ShowResult />
    </ContentLayout>
  );
};

const CreateOrMy = () => {
  return (
    <div className="mx-auto mb-[80px] flex w-[410px] justify-between text-center text-[16px] font-bold text-mk-darkgray">
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

const SelectStart = () => {
  return (
    <>
      <div className="mx-auto my-[80px] text-center">
        <div className="mx-auto flex w-[1060px] items-center justify-between text-[30px] font-bold text-mk-logo3">
          <hr className="w-[30%] border-t border-black" />
          <span className="whitespace-nowrap">
            여행 시작 장소를 선택해주세요
          </span>
          <hr className="w-[30%] border-t border-black" />
        </div>
      </div>
      <div></div>
    </>
  );
};

const StartPositions = () => {
  const { startPos, index, setIndex } = useRTStore();

  useEffect(() => {
    setIndex(-1);
  }, [setIndex]);

  interface Position {
    name: string;
    id: number;
  }

  const handleCardClick = (id: number) => {
    setIndex(id);
  };

  return (
    <div className="mx-auto grid w-[1000px] grid-cols-6 gap-4">
      {startPos.map((pos: Position, idx: number) => (
        <StartPositionCard
          key={pos.id}
          name={pos.name}
          isSelected={idx === index}
          onClick={() => handleCardClick(idx)}
        />
      ))}
    </div>
  );
};

const StartPositionCard = ({
  name,
  isSelected,
  onClick,
}: {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-[50px] w-[120px] rounded-[4px] border-[2px] text-[20px] font-semibold ${
        isSelected
          ? 'border-mk-logo4 bg-mk-logo3 text-white'
          : 'border-mk-logo3 text-mk-logo4'
      }`}
    >
      {name}
    </button>
  );
};

const ShowResult = () => {
  const { index, startPos } = useRTStore();
  const navigate = useNavigate();
  const handleClick = () => {
    if (index === -1) {
      Swal.fire({
        icon: 'error',
        title: '여행 시작 장소 미선택',
        text: '여행 시작 장소를 먼저 선택해주세요!',
      });
    } else {
      const region = startPos[index].name;
      console.log(region);
      navigate('result', { state: { region } });
    }
  };

  return (
    <div className="my-[50px] flex justify-center">
      <button
        className="h-[66px] w-[530px] rounded-[6px] bg-mk-logo3 text-[22px] font-semibold text-white"
        onClick={handleClick}
      >
        랜덤 여행 코스 결과 보기
      </button>
    </div>
  );
};

export default CreateRandomTravel;
