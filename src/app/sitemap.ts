import { MetadataRoute } from 'next';
import siteMetadata from '@/data/siteMetadata';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  const routes = ['', 'blog', 'about-us', 'contact-us', 'faq', 'menu'].map(
    route => ({
      url: `${siteUrl}/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    }),
  );

  return [...routes];
}
