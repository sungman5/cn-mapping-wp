"use client";

import { useStore } from "@/stores/store";
import Program from "../components/program";
import Image from "next/image";
import ProgramModal from "../components/programModal";

export default function Programs({ 프로그램목록 }) {
  const { 프로그램창오픈상태, 모달창오픈상태, 프로그램닫기, 센터상세데이터, 선택된프로그램 } = useStore();
  const programLists = 프로그램목록 || [];

  return (
    <>
      <section className={`${프로그램창오픈상태 === false ? "hidden" : "block"} p-6 w-80 border-r bg-white h-screen overflow-y-auto border-slate-200 shadow-md`}>
        <div className="relative">
          <div className="sticky top-0 left-0 right-0 flex items-center justify-between mb-6 bg-white">
            <h1 className="text-lg font-bold font-Pretendard">프로그램</h1>
            <button
              type="button"
              className="text-xs border rounded px-1 py-0.5 flex gap-0.5 items-center cursor-pointer hover:text-primary hover:border-primary hover:bg-hoverbg"
              onClick={() => {
                프로그램닫기();
              }}
            >
              닫기
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul>
            {programLists.map((프로그램) => {
              return <Program key={프로그램.program_id} 프로그램={프로그램} 센터상세데이터={센터상세데이터} />;
            })}
          </ul>
        </div>
        {/* {programLists.map((프로그램) => {
          return <ProgramModal key={프로그램.program_id} 프로그램={프로그램} />;
        })} */}
      </section>
      {모달창오픈상태 && <ProgramModal 선택된프로그램={선택된프로그램} />}
    </>
  );
}
