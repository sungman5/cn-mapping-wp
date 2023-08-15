'use client';

import { useStore } from "@/stores/store";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

  const {모바일메뉴오픈상태, 모바일메뉴오픈상태_변경} = useStore();

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b 2xl:h-24 2xl:px-11">
      <div className="flex items-center gap-4">
        <svg onClick={()=>{모바일메뉴오픈상태_변경()}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 xl:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <h1 className="text-lg xl:text-2xl">
          <Link href={"/"} className="font-bold font-NanumSquareRound">
            디디다: 충청남도 청소년활동자원맵
          </Link>
        </h1>
      </div>
      <Image className="hidden w-40 h-auto xl:block" src={"/cn-brand-logo.svg"} width={214} height={48} alt="청소년활동진흥원 브랜드이미지"></Image>
    </header>
  );
}
