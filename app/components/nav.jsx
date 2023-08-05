"use client";

import Link from "next/link";
import ProgramNavBtn from "./programNavBtn";
import { useStore } from "@/stores/store";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const { 센터상세페이지닫기 } = useStore();
  const pathname = usePathname();
  
  console.log(pathname)

  return (
    <nav className="h-screen p-8 bg-white border-r border-stone-300">
      <ul className="flex flex-col gap-8">
        <li className={`flex flex-col items-center justify-center w-20 gap-1 py-1 text-center rounded hover:text-primary hover:bg-hoverbg`}>
          <Link
            onClick={() => {
              센터상세페이지닫기();
            }}
            href={"/all-center-list"}
          >
            <Image src={"/cn-nav-main.svg"} width={48} height={48} alt="전체보기 아이콘" />
            <p>전체보기</p>
          </Link>
        </li>
        <li className={`flex flex-col items-center justify-center w-20 gap-1 py-1 text-center rounded hover:text-primary hover:bg-hoverbg`}>
          <Link
            onClick={() => {
              센터상세페이지닫기();
            }}
            href={"/type/training-no-bed"}
          >
            <Image src={"/cn-nav-type.svg"} width={48} height={48} alt="전체보기 아이콘" />
            <p>유형별</p>
          </Link>
        </li>
        <li className={`flex flex-col items-center justify-center w-20 gap-1 py-1 text-center rounded hover:text-primary hover:bg-hoverbg`}>
          <Link
            onClick={() => {
              센터상세페이지닫기();
            }}
            href={"/region/gongju"}
          >
            <Image src={"/cn-nav-region.svg"} width={48} height={48} alt="전체보기 아이콘" />
            <p>지역별</p>
          </Link>
        </li>
        {/* 프로그램 메뉴 */}
        <ProgramNavBtn />
        <li className={`flex flex-col items-center justify-center w-20 gap-1 py-1 text-center rounded hover:text-primary hover:bg-hoverbg`}>
          <Link href={"/region/gongju"}>
            <Image src={"/cn-nav-statistics.svg"} width={48} height={48} alt="통계 아이콘" />
            <p>통계</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
