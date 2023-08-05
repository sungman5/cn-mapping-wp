import TypeCenterElement from "@/app/components/typeCenterElement";
import GetTypeClassList from "@/app/lib/getTypeClassList";

export default async function TypeClass(props) {
  const 유형별센터목록 = await GetTypeClassList(props.params.slug);
  console.log("센터목록", 유형별센터목록);

  return (
    <div>
      <h1>센터목록</h1>
      <ul className="text-sm">
        {유형별센터목록.map((센터) => {
          // return <li key={센터.id}>{센터.title}</li>;
          return <TypeCenterElement key={센터.id} 센터={센터} />;
        })}
      </ul>
    </div>
  );
}
