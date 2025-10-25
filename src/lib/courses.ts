import coursesData from './courses.json';
import type { Course } from './types';

const courses: Course[] = coursesData as Course[];

export function getAllCourses(): Course[] {
  return courses;
}

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}
