'use client'


import Lottie from "react-lottie-player";
import loading from "../public/loading.json";
export default function Loading() {
  return (
    <div className="flex flex-col items-center w-full mt-8 ">
      <Lottie loop animationData={loading} play style={{ width: 32, height: 32 }} />
      <div>로딩중입니다.</div>
    </div>
  );
}
