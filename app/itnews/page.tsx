import React from "react";
import CardComponentIi from "@/app/components/ItnewsObject";
import PaginationComponent from "@/app/components/PaginationComponent";
export default function ItComponent() {
  return (
    <div>
      <p className="text-[28px] text-black font-bold pl-36 mt-10">
        USEFUL CONTENTS
      </p>
      <div className="mb-10">
        <CardComponentIi />
        <CardComponentIi />
        <CardComponentIi />
      </div>
      <PaginationComponent/>
    </div>
  );
}
