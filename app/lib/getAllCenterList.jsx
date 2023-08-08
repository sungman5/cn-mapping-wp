export default async function 모든센터목록불러오기() {
  const 응답 = await fetch(
    "https://cnmapping.cafe24.com/wp-json/custom/v1/all-center-posts"
  );

  if (!응답.ok) {
    throw new Error(`데이터를 불러오지 못했습니다.`);
  }

  return 응답.json();
}
