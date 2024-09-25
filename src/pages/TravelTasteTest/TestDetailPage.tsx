import ContentLayout from '@/layout/ContentLayout';
import resultDefault from '@/assets/images/TravelTasteTest/resultDefault.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { testDetail } from '@/api/travelTasteTest';
import Swal from 'sweetalert2';
import { TravelPreference } from '@/types/travelTastTest';
import 관람형_곤드레 from '@/assets/images/TravelTasteTest/관람형 곤드레.png';
import 나무늘보형_순두부 from '@/assets/images/TravelTasteTest/나무늘보형 순두부.png';
import 도전형_인삼 from '@/assets/images/TravelTasteTest/도전형 인삼.png';
import 미식가형_송이 from '@/assets/images/TravelTasteTest/미식가형 송이.png';
import 사람좋아_쌀알 from '@/assets/images/TravelTasteTest/사람좋아 쌀알.png';
import 액티비티형_옥수수 from '@/assets/images/TravelTasteTest/액티비티형 옥수수.png';
import 인플루언서형_복숭아 from '@/assets/images/TravelTasteTest/인플루언서형 복숭아.png';
import 힐링형_감자 from '@/assets/images/TravelTasteTest/힐링형 감자.png';

const TestDetailPage = () => {
  return (
    <ContentLayout>
      <ResultCard />
      <SaveOrRetry />
    </ContentLayout>
  );
};

const ResultCard = () => {
  const [data, setData] = useState<TravelPreference | null>(null); // 수정: useState 훅 사용 방법
  const location = useLocation();
  const { id } = location.state || {};
  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; // id가 없으면 fetchData를 호출하지 않음
      try {
        const res = await testDetail(Number(id));
        setData(res);
        console.log(res);
      } catch (error) {
        console.error('Failed to fetch test results:', error);
        Swal.fire({
          icon: 'error',
          title: '오류가 발생했습니다.',
          text: '데이터를 불러오지 못했습니다. 다시 시도해주세요.',
        });
      }
    };

    fetchData();
  }, [id]);

  const getImageSrc = (type: string | undefined) => {
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

  return (
    <div className="mx-auto my-[100px] h-[1000px] w-[600px] rounded-[30px] bg-mk-logo0 py-[100px]">
      <div className="mx-auto w-[370px] text-mk-logo3">
        <div className="mx-auto mb-[80px] text-center">
          <h2 className="mb-[80px] font-dotum text-[30px] font-bold">
            {data?.character_type}
          </h2>
          <div className="mx-auto my-[30px] h-[250px] w-[250px]">
            <img
              src={getImageSrc(data?.character_type) || resultDefault}
              alt={data?.character_type || '결과 이미지'}
              className="w-max"
            />
          </div>
          <p>{data?.character_description} </p>
          <span>{data?.match_reason} </span>
          <span>{data?.recommend_reason} </span>
        </div>
        <div className="flex justify-between text-center">
          <div className="h-[184px] w-[135px]">
            <h3 className="mb-[30px] text-[20px] font-bold">
              잘 맞는 여행 유형
            </h3>
            <div>
              <img
                src={getImageSrc(data?.best_match) || resultDefault}
                alt={data?.character_type || '결과 이미지'}
                className="w-max"
              />
            </div>
            <p>{data?.best_match}</p>
          </div>
          <div className="h-[184px] w-[135px]">
            <h3 className="mb-[30px] text-[20px] font-bold">추천 여행지</h3>
            <button>
              <img
                src={getImageSrc(data?.recommend_place) || resultDefault}
                alt={data?.character_type || '결과 이미지'}
                className="w-max"
              />
            </button>
            <p>{data?.recommend_place}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SaveOrRetry = () => {
  return (
    <div className="mx-auto my-[100px] flex h-[58px] w-[354px] justify-between">
      <Link to={'/TravelTasteTest/test'}>
        <button className="h-full w-[150px] rounded-[6px] bg-mk-newgrey text-[15px] font-semibold text-white">
          다시 검사하기
        </button>
      </Link>
      <Link to={'..'}>
        <button className="h-full w-[150px] rounded-[6px] bg-mk-newgrey text-[15px] font-semibold text-white">
          뒤로가기
        </button>
      </Link>
    </div>
  );
};

export default TestDetailPage;
