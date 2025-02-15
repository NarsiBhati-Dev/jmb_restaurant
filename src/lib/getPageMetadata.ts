import { Metadata } from 'next';
import siteMetadata from '@/data/siteMetadata';

interface GetPageMetadataProps {
  title: string;
  description?: string;
  image?: string;
}

const getPageMetadata = ({
  title,
  description,
  image,
}: GetPageMetadataProps): Metadata => {
  const metaTitle = `${title} | ${siteMetadata.title}`;
  const metaDescription = description ?? siteMetadata.description;
  const metaImage = image ? image : siteMetadata.socialBanner;

  return {
    metadataBase: new URL(siteMetadata.siteUrl),
    title,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: siteMetadata.siteUrl,
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
