import ContentLayout from '@/layout/ContentLayout';
import resultDefault from '@/assets/images/TravelTasteTest/resultDefault.png';
import useTTTStore from '@/store/useTTTStore';
import Swal from 'sweetalert2';

const TestHistoryPage = () => {
  const name: string = '호준';
  return (
    <ContentLayout>
      <div className="mt-[100px]">
        <h2 className="ms-[122px] text-[40px]">
          <strong>{name}</strong>님의 여행 유형 결과 이력
        </h2>
        <HistoryList />
      </div>
    </ContentLayout>
  );
};

const HistoryList = () => {
  const { testResults } = useTTTStore();
  return (
    <div className="mt-[110px]">
      {testResults.map((result, index) => (
        <HistoryCard
          key={result.id}
          index={index}
          date={result.date}
          type={result.type}
          description={result.description}
        />
      ))}
    </div>
  );
};

const HistoryCard = ({
  index,
  date,
  type,
  // description,
}: {
  index: number;
  date: string;
  type: string;
  description: string;
}) => {
  const deleteDetail = (idx: number) => {
    Swal.fire({
      icon: 'question',
      title: '여행 유형 삭제',
      text: '정말로 삭제하시겠습니까?',
      confirmButtonText: '예',
      cancelButtonText: '아니오',
      confirmButtonColor: '#429f50',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`${idx}번째 삭제하는 로직 필요함`);
        // 여기에서 삭제 로직을 추가해야함
      }
    });
  };

  return (
    <div className="mx-auto mb-[30px] h-[259px] w-[1237px] border border-white border-b-mk-logo3">
      <div className="mx-auto mt-[55px] flex h-[150px] w-[1118px] items-center justify-between">
        <div className="relative">
          <div className="top-[5px] my-auto h-[30px] w-[30px] rounded-full bg-mk-tag1"></div>
          <span className="absolute left-[0px] top-[-12px] text-[25px] text-[#6E6E6E]">
            {index + 1}
          </span>
        </div>
        <div className="h-[150px] w-[150px]">
          <img
            className="h-full w-full"
            src={resultDefault}
            alt=""
          />
        </div>
        <div className="h-[82px] w-[473px]">
          <p className="mb-[28px] text-[20px]">{date}</p>
          <p className="text-[25px] font-bold">{type}</p>
        </div>
        <div className="w-[250px] flex-col justify-between">
          <div className="mb-[20px] h-[60px] w-full">
            <button className="h-full w-full rounded-[10px] bg-mk-logo3 text-[23px] text-white">
              자세히 보기
            </button>
          </div>
          <div className="h-[60px] w-full">
            <button
              className="h-full w-full rounded-[10px] border border-mk-logo3 text-[23px] text-[#6E6E6E]"
              onClick={() => deleteDetail(0)} //나중에 0대신 유형 index들어가야함
            >
              유형 삭제하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestHistoryPage;
