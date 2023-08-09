"use client";

import { useStore } from "@/stores/store";
import Program from "../components/program";
import Image from "next/image";
import ProgramModal from "../components/programModal";

export default function Programs({ 프로그램목록 }) {
  const { 프로그램창오픈상태, 모달창오픈상태, 모달창닫기, 선택된프로그램, 프로그램선택 } = useStore();
  const programLists = 프로그램목록 || [];
  console.log("프로그램목록", 프로그램목록);

  return (
    <>
      <section className={`${프로그램창오픈상태 === false ? "hidden" : "block"} p-8 w-80`}>
        <div>
          <h1 className="mb-2 text-lg font-bold font-Pretendard">프로그램</h1>
          <ul>
            {programLists.map((프로그램) => {
              return <Program key={프로그램.program_id} 프로그램={프로그램} />;
            })}
          </ul>
        </div>
        {/* {programLists.map((프로그램) => {
          return <ProgramModal key={프로그램.program_id} 프로그램={프로그램} />;
        })} */}
        {모달창오픈상태 && <ProgramModal 프로그램={선택된프로그램}  />}
      </section>
    </>
  );
}