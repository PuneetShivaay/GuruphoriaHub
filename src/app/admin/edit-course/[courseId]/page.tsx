import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';

/**
 * @fileOverview Deactivated Admin Page. 
 * Includes generateStaticParams to resolve build errors for the static export configuration.
 */

export async function generateStaticParams() {
  return []; // No admin pages are statically generated as the dashboard is offline.
}

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export default async function DeactivatedAdminPage({ params }: PageProps) {
  // Await params even if not used to comply with Next.js 15
  await params;

  return (
    <div className="container mx-auto px-6 py-40 text-center min-h-screen bg-[#050816] text-white">
      <div className="max-w-md mx-auto space-y-8 glass p-12 rounded-[2rem] border-white/5">
        <div className="bg-destructive/10 w-20 h-20 rounded-3xl flex items-center justify-center text-destructive mx-auto">
          <ShieldAlert className="h-10 w-10" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-headline font-bold">Admin Restricted</h1>
          <p className="text-muted-foreground leading-relaxed">
            The Guruphoria administrative dashboard is currently offline. This platform is now focused on public resource exploration.
          </p>
        </div>
        <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-full h-12 font-bold text-lg neon-glow">
          <Link href="/">Back to Safety</Link>
        </Button>
      </div>
    </div>
  );
}
