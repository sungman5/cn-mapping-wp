'use client'

import Link from "next/link";
import ProgramNavBtn from "./programNavBtn";
import { useStore } from "@/stores/store";

export default function Nav(){

const {센터상세페이지닫기} = useStore();


    return(
        <nav className="bg-pink-200 border-r border-stone-300">
            <ul>
              <li>
                <Link onClick={()=>{센터상세페이지닫기()}} href={"/all-center-list"}>전체보기</Link>
              </li>
              <li>
                <Link onClick={()=>{센터상세페이지닫기()}} href={"/type/training-no-bed"}>유형별</Link>
              </li>
              <li>
                <Link onClick={()=>{센터상세페이지닫기()}} href={"/region/gongju"}>지역별</Link>
              </li>
              <li>
                <ProgramNavBtn />
              </li>
              <li>통계</li>
            </ul>
          </nav>
    )
}