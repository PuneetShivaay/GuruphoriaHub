import { notFound } from 'next/navigation';
import { getCourseById } from '@/lib/courses';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, GraduationCap, Tag } from 'lucide-react';
import { Recommendations } from '@/components/ai/recommendations';

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = getCourseById(params.courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4">{course.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              <span>{course.instructor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
          </div>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-full"
            src={course.videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div>
          <h2 className="text-2xl font-headline font-semibold mb-3">About this course</h2>
          <p className="text-foreground/80 leading-relaxed">{course.description}</p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
              <Tag className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-lg font-headline font-semibold">Tags</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {course.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        <Recommendations courseTopic={course.title} currentVideo={course.title} />
      </div>
    </div>
  );
}
