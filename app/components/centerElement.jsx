"use client";

import { useStore } from "@/stores/store";

export default function CenterElement({ 센터 }) {
  const { 센터상세페이지열기, 센터아이디_변경, 센터아이디, 선택된지역, 지역선택 } = useStore();
  console.log("센터", 센터);
  console.log("센터-region", 센터.region);
  console.log("센터-self", 센터._links.self);
  console.log("센터-collection", 센터._links.collection);
  console.log("센터-about", 센터._links.about);
  console.log("센터-links", 센터._links);
  const 센터상세페이지상태변경 = () => {
    센터아이디_변경(센터.id);
    센터상세페이지열기();
    지역선택(센터.region);
    // 지역선택(센터.region_slug);
  };

  return (
    <li
      className={`px-3 py-2 -mx-3 rounded cursor-pointer  hover:bg-hoverbg hover:text-primary ${센터아이디 === 센터.id ? "bg-hoverbg text-primary" : ""}`}
      key={센터.id}
      onClick={() => {
        센터상세페이지상태변경();
      }}
    >
      {/* <h2>{센터.name}</h2> */}
      <h2>{센터.title.rendered}</h2>
    </li>
  );
}
