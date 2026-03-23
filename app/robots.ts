import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('host') || 'eastfront.pk';
  const baseUrl = `https://${host}`;
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/_next/',
        '/_static/',
        '/_error',
        '/404',
        '/500',
        '/*.json$',
        '/*_buildManifest.js$',
        '/*_ssgManifest.js$',
        '/favicon.ico',
        '/icon',
        '/og',
        '/manifest.webmanifest',
      ],
      crawlDelay: 5, // Be respectful to the server
    },
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/server-sitemap.xml`,
    ],
    host: baseUrl,
  };
}