import { create } from 'zustand';

// Position 인터페이스
interface Position {
  name: string;
  id: number;
}

// RTStore 인터페이스
interface RTStore {
  index: number;
  setIndex: (index: number) => void;
  startPos: Position[];
}

// Zustand의 create 함수를 사용하여 RTStore를 생성
const useRTStore = create<RTStore>((set) => ({
  index: -1,
  setIndex: (index) => set({ index }),
  startPos: [
    { name: '강릉', id: 1 },
    { name: '고성', id: 2 },
    { name: '동해', id: 3 },
    { name: '삼척', id: 4 },
    { name: '속초', id: 5 },
    { name: '양구', id: 6 },
    { name: '양양', id: 7 },
    { name: '영월', id: 8 },
    { name: '원주', id: 9 },
    { name: '인제', id: 10 },
    { name: '정선', id: 11 },
    { name: '철원', id: 12 },
    { name: '춘천', id: 13 },
    { name: '태백', id: 14 },
    { name: '평창', id: 15 },
    { name: '홍천', id: 16 },
    { name: '화천', id: 17 },
    { name: '횡성', id: 18 },
  ],
}));

export default useRTStore;
