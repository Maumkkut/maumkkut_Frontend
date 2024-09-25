import ContentLayout from '@/layout/ContentLayout';
import useTTTStore from '@/store/useTTTStore';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { testCreate } from '@/api/travelTasteTest';

// or via CommonJS

const TestPage = () => {
  const { pathname } = useLocation();
  const { setAnswers } = useTTTStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setAnswers({ importance_list: Array(10).fill(0) });
  }, [setAnswers]);

  const questions: string[] = [   
    '여행지에서 마음의 안정을 찾고 힐링하는 것이 중요하다고 생각합니다.',
    '여행 중 여유롭게 시간을 보내는 것을 선호합니다.',
    '자연 경관을 즐기는 여행을 좋아합니다.',
    '여행 중 박물관이나 전시회 같은 곳을 관람하는 것을 좋아합니다.',
    '여행 중 현지 음식점에서 다양한 음식을 맛보는 것이 중요하다고 생각합니다.',
    '여행 중 모험적인 활동에 참여하는 것을 좋아합니다.',
    '여행 중 다양한 액티비티에 참여하는 것을 선호합니다.',
    '여행 중 다양한 경험을 많이 하는 것이 중요하다고 생각합니다.',
    '여행 중 쇼핑을 즐깁니다.',
    '여행 중 사진 촬영을 좋아합니다.',
  ];

  return (
    <ContentLayout>
      {questions.map((question, index) => (
        <QuestionCard
          key={index}
          question={question}
          i={index} //카드번호 확인시 사용
        />
      ))}
      <ResultOrRestart />
    </ContentLayout>
  );
};

const QuestionCard = ({ question, i }: { question: string; i: number }) => {
  const { answers } = useTTTStore();

  interface CircleDatumProperty {
    color: string;
    w: number;
  }

  const CircleData: CircleDatumProperty[] = [
    { color: '#CA0238', w: 65 },
    { color: '#CA0238', w: 50 },
    { color: '#023A40', w: 40 },
    { color: '#038C8C', w: 50 },
    { color: '#038C8C', w: 65 },
  ];

  return (
    <div className="mx-auto my-[50px] h-[289px] w-[1230px] border bg-white text-center">
      <h3 className="my-[40px] text-[24px]">{question}</h3>
      <div className="mx-auto flex h-[85px] w-[850px] justify-between">
        <div className="my-auto w-[200px] text-center text-[25px] text-[#CA0238]">
          <p>동의하지 않음</p>
        </div>
        <div className="flex w-[450px] justify-between">
          {CircleData.map((datum, index) =>
            answers.importance_list[i] === index + 1 ? (
              <CircleClicked
                key={index}
                color={datum.color}
                w={datum.w}
              />
            ) : (
              <CircleButton
                key={index}
                color={datum.color}
                w={datum.w}
                i={i}
                j={index + 1}
              />
            ),
          )}
        </div>
        <div className="my-auto w-[200px] text-center text-[25px] text-[#038C8C]">
          <p>동의함</p>
        </div>
      </div>
    </div>
  );
};

const CircleClicked = ({ color, w }: { color: string; w: number }) => {
  return (
    <>
      <button
        className="my-auto h-[65px] w-[65px] rounded-full border-2"
        style={{ borderColor: color, width: w, height: w }}
      >
        <div
          className="m-auto rounded-full"
          style={{ backgroundColor: color, width: w - 10, height: w - 10 }}
        ></div>
      </button>
    </>
  );
};
const CircleButton = ({
  color,
  w,
  i,
  j,
}: {
  color: string;
  w: number;
  i: number;
  j: number;
}) => {
  const { answers, setAnswers } = useTTTStore();

  const updateAnswer = function (i: number, j: number) {
    const newAnswers = {
      ...answers,
      importance_list: [...answers.importance_list],
    };
    newAnswers.importance_list[i] = j;
    setAnswers(newAnswers);
    console.log(newAnswers);
  };

  return (
    <button
      className="my-auto rounded-full border-2"
      style={{ borderColor: color, width: w, height: w }}
      onClick={() => updateAnswer(i, j)}
    ></button>
  );
};

const ResultOrRestart = () => {
  const { answers, setAnswers } = useTTTStore();

  const navigate = useNavigate();
  const goToDetailPage = (id: number) => {
    navigate(`../history/${id}`, { state: { id } });
  };

  const checkAnswers = async () => {
    if (answers.importance_list.some((answer) => answer === 0)) {
      Swal.fire({
        icon: 'error',
        title: '빈칸이 있습니다.',
        text: '모든 항목을 선택해주세요!',
      });
    } else {
      console.log(answers.importance_list);
      try {
        const res = await testCreate(answers);
        goToDetailPage(res.result.test_id);
      } catch (error) {
        console.error('Failed to create test result:', error);
        Swal.fire({
          icon: 'error',
          title: '오류가 발생했습니다.',
          text: '다시 시도해주세요.',
        });
      }
    }
  };

  const clickRestart = (): void => {
    setAnswers({ importance_list: Array(10).fill(0) }); //아무것도 클릭하지 않은 상태로 변경하기
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto my-[100px] flex h-[80px] w-[450px] justify-between font-tantan text-[28px] text-white">
      <button
        className="h-full w-[200px] rounded-[10px] bg-mk-logo3"
        onClick={checkAnswers}
      >
        <p>결과보기</p>
      </button>
      <button
        className="h-full w-[200px] rounded-[10px] bg-[#C9C9C9]"
        onClick={() => clickRestart()}
      >
        <p>다시하기</p>
      </button>
    </div>
  );
};

export default TestPage;
