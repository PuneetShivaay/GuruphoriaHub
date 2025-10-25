'use client';

import { useState } from 'react';
import { getTopicSpecificRecommendations, TopicSpecificRecommendationsOutput } from '@/ai/flows/topic-specific-recommendations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Loader2, Video, Book } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

interface RecommendationsProps {
  courseTopic: string;
  currentVideo: string;
}

export function Recommendations({ courseTopic, currentVideo }: RecommendationsProps) {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<TopicSpecificRecommendationsOutput | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setRecommendations(null);

    try {
      const result = await getTopicSpecificRecommendations({
        lectureTopic: courseTopic,
        userInterests: 'General interest in technology and software development',
        currentVideos: currentVideo,
      });
      setRecommendations(result);
    } catch (error) {
      console.error('Error getting recommendations:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to generate recommendations. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-2xl">
          <Sparkles className="h-6 w-6 text-primary" />
          Intelligent Recommendations
        </CardTitle>
        <CardDescription>
          Enhance your learning with AI-powered suggestions for related videos and resources.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Button type="submit" disabled={loading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Get Recommendations'
            )}
          </Button>
        </form>

        {recommendations && (
          <div className="mt-6 grid gap-6">
            {recommendations.recommendedVideos.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Recommended Videos
                </h3>
                <ul className="space-y-2 list-disc list-inside text-foreground/80">
                  {recommendations.recommendedVideos.map((video, index) => (
                    <li key={index}>{video}</li>
                  ))}
                </ul>
              </div>
            )}
            {recommendations.recommendedResources.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Book className="h-5 w-5" />
                    Further Reading
                </h3>
                <ul className="space-y-2 list-disc list-inside text-foreground/80">
                  {recommendations.recommendedResources.map((resource, index) => (
                    <li key={index}>
                      <Link href={resource} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 break-all">
                        {resource}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
