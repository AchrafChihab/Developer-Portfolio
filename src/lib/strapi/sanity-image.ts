import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Set up the Sanity client
const sanityClient = createClient({
  projectId: 'yourProjectId', // Replace with your actual Sanity project ID
  dataset: 'yourDataset', // Replace with your actual dataset name
  useCdn: true,
});

// Create a builder function using the Sanity client
const imageBuilder = imageUrlBuilder(sanityClient);

function imageUrlFor(source: SanityImageSource) {
  return imageBuilder.image(source);
}

// Type definitions for image and metadata
type ImageAssetMetadataPaletteColor = {
  _type: 'sanity.imagePaletteSwatch';
  background: string;
  foreground: string;
  population: number;
  title: string;
};

type ImageAssetMetadata = {
  _type: 'sanity.imageMetadata';
  blurHash: string;
  dimensions: {
    _type: 'sanity.imageDimensions';
    aspectRatio: number;
    height: number;
    width: number;
  };
  hasAlpha: boolean;
  isOpaque: boolean;
  lqip: string;
  palette: {
    _type: 'sanity.imagePalette';
    darkMuted: ImageAssetMetadataPaletteColor;
    darkVibrant: ImageAssetMetadataPaletteColor;
    dominant: ImageAssetMetadataPaletteColor;
    lightMuted: ImageAssetMetadataPaletteColor;
    lightVibrant: ImageAssetMetadataPaletteColor;
    muted: ImageAssetMetadataPaletteColor;
    vibrant: ImageAssetMetadataPaletteColor;
  };
};

type ImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
  assetId: string;
  extension: string;
  metadata: ImageAssetMetadata;
  mimeType: string;
  originalFilename: string;
  path: string;
  sha1hash: string;
  size: number;
  uploadId: string;
  url: string;
};

type Image = {
  _key: string;
  _type: 'image';
  alt: string;
  asset: ImageAsset;
};

const MIN_WIDTH_STEP_PERCENTAGE = 0.1;
const COMMON_SCREEN_SIZES = [360, 414, 768, 1366, 1536, 1920];
const LARGEST_COMMON_SCREEN_SIZE = 1920;

function generateImageSizeProps({
  image,
  sizes = undefined,
  maxWidth = undefined,
  width = undefined,
  height = undefined,
}: {
  image: any;
  sizes?: string | undefined;
  maxWidth?: number | undefined;
  width?: number | undefined;
  height?: number | undefined;
}) {
  // Provide a fallback image directly if no image asset is provided
  if (!image?.asset) {
    console.warn('Image asset is missing', image);
    return {
      src: image, // fallback URL
      srcSet: '',
      sizes: sizes ?? '100vw',
      width: width ?? maxWidth ?? 1920, // default width
      height: height ?? (maxWidth ? maxWidth / 1.5 : 1080), // default height, assuming aspect ratio 1.5
    };
  }

  const { width: originalWidth = 1920, aspectRatio = 1.5 } = image.asset.metadata.dimensions || {};
  const computedMaxWidth = maxWidth && maxWidth <= originalWidth ? maxWidth : originalWidth;

  const retinaSizes = Array.from(
    new Set([
      ...COMMON_SCREEN_SIZES,
      ...COMMON_SCREEN_SIZES.map((size) => size * 2),
      ...COMMON_SCREEN_SIZES.map((size) => size * 3),
    ]),
  )
    .sort((a, b) => a - b)
    .filter((size) => size <= computedMaxWidth * 1.1 && size <= LARGEST_COMMON_SCREEN_SIZE * 3)
    .filter((size, index, unfilteredSizes) => {
      const nextSize = unfilteredSizes[index + 1];
      return !nextSize || nextSize / size > MIN_WIDTH_STEP_PERCENTAGE + 1;
    });

  // Dynamically generate image URL using the Sanity client
  const imageSrc = imageUrlFor(image.asset).url(); // This will dynamically generate the image URL

  return {
    src: imageSrc, // Use the dynamically generated URL
    srcSet: retinaSizes
      .map(
        (size) => `${imageUrlFor(image.asset).width(size).url()} ${size}w`, // Generate the srcset for different resolutions
      )
      .join(', '),
    sizes: sizes ?? `(max-width: ${computedMaxWidth}px) 100vw, ${computedMaxWidth}px`,
    width: width ?? computedMaxWidth,
    height: height ?? computedMaxWidth / aspectRatio,
  };
}

export { imageUrlFor, generateImageSizeProps, type Image };
