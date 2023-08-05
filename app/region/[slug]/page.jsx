import RegionCenterElement from "@/app/components/regionCenterElement";
import GetRegionCenterList from "@/app/lib/getRegionCenterList";

export default async function RegionClass(props) {
  const 지역별센터목록 = await GetRegionCenterList(props.params.slug);
  console.log('센터목록',지역별센터목록)
  
  return (
    <div>
      <h1>센터목록</h1>
      <ul className="text-sm">
        {지역별센터목록.map((센터) => {
          return (
            <RegionCenterElement key={센터.id} 센터={센터}/>
          );
        })}
      </ul>
    </div>
  );
}
