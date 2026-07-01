import { redirect } from 'next/navigation';

/**
 * @fileOverview Redirects legacy dynamic course URLs to the new unified viewer.
 * This is a Server Component to avoid 'use client' conflicts with metadata/params.
 */
export default function CourseRedirect({ params }: { params: { courseId: string } }) {
  redirect(`/courses/view?id=${params.courseId}`);
}
