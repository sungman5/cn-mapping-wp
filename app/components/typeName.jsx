"use client";

import { useStore } from "@/stores/store";
import Link from "next/link";

export default function TypeNameBtn({ 유형명 }) {

  return (
    <li>
      <Link className="flex items-center justify-center px-2 py-1 border rounded" href={`/type/${유형명.slug}`}>
          <h2>{유형명.name}</h2>
      </Link>
    </li>
  );
}
