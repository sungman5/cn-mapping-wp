import TypeCenterElement from "@/app/components/typeCenterElement";
import GetTypeClassList from "@/app/lib/getTypeClassList";

export default async function TypeClass(props) {
  const 유형별센터목록 = await GetTypeClassList(props.params.slug);
  console.log("센터목록", 유형별센터목록);

  return (
    <div>
      <h1 className="flex items-center justify-between mb-2 text-lg font-bold font-Pretendard"><p>시설 목록</p>&nbsp;<span className="text-sm font-normal text-applegray">총&nbsp;{유형별센터목록.length}개</span></h1>
      <ul>
        {유형별센터목록.map((센터) => {
          // return <li key={센터.id}>{센터.title}</li>;
          return <TypeCenterElement key={센터.id} 센터={센터} />;
        })}
      </ul>
    </div>
  );
}
