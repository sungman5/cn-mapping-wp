import RegionNameBtn from "@/app/components/regionName";
import GetAllRegionName from "@/app/lib/getAllRegionName";

export default async function RegionLayout(props) {
  const 지역이름목록 = await GetAllRegionName();
  return (
    <main>
      <h1>지역별</h1>
      <ul className="text-sm">
        {지역이름목록.map((지역명) => {
          return <RegionNameBtn key={지역명.id} 지역명={지역명} />;
        })}
      </ul>
      {props.children}
    </main>
  );
}
