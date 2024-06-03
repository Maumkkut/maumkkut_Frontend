import useBearStore from '@/store/useBearStore';

const HomePage = () => {
  const bears = useBearStore((state) => state.bears);
  const increae = useBearStore((state) => state.increase);
  return (
    <div>
      <h1 className="text-red-500">메인페이지 입니다.</h1>
      <h2>곰 {bears}</h2>
      <button
        className="border"
        onClick={() => increae()}
      >
        추가
      </button>
    </div>
  );
};

export default HomePage;
