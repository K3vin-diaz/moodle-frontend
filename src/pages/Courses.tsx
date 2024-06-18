import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown, Ellipsis } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Courses() {
  const courses = [
    {
      image: "https://picsum.photos/368/237",
      title: "Course 1",
      description: "Description 1",
    },
    {
      image: "https://picsum.photos/368/237",
      title: "Course 1",
      description: "Description 1",
    },
    {
      image: "https://picsum.photos/368/237",
      title: "Course 1",
      description: "Description 1",
    },
  ];

  return (
    <>
      <header className="border-[1px] px-4 py-2 border-b-gray-200">
        <nav className="flex flex-row justify-between">
          <Button>Menu</Button>
          <p className="text-xl font-bold">INSTITUTO TECNOLOGICO DE SONORA</p>
          <div className="flex gap-3">
            <Button variant={"ghost"}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <ChevronDown />
            </Button>
            <Button>
              <Ellipsis />
            </Button>
          </div>
        </nav>
      </header>
      <div className="flex h-screen">
        <aside className="flex flex-col justify-between border-[1px] border-y-0 p-2 border-r-gray-200 w-64 max-w-64">
          <div>
            <p className="font-bold">iVirtual</p>
            <p>Discover</p>
            <hr className="my-3" />
            <a href="/" className="font-bold">
              Courses
            </a>
          </div>
          <div>
            <p>Cursos archivados</p>
            <p>ajustes</p>
          </div>
        </aside>
        <main>
          <div className="grid grid-cols-3 gap-4 p-4">
            {courses.map((course) => (
              <CourseCard {...course} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Courses;

const CourseCard = ({ image, title, description }) => {
  return (
    <Card className="p-0 m-0">
      <CardHeader className="p-0">
        <img src={image} alt={title} />
      </CardHeader>
      <CardContent className="py-3 text-white bg-black">
        <p>{title}</p>
      </CardContent>
    </Card>
  );
};
