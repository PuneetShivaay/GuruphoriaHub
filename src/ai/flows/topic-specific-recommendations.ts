'use server';

/**
 * @fileOverview AI agent that recommends relevant videos and resources based on the current lecture topic.
 *
 * - getTopicSpecificRecommendations - A function that handles the recommendation process.
 * - TopicSpecificRecommendationsInput - The input type for the getTopicSpecificRecommendations function.
 * - TopicSpecificRecommendationsOutput - The return type for the getTopicSpecificRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TopicSpecificRecommendationsInputSchema = z.object({
  lectureTopic: z.string().describe('The topic of the current lecture.'),
  userInterests: z.string().describe('The interests of the user.'),
  currentVideos: z.string().describe('The video being watched.'),
});
export type TopicSpecificRecommendationsInput = z.infer<typeof TopicSpecificRecommendationsInputSchema>;

const TopicSpecificRecommendationsOutputSchema = z.object({
  recommendedVideos: z.array(z.string()).describe('A list of recommended video titles.'),
  recommendedResources: z.array(z.string()).describe('A list of recommended resource URLs.'),
});
export type TopicSpecificRecommendationsOutput = z.infer<typeof TopicSpecificRecommendationsOutputSchema>;

export async function getTopicSpecificRecommendations(input: TopicSpecificRecommendationsInput): Promise<TopicSpecificRecommendationsOutput> {
  return topicSpecificRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'topicSpecificRecommendationsPrompt',
  input: {schema: TopicSpecificRecommendationsInputSchema},
  output: {schema: TopicSpecificRecommendationsOutputSchema},
  prompt: `You are an AI assistant that recommends videos and resources related to a lecture topic.

  Based on the current lecture topic: {{{lectureTopic}}},
  User Interests: {{{userInterests}}},
  The current video being watched: {{{currentVideos}}},

  Recommend relevant videos and resources to deepen the user's understanding and explore related concepts efficiently.
  Videos:
  - Video Title 1
  - Video Title 2

  Resources:
  - Resource URL 1
  - Resource URL 2

  Ensure the videos and resources are appropriate for the lecture topic and the user's interest.
  Format your response as a JSON object with "recommendedVideos" and "recommendedResources" keys.
`,
});

const topicSpecificRecommendationsFlow = ai.defineFlow(
  {
    name: 'topicSpecificRecommendationsFlow',
    inputSchema: TopicSpecificRecommendationsInputSchema,
    outputSchema: TopicSpecificRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
