import RegionCenterElement from "@/app/components/regionCenterElement";
import GetRegionCenterList from "@/app/lib/getRegionCenterList";

export default async function RegionClass(props) {
  const 지역별센터목록 = await GetRegionCenterList(props.params.slug);

  return (
    <div>
      <h1 className="flex items-center justify-between mb-2 text-lg font-bold font-Pretendard">
        <p>시설 목록</p>&nbsp;<span className="text-sm font-normal text-applegray">총&nbsp;{지역별센터목록.length}개</span>
      </h1>
      <ul className="">
        {지역별센터목록.length === 0 ? (
          <p className=" text-slate-400">시설이 없습니다.</p>
        ) : (
          지역별센터목록.map((센터) => {
            return <RegionCenterElement key={센터.id} 센터={센터} />;
          })
        )}
      </ul>
    </div>
  );
}
