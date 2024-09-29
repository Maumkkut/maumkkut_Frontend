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
import { useUserInfo } from '@/hooks/queries/user';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { testDelete, testList } from '@/api/travelTasteTest';

interface TestResult {
  id: number;
  created_at: string;
  character_type: string;
}

const TestHistoryPage = () => {
  const [loading, setLoading] = useState(true);
  const [testResults, setTestResults] = useState<TestResult[]>([]);
  const { data: userInfo } = useUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const data = await testList();
        if (!data.result || data.result.length === 0) {
          Swal.fire({
            icon: 'info',
            title: '테스트 결과가 없습니다',
            text: '여행 취향 테스트를 먼저 진행해주세요.',
            confirmButtonText: '확인',
          }).then(() => {
            // 부모 페이지로 이동 (이전 페이지로 이동)
            navigate('../test/');
          });
        } else {
          setTestResults(data.result);
        }
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
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a better loading indicator
  }

  const handleDelete = (id: number) => {
    setTestResults((prevResults) =>
      prevResults.filter((result) => result.id !== id),
    );
  };

  return (
    <ContentLayout>
      <div className="mt-[100px]">
        <h2 className="ms-[122px] text-[40px]">
          <strong>{userInfo?.name}</strong>님의 여행 유형 결과 이력
        </h2>
        <HistoryList
          testResults={testResults}
          onDelete={handleDelete}
        />
      </div>
    </ContentLayout>
  );
};

const HistoryList = ({
  testResults,
  onDelete,
}: {
  testResults: TestResult[];
  onDelete: (id: number) => void;
}) => {
  return (
    <div className="mt-[110px]">
      {testResults.map((result, index) => (
        <HistoryCard
          key={result.id}
          id={result.id}
          index={index}
          date={result.created_at.split('T')[0]}
          type={result.character_type}
          onDelete={onDelete}
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
  onDelete,
}: {
  id: number;
  index: number;
  date: string;
  type: string;
  onDelete: (id: number) => void;
}) => {
  const deleteDetail = async (id: number) => {
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          console.log(`${id}번째 삭제하는 로직 필요함`);
          const response = await testDelete(id);
          onDelete(id); // 상태에서 해당 결과 제거
          Swal.fire({
            icon: 'success',
            title: '삭제 완료',
            text: response.message,
          });
        } catch (error) {
          const errorMessage =
            (error as { message?: string }).message ||
            '알 수 없는 오류가 발생했습니다.';
          Swal.fire({
            icon: 'error',
            title: '삭제 실패',
            text: errorMessage,
          });
        }
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
