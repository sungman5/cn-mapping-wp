export default async function GetRegionCenterList(slug) {
    const 응답 = await fetch(`http://cn-mapping-wp.local/wp-json/custom/v1/region/${slug}`, {cache: "no-cache"});
    if(!응답.ok){
        throw new Error(`데이터를 불러오지 못했습니다.`);
    }
    return 응답.json();
}