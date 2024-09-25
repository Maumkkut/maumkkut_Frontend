import ContentLayout from '@/layout/ContentLayout';
import HeroImage from '@/assets/images/HomePage/HeroImage.png';
import HeroImage2 from '@/assets/images/HomePage/HeroImage2.png';
import HeroImage3 from '@/assets/images/HomePage/HeroImage3.png';
import dice from '@/assets/images/HomePage/dice.jpg';
import sea from '@/assets/images/HomePage/sea.jpg';
import myPage from '@/assets/images/HomePage/myPage.jpg';
import community from '@/assets/images/HomePage/Community.jpg';
import ourTravel from '@/assets/images/HomePage/ourTravel.jpg';
import course1 from '@/assets/images/HomePage/Course1.png';
import course2 from '@/assets/images/HomePage/Course2.png';
import course3 from '@/assets/images/HomePage/Course3.png';
import course4 from '@/assets/images/HomePage/Course4.png';
import defaultImage from '@/assets/images/TravelTasteTest/resultDefault.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SetStateAction, useEffect, useState } from 'react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SwiperComponent.css'; // 추가: 스타일을 적용할 CSS 파일 화살표 위치 조정
import { Link } from 'react-router-dom';
import { getFestivals } from '@/api/home';
import { Festival } from '@/types/home';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ContentLayout>
        {/* 서비스 바로가기 컴포넌트 */}
        <GoService />
        {/* 이벤트 in 강원 컴포넌트 */}
        <EventInGangwon />
        {/* 강원도 추천 여행 코스 컴포넌트 */}
        <CourseRecommend /> {/*화살표가 바깥으로 가야하고 모양도 바꿔야함!!*/}
      </ContentLayout>
    </div>
  );
};
const HeroSection = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      scrollbar={{ draggable: true }} // 드래그해서 움직이기 가능
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <HeroSection1 />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection2 />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection3 />
      </SwiperSlide>
      {/* <SwiperSlide>
        <HeroSection4 />
      </SwiperSlide> */}
    </Swiper>
  );
};

const HeroSection1 = () => {
  return (
    <div className="relative h-[610px] w-full overflow-hidden">
      {/* Hero Image */}
      <img
        src={HeroImage}
        alt="HeroImage"
        className="h-full w-full object-cover"
      />
      {/* Hero Image 내부 글씨들 */}
      <div className="absolute inset-0">
        <ContentLayout>
          {/* 작은 따옴표 그냥 쓰면 오류나서 &lsquo; 이용 */}
          <div className="ms-36 mt-[152px]">
            <div className="w-[888px] font-tantan text-[64px] text-mk-light">
              <p>&lsquo;마음껏 함께, 모두&rsquo; 즐기는 여행</p>
              <p>마음끗으로 떠나보세요</p>
            </div>
            <Link to="DiscoverGangwon/">
              <button className="mt-[36px] h-[52px] w-[179px] rounded bg-mk-logoPoint text-[20px] font-bold text-mk-logo4">
                여행 시작하기
              </button>
            </Link>
            <p className="mt-[36px] font-dotum text-[15px] text-mk-light">
              마음끗 : &lsquo;마음껏&rsquo;, 마카:&lsquo;모두&rsquo;라는 뜻의
              강원도 사투리
            </p>
          </div>
        </ContentLayout>
      </div>
    </div>
  );
};

const HeroSection2 = () => {
  return (
    <div className="relative h-[610px] w-full overflow-hidden">
      {/* Hero Image */}
      <img
        src={HeroImage2}
        alt="HeroImage2"
        className="h-full w-full object-cover"
      />
      {/* Hero Image 내부 글씨들 */}
      <div className="absolute inset-0">
        <ContentLayout>
          {/* 작은 따옴표 그냥 쓰면 오류나서 &lsquo; 이용 */}
          <div className="ms-36 mt-[152px]">
            <div className="w-[1000px] font-tantan text-[64px] text-mk-light">
              <p>이번 여행지는 랜덤으로 정해볼까요?</p>
            </div>
            <Link to="RandomTravel/">
              <button className="mt-[36px] h-[52px] w-[280px] rounded bg-mk-logoPoint text-[20px] font-bold text-mk-logo4">
                랜덤 여행지 추천 바로가기
              </button>
            </Link>
          </div>
        </ContentLayout>
      </div>
    </div>
  );
};
const HeroSection3 = () => {
  return (
    <div className="relative h-[610px] w-full overflow-hidden">
      {/* Hero Image */}
      <img
        src={HeroImage3}
        alt="HeroImage3"
        className="h-full w-full object-cover"
      />
      {/* Hero Image 내부 글씨들 */}
      <div className="absolute inset-0">
        <ContentLayout>
          {/* 작은 따옴표 그냥 쓰면 오류나서 &lsquo; 이용 */}
          <div className="ms-36 mt-[152px]">
            <div className="w-[1000px] font-tantan text-[64px] text-mk-light">
              <p>내 여행 MBTI는 뭘까?</p>
            </div>
            <Link to="TravelTasteTest/">
              <button className="mt-[36px] h-[52px] w-[280px] rounded bg-mk-logoPoint text-[20px] font-bold text-mk-logo4">
                여행 취향 테스트 바로가기
              </button>
            </Link>
          </div>
        </ContentLayout>
      </div>
    </div>
  );
};

// const HeroSection4 = () => {
//   return (
//     <div className="relative h-[610px] w-full overflow-hidden">
//       {/* Hero Image */}
//       <img
//         src={HeroImage4}
//         alt="HeroImage4"
//         className="h-full w-full object-cover"
//       />
//       {/* Hero Image 내부 글씨들 */}
//       <div className="absolute inset-0">
//         <ContentLayout>
//           {/* 작은 따옴표 그냥 쓰면 오류나서 &lsquo; 이용 */}
//           <div className="ms-36 mt-[152px]">
//             <div className="w-[1200px] font-tantan text-[64px] text-mk-light">
//               <p>강원도 이곳 저곳을 방문하고 포인트 모아</p>
//               <p>행운 룰렛에 참여하세요</p>
//             </div>
//             <button className="mt-[36px] h-[52px] w-[221px] rounded bg-mk-logoPoint text-[20px] font-bold text-mk-logo4">
//               행운 룰렛 참여하기
//             </button>
//           </div>
//         </ContentLayout>
//       </div>
//     </div>
//   );
// };

const GoService = () => {
  return (
    <div className="mt-20 text-center">
      <h2 className="font-tantan text-4xl text-mk-grey1">서비스 바로가기</h2>
      <div></div>
      <div className="me-[144px] ms-[144px] mt-[100px] flex h-[200px] justify-between">
        <button className="relative w-[300px] hover:drop-shadow-2xl">
          <Link to="DiscoverGangwon">
            <div className="h-full w-full overflow-hidden rounded-lg">
              <img
                src={HeroImage}
                alt="HeroImage"
                className="h-full w-full object-cover"
              />
            </div>
            {/* 이미지를 어둡게하기 위해 살짝 반투명한 검정색 뒤집어 씌우기 */}
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50"></div>
            <h3 className="absolute inset-0 top-[82px] text-[28px] font-bold text-mk-light">
              강원도 이곳저곳
            </h3>
          </Link>
        </button>
        <button className="relative w-[300px] hover:drop-shadow-2xl">
          <Link to="TravelTasteTest/">
            <div className="h-full overflow-hidden rounded-lg">
              <img
                src={sea}
                alt="sea"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50"></div>
            <h3 className="absolute inset-0 top-[82px] text-[28px] font-bold text-mk-light">
              여행 취향 테스트
            </h3>
          </Link>
        </button>

        <button className="relative w-[300px] hover:drop-shadow-2xl">
          <Link to="/">
            <div className="h-full overflow-hidden rounded-lg">
              <img
                src={ourTravel}
                alt="ourTravel"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50"></div>
            <h3 className="absolute inset-0 top-[82px] text-[28px] font-bold text-mk-light">
              우리여행 코스추천
            </h3>
          </Link>
        </button>
      </div>
      <div className="me-[144px] ms-[144px] mt-[100px] flex h-[200px] justify-between">
        <button className="relative w-[300px] hover:drop-shadow-2xl">
          <Link to="RandomTravel/">
            <div className="h-full overflow-hidden rounded-lg">
              <img
                src={dice}
                alt="dice"
                className="h-full w-full object-cover"
              />
            </div>
            {/* 이미지를 어둡게하기 위해 살짝 반투명한 검정색 뒤집어 씌우기 */}
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50"></div>
            <h3 className="absolute inset-0 top-[82px] text-[28px] font-bold text-mk-light">
              랜덤 여행지 추천
            </h3>
          </Link>
        </button>
        <button className="relative w-[300px] hover:drop-shadow-2xl">
          <Link to="community/all">
            <div className="h-full overflow-hidden rounded-lg">
              <img
                src={community}
                alt="community"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50"></div>
            <h3 className="absolute inset-0 top-[82px] text-[28px] font-bold text-mk-light">
              커뮤니티
            </h3>
          </Link>
        </button>

        <button className="relative w-[300px] hover:drop-shadow-2xl">
          <Link to="profile">
            <div className="h-full overflow-hidden rounded-lg">
              <img
                src={myPage}
                alt="myPage"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50"></div>
            <h3 className="absolute inset-0 top-[82px] text-[28px] font-bold text-mk-light">
              마이페이지
            </h3>
          </Link>
        </button>
      </div>
    </div>
  );
};

const SmallCard = ({ img, title }: { img: string; title: string }) => {
  const handleClick = () => {
    const url = `https://www.google.com/search?q=${title}`;
    window.open(url, '_blank');
  };

  return (
    <button
      className="mx-auto my-auto h-[250px] w-[300px] rounded-lg shadow-lg transition-all duration-300 ease-in-out"
      onClick={handleClick}
    >
      <div className="mx-auto my-[24px] h-[150px] w-[100px]">
        <img
          className="h-full w-full rounded-t-lg"
          src={img || defaultImage}
          alt={title}
        />
      </div>
      <div className="px-2">
        <p className="mt-[12px] truncate text-center text-[20px] text-mk-grey1">
          {title}
        </p>
      </div>
    </button>
  );
};

const BigCard = ({ img, title }: { img: string; title: string }) => {
  const handleClick = () => {
    const url = `https://www.google.com/search?q=${title}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick}>
      <div className="h-[20px]"></div>
      <div className="mx-auto my-auto h-[500px] w-[400px] rounded-lg shadow-lg transition-all duration-300 ease-in-out">
        <div className="mx-auto h-[400px] w-[300px]">
          <img
            className="h-full w-full rounded-t-lg object-cover"
            src={img || defaultImage}
            alt={title}
          />
        </div>
        <div className="px-4">
          <p className="my-[18px] truncate text-center text-[28px] text-mk-grey1">
            {title}
          </p>
        </div>
      </div>
      <div className="h-[20px]"></div>
    </button>
  );
};

const EventInGangwon = () => {
  const [gangwondoEvent, setGangwondoEvent] = useState<Festival[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getFestivals();
        setGangwondoEvent(res.result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []); // 의존성 배열에서 gangwondoEvent 제거

  return (
    <div className="mx-auto my-[100px] h-[700px] w-[1400px] text-center">
      <h2 className="font-tantan text-4xl text-mk-grey1">이벤트 in 강원</h2>
      <div className="swiper-container my-auto mt-[100px]">
        {gangwondoEvent ? (
          <Swiper
            className="mx-auto"
            modules={[Navigation]}
            spaceBetween={-100}
            autoplay
            navigation
            slidesPerView={3}
            loop={true}
            onSlideChange={(swiper: { realIndex: SetStateAction<number> }) =>
              setActiveIndex(swiper.realIndex)
            }
          >
            {gangwondoEvent.map((item, index) => (
              <SwiperSlide
                key={index}
                className="my-auto flex h-[700px] w-[300px] justify-center"
              >
                {index === activeIndex + 1 ||
                (activeIndex === gangwondoEvent.length - 1 && index === 0) ? (
                  <BigCard
                    img={item.image}
                    title={item.title}
                  />
                ) : (
                  <SmallCard
                    img={item.image}
                    title={item.title}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>로딩 중...</p>
        )}
      </div>
    </div>
  );
};

interface CourseCardProps {
  title: string;
  text1: string;
  text2: string;
  img: string;
}

const CourseCard = ({ title, text1, text2, img }: CourseCardProps) => {
  return (
    <div className="h-[488px] w-[300px] rounded-lg shadow">
      <div className="mx-[16px] my-auto h-[352px] w-[267px]">
        <div className="mx-auto h-[300px] w-[200px]">
          <img
            src={img}
            alt="img"
            className="h-full w-full object-cover"
          />
        </div>
        <h3 className="text-[28px] font-bold text-mk-grey1">{title}</h3>
        <div className="mt-[12px] text-[20px] font-medium text-mk-grey2">
          <p>
            {text1}
            <br />
            {text2}
          </p>
        </div>
      </div>
    </div>
  );
};

const CourseRecommend = () => {
  const CourseInfo = [
    {
      title: '양양서핑 페스티벌',
      text1: '파도를 거스르는 자들이여',
      text2: '양양 서핑 완전정복 코스로!',
      img: course1,
    },
    {
      title: '강원 바다',
      text1: '힐링을 찾는 그대에게!',
      text2: '강원도 푸른 바다 코스',
      img: course2,
    },
    {
      title: '액티비티 패스',
      text1: '활동적인 당신을 위한',
      text2: '액티비티 마스터 코스',
      img: course3,
    },
    {
      title: '역사 여행 속으로',
      text1: '전통이 살아있는',
      text2: '강원도 역사 코스',
      img: course4,
    },
    {
      title: '양양서핑 페스티벌',
      text1: '파도를 거스르는 자들이여',
      text2: '양양 서핑 완전정복 코스로!',
      img: course1,
    },
    {
      title: '강원 바다',
      text1: '힐링을 찾는 그대에게!',
      text2: '강원도 푸른 바다 코스',
      img: course2,
    },
    {
      title: '액티비티 패스',
      text1: '활동적인 당신을 위한',
      text2: '액티비티 마스터 코스',
      img: course3,
    },
    {
      title: '역사 여행 속으로',
      text1: '전통이 살아있는',
      text2: '강원도 역사 코스',
      img: course4,
    },
  ];
  return (
    <div className="my-[100px] text-center">
      <h2 className="font-tantan text-4xl text-mk-grey1">
        강원도 추천 여행 코스
      </h2>

      <div className="swiper-container mt-[100px]">
        <Swiper
          className="my-auto mt-[70px] h-[490px] w-[1210px]"
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={4}
          autoplay
          navigation
          loop={true}
        >
          {CourseInfo.map((course, index) => (
            <SwiperSlide
              key={index}
              className="h-[488px] w-[300px]"
            >
              <CourseCard
                title={course.title}
                text1={course.text1}
                text2={course.text2}
                img={course.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
