import CenterElement from "../components/centerElement";
import 모든센터목록불러오기 from "../lib/getAllCenterList";

export default async function ShowAllCenterList() {
  const 모든센터목록 = await 모든센터목록불러오기();
  
  return (
    <div>
      <h1>전체목록</h1>
      <ul>
        {모든센터목록.map((센터) => {
          return (
            <CenterElement key={센터.id} 센터={센터} />
          );
        })}
      </ul>
    </div>
  );
}
