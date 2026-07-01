
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * @fileOverview A stub for the admin edit page.
 * We include generateStaticParams to satisfy the 'output: export' requirement
 * for dynamic routes during the build process.
 */

export default function AdminEditStub() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return null;
}

// Satisfy Next.js build requirements for dynamic routes in static export
export async function generateStaticParams() {
  return [];
}
