"use client";

import { useStore } from "@/stores/store";
import { usePathname } from "next/navigation";

export default function CenterElement({ 센터 }) {
  const { 센터상세페이지열기, 센터아이디_변경 } = useStore();

  const 센터상세페이지상태변경 = () => {
    센터아이디_변경(센터.id);
    센터상세페이지열기();
    // 센터.id를 주소창에 추가.
  };

  return (
    <li
      key={센터.id}
      onClick={() => {
        센터상세페이지상태변경();
      }}
      className="cursor-pointer"
    >
      <h2 className="text-sm">{센터.title}</h2>
    </li>
  );
}
