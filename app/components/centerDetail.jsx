'use client'

import { useStore } from "@/stores/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import GetMetaData from "../lib/getMetaData";

export default function CenterDetail() {
  const { 센터아이디, 센터상세페이지오픈상태, 센터상세페이지닫기 } = useStore();

  return (
    <section
      className={`${센터상세페이지오픈상태 === false ? "hidden" : "block"}`}
    >
      센터 상세페이지닙니다.
      {센터아이디}
      <button
        onClick={() => {
          센터상세페이지닫기();
        }}
      >
        닫기
      </button>
    </section>
  );
}
