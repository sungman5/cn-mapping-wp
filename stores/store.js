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
    // gsap.to(`#star-${value}`, {
    //   autoAlpha: 1,
    //   duration: 0.5,
    //   scale: 1,
    //   transformOrigin: "50% 100%",
    //   ease: "back.out(1.7)",
    //   onComplete: () => {
    //     set((state) => ({ 선택된지역: value }));
    //   },
    // });
    set((state) => ({ 선택된지역: value }));
  },
}));
