import TypeNameBtn from "@/app/components/typeName";
import GetAllTypeName from "@/app/lib/getAllTypeName";

export default async function TypeClassLayout(props) {
  const typeNameItem = await GetAllTypeName();

  return (
    <main>
      <h1>유형별 목록</h1>
      <ul className="text-sm">
        {typeNameItem.map((유형명) => {
          return <TypeNameBtn key={유형명.id} 유형명={유형명} />;
        })}
      </ul>
      {props.children}
    </main>
  );
}
