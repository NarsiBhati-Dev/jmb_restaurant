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
  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} ||  ${siteMetadata.title}`,
      description: `${description} || ${siteMetadata.description}`,
      url: './',
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: siteMetadata.locale,
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
  };
};

export default getPageMetadata;
