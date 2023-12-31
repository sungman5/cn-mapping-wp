import { useStore } from "@/stores/store";
import Image from "next/image";

export default function Program({프로그램}) {
  const { 모달창열기, 프로그램선택 } = useStore();
console.log(프로그램선택)
  
  return (
    <>
      <li
        onClick={() => {
          모달창열기();
          프로그램선택(프로그램);
        }}
        className="px-3 py-2 -mx-3 rounded cursor-pointer hover:bg-hoverbg hover:text-primary"
      >
        <h2 className="mb-1 overflow-hidden text-ellipsis whitespace-nowrap">{프로그램.program_title}</h2>
        <div className="flex gap-1 text-sm text-primary">
          <p>#{프로그램.program_metadata.program_price}</p>
          <p>#{프로그램.program_metadata.program_target}</p>
        </div>
      </li>
    </>
  );
}
