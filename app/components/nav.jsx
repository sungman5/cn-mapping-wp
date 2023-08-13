"use client";

import Link from "next/link";
import ProgramNavBtn from "./programNavBtn";
import { useStore } from "@/stores/store";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Nav() {
  const { 센터상세페이지닫기, 모바일메뉴오픈상태, 모바일메뉴닫기 } = useStore();

  const getPathname = usePathname();
  const pathname = getPathname.split("/")[1];

  return (
    <nav className={`${모바일메뉴오픈상태 === false ? "hidden" : "block absolute left-0 top-0 z-50 shadow-lg"} h-screen p-8 bg-white border-r xl:block border-stone-300`}>
      <ul className="flex flex-col gap-6">
        <li
          className={`flex flex-col items-center justify-center w-20 gap-1 py-1 text-center rounded hover:text-primary ${
            pathname === "all-center-list" ? "bg-hoverbg text-primary" : ""
          } hover:bg-hoverbg`}
        >
          <Link
            onClick={() => {
              센터상세페이지닫기();
              모바일메뉴닫기();
            }}
            href={"/all-center-list"}
          >
            <Image src={"/cn-nav-main.svg"} className="inline-block" width={48} height={48} alt="전체보기 아이콘" />
            <p>전체보기</p>
          </Link>
        </li>
        <li
          className={`${
            pathname === "type" ? "bg-hoverbg text-primary" : ""
          } flex flex-col items-center justify-center w-20 gap-1 py-1 text-center rounded hover:text-primary hover:bg-hoverbg`}
        >
          <Link
            onClick={() => {
              센터상세페이지닫기();
              모바일메뉴닫기();
            }}
            href={"/type/culturecenter"}
          >
            <Image src={"/cn-nav-type.svg"} width={48} height={48} alt="전체보기 아이콘" />
            <p>유형별</p>
          </Link>
        </li>
        <li
          className={`${
            pathname === "region" ? "bg-hoverbg text-primary" : ""
          } flex flex-col items-center justify-center w-20 gap-1 py-1 text-center rounded hover:text-primary hover:bg-hoverbg`}
        >
          <Link
            onClick={() => {
              센터상세페이지닫기();
              모바일메뉴닫기();
            }}
            href={"/region"}
          >
            <Image src={"/cn-nav-region.svg"} width={48} height={48} alt="전체보기 아이콘" />
            <p>지역별</p>
          </Link>
        </li>
        {/* 프로그램 메뉴 */}
        <ProgramNavBtn />
        <li

          className={`flex flex-col items-center justify-center w-20 ${
            pathname === "statistics" ? "bg-hoverbg text-primary" : ""
          } gap-1 py-1 text-center rounded hover:text-primary hover:bg-hoverbg`}
        >
          <Link href={"/statistics"} onClick={()=>{모바일메뉴닫기();}}>
            <Image src={"/cn-nav-statistics.svg"} width={48} height={48} alt="통계 아이콘" />
            <p>통계</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
