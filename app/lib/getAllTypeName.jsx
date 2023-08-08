export default async function GetAllTypeName() {
    const 응답 = await fetch(
      "http://cn-mapping-wp.local/wp-json/custom/v1/center-type-terms"
    );
  
    if (!응답.ok) {
      throw new Error(`데이터를 불러오지 못했습니다.`);
    }
  
    return 응답.json();
  }
  