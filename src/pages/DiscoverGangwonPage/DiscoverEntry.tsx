import ContentLayout from '@/layout/ContentLayout';
import 관람형_곤드레 from '@/assets/images/TravelTasteTest/관람형 곤드레.png';
import 나무늘보형_순두부 from '@/assets/images/TravelTasteTest/나무늘보형 순두부.png';
import 도전형_인삼 from '@/assets/images/TravelTasteTest/도전형 인삼.png';
import 미식가형_송이 from '@/assets/images/TravelTasteTest/미식가형 송이.png';
import 사람좋아_쌀알 from '@/assets/images/TravelTasteTest/사람좋아 쌀알.png';
import 액티비티형_옥수수 from '@/assets/images/TravelTasteTest/액티비티형 옥수수.png';
import 인플루언서형_복숭아 from '@/assets/images/TravelTasteTest/인플루언서형 복숭아.png';
import 힐링형_감자 from '@/assets/images/TravelTasteTest/힐링형 감자.png';
import { Link } from 'react-router-dom';

const DiscoverEntry = () => {
  return (
    <>
      <SelectType />
      <ContentLayout>
        <TypeCards />
      </ContentLayout>
    </>
  );
};

const SelectType = () => {
  return (
    <>
      <div className="mx-auto my-[80px] text-center">
        <div className="mx-auto flex w-[1060px] items-center justify-between text-[30px] font-bold text-mk-logo3">
          <hr className="w-[30%] border-t border-black" />
          <span className="whitespace-nowrap">유형별 강원도 장소 추천</span>
          <hr className="w-[30%] border-t border-black" />
        </div>
      </div>
      <div></div>
    </>
  );
};

const TypeCards = () => {
  const items = [
    { title: '관람형 곤드레', image: 관람형_곤드레 },
    { title: '나무늘보형 순두부', image: 나무늘보형_순두부 },
    { title: '도전형 인삼', image: 도전형_인삼 },
    { title: '미식가형 송이', image: 미식가형_송이 },
    { title: '사람좋아 쌀알', image: 사람좋아_쌀알 },
    { title: '액티비티형 옥수수', image: 액티비티형_옥수수 },
    { title: '인플루언서형 복숭아', image: 인플루언서형_복숭아 },
    { title: '힐링형 감자', image: 힐링형_감자 },
  ];
  return (
    <div className="mx-auto my-[100px] grid grid-cols-4">
      {items.map((item) => (
        <TypeCard
          key={item.title}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
};

const TypeCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <Link to={title}>
      <div className="mx-auto h-[318px] w-[250px]">
        <button>
          <div className="h-[250px] w-full">
            <img
              className="h-full w-full"
              src={image}
              alt={title}
            />
          </div>
        </button>
        <p className="my-auto text-center font-sans text-[18px] font-semibold">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default DiscoverEntry;
