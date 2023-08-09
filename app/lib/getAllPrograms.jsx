export default async function GetAllPrograms() {
    const 응답 = await fetch('http://cnmapping.cafe24.com/wp-json/custom/v1/program_with_center_info/', {cache : 'no-cache'});
    if(!응답.ok){
        throw new Error(`데이터를 불러오지 못했습니다.`);
    }

    return 응답.json();
}