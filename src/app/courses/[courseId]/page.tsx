import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';
import type { Course } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Recommendations } from '@/components/ai/recommendations';
import { 
  Clock, 
  GraduationCap, 
  ChevronRight, 
  Youtube, 
  Share2, 
  Bookmark, 
  Github, 
  ExternalLink, 
  Code, 
  Download, 
  FileText, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

/**
 * @fileOverview The static course viewer page.
 * Uses generateStaticParams to pre-build all course pages at build time.
 */

export async function generateStaticParams() {
  const { firestore } = initializeFirebase();
  const coursesCol = collection(firestore, 'courses');
  const coursesSnapshot = await getDocs(coursesCol);
  return coursesSnapshot.docs.map(doc => ({
    courseId: doc.id,
  }));
}

async function getCourse(id: string) {
  const { firestore } = initializeFirebase();
  const courseRef = doc(firestore, 'courses', id);
  const courseSnap = await getDoc(courseRef);
  if (!courseSnap.exists()) return null;
  return { ...courseSnap.data(), id: courseSnap.id } as Course;
}

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = await getCourse(courseId);

  if (!course) {
    notFound();
  }

  // Handle YouTube URL to embed format
  const videoId = course.videoUrl.split('v=')[1]?.split('&')[0] || course.videoUrl.split('/').pop();
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="min-h-screen bg-[#050816] text-white pb-20">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 py-8">
        <nav className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 text-primary" />
          <Link href="/courses" className="hover:text-primary transition-colors">Tutorials</Link>
          <ChevronRight className="h-3 w-3 text-primary" />
          <span className="text-white/40 truncate max-w-[150px] sm:max-w-none">{course.title}</span>
        </nav>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-8">
              <div className="aspect-video w-full overflow-hidden rounded-3xl glass border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group">
                <iframe
                  className="w-full h-full"
                  src={embedUrl}
                  title={course.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold leading-tight tracking-tight">
                    {course.title}
                  </h1>
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="glass border-white/10 rounded-full h-10 px-5 font-bold hover:bg-white/5">
                      <Share2 className="h-4 w-4 mr-2" /> Share
                    </Button>
                    <Button variant="outline" size="sm" className="glass border-white/10 rounded-full h-10 px-5 font-bold hover:bg-white/5">
                      <Bookmark className="h-4 w-4 mr-2" /> Save
                    </Bookmark>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground bg-white/5 p-5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 pr-4 border-r border-white/10">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <span className="font-bold text-white/80">{course.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 pr-4 border-r border-white/10">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="font-bold text-white/80">{course.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-none text-[9px] font-black uppercase tracking-widest px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button asChild className="bg-[#EA3323] hover:bg-[#EA3323]/90 text-white rounded-full px-8 h-12 font-bold text-lg transition-transform hover:scale-105">
                    <Link href={course.videoUrl} target="_blank">
                      <Youtube className="h-6 w-6 mr-2" /> Watch on YouTube
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* About Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-8 bg-primary rounded-full shadow-[0_0_15px_rgba(14,165,255,0.5)]"></div>
                <h2 className="text-3xl font-bold">About this Tutorial</h2>
              </div>
              <Card className="glass p-10 rounded-[2rem] border-white/5 bg-[#101828]/40 space-y-8 leading-relaxed text-muted-foreground text-lg">
                <p>{course.description}</p>
                
                <div className="grid md:grid-cols-2 gap-10 pt-6 border-t border-white/5">
                  <div className="space-y-4">
                    <h3 className="text-white font-bold flex items-center gap-3 text-xl">
                      <Code className="h-6 w-6 text-primary" /> Prerequisites
                    </h3>
                    <ul className="text-sm space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></div>
                        <span>Solid understanding of TypeScript / JavaScript</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></div>
                        <span>Basic knowledge of Node.js and npm/pnpm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0"></div>
                        <span>A Firebase account for database services</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-white font-bold flex items-center gap-3 text-xl">
                      <Clock className="h-6 w-6 text-primary" /> Learning Velocity
                    </h3>
                    <p className="text-sm leading-relaxed">
                      This is an intensive lab. Expect to spend approximately <span className="text-primary font-bold">{course.duration}</span> watching the content and an additional <span className="text-primary font-bold">2-4 hours</span> implementation and debugging.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Learning Outcomes */}
            <section className="space-y-8">
              <h2 className="text-3xl font-bold">Core Competencies</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  "Architectural System Design",
                  "Agentic AI Implementation",
                  "Advanced LLM Integration",
                  "Production-Ready Deployment",
                  "Real-time Data Management",
                  "Secure Auth Workflows"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-[#101828]/60 p-6 rounded-2xl border border-white/5 group hover:border-primary/50 transition-all cursor-default">
                    <CheckCircle2 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <Recommendations courseTopic={course.title} currentVideo={course.title} />

            <section className="space-y-6">
              <h3 className="font-bold text-xl px-2 text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> Lab Resources
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Presentation Slides", type: "PDF", size: "2.4 MB", icon: <Download /> },
                  { title: "Project Starter Kit", type: "ZIP", size: "15.8 MB", icon: <Download /> },
                  { title: "Architecture Diagram", type: "PNG", size: "1.2 MB", icon: <Download /> },
                  { title: "Prompt Engineering Pack", type: "JSON", size: "0.4 MB", icon: <Download /> }
                ].map((item, idx) => (
                  <button key={idx} className="w-full glass p-5 rounded-2xl flex items-center justify-between group hover:bg-white/5 border-white/5 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/5 rounded-xl text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all">
                        {item.icon}
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">{item.title}</div>
                        <div className="text-[9px] text-muted-foreground uppercase font-black tracking-widest mt-0.5">{item.type} • {item.size}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Quick Links */}
            <section className="glass p-8 rounded-[2rem] border-white/5 bg-gradient-to-br from-[#101828]/80 to-transparent space-y-6">
              <h3 className="font-bold text-lg">Quick Access</h3>
              <div className="space-y-4">
                <Button asChild variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-white/5 h-12 font-bold px-4">
                  <Link href="https://github.com/PuneetShivaay" target="_blank">
                    <Github className="h-5 w-5 mr-3" /> GitHub Repo
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-white/5 h-12 font-bold px-4">
                  <Link href="/contact">
                    <ExternalLink className="h-5 w-5 mr-3" /> Technical Support
                  </Link>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
