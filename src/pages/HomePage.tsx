import ContentLayout from '@/layout/ContentLayout';
import HeroImage from '@/assets/images/HomePage/HeroImage.png';
import dice from '@/assets/images/HomePage/dice.jpg';
import sea from '@/assets/images/HomePage/sea.jpg';
import eventIcon1 from '@/assets/images/HomePage/EventInGangwon1.png';
import eventIcon2 from '@/assets/images/HomePage/EventInGangwon2.png';
import eventIcon3 from '@/assets/images/HomePage/EventInGangwon3.png';
import btnRight from '@/assets/images/HomePage/carouselRight.png';
import btnLeft from '@/assets/images/HomePage/carouselLeft.png';
import course1 from '@/assets/images/HomePage/Course1.png';
import course2 from '@/assets/images/HomePage/Course2.png';
import course3 from '@/assets/images/HomePage/Course3.png';
import course4 from '@/assets/images/HomePage/Course4.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperComponent.css'; // 추가: 스타일을 적용할 CSS 파일 화살표 위치 조정

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
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
              <button className="mt-[36px] h-[52px] w-[179px] rounded bg-mk-logoPoint text-[20px] font-bold">
                여행 시작하기
              </button>
              <p className="mt-[36px] font-dotum text-[15px] text-mk-light">
                마음끗 : &lsquo;마음껏&rsquo;, 마카:&lsquo;모두&rsquo;라는 뜻의
                강원도 사투리
              </p>
            </div>
          </ContentLayout>
        </div>
      </div>
      <ContentLayout>
        {/* 서비스 바로가기 컴포넌트 */}
        <GoService />
        {/* 이벤트 in 강원 컴포넌트 */}
        <EventInGangwon />
        {/* 강원도 추천 여행 코스 컴포넌트 */}
        <CourseRecommend /> {/*실제 보여야할 모습*/}
        <CourseRecommend2 /> {/*화살표가 바깥으로 가야하고 모양도 바꿔야함!!*/}
      </ContentLayout>
    </div>
  );
};

const GoService = () => {
  return (
    <div className="mt-20 text-center">
      <h2 className="font-tantan text-4xl text-mk-grey1">서비스 바로가기</h2>
      <div></div>
      <div className="me-[144px] ms-[144px] mt-[100px] flex h-[200px] justify-between">
        <div className="relative w-[300px]">
          <div className="h-full overflow-hidden rounded-lg">
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
        </div>
        <div className="relative w-[300px]">
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
        </div>

        <div className="relative w-[300px]">
          <div className="h-full overflow-hidden rounded-lg">
            <img
              src={sea}
              alt="sea"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50"></div>
          <h3 className="absolute inset-0 top-[82px] text-[28px] font-bold text-mk-light">
            우리여행 코스추천
          </h3>
        </div>
      </div>
      <div className="me-[144px] ms-[144px] mt-[100px] flex h-[200px] justify-between">
        <div className="relative w-[300px]">
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
        </div>
        <div className="relative w-[300px]">
          <div className="h-full overflow-hidden rounded-lg">
            <img
              src={sea}
              alt="sea"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50"></div>
          <h3 className="absolute inset-0 top-[82px] text-[28px] font-bold text-mk-light">
            커뮤니티
          </h3>
        </div>

        <div className="relative w-[300px]">
          <div className="h-full overflow-hidden rounded-lg">
            <img
              src={sea}
              alt="sea"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-50"></div>
          <h3 className="absolute inset-0 top-[82px] text-[28px] font-bold text-mk-light">
            마이페이지
          </h3>
        </div>
      </div>
    </div>
  );
};

const EventInGangwon = () => {
  const gangwondoEvent = [
    { title: '영월 캠핑 페스티벌', img: eventIcon1 },
    { title: '화천 토마토 축제', img: eventIcon2 },
    { title: '강릉 커피 축제', img: eventIcon3 },
  ];
  // 캐러셀 중심 인덱스
  // const [centerIdx, clickButton] = useState(0);

  return (
    <div className="my-[100px] text-center">
      <h2 className="font-tantan text-4xl text-mk-grey1">이벤트 in 강원</h2>
      <div className="mx-[100px] mt-[70px] flex h-[700px] justify-between">
        <img
          src={btnLeft}
          alt="btnLeft"
          className="mx-[21px] my-auto h-[50px] w-[40px]"
        />
        <div className="flex h-full w-[1200px] justify-between">
          <div className="my-auto h-[250px] w-[300px] rounded-lg shadow-2xl">
            <div className="mx-auto mt-[24px] h-[150px] w-[100px]">
              <img
                src={gangwondoEvent[0].img}
                alt="gangwondoEvent[0].title"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-[24px] text-[20px] text-mk-grey1">
              {gangwondoEvent[0].title}
            </h3>
          </div>
          <div className="h-full w-[450px] rounded-lg shadow-2xl">
            <div className="mx-auto h-[600px] w-[400px]">
              <img
                src={gangwondoEvent[1].img}
                alt="gangwondoEvent[1].title"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="my-[18px] text-[28px] text-mk-grey1">
              {gangwondoEvent[1].title}
            </h3>
          </div>
          <div className="my-auto h-[250px] w-[300px] rounded-lg shadow-2xl">
            <div className="mx-auto mt-[24px] h-[150px] w-[100px]">
              <img
                src={gangwondoEvent[2].img}
                alt="gangwondoEvent[2].title"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-[24px] text-[20px] text-mk-grey1">
              {gangwondoEvent[2].title}
            </h3>
          </div>
        </div>
        <img
          src={btnRight}
          alt="btnRight"
          className="mx-[21px] my-auto h-[50px] w-[40px]"
        />
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
  ];

  return (
    <div className="my-[100px] text-center">
      <h2 className="font-tantan text-4xl text-mk-grey1">
        강원도 추천 여행 코스
      </h2>
      <div className="mx-[100px] mt-[70px] flex h-[488px] justify-center">
        <img
          src={btnLeft}
          alt="btnLeft"
          className="mx-[21px] my-auto h-[50px] w-[40px]"
        />

        <div className="flex h-full w-[1200px] justify-center">
          {CourseInfo.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              text1={course.text1}
              text2={course.text2}
              img={course.img}
            />
          ))}
        </div>
        <img
          src={btnRight}
          alt="btnRight"
          className="mx-[21px] my-auto h-[50px] w-[40px]"
        />
      </div>
    </div>
  );
};

const CourseRecommend2 = () => {
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

      <div className="swiper-container">
        <Swiper
          className="my-auto mt-[70px] h-[490px] w-[1210px]"
          modules={[Navigation]}
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
