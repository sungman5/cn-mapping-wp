import { create } from "zustand";
import { gsap } from "gsap";

export const useStore = create((set) => ({
  // test 항목임
  zustandNumber: 0,
  increment: () => set((state) => ({ zustandNumber: state.zustandNumber + 1 })),
  decrement: () => set((state) => ({ zustandNumber: state.zustandNumber - 1 })),
  reset: () => set({ zustandNumber: 0 }),

  // 실제 데이터
  센터아이디: 0,
  센터아이디_변경: (value) => set((state) => ({ 센터아이디: value })),

  //프로그램 여닫기
  프로그램창오픈상태: false,
  프로그램창오픈상태_변경: (value) => set((state) => ({ 프로그램창오픈상태: !state.프로그램창오픈상태 })),

  //센터 상세페이지 여닫기
  센터상세페이지오픈상태: false,
  센터상세페이지오픈상태_변경: (value) => set((state) => ({ 센터상세페이지오픈상태: !state.센터상세페이지오픈상태 })),
  센터상세페이지열기: (value) => {
    gsap.to("#centerDetail", {
      duration: 0.5,
      width: 320,
      //   padding: 32,
      ease: "power4.out",
      onComplete: () => {
        set((state) => ({ 센터상세페이지오픈상태: true }));
      },
    });
  },

  센터상세페이지닫기: (value) => {
    gsap.to("#centerDetail", {
      duration: 0.5,
      width: 0,
      ease: "power4.out",
      onComplete: () => {
        set((state) => ({ 센터상세페이지오픈상태: false }));
      },
    });
  },

  센터상세데이터: [],
  센터상세데이터_변경: (value) => set((state) => ({ 센터상세데이터: value })),

  선택된지역: "",
  지역선택: (value) => {
    set((state) => ({ 선택된지역: value }));
  },


  //program page.jsx 프로그램 상세 모달창 상태
  모달창오픈상태 : false,
  모달창열기 : (value) => set((state) => ({ 모달창오픈상태: true })),
  모달창닫기 : (value) => set((state) => ({ 모달창오픈상태: false })),

  선택된프로그램 : null,
  프로그램선택 : (value) => set((state) => ({ 선택된프로그램: value })),
}));
