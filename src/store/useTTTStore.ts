import {
  ImportanceList,
  TravelPreferenceSummary,
} from '@/types/travelTastTest';
import { create } from 'zustand';

interface TTTStore {
  answers: ImportanceList;
  setAnswers: (answers: ImportanceList) => void;
  testResults: TravelPreferenceSummary[];
  setTestResults: (testResults: TravelPreferenceSummary[]) => void;
}

const useTTTStore = create<TTTStore>((set) => ({
  answers: { importance_list: Array(10).fill(0) }, // 숫자 배열로 수정
  setAnswers: (answers) => set({ answers }),
  testResults: [],
  setTestResults: (testResults) => set({ testResults }),
}));

export default useTTTStore;
