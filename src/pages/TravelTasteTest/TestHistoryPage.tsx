import { useEffect, useState } from 'react';
import ContentLayout from '@/layout/ContentLayout';
import resultDefault from '@/assets/images/TravelTasteTest/resultDefault.png';
import 관람형_곤드레 from '@/assets/images/TravelTasteTest/관람형 곤드레.png';
import 나무늘보형_순두부 from '@/assets/images/TravelTasteTest/나무늘보형 순두부.png';
import 도전형_인삼 from '@/assets/images/TravelTasteTest/도전형 인삼.png';
import 미식가형_송이 from '@/assets/images/TravelTasteTest/미식가형 송이.png';
import 사람좋아_쌀알 from '@/assets/images/TravelTasteTest/사람좋아 쌀알.png';
import 액티비티형_옥수수 from '@/assets/images/TravelTasteTest/액티비티형 옥수수.png';
import 인플루언서형_복숭아 from '@/assets/images/TravelTasteTest/인플루언서형 복숭아.png';
import 힐링형_감자 from '@/assets/images/TravelTasteTest/힐링형 감자.png';
import useTTTStore from '@/store/useTTTStore';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { testList } from '@/api/travelTasteTest';

const TestHistoryPage = () => {
  const [loading, setLoading] = useState(true);
  const { setTestResults } = useTTTStore();
  const name: string = '호준';

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const data = await testList();
        console.log(data);
        setTestResults(data.result);
      } catch (error) {
        console.error('Failed to fetch test results:', error);
        Swal.fire({
          icon: 'error',
          title: '오류가 발생했습니다.',
          text: '데이터를 불러오지 못했습니다. 다시 시도해주세요.',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTestResults();
  }, [setTestResults]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a better loading indicator
  }

  return (
    <ContentLayout>
      <div className="mt-[100px]">
        <h2 className="ms-[122px] text-[40px]">
          <strong>{name}</strong>님의 여행 유형 결과 이력
        </h2>
        <HistoryList />
      </div>
    </ContentLayout>
  );
};

const HistoryList = () => {
  const { testResults } = useTTTStore();
  return (
    <div className="mt-[110px]">
      {testResults.map((result, index) => (
        <HistoryCard
          key={result.id}
          id={result.id}
          index={index}
          date={result.created_at}
          type={result.character_type}
        />
      ))}
    </div>
  );
};

const HistoryCard = ({
  id,
  index,
  date,
  type,
  // description,
}: {
  id: number;
  index: number;
  date: string;
  type: string;
  // description: string;
}) => {
  const deleteDetail = (idx: number) => {
    Swal.fire({
      icon: 'question',
      title: '여행 유형 삭제',
      text: '정말로 삭제하시겠습니까?',
      confirmButtonText: '예',
      cancelButtonText: '아니요',
      confirmButtonColor: '#429f50',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`${idx}번째 삭제하는 로직 필요함`);
        // 여기에서 삭제 로직을 추가해야함
      }
    });
  };

  // 타입에 맞는 이미지 고르기
  const getImageSrc = (type: string) => {
    switch (type) {
      case '관람형 곤드레':
        return 관람형_곤드레;
      case '나무늘보형 순두부':
        return 나무늘보형_순두부;
      case '도전형 인삼':
        return 도전형_인삼;
      case '미식가형 송이':
        return 미식가형_송이;
      case '사람좋아 쌀알':
        return 사람좋아_쌀알;
      case '액티비티형 옥수수':
        return 액티비티형_옥수수;
      case '인플루언서형 복숭아':
        return 인플루언서형_복숭아;
      case '힐링형 감자':
        return 힐링형_감자;
      default:
        return resultDefault;
    }
  };
  const navigate = useNavigate();

  const goToDetailPage = (id: number) => {
    navigate(`${id}`, { state: { id } });
  };

  return (
    <div className="mx-auto mb-[30px] h-[259px] w-[1237px] border border-white border-b-mk-logo3">
      <div className="mx-auto mt-[55px] flex h-[150px] w-[1118px] items-center justify-between">
        <div className="relative">
          <div className="top-[5px] my-auto h-[30px] w-[30px] rounded-full bg-mk-tag1"></div>
          <span className="absolute left-[0px] top-[-12px] text-[25px] text-[#6E6E6E]">
            {index + 1}
          </span>
        </div>
        <div className="h-[150px] w-[150px]">
          <img
            className="h-full w-full"
            src={getImageSrc(type)}
            alt={type}
          />
        </div>
        <div className="h-[82px] w-[473px]">
          <p className="mb-[28px] text-[20px]">{date}</p>
          <p className="text-[25px] font-bold">{type}</p>
        </div>
        <div className="w-[250px] flex-col justify-between">
          <div className="mb-[20px] h-[60px] w-full">
            <button
              className="h-full w-full rounded-[10px] bg-mk-logo3 text-[23px] text-white"
              onClick={() => goToDetailPage(id)}
            >
              자세히 보기
            </button>
          </div>
          <div className="h-[60px] w-full">
            <button
              className="h-full w-full rounded-[10px] border border-mk-logo3 text-[23px] text-[#6E6E6E]"
              onClick={() => deleteDetail(id)} //나중에 0대신 유형 index들어가야함
            >
              유형 삭제하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestHistoryPage;
