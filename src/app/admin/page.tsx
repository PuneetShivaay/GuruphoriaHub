'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lock } from 'lucide-react';

/**
 * @fileOverview Disabled stub for the main admin dashboard.
 */
export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-6 py-40 text-center min-h-screen bg-[#050816] text-white">
      <div className="max-w-md mx-auto space-y-8 glass p-12 rounded-[2rem] border-white/5">
        <div className="bg-primary/10 w-20 h-20 rounded-3xl flex items-center justify-center text-primary mx-auto">
          <Lock className="h-10 w-10" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-headline font-bold">Dashboard Restricted</h1>
          <p className="text-muted-foreground leading-relaxed">
            Administrative access is currently disabled. All platform content is managed via secure internal workflows.
          </p>
        </div>
        <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-full h-12 font-bold text-lg neon-glow">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
