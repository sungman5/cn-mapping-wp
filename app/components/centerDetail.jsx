"use client";

import { useStore } from "@/stores/store";
import { useEffect } from "react";
import GetMetaData from "../lib/getMetaData";
import Link from "next/link";

export default function CenterDetail() {
  const { 센터아이디, 센터상세페이지오픈상태, 센터상세페이지닫기, 센터상세데이터, 센터상세데이터_변경 } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetMetaData(센터아이디);
      console.log("레스레스", res);
      센터상세데이터_변경(res);
    };
    fetchData();
  }, [센터상세데이터_변경, 센터아이디]);

  console.log("으이?", typeof 센터상세데이터);

  return (
    <section className={`${센터상세페이지오픈상태 === false ? "hidden" : "block"} font-NanumSquareRound w-80 p-8 border-r`}>
      <div className="flex items-center justify-between mb-6 ">
        <h1 className="text-lg font-bold font-Pretendard">{센터상세데이터.title}</h1>
        <svg
          onClick={() => {
            센터상세페이지닫기();
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer hover:bg-slate-200"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

        {/* <button className="px-2 py-1 border rounded">닫기</button> */}
      </div>
      <div className="mb-8">
        <h2 className="mb-2 font-bold border-b font-Pretendard">주소</h2>
        {!센터상세데이터.center_address ? <p>-</p> : <p>{센터상세데이터.center_address}</p>}
      </div>
      <div className="mb-8">
        <h2 className="mb-2 font-bold border-b font-Pretendard">대표번호</h2>
        {!센터상세데이터.center_tel ? <p>-</p> : <p className="font-NanumSquareRound">{센터상세데이터.center_tel}</p>}
      </div>
      <div className="mb-8">
        <h2 className="mb-2 font-bold border-b font-Pretendard">대표 메일</h2>
        {!센터상세데이터.center_email ? <p>-</p> : <p>{센터상세데이터.center_email}</p>}
      </div>
      <div className="mb-8">
        {!센터상세데이터.center_website ? (
          <p className="text-slate-400">웹사이트ddd</p>
        ) : (
          <Link href={`${센터상세데이터.center_website}`} target={"_blank"}>
            웹사이트
          </Link>
        )}
      </div>
      <div>
        {!센터상세데이터.center_sns ? (
          <p className="text-slate-400">SNS</p>
        ) : (
          <Link href={`${센터상세데이터.center_website}`} target={"_blank"}>
            SNS
          </Link>
        )}
      </div>
    </section>
  );
}
