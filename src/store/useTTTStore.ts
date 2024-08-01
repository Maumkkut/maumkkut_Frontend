import create from 'zustand';

interface TestResult {
  id: number;
  date: string;
  type: string;
  description: string;
}

interface TTTStore {
  answers: number[];
  setAnswers: (answers: number[]) => void;
  testResults: TestResult[];
}

const useTTTStore = create<TTTStore>((set) => ({
  answers: Array(10).fill(0),
  setAnswers: (answers) => set({ answers }),
  testResults: [
    {
      id: 1,
      date: '1997-07-03',
      type: '힐링형 감자',
      description:
        '유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다',
    },
    {
      id: 2,
      date: '2024-07-22',
      type: '나무늘보형 순두부',
      description:
        '유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다유형설명입니다',
    },
  ],
}));

export default useTTTStore;
