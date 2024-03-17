import {Carousel} from "flowbite-react";

const CourseComponent = () => {
    return (
        <>
            <section className="h-[90vh]">
                <Carousel>
                    <img
                        src="./assets/slide1.png"
                        alt="..."/>
                    <img
                        src="https://api.istad.co/media/image/ca4fca81-5460-40c8-9d6b-e9270cd2ecae.png"
                        alt="..."/>
                    <img
                        src="./assets/slide2.png"
                        alt="..."/>
                </Carousel>
            </section>
        </>
    )
}
export default CourseComponent;