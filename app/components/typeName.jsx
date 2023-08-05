"use client";

import { useStore } from "@/stores/store";
import Link from "next/link";

export default function TypeNameBtn({ 유형명 }) {

  return (
    <li>
      <Link href={`/type/${유형명.slug}`}>
          <h2>{유형명.name}</h2>
      </Link>
    </li>
  );
}
