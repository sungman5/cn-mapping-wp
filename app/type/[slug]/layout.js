import TypeNameBtn from "@/app/components/typeName";
import GetAllTypeName from "@/app/lib/getAllTypeName";

export default async function TypeClassLayout(props) {
  const typeNameItem = await GetAllTypeName();

  return (
    <main>
      <h1 className="flex items-center justify-between mb-2 text-lg font-bold font-Pretendard"><p>유형별</p></h1>
      <ul className="grid grid-cols-3 gap-1 mb-8 text-sm">
        {typeNameItem.map((유형명) => {
          return <TypeNameBtn key={유형명.id} 유형명={유형명} />;
        })}
      </ul>
      {props.children}
    </main>
  );
}
