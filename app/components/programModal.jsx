import { useStore } from "@/stores/store";
import Image from "next/image";
import Link from "next/link";

export default function ProgramModal() {
  const { 모달창오픈상태, 모달창닫기, 선택된프로그램 } = useStore();
  console.log("프로그램모달", 선택된프로그램);
  return (
    <div id="program-modal-dimmed" className={`${모달창오픈상태 === false ? "hidden" : "flex"} z-50 fixed inset-0 items-center justify-center shadow-md bg-black/50`}>
      <div id="program-modal-frame" className="relative flex flex-col justify-between w-10/12 overflow-y-auto bg-white rounded-md h-3/4 lg:p-8 lg:max-w-3xl lg:h-4/5">
        <div className="px-4 py-6 ">
          <header className="mb-6">
            {/* <h4 className="text-3xl font-bold font-Pretendard">{프로그램.program_title}</h4> */}
            <h4 className="text-lg font-bold lg:text-3xl font-Pretendard">{선택된프로그램.program_title}</h4>
          </header>
          <div id="program-modal-body" className="mb-8">
            <div className="flex flex-col gap-6 mb-6 lg:flex-row">
              {
                선택된프로그램.poster_url === '' ? <Image src={'/cn-program-poster.png'} width={384} height={216} alt="프로그램 이미지" className="rounded-md" /> : <Image src={선택된프로그램.poster_url} width={384} height={216} alt="프로그램 이미지" className="rounded-md" />
              }
              
              <div className="flex flex-col gap-2 text-sm lg:gap-6 lg:text-base">
                <div className="flex items-center gap-2 ">
                  <h5 className="px-1.5 py-0.5 text-sm font-semibold border rounded bg-primary/5 border-primary text-primary font-Pretendard w-fit">주관</h5>
                  <p>{선택된프로그램.center_info.center_title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h5 className="px-1.5 py-0.5 text-sm font-semibold border rounded bg-primary/5 border-primary text-primary font-Pretendard w-fit">대상</h5>
                  <p>{선택된프로그램.program_metadata.program_target}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h5 className="px-1.5 py-0.5 text-sm font-semibold border rounded bg-primary/5 border-primary text-primary font-Pretendard w-fit">수용인원</h5>
                  <p>{선택된프로그램.program_metadata.program_capacity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h5 className="px-1.5 py-0.5 text-sm font-semibold border rounded bg-primary/5 border-primary text-primary font-Pretendard w-fit">운영시기</h5>
                  <p>{선택된프로그램.program_metadata.program_period}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h5 className="px-1.5 py-0.5 text-sm font-semibold border rounded bg-primary/5 border-primary text-primary font-Pretendard w-fit">운영회기</h5>
                  <p>{선택된프로그램.program_metadata.program_session}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h5 className="px-1.5 py-0.5 text-sm font-semibold border rounded bg-primary/5 border-primary text-primary font-Pretendard w-fit">참가비용</h5>
                  <p>{선택된프로그램.program_metadata.program_session}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h5 className="px-1.5 py-0.5 text-sm font-semibold border rounded bg-primary/5 border-primary text-primary font-Pretendard w-fit">운영장소</h5>
                  <p>{선택된프로그램.program_metadata.program_place}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h5 className="px-1.5 py-0.5 text-sm font-semibold border rounded bg-primary/5 border-primary text-primary font-Pretendard w-fit">문의</h5>
                  <div>
                    <p>{선택된프로그램.center_info.center_email}</p>
                    <p>{선택된프로그램.center_info.center_tel}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-1 text-base font-bold lg:text-lg font-Pretendard">소개</h5>
              <p>{선택된프로그램.program_content}</p>
            </div>
          </div>
        </div>
        <footer className="sticky bottom-0 flex justify-center gap-1 py-4 bg-white">
          <Link
            href={선택된프로그램.program_metadata.program_direct_link}
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
