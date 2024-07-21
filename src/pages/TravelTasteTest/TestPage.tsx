import ContentLayout from '@/layout/ContentLayout';
import useTTTStore from '@/store/useTTTStore';

const TestPage = () => {
  const questions: string[] = [
    '질문1',
    '질문2',
    '질문3',
    '질문4',
    '질문5',
    '질문6',
    '질문7',
    '질문8',
    '질문9',
    '질문10',
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
          <p>동의함</p>
        </div>
        <div className="flex w-[450px] justify-between">
          {CircleData.map((datum, index) =>
            answers[i] === index ? (
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
                j={index}
              />
            ),
          )}
        </div>
        <div className="my-auto w-[200px] text-center text-[25px] text-[#038C8C]">
          <p>동의하지 않음</p>
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
    const newAnswers = [...answers];
    newAnswers[i] = j;
    setAnswers(newAnswers);
    console.log(answers);
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
  return (
    <div className="mx-auto my-[100px] flex h-[80px] w-[450px] justify-between font-tantan text-[28px] text-white">
      <button className="h-full w-[200px] rounded-[10px] bg-mk-logo3">
        <p>결과보기</p>
      </button>
      <button className="h-full w-[200px] rounded-[10px] bg-[#C9C9C9]">
        <p>다시하기</p>
      </button>
    </div>
  );
};

export default TestPage;
