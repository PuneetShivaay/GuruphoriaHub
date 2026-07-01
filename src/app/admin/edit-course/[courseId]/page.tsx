import { redirect } from 'next/navigation';

/**
 * @fileOverview Stub for the admin edit course page.
 * Required to have generateStaticParams for Next.js static export build.
 */

export async function generateStaticParams() {
  // Return an empty array because this page is deactivated.
  // This satisfies the requirement for 'output: export' build.
  return [];
}

export default function AdminEditStub() {
  // Simple redirect to home since admin features are deactivated.
  redirect('/');
}
