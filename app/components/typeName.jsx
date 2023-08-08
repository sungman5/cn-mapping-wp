"use client";

import { useStore } from "@/stores/store";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TypeNameBtn({ 유형명 }) {
  const getPathname = usePathname();
  const pathname = getPathname.split("/")[2];

  return (
    <li>
      <Link prefetch={true}  className={`flex items-center justify-center px-2 py-1 border rounded ${pathname === 유형명.slug ? 'text-primary border-primary' : ''}`} href={`/type/${유형명.slug}`}>
          <h2>{유형명.name}</h2>
      </Link>
    </li>
  );
}
