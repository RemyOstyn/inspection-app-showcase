import { APP_NAME } from '@/lib/constants';

export interface SocialImage {
  og: string;
  twitter: string;
  alt: string;
}

export interface SocialImageConfig {
  homepage: SocialImage;
  features: SocialImage;
  useCases: SocialImage;
  demo: SocialImage;
  default: SocialImage;
}

const BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://www.profieldwork.com' 
  : 'http://localhost:3000';

export const SOCIAL_IMAGES: SocialImageConfig = {
  homepage: {
    og: `${BASE_URL}/images/social/og/og-homepage.webp`,
    twitter: `${BASE_URL}/images/social/twitter/twitter-homepage.webp`,
    alt: `${APP_NAME} - Transform Your Field Operations with Offline-First Mobile Inspection Platform`,
  },
  features: {
    og: `${BASE_URL}/images/social/og/og-features.webp`,
    twitter: `${BASE_URL}/images/social/twitter/twitter-features.webp`,
    alt: `${APP_NAME} - 6 Key Features for Offline-First Field Operations`,
  },
  useCases: {
    og: `${BASE_URL}/images/social/og/og-use-cases.webp`,
    twitter: `${BASE_URL}/images/social/twitter/twitter-use-cases.webp`,
    alt: `${APP_NAME} - Solutions for Equipment Rental, Property Management, Fleet Management & More`,
  },
  demo: {
    og: `${BASE_URL}/images/social/og/og-demo.webp`,
    twitter: `${BASE_URL}/images/social/twitter/twitter-demo.webp`,
    alt: `${APP_NAME} - See the Mobile Inspection Platform in Action`,
  },
  default: {
    og: `${BASE_URL}/images/social/og/og-default.webp`,
    twitter: `${BASE_URL}/images/social/twitter/twitter-default.webp`,
    alt: `${APP_NAME} - Offline-First Mobile Inspection Platform`,
  },
};

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const TWITTER_IMAGE_WIDTH = 1200;
export const TWITTER_IMAGE_HEIGHT = 675;

export function getSocialImage(page: keyof SocialImageConfig): SocialImage {
  return SOCIAL_IMAGES[page] || SOCIAL_IMAGES.default;
}

export function getAbsoluteImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${BASE_URL}${imagePath.startsWith('/') ? '' : '/'}${imagePath}`;
}