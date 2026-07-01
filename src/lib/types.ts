export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  tags: string[];
  videoUrl: string;
  thumbnailUrl?: string;
}

export type CourseFormData = Omit<Course, 'id'>;

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  publishedAt: string;
  viewCount: string;
  videoUrl: string;
}

export interface MediumArticle {
  id: string;
  title: string;
  summary: string;
  coverImage: string;
  readingTime: string;
  publishedAt: string;
  url: string;
  category: string;
}
