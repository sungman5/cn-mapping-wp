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
      센터상세데이터_변경(res);
    };
    fetchData();
  }, [센터상세데이터_변경, 센터아이디]);

  return (
    <section className={`${센터상세페이지오픈상태 === false ? "hidden" : "block"} font-NanumSquareRound drop-shadow-sm flex flex-col gap-8 p-6 w-80 border-r`}>
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-lg font-bold translate-y-[1px] font-Pretendard">{센터상세데이터.title}</h1>
        <div
          className="text-xs border rounded px-1 py-0.5 flex gap-0.5 items-center cursor-pointer hover:text-primary hover:border-primary hover:bg-hoverbg"
          onClick={() => {
            센터상세페이지닫기();
          }}
        >
          닫기
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="mb-1 font-bold font-Pretendard">주소</h2>
        {!센터상세데이터.center_address ? <p>-</p> : <p>{센터상세데이터.center_address}</p>}
        <p className="text-sm font-bold text-blue-600">오시는 길</p>
      </div>
      <div>
        <h2 className="mb-1 font-bold font-Pretendard">대표번호</h2>
        {!센터상세데이터.center_tel ? <p>-</p> : <p className="font-NanumSquareRound">{센터상세데이터.center_tel}</p>}
      </div>
      <div>
        <h2 className="mb-1 font-bold font-Pretendard">대표 메일</h2>
        {!센터상세데이터.center_email ? <p>-</p> : <p>{센터상세데이터.center_email}</p>}
      </div>
      <div className="flex gap-2 text-sm">
        <div>
          {!센터상세데이터.center_website ? (
            <p className="text-slate-400 flex items-center gap-1 px-4 py-1.5 border rounded-full border-slate-300 cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              웹사이트
            </p>
          ) : (
            <Link className="px-4 py-1.5 border flex items-center gap-1 rounded-full border-slate-700" href={`${센터상세데이터.center_website}`} target={"_blank"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              웹사이트
            </Link>
          )}
        </div>
        <div>
          {!센터상세데이터.center_sns ? (
            <p className="text-slate-400 flex items-center gap-1 px-4 py-1.5 border rounded-full border-slate-300 cursor-not-allowed">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              SNS
            </p>
          ) : (
            <Link className=" px-4 py-1.5 border flex items-center gap-1 rounded-full border-slate-700" href={`${센터상세데이터.center_website}`} target={"_blank"}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              SNS
            </Link>
          )}
        </div>
      </div>
      <div>
        <h2 className="mb-2 font-bold font-Pretendard">소개</h2>
        <p className="text-sm leading-6">{센터상세데이터.content}</p>
      </div>
    </section>
  );
}
