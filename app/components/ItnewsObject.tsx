import CardCarousel from "@/app/components/Itnews";
export type Courses = {
    readonly id : number;
    title :string;
    image: string;
    description : string
}
function CardComponentIi () {
    const courses1: Courses[] = [
        {
            "id": 1,
            "title": "Flutter Mobile Development",
            "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional."
        },
        {
            "id": 2,
            "title": "iOS Development",
            "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
            "description": "iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.",
        },
        {
            "id": 3,
            "title": "DEVOPS ENGINEERING",
            "image": "https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png",
            "description": "This course will provide you with in-depth knowledge on how to build applications on the cloud. This program will help you learn the best practices for deploying SaaS, PaaS, and IaaS applications on Server. Master DevOps tools to automate and improve the overall efficiency and delivery of software applications.",
        },
        {
            "id": 4,
            "title": "DOCKER",
            "image": "https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png",
            "description": "Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,",
        },
        {
            "id": 1,
            "title": "Flutter Mobile Development",
            "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional."
        },
        {
            "id": 2,
            "title": "iOS Development",
            "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
            "description": "iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.",
        },
        {
            "id": 3,
            "title": "DEVOPS ENGINEERING",
            "image": "https://api.istad.co/media/image/835a7298-dbab-448d-8229-ee8a555c4846.png",
            "description": "This course will provide you with in-depth knowledge on how to build applications on the cloud. This program will help you learn the best practices for deploying SaaS, PaaS, and IaaS applications on Server. Master DevOps tools to automate and improve the overall efficiency and delivery of software applications.",
        },
        {
            "id": 4,
            "title": "DOCKER",
            "image": "https://api.istad.co/media/image/3d7beaad-309a-4f2f-91e2-b3be705ef3f6.png",
            "description": "Docker is a containerized tool that designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package. This course covers,",
        }
     
      ]
    return(
        <div className="flex justify-center">
        <div className="ml-[0px]">
            <CardCarousel courses={courses1}/>
        </div>
        </div>
    )
}
export default CardComponentIi;