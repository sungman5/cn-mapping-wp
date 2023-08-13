"use client";

import { useStore } from "@/stores/store";
import Image from "next/image";

export default function ProgramNavBtn() {
  const { 프로그램창오픈상태, 프로그램창오픈상태_변경, 모바일메뉴닫기 } = useStore();
  return (
    <li
      className={`flex flex-col items-center justify-center w-20 gap-1 py-1 text-center rounded cursor-pointer hover:text-primary hover:bg-hoverbg ${프로그램창오픈상태 === true ? 'bg-hoverbg text-primary' : ''}}`}
      onClick={() => {
        프로그램창오픈상태_변경();
        모바일메뉴닫기();
      }}
    >
      <Image src={"/cn-nav-programs.svg"} width={48} height={48} alt="전체보기 아이콘" />
      <p>프로그램</p>
    </li>
  );
}
