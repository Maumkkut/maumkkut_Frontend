import { recommendRandomTravel, saveRandomTravel } from '@/api/random';
import Kakaomap from '@/components/Kakaomap';
import ContentLayout from '@/layout/ContentLayout';
import {
  TravelRecommendation,
  ConvertedTravelRecommendation,
  ResultDetailBodyProps,
} from '@/types/random';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingPage from '../LoadingPage';

const RandomResult = () => {
  const location = useLocation();
  const { region } = location.state as { region?: string };
  return (
    <ContentLayout>
      <CreateOrMy />
      <ResultHeader />
      <ResultDetailBody region={region} />
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
        <Link to="../my">
          <button>나의 랜덤 여행지</button>
        </Link>
      </div>
    </div>
  );
};

const ResultHeader = () => {
  return (
    <>
      <div className="mx-auto my-[80px] text-center">
        <div className="mx-auto flex w-[1060px] items-center justify-between text-[30px] font-bold text-mk-logo3">
          <hr className="w-[30%] border-t border-black" />
          <span className="whitespace-nowrap">랜덤 여행 코스 결과</span>
          <hr className="w-[30%] border-t border-black" />
        </div>
      </div>
      <div></div>
    </>
  );
};

const convertToTravelRecommendation = (
  data: TravelRecommendation,
): ConvertedTravelRecommendation[] => {
  return data.result.tour_list.map((tour) => ({
    title: tour.tour_name,
    addr1: tour.tour_address,
    mapx: tour.tour_mapx,
    mapy: tour.tour_mapy,
  }));
};

const extractTourIds = (data: TravelRecommendation): number[] | null => {
  return data.result.tour_list.map((tour) => tour.tour_id);
};

const ResultDetailBody = ({ region }: ResultDetailBodyProps) => {
  const [result, setResult] = useState<ConvertedTravelRecommendation[] | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [tour_list, setTourList] = useState<number[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!region) {
        console.error('Region is required.');
        setLoading(false);
        return;
      }

      try {
        const data = await recommendRandomTravel({ region });
        const travelRecommendations = convertToTravelRecommendation(data);
        const extractedTourIds = extractTourIds(data);
        setResult(travelRecommendations);
        setTourList(extractedTourIds);
        console.log('Result:', travelRecommendations);
        console.log('extractedTourIds:', extractedTourIds);
      } catch (error) {
        console.error('Error fetching travel recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [region]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="mx-[150px]">
      {result ? <Kakaomap data={result} /> : <LoadingPage />}
      <Buttons tour_list={tour_list} />
    </div>
  );
};

const Buttons = ({ tour_list }: { tour_list: number[] | null }) => {
  const navigate = useNavigate();
  const ClickConfrimCourse = () => {
    if (tour_list) {
      saveRandomTravel({ tour_list });
      navigate('../my', { state: { index: 'max' } });
    }
  };
  return (
    <div className="mx-auto my-[50px] flex h-[66px] w-[830px] justify-between text-[22px] font-semibold text-white">
      <div className="h-full w-[400px]">
        <Link to="..">
          <button className="h-full w-full rounded-[6px] bg-mk-logo3">
            새로운 코스 출력
          </button>
        </Link>
      </div>
      <div className="h-full w-[400px]">
        <button
          className="h-full w-full rounded-[6px] bg-mk-logo3"
          onClick={ClickConfrimCourse}
        >
          이 코스 확정하기
        </button>
      </div>
    </div>
  );
};

export default RandomResult;
