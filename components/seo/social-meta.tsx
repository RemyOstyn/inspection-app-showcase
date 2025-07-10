import { 
  getSocialImage, 
  OG_IMAGE_WIDTH, 
  OG_IMAGE_HEIGHT, 
  TWITTER_IMAGE_WIDTH, 
  TWITTER_IMAGE_HEIGHT,
  type SocialImageConfig 
} from '@/lib/utils/social-images';

interface SocialMetaProps {
  page?: keyof SocialImageConfig;
  title?: string;
  description?: string;
  customOgImage?: string;
  customTwitterImage?: string;
  customAlt?: string;
}

export function SocialMeta({ 
  page = 'default',
  title,
  description,
  customOgImage,
  customTwitterImage,
  customAlt
}: SocialMetaProps) {
  const socialImage = getSocialImage(page);
  
  const ogImage = customOgImage || socialImage.og;
  const twitterImage = customTwitterImage || socialImage.twitter;
  const altText = customAlt || socialImage.alt;

  return (
    <>
      {/* OpenGraph Meta Tags */}
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={OG_IMAGE_WIDTH.toString()} />
      <meta property="og:image:height" content={OG_IMAGE_HEIGHT.toString()} />
      <meta property="og:image:alt" content={altText} />
      <meta property="og:image:type" content="image/png" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:image:alt" content={altText} />
      <meta name="twitter:image:width" content={TWITTER_IMAGE_WIDTH.toString()} />
      <meta name="twitter:image:height" content={TWITTER_IMAGE_HEIGHT.toString()} />
      
      {/* Additional meta tags if provided */}
      {title && (
        <>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      
      {description && (
        <>
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}
    </>
  );
}