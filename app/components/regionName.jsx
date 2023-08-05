"use client";

import { useStore } from "@/stores/store";
import Link from "next/link";

export default function RegionNameBtn({ 지역명 }) {

  return (
    <li>
      <Link className="flex items-center justify-center px-2 py-1 border rounded" href={`/region/${지역명.slug}`}>
          <h2>{지역명.name}</h2>
      </Link>
    </li>
  );
}
