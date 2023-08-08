"use client";

import { useStore } from "@/stores/store";

export default function RegionCenterElement({ 센터 }) {
  const { 센터아이디_변경, 센터상세페이지열기, 센터아이디, 지역선택 } = useStore();

  const 센터상세페이지상태변경 = () => {
    센터아이디_변경(센터.id);
    센터상세페이지열기();
  };
  

  return (
    <li
      className={`${센터아이디 === 센터.id ? 'bg-hoverbg text-primary' :''} px-3 py-2 -mx-3 rounded cursor-pointer hover:bg-hoverbg hover:text-primary`}
      onClick={() => {
        센터상세페이지상태변경();
      }}
    >
      {센터.title}
    </li>
  );
}
