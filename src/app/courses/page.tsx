import { CourseCard } from '@/components/course-card';
import { getAllCourses } from '@/lib/courses';

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">All Courses</h1>
        <p className="text-lg text-muted-foreground mt-2">Find your next learning adventure.</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
