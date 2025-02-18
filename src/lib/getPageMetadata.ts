import { Metadata } from 'next';
import siteMetadata from '@/data/siteMetadata';

interface GetPageMetadataProps {
  title: string;
  description?: string;
  image?: string;
  path?: string;
}

const getPageMetadata = ({
  title,
  description,
  image,
  path = '',
}: GetPageMetadataProps): Metadata => {
  const metaTitle = `${title} | ${siteMetadata.title}`;
  const metaDescription = description ?? siteMetadata.description;
  const metaImage = image ? image : siteMetadata.socialBanner;
  const sitePath = path
    ? `${siteMetadata.siteUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`
    : siteMetadata.siteUrl;

  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title,
    description: metaDescription,
    alternates: {
      canonical: sitePath,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: sitePath,
      siteName: siteMetadata.title,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteMetadata.title}`,
        },
      ],
      locale: siteMetadata.locale,
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: [
        {
          url: metaImage,
          alt: `${title} - ${siteMetadata.title}`,
        },
      ],
    },
  };
};

export default getPageMetadata;
