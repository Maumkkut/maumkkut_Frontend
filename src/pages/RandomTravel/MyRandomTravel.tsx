import { useEffect, useState } from 'react';
import ContentLayout from '@/layout/ContentLayout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Kakaomap from '@/components/Kakaomap';
// import useRTStore from '@/store/useRTStore';
import { getRandomTravelDetail, getRandomTravelList } from '@/api/random';
import {
  ConvertedTravelRecommendation,
  TravelRecommendation,
} from '@/types/random';
import Swal from 'sweetalert2';

// MyRandomTravel 컴포넌트
const MyRandomTravel = () => {
  return (
    <ContentLayout>
      <CreateOrMy />
      <ResultDetail />
    </ContentLayout>
  );
};

// CreateOrMy 컴포넌트
const CreateOrMy = () => {
  return (
    <div className="mx-auto flex w-[410px] justify-between text-center text-[16px] font-bold text-mk-darkgray">
      <div className="h-[30px]">
        <Link to="..">
          <button>랜덤 여행지 만들기</button>
        </Link>
      </div>
      <div className="h-[30px] border-b-2 border-mk-logo2">
        <Link to="">
          <button>나의 랜덤 여행지</button>
        </Link>
      </div>
    </div>
  );
};

// ResultDetail 컴포넌트
const ResultDetail = () => {
  const navigate = useNavigate();
  const [dummyList, setDummyList] = useState<CourseItem[]>([]);
  const [index, setIndex] = useState<number>(0); // index 상태 추가
  const location = useLocation();
  const { index: passedIndex } = location.state || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dummydummy = await getRandomTravelList();
        if (!dummydummy.result || dummydummy.result.course_list.length === 0) {
          Swal.fire({
            icon: 'info',
            title: '랜덤 여행지 추천 결과가 없습니다',
            text: '랜덤 여행지 만들기 페이지로 이동합니다.',
            confirmButtonText: '확인',
          }).then(() => {
            // 여행취향테스트
            navigate('../');
          });
        } else {
          const updatedList: CourseItem[] = dummydummy.result.course_list.map(
            (item, idx) => ({
              text: `저장된 여행코스 ${idx + 1}`,
              course_id: item.course_id,
            }),
          );

          setDummyList(updatedList);
          setIndex(passedIndex === 'max' ? updatedList.length - 1 : 0); // 'max'라고 받으면 가장 큰 인덱스 받기
        }
      } catch (error) {
        Swal.fire({
          icon: 'info',
          title: '랜덤 여행지 추천 결과를 가져오지 못했습니다',
          text: '랜덤 여행지 만들기 페이지로 이동합니다.',
          confirmButtonText: '확인',
        }).then(() => {
          // 여행취향테스트
          navigate('../');
        });
      }
    };

    fetchData();
  }, [navigate, passedIndex]);

  if (dummyList.length === 0) {
    return <div>데이터가 없습니다.</div>; // 데이터가 없을 때 표시할 내용
  }

  return (
    <div className="flex">
      <LeftSideBar
        dummyList={dummyList}
        index={index}
        setIndex={setIndex}
      />
      <div>
        <ResultDetailHeader />
        <ResultDetailBody course_id={dummyList[index].course_id} />
      </div>
    </div>
  );
};

// LeftSideBar 컴포넌트
interface CourseItem {
  text: string;
  course_id: number;
}

const LeftSideBar = ({
  dummyList,
  index,
  setIndex,
}: {
  dummyList: CourseItem[];
  index: number;
  setIndex: (index: number) => void;
}) => {
  return (
    <>
      <div className="h-[30px]" />
      <div className="min-h-[700px] w-[400px] border-r border-mk-gray-2">
        <hr className="w-[75%]" />
        <div className="w-[300px] text-center">
          {dummyList.map((item, idx) => (
            <div
              key={item.course_id} // course_id를 키로 사용
              className="my-[32px] flex w-full justify-center p-2 text-left text-[20px] font-bold"
            >
              <button
                onClick={() => setIndex(idx)}
                className={index === idx ? 'text-mk-logo4' : 'text-mk-gray-2'}
              >
                {item.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// ResultDetailHeader 컴포넌트
const ResultDetailHeader = () => {
  return (
    <div className="mx-auto my-[80px] text-center">
      <div className="mx-auto flex w-[1060px] items-center justify-between text-[30px] font-bold text-mk-logo3">
        <hr className="w-[30%] border-t border-black" />
        <span className="whitespace-nowrap">저장된 여행 코스</span>
        <hr className="w-[30%] border-t border-black" />
      </div>
    </div>
  );
};

const convertToTravelRecommendation = (
  data: TravelRecommendation,
): ConvertedTravelRecommendation[] => {
  return data.result.tour_list
    .filter(
      (tour) =>
        tour &&
        tour.tour_name &&
        tour.tour_address &&
        tour.tour_mapx !== undefined &&
        tour.tour_mapy !== undefined,
    )
    .map((tour) => ({
      title: tour.tour_name,
      addr1: tour.tour_address,
      mapx: tour.tour_mapx !== null ? tour.tour_mapx : 0,
      mapy: tour.tour_mapy !== null ? tour.tour_mapy : 0,
    }));
};

// ResultDetailBody 컴포넌트
const ResultDetailBody = ({ course_id }: { course_id: number }) => {
  const [dummy, setDummy] = useState<ConvertedTravelRecommendation[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dummydummy = await getRandomTravelDetail(course_id);
        const tempData = convertToTravelRecommendation(dummydummy);
        setDummy(tempData);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: '오류가 발생했습니다.',
          text: '데이터를 불러오지 못했습니다. 다시 시도해주세요.',
        });
      }
    };

    fetchData();
  }, [course_id]);

  return (
    <div className="mx-[30px]">
      {dummy.length > 0 ? (
        <Kakaomap data={dummy} />
      ) : (
        <p className="text-center">데이터 없음...</p>
      )}
      {/* <Buttons /> */}
    </div>
  );
};

// // Buttons 컴포넌트
// const Buttons = () => {
//   return (
//     <div className="mx-auto my-[50px] flex h-[66px] w-[830px] justify-between text-[22px] font-semibold text-white">
//       <div className="h-full w-[400px]">
//         <button className="h-full w-full rounded-[6px] bg-mk-logo3">
//           코스 초기화
//         </button>
//       </div>
//       <div className="h-full w-[400px]">
//         <button className="h-full w-full rounded-[6px] bg-mk-logo3">
//           이 코스 확정하기
//         </button>
//       </div>
//     </div>
//   );
// };

export default MyRandomTravel;
