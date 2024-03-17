import Image from "next/image";
import Course from "@/app/interface/Cource";
import CarouselComponent from "@/app/components/CarouselComponent";
import SliderComponent from "@/app/components/SliderComponent";


export default function Home() {
  return (
    <main>
        <CarouselComponent />
        <Course />
        <SliderComponent />
    </main>
  );
}
