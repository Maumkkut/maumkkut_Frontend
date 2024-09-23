import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTypeTravel } from '@/api/discover';
import { TourLocation } from '@/types/discover';
import ContentLayout from '@/layout/ContentLayout';
import defaultImage from '@/assets/images/TravelTasteTest/resultDefault.png';
const DiscoverDetail = () => {
  const { type } = useParams<{ type: string }>();
  const [travelDestinations, setTravelDestinations] = useState<TourLocation[]>(
    [],
  ); // 상태 초기화

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTypeTravel(type!);
        console.log(res);
        setTravelDestinations(res.result); // API 응답 결과를 상태에 저장
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [type]);

  return (
    <>
      <TypeRecommend />
      <ContentLayout>
        <DiscoverCards destinations={travelDestinations} />
      </ContentLayout>
    </>
  );
};

const TypeRecommend = () => {
  const { type } = useParams<{ type: string }>();
  return (
    <>
      <div className="mx-auto my-[80px] text-center">
        <div className="mx-auto flex w-[1060px] items-center justify-between text-[30px] font-bold text-mk-logo3">
          <hr className="w-[30%] border-t border-black" />
          <span className="whitespace-nowrap">{type} 타입 추천 장소</span>
          <hr className="w-[30%] border-t border-black" />
        </div>
      </div>
    </>
  );
};

const DiscoverCards = ({ destinations }: { destinations: TourLocation[] }) => {
  return (
    <div className="mx-auto my-[100px] grid grid-cols-4 gap-4">
      {destinations.map((destination) => (
        <DiscoverCard
          key={destination.tour_id}
          addr1={destination.addr1}
          title={destination.title}
          image={destination.image || defaultImage} // 기본 이미지 경로 설정
        />
      ))}
    </div>
  );
};

const DiscoverCard = ({
  addr1,
  title,
  image,
}: {
  addr1: string;
  title: string;
  image: string;
}) => {
  const handleClick = () => {
    const url = `https://www.google.com/search?q=${title}`;
    window.open(url, '_blank');
  };
  return (
    <div className="mx-auto w-full overflow-hidden rounded-lg border border-transparent shadow-md transition-colors duration-300 hover:border-mk-logo4">
      <button
        onClick={handleClick}
        className="w-full"
      >
        <div className="mx-auto w-full overflow-hidden">
          <img
            className="h-[200px] w-full object-cover"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{addr1}</p>
        </div>
      </button>
    </div>
  );
};

export default DiscoverDetail;
