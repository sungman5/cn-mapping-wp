import { create } from "zustand";
import { gsap } from "gsap";

export const useStore = create((set) => ({

  // 실제 데이터
  센터아이디: 0,
  센터아이디_변경: (value) => set((state) => ({ 센터아이디: value })),

  //프로그램 여닫기
  프로그램창오픈상태: false,
  프로그램창오픈상태_변경: (value) => set((state) => ({ 프로그램창오픈상태: !state.프로그램창오픈상태 })),
  프로그램닫기: (value) => set((state) => ({ 프로그램창오픈상태: false })),

  //센터 상세페이지 여닫기
  센터상세페이지오픈상태: false,
  센터상세페이지오픈상태_변경: (value) => set((state) => ({ 센터상세페이지오픈상태: !state.센터상세페이지오픈상태 })),

  센터상세페이지열기: (value) => {
    if (typeof window !== 'undefined') { // 클라이언트 측에서만 실행
      const targetWidth = window.innerWidth >= 1024 ? '320px' : '100%';
  
      gsap.to("#centerDetail", {
        duration: 0.5,
        display: 'block',
        width: targetWidth,
        ease: "power4.out",
        onComplete: () => {
          set((state) => ({ 센터상세페이지오픈상태: true }));
        },
      });
    }
  },
  

  센터상세페이지닫기: (value) => {
    gsap.to("#centerDetail", {
      duration: 0.5,
      // width: 0,
      display: 'none',
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
  모달창열기: () => {
    document.body.classList.add('modal-open');
    set({ 모달창오픈상태: true });
  },
  모달창닫기: () => {
    document.body.classList.remove('modal-open');
    set({ 모달창오픈상태: false });
  },

  선택된프로그램 : null,
  프로그램선택 : (value) => set((state) => ({ 선택된프로그램: value })),

  //모바일 메뉴 여닫기
  모바일메뉴오픈상태: false,
  모바일메뉴오픈상태_변경: (value) => set((state) => ({ 모바일메뉴오픈상태: !state.모바일메뉴오픈상태 })),
  모바일메뉴닫기 : (value) => set((state) => ({ 모바일메뉴오픈상태: false })),
}));
