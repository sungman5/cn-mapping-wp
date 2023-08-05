"use client";

import { useStore } from "@/stores/store";
import Image from "next/image";

export default function ProgramNavBtn() {
  const { 프로그램창오픈상태, 프로그램창오픈상태_변경 } = useStore();
  console.log(프로그램창오픈상태);
  return (
    <li
      className="flex flex-col items-center justify-center w-20 gap-1 text-center cursor-pointer"
      onClick={() => {
        프로그램창오픈상태_변경();
      }}
    >
      <Image src={"/cn-nav-programs.svg"} width={48} height={48} alt="전체보기 아이콘" />
      <p>프로그램</p>
    </li>
  );
}
