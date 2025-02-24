import siteMetadata from '@/data/siteMetadata';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/_next/image',
      },
    ],
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
    host: siteMetadata.siteUrl,
  };
}
