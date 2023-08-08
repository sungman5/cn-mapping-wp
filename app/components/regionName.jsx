"use client";

import { useStore } from "@/stores/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RegionNameBtn({ 지역명 }) {
  const getPathname = usePathname();
  const pathname = getPathname.split("/")[2];
  const { 지역선택 } = useStore();
  return (
    <li>
      <Link onClick={()=>{지역선택(지역명.slug)}} className={`flex items-center justify-center px-2 py-1 border rounded ${pathname === 지역명.slug ? 'text-primary border-primary' : ''}`} href={`/region/${지역명.slug}`}>
          <h2>{지역명.name}</h2>
      </Link>
    </li>
  );
}
