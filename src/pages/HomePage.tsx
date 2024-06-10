import ContentLayout from '@/layout/ContentLayout';
import HeroImage from '@/assets/images/HomePage/HeroImage.png';

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
        <div>서비스바로가기</div>
        <div>이벤트 in 강원</div>
        <div>강원도 추천 여행 코스</div>
      </ContentLayout>
    </div>
  );
};

export default HomePage;
