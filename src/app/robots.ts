import { MetadataRoute } from 'next';
import siteMetadata from '@/data/siteMetadata';

export const dynamic = 'force-static'; // Ensures the file is statically generated

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*', // Allow all search engines
        allow: '/', // Allow crawling entire site
      },
    ],
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`, // Link to your sitemap
    host: siteMetadata.siteUrl,
  };
}
