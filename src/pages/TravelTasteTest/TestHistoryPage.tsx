import ContentLayout from '@/layout/ContentLayout';

const TestHistoryPage = () => {
  const name: string = '호준';
  return (
    <ContentLayout>
      <div className="mt-[100px]">
        <h2 className="text-[40px]">
          <strong>{name}</strong>님의 여행 유형 결과 이력
        </h2>
        <HistoryList />
      </div>
    </ContentLayout>
  );
};

const HistoryList = () => {
  return (
    <div className="mt-[110px]">
      <HistoryCard />
    </div>
  );
};

const HistoryCard = () => {
  return <div></div>;
};

export default TestHistoryPage;
