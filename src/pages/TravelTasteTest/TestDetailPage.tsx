import ContentLayout from '@/layout/ContentLayout';
import resultDefault from '@/assets/images/TravelTasteTest/resultDefault.png';

const TestDetailPage = () => {
  return (
    <ContentLayout>
      <ResultCard />
      <SaveOrRetry />
    </ContentLayout>
  );
};

const ResultCard = () => {
  return (
    <div className="mx-auto my-[100px] h-[1000px] w-[600px] rounded-[30px] bg-mk-logo0 py-[100px]">
      <div className="mx-auto w-[370px] text-mk-logo3">
        <div className="mx-auto mb-[80px] text-center">
          <h2 className="mb-[80px] font-dotum text-[30px] font-bold">
            힐링이야말로 여행의 목적!
          </h2>
          <div className="mx-auto my-[30px] h-[250px] w-[250px]">
            <img
              src={resultDefault}
              alt=""
            />
          </div>
          <p>
            유형 설명입니다.유형 설명입니다.유형 설명입니다.유형 설명입니다.유형
            설명입니다.유형 설명입니다.유형 설명입니다.유형 설명입니다.유형
            설명입니다.유형 설명입니다.유형 설명입니다.유형 설명입니다.유형
            설명입니다.유형 설명입니다.유형 설명입니다.유형 설명입니다.유형
            설명입니다.유형 설명입니다.유형 설명입니다.
          </p>
        </div>
        <div className="flex justify-between text-center">
          <div className="h-[184px] w-[135px]">
            <h3 className="mb-[30px] text-[20px] font-bold">
              잘 맞는 여행 유형
            </h3>
            <div>
              <img
                src={resultDefault}
                alt=""
                className="w-max"
              />
            </div>
          </div>
          <div className="h-[184px] w-[135px]">
            <h3 className="mb-[30px] text-[20px] font-bold">추천 여행지</h3>
            <button>
              <img
                src={resultDefault}
                alt=""
                className="w-max"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SaveOrRetry = () => {
  return (
    <div className="mx-auto my-[100px] flex h-[58px] w-[354px] justify-between">
      <button className="h-full w-[150px] rounded-[6px] bg-mk-newgrey text-[15px] font-semibold text-white">
        결과 저장하기
      </button>
      <button className="h-full w-[150px] rounded-[6px] bg-mk-newgrey text-[15px] font-semibold text-white">
        다시 검사하기
      </button>
    </div>
  );
};

export default TestDetailPage;
