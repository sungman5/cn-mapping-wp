"use client";

import { useStore } from "@/stores/store";
import Link from "next/link";

export default function RegionNameBtn({ 지역명 }) {

  return (
    <li>
      <Link href={`/region/${지역명.slug}`}>
          <h2>{지역명.name}</h2>
      </Link>
    </li>
  );
}
