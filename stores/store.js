import { create } from "zustand";

export const useStore = create((set) => ({
    // test 항목임
    zustandNumber: 0,
    increment: () => set((state) => ({ zustandNumber: state.zustandNumber + 1 })),
    decrement: () => set((state) => ({ zustandNumber: state.zustandNumber - 1 })),
    reset: () => set({ zustandNumber: 0 }),

    // 실제 데이터
    센터아이디: 0,
    센터아이디_변경: (value) => set((state)=>({센터아이디 : value})),

    //프로그램 여닫기
    프로그램창오픈상태 : false,
    프로그램창오픈상태_변경 : (value) => set((state)=>({프로그램창오픈상태 : !state.프로그램창오픈상태})),

    //센터 상세페이지 여닫기
    센터상세페이지오픈상태 : false,
    센터상세페이지오픈상태_변경 : (value) => set((state)=>({센터상세페이지오픈상태 : !state.센터상세페이지오픈상태})),
    센터상세페이지열기 : (value) => set((state)=>({센터상세페이지오픈상태 : true})),
    센터상세페이지닫기 : (value) => set((state)=>({센터상세페이지오픈상태 : false})),

    센터상세데이터 : [],
    센터상세데이터_변경 : (value) => set((state)=>({센터상세데이터 : value})),

}));