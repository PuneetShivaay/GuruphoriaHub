import { redirect } from 'next/navigation';

/**
 * @fileOverview Redirects legacy query-parameter links to the new pre-generated static routes.
 */
export default async function LegacyCourseRedirect({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const params = await searchParams;
  if (params.id) {
    redirect(`/courses/${params.id}`);
  }
  redirect('/courses');
}
