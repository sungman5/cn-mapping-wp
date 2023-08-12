export default async function GetSpecificProgramData(id) {
    const 응답 = await fetch(`https://cnmapping.cafe24.com/wp-json/custom/v1/specific_program/${id}`, {cache : 'no-cache'});
    if(!응답.ok){
        throw new Error(`데이터를 불러오지 못했습니다.`);
    }

    return 응답.json();
}