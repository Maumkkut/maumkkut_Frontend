import create from 'zustand';

interface TestResult {
  date: string;
  type: string;
}

interface TTTStore {
  answers: number[];
  setAnswers: (answers: number[]) => void;
  testResults: TestResult[];
}

const useTTTStore = create<TTTStore>((set) => ({
  answers: Array(10).fill(-1),
  setAnswers: (answers) => set({ answers }),
  testResults: [
    { date: '1997-07-03', type: '힐링형 감자' },
    { date: '2024-07-22', type: '나무늘보형 순두부' },
  ],
}));

export default useTTTStore;
