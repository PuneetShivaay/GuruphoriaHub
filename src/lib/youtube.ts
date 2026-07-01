import { YouTubeVideo } from './types';

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = 'UC_667Q5B9X8fJ2kP3s5t8Yx'; // Example Channel ID for Guruphoria

/**
 * Fetches the latest videos from the Guruphoria YouTube channel.
 * Uses mock data if API key is missing to ensure the UI stays beautiful.
 */
export async function fetchLatestVideos(limit = 6): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    // Return high-quality mock data if API key is not configured
    return Array.from({ length: limit }).map((_, i) => ({
      id: `mock-vid-${i}`,
      title: i === 0 
        ? "Building an Agentic AI Framework with Next.js 15 and OpenAI" 
        : "Mastering Firebase Security Rules for Production Apps",
      description: "A deep dive into the latest technologies shaping the future of software engineering.",
      thumbnail: `https://picsum.photos/seed/guru-vid-${i}/600/400`,
      duration: "14:20",
      publishedAt: "2 days ago",
      viewCount: "4.2k",
      videoUrl: "https://www.youtube.com/@guruphoria"
    }));
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${limit}&type=video`
    );
    const data = await response.json();

    if (!data.items) return [];

    return data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      duration: "15:00", // Duration requires a separate API call, placeholder for now
      publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString(),
      viewCount: "0", // View count requires a separate API call
      videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }));
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}
