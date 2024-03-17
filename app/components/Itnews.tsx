import { FaTags } from "react-icons/fa";
import { Card } from "flowbite-react";
import { IoIosTime } from "react-icons/io";
import { FaLayerGroup } from "react-icons/fa";
import { Courses } from "@/app/components/ItnewsObject";
type CourseProps = {
  courses: Courses[];
};
export default function CardCarousel({ courses }: CourseProps) {
  const firstFourCourses = courses.slice(0, 4);
  console.log(firstFourCourses);
  return (
    <div className="grid grid-cols-4 px-36 pt-8 gap-4">
      {firstFourCourses.map((course) => (
        <Card
          key={course.id}
          className="mb-5 shadow-none border-none"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
        >
          <img src={course.image} alt="" />
          <div className="flex justify-between">
            <div>
              <FaTags className="text-blue-800 inline" />
              <span>blog</span>
            </div>
            <div>24/12/2023</div>
          </div>
          <p className="text-gray-700 dark:text-gray-400 font-bold">
            {course.title}
          </p>
        </Card>
      ))}
    </div>
  );
}
