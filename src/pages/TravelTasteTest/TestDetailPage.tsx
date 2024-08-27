import ContentLayout from '@/layout/ContentLayout';
import resultDefault from '@/assets/images/TravelTasteTest/resultDefault.png';

const TestDetailPage = () => {
  return (
    <ContentLayout>
      <ResultCard />
    </ContentLayout>
  );
};

const ResultCard = () => {
  return (
    <div className="bg-mk-logo0 mx-auto mt-[100px] h-[1000px] w-[600px] rounded-[30px]">
      <div className="mx-auto w-[370px]">
        <div className="mx-auto mt-[100px] text-center">
          <h2 className="mb-[80px] font-dotum text-[30px] font-bold text-mk-logo3">
            힐링이야말로 여행의 목적!
          </h2>
          <div className="mx-auto h-[250px] w-[250px]">
            <img
              src={resultDefault}
              alt=""
            />
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default TestDetailPage;
