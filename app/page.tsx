import Image from "next/image";
import Course from "@/app/interface/Cource";
import CourseComponent from "@/app/components/CourseComponent";
import SliderComponent from "@/app/components/SliderComponent";


export default function Home() {
  return (
    <main>
        <CourseComponent />
        <Course />
        <SliderComponent />
    </main>
  );
}
