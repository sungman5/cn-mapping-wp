'use client'

import { useStore } from "@/stores/store"

export default function ProgramNavBtn() {

    const {프로그램창오픈상태, 프로그램창오픈상태_변경} = useStore();
    console.log(프로그램창오픈상태)
    return(
        <h3 className="cursor-pointer" onClick={()=>{프로그램창오픈상태_변경()}} >
            프로그램@@
        </h3>
    )
}