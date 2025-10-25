import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const images: ImagePlaceholder[] = data.placeholderImages;

export function getPlaceholderImage(id: string): ImagePlaceholder | undefined {
  return images.find((image) => image.id === id);
}
