"use client";

import { useStore } from "@/stores/store";
import Program from "../components/program";

export default function Programs({ 프로그램목록 }) {
  const { 프로그램창오픈상태 } = useStore();
  const programLists = 프로그램목록 || [];

  return (
    <div className={`${프로그램창오픈상태 === false ? "hidden" : "block"} p-8 w-80`}>
      <h1 className="mb-2 text-lg font-bold font-Pretendard">프로그램</h1>
      <ul>
        {programLists.map((프로그램) => {
          return <Program key={프로그램.id} 프로그램={프로그램} />;
        })}
      </ul>
    </div>
  );
}
