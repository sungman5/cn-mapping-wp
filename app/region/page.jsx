import Image from "next/image";

export default function RegionPage(){
    return(
        <main>
            <Image className="mx-auto mb-8" src={"/cn-pass-logo.svg"} width={80} height={100} alt="충남 활동진흥원 캐릭터"></Image>
            <div className="px-4 py-2 mx-auto text-sm border rounded-full w-fit">시설목록을 보려면 지역을 선택해주세요!</div>
        </main>
    )
}