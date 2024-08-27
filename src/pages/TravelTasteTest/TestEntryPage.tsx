import ContentLayout from '@/layout/ContentLayout';
import entryImg from '@/assets/images/TravelTasteTest/entryImg.png';
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
      <div className="mx-auto my-[200px] flex h-[895px] w-[800px] justify-between text-center text-[30px]">
        <Link to="test">
          <button className="h-[600px] w-[380px] bg-mk-mint text-mk-light transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="h-[100px]">
              <h3>
                내 여행 유형은 뭘까?
                <br />
                새로 검사하기
              </h3>
            </div>
            <img
              className="mx-auto mt-[100px]"
              src={entryImg}
              alt="entryImg"
            />
          </button>
        </Link>
        <Link to="history">
          <button className="h-[600px] w-[380px] border border-mk-mint outline-4 transition-transform duration-500 ease-in-out hover:scale-105">
            <div className="h-[100px] py-6">
              <h3>결과 이력 확인하기</h3>
            </div>
            <img
              className="mx-auto mt-[100px]"
              src={entryImg}
              alt="entryImg"
            />
          </button>
        </Link>
      </div>
    </>
  );
};

export default TestEntryPage;
