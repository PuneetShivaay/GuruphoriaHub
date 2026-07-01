'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

/**
 * @fileOverview Redirect stub for legacy dynamic course routes.
 * This component ensures that any older links using /courses/[id] format 
 * are gracefully moved to the new /courses/view?id=[id] format.
 */
export default function RedirectPage() {
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    if (params.courseId) {
      router.replace(`/courses/view?id=${params.courseId}`);
    } else {
      router.replace('/courses');
    }
  }, [params.courseId, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#050816] text-white font-body">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="animate-pulse tracking-widest uppercase text-xs font-bold text-primary">Redirecting to tutorial...</p>
      </div>
    </div>
  );
}