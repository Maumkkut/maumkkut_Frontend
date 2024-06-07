import ContentLayout from '@/layout/ContentLayout';
import useBearStore from '@/store/useBearStore';

const HomePage = () => {
  const bears = useBearStore((state) => state.bears);
  const increae = useBearStore((state) => state.increase);
  return (
    <div>
      <ContentLayout>
        <h1 className="text-red-500">메인페이지 입니다.</h1>
        <h2>곰 {bears}</h2>
        <button
          className="border"
          onClick={() => increae()}
        >
          추가
        </button>
        <h2 className="text-2xl">일반</h2>
        <h2 className="font-tantan text-2xl">탄탄</h2>
        <h2 className="font-dotum text-2xl">돋움</h2>
        <h2 className="font-pretendard text-2xl">프리</h2>
      </ContentLayout>
    </div>
  );
};

export default HomePage;
