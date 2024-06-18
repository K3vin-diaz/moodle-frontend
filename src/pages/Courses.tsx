import { CourseList } from "@/components/course-list";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoodleApi } from "@/lib/moodle/moodleApi";
import { CoreCourseGetCourses } from "@/lib/moodle/types";
import { ChevronDown, Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState<CoreCourseGetCourses>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const api = new MoodleApi(
      "81010a4f0a482ad74f5c0c3319c5c23f",
      "http://localhost:8200/webservice/rest/server.php"
    );

    setLoading(true);
    api
      .getCourses()
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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
        <main className="p-12">
          <h1 className="text-2xl font-bold">Cursos</h1>
          {loading ? <p>Cargando...</p> : <CourseList courses={courses!} />}
        </main>
      </div>
    </>
  );
}

export default Courses;
