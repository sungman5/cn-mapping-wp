export default async function GetTypeClassList(slug) {
  const 응답 = await fetch(
    `http://cnmapping.cafe24.com/wp-json/custom/v1/center/${slug}`
    );

  if (!응답.ok) {
    throw new Error(`데이터를 불러오지 못했습니다.`);
  }

  return 응답.json();
}
