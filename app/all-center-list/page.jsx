import CenterElement from "../components/centerElement";
import 모든센터목록불러오기 from "../lib/getAllCenterList";

export default async function ShowAllCenterList() {
  const 모든센터목록 = await 모든센터목록불러오기();

  return (
    <>
      <h1 className="sticky top-0 left-0 right-0 flex items-center justify-between px-3 pb-2 mb-2 text-lg font-bold bg-white font-Pretendard">
        <p>전체보기</p>&nbsp;<span className="text-sm font-normal text-applegray">총&nbsp;{모든센터목록.length}개</span>
      </h1>
      <div className="h-[calc(100vh-8rem)] overflow-y-auto overflow-x-hidden px-3 hide-scrollbar">
        <ul>
          {모든센터목록.map((센터) => {
            return <CenterElement key={센터.id} 센터={센터} />;
          })}
        </ul>
      </div>
    </>
  );
}
