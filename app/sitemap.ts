import { MetadataRoute } from 'next';
import { locales } from '../lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eastfront.pk';
  
  const routes = [
    '',
    '/about',
    '/books',
    '/contact',
    '/news',
    '/whatsapp',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = `${baseUrl}/${locale}${route}`;
      const priority = route === '' ? 1.0 : 0.8;
      const changefreq = route === '' ? 'daily' : 'weekly';
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: changefreq,
        priority: priority,
      });
    });
  });

  return sitemapEntries;
}