import { redirect } from 'next/navigation';

/**
 * @fileOverview Static stub for admin edit page to prevent build errors in static export environments.
 */

export async function generateStaticParams() {
  // Return an empty array to satisfy Next.js build requirements for dynamic routes
  // since this page is intentionally restricted.
  return [];
}

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export default async function AdminEditStub({ params }: PageProps) {
  // Await params to comply with Next.js 15 standards before redirecting
  await params;
  redirect('/');
}
