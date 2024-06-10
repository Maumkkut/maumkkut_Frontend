import ContentLayout from '@/layout/ContentLayout';
import HeroImage from '@/assets/images/HomePage/HeroImage.png';
import dice from '@/assets/images/HomePage/dice.jpg';
import sea from '@/assets/images/HomePage/sea.jpg';

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
                <p>&lsquo;마음껏 함께, 모두&lsquo; 즐기는 여행</p>
                <p>마음끗으로 떠나보세요</p>
              </div>
              <button className="mt-[36px] h-[52px] w-[179px] rounded bg-mk-logoPoint font-pretendard text-[20px] font-bold">
                여행 시작하기
              </button>
              <p className="mt-[36px] font-dotum text-[15px] text-mk-light">
                마음끗 : &lsquo;마음껏&lsquo;, 마카:&lsquo;모두&lsquo;라는 뜻의
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
        <div>이벤트 in 강원</div>
        {/* 강원도 추천 여행 코스 컴포넌트 */}
        <div>강원도 추천 여행 코스</div>
      </ContentLayout>
    </div>
  );
};

const GoService = () => {
  return (
    <div className="mt-20 text-center">
      <h2 className="text-4xl">서비스 바로가기</h2>
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
          <h3 className="absolute inset-0 top-[82px] font-pretendard text-[28px] font-bold text-mk-light">
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
          <h3 className="absolute inset-0 top-[82px] font-pretendard text-[28px] font-bold text-mk-light">
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
          <h3 className="absolute inset-0 top-[82px] font-pretendard text-[28px] font-bold text-mk-light">
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
          <h3 className="absolute inset-0 top-[82px] font-pretendard text-[28px] font-bold text-mk-light">
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
          <h3 className="absolute inset-0 top-[82px] font-pretendard text-[28px] font-bold text-mk-light">
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
          <h3 className="absolute inset-0 top-[82px] font-pretendard text-[28px] font-bold text-mk-light">
            마이페이지
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
