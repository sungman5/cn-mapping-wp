import RegionNameBtn from "@/app/components/regionName";
import GetAllRegionName from "@/app/lib/getAllRegionName";
import Image from "next/image";

export default async function RegionLayout(props) {
  const 지역이름목록 = await GetAllRegionName();
  return (
    <main>
      <h1 className="flex items-center gap-1 mb-2 text-lg font-bold font-Pretendard">
        <span>지역별 </span>
        {/* <Image className="-translate-y-0.5" src={"cn-nav-region-2.svg"} alt="지역아이콘" width={24} height={24} /> */}
      </h1>
      <ul className="grid grid-cols-5 gap-1 mb-8 text-sm">
        {지역이름목록.map((지역명) => {
          return <RegionNameBtn key={지역명.id} 지역명={지역명} />;
        })}
      </ul>
      {props.children}
    </main>
  );
}
