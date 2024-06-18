import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CoreCourseGetCourses, Course } from "@/lib/moodle/types";

export const CourseList = ({ courses }: { courses: CoreCourseGetCourses }) => {
  if (!courses) {
    return <p>Loading...</p>;
  }

  if (courses.length === 0) {
    return <p>No courses found</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-12">
      {courses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};

export const CourseCard = ({ displayname, summary, id }: Course) => {
  const image = `https://picsum.photos/368/237`;

  const courseUrl = `/courses/${id}`;

  return (
    <a href={courseUrl}>
      <Card className="p-0 m-0">
        <CardHeader className="p-0">
          <img src={image} alt={displayname} />
        </CardHeader>
        <CardContent className="py-3 text-white bg-black">
          <p className="font-bold">{displayname}</p>
          <p>{summary}</p>
        </CardContent>
      </Card>
    </a>
  );
};
