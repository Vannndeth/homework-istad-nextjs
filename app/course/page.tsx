import CardCourseComponent from "@/app/components/CourseCardComponent";
import React from "react";

export default function page() {
  return (
    <div>
      <p className="text-[28px] text-black font-bold pl-36 mt-10">COURSES</p>
      <div className="mb-10">
        <CardCourseComponent />
      </div>
    </div>
  );
}
