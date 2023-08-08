import { useStore } from "@/stores/store"



export default function Program({프로그램}) {

    const {모달창열기} = useStore();
    
    return(
            <li onClick={()=>{모달창열기()}} className="px-3 py-2 -mx-3 rounded cursor-pointer hover:bg-hoverbg hover:text-primary">
                <h2>{프로그램.name}</h2>
            </li>
    )
}