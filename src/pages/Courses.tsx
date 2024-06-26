import { CourseList } from "@/components/course-list";
import { MoodleApi } from "@/lib/moodle/moodleApi";
import { useQuery } from "react-query";

function Courses() {
  const { data, isLoading } = useQuery("courses", {
    queryFn: () => MoodleApi.getCourses(),
  });

  return (
    <>
      <h1 className="text-2xl font-bold">Cursos</h1>
      {isLoading ? <p>Cargando...</p> : !data ? <p>No hay cursos</p> : <CourseList courses={data} />}
    </>
  );
}

export default Courses;
