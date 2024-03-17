import {Courses} from "@/app/interface/CoursePage";
import { Card } from "flowbite-react";
import {IoTime} from "react-icons/io5";
import {FaLayerGroup} from "react-icons/fa";

type CourseProps = {
    courses: Courses[];
}
const CourseCardComponent = ({courses} :CourseProps) =>{
    return(
        <>
            <section className="container mx-auto">
                <h1 className="uppercase text-3xl font-extrabold pl-48 mb-4">Course</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    {courses.map((course, index) => (
                        <Card key={index} className="max-w-sm" imgSrc={course?.image || "NO Image"} horizontal>
                            <div className="flex flex-col">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                                    {course?.title || "Default Title"}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                                    {course?.description || "Default Description"}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FaLayerGroup />
                                <p className="pl-1">Medium</p>
                            </div>
                            <div className="flex items-center">

                                <IoTime/>
                                <p className="pl-1">60 hour</p>
                            </div>

                        </Card>))}

                </div>
            </section>
        </>
    )
}

export default CourseCardComponent;