"use client";

import { useStore } from "@/stores/store";
import Program from "../components/program";
import Image from "next/image";

export default function Programs({ 프로그램목록 }) {
  const { 프로그램창오픈상태, 모달창오픈상태, 모달창닫기 } = useStore();
  const programLists = 프로그램목록 || [];

  return (
    <>
      <section className={`${프로그램창오픈상태 === false ? "hidden" : "block"} p-8 w-80`}>
        <div>
          <h1 className="mb-2 text-lg font-bold font-Pretendard">프로그램</h1>
          <ul>
            {programLists.map((프로그램) => {
              return <Program key={프로그램.id} 프로그램={프로그램} />;
            })}
          </ul>
        </div>

        <div id="program-modal-dimmed" className={`${모달창오픈상태 === false ? "hidden" : "flex"} fixed inset-0 items-center justify-center shadow-md bg-black/90`}>
          <div id="program-modal-frame" className="flex flex-col justify-between w-10/12 px-4 py-6 bg-white rounded-md lg:p-8 lg:max-w-3xl lg:h-4/5">
            <div>
              <header className="mb-6">
                <h4 className="text-3xl font-bold font-Pretendard">프로그램 이름이 들어갑니다</h4>
              </header>
              <div id="program-modal-body" className="mb-8">
                <div className="flex gap-6 mb-6">
                  <Image src={"/sample-poster.jpg"} width={384} height={216} alt="프로그램 이미지" className="rounded-md" />
                  <div className="flex flex-col gap-6">
                    <div>
                      <h5 className="mb-1 text-lg font-bold font-Pretendard">주관</h5>
                      <p>서해안청소년수련원</p>
                    </div>
                    <div>
                      <h5 className="mb-1 text-lg font-bold font-Pretendard">대상</h5>
                      <p>청소년</p>
                    </div>
                    <div>
                      <h5 className="mb-1 text-lg font-bold font-Pretendard">접수기간</h5>
                      <p>2023년 9월 1일부터</p>
                      <p>2023년 9월 8일까지</p>
                    </div>
                    <div>
                      <h5 className="mb-1 text-lg font-bold font-Pretendard">문의처</h5>
                      <p>email@email.com</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="mb-1 text-lg font-bold font-Pretendard">소개</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit cum distinctio aperiam sapiente ipsam optio qui doloremque, quod quaerat dicta nobis illum
                    sint, corporis quibusdam nostrum officiis impedit facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus alias repellat, aliquid
                    obcaecati eius distinctio assumenda, corporis temporibus quod quasi explicabo ipsa magni? Similique minima veniam tempora tempore distinctio.
                  </p>
                </div>
              </div>
            </div>
            <footer className="flex justify-center gap-1">
              <button type="button" className="flex items-center gap-1 px-6 py-1 border rounded-md hover:bg-amber-400 bg-amber-300">
                참가신청
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </button>
              <button type="button" onClick={()=>{모달창닫기()}} className="px-8 py-2 border rounded-md hover:bg-slate-100">닫기</button>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}
