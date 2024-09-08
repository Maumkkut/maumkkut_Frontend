import { create } from 'zustand';

interface RTStore {
  index: number;
  setIndex: (index: number) => void;
}

const useRTStore = create<RTStore>((set) => ({
  index: 0,
  setIndex: (index) => set({ index }),
}));

export default useRTStore;
