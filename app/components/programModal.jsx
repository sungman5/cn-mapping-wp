import { useStore } from "@/stores/store";
import Image from "next/image";
import Link from "next/link";

export default function ProgramModal({ 프로그램 }) {
  const { 모달창오픈상태, 모달창닫기 } = useStore();
  return (
    <div id="program-modal-dimmed" className={`${모달창오픈상태 === false ? "hidden" : "flex"} fixed inset-0 items-center justify-center shadow-md bg-black/50`}>
      <div id="program-modal-frame" className="flex flex-col justify-between w-10/12 px-4 py-6 bg-white rounded-md lg:p-8 lg:max-w-3xl lg:h-4/5">
        <div>
          <header className="mb-6">
            <h4 className="text-3xl font-bold font-Pretendard">{프로그램.program_title}</h4>
          </header>
          <div id="program-modal-body" className="mb-8">
            <div className="flex gap-6 mb-6">
              <Image src={"/sample-poster.jpg"} width={384} height={216} alt="프로그램 이미지" className="rounded-md" />
              <div className="flex flex-col gap-6">
                <div>
                  <h5 className="mb-1 text-lg font-bold font-Pretendard">주관</h5>
                  <p>{프로그램.center_info.center_title}</p>
                </div>
                <div>
                  <h5 className="mb-1 text-lg font-bold font-Pretendard">대상</h5>
                  <p>{프로그램.program_metadata.program_target}</p>
                </div>
                <div>
                  <h5 className="mb-1 text-lg font-bold font-Pretendard">접수기간</h5>
                  <p>{프로그램.program_metadata.program_regist_start}부터</p>
                  <p>{프로그램.program_metadata.program_regist_end}까지</p>
                </div>
                <div>
                  <h5 className="mb-1 text-lg font-bold font-Pretendard">문의처</h5>
                  <p>{프로그램.center_info.center_email}</p>
                  <p>{프로그램.center_info.center_tel}</p>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-1 text-lg font-bold font-Pretendard">소개</h5>
              <p>{프로그램.program_content}</p>
            </div>
          </div>
        </div>
        <footer className="flex justify-center gap-1">
          <Link
            href={프로그램.program_metadata.program_direct_link}
            target="_blank"
            className="flex items-center gap-1 px-6 py-1 border rounded-md hover:bg-amber-400 bg-amber-300"
          >
            참가신청
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </Link>
          <button
            type="button"
            onClick={() => {
              모달창닫기();
            }}
            className="px-8 py-2 border rounded-md hover:bg-slate-100"
          >
            닫기
          </button>
        </footer>
      </div>
    </div>
  );
}
