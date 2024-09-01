import ContentLayout from '@/layout/ContentLayout';
import peach from '@/assets/images/TravelTasteTest/인플루언서형 복숭아.png';
import corn from '@/assets/images/TravelTasteTest/액티비티형 옥수수.png';
import { Link } from 'react-router-dom';
const TestEntryPage = () => {
  return (
    <ContentLayout>
      {/* 테스트또는 결과 페이지로 넘어가기 */}
      <TestOrHistory />
    </ContentLayout>
  );
};

const TestOrHistory = () => {
  return (
    <>
      <div className="mx-auto my-[200px] flex h-[895px] w-[800px] justify-between text-center font-tantan text-[30px]">
        <Link to="test">
          <button className="h-[600px] w-[380px] bg-mk-mint text-mk-light transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="mb-[50px] mt-[100px] h-[100px]">
              <h3>
                내 여행 유형은 뭘까?
                <br />
                새로 검사하기
              </h3>
            </div>
            <div className="mx-auto w-[300px]">
              <img
                className="mx-auto w-full"
                src={corn}
                alt="corn"
              />
            </div>
          </button>
        </Link>
        <Link to="history">
          <button className="text-mk-darkgrey h-[600px] w-[380px] border border-mk-mint outline-4 transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="mb-[60px] mt-[100px] h-[100px] py-6">
              <h3>결과 이력 확인하기</h3>
            </div>
            <div className="mx-auto w-[300px]">
              <img
                className="mx-auto h-full w-full"
                src={peach}
                alt="entryImg"
              />
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default TestEntryPage;
