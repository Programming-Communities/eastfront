import { MetadataRoute } from 'next';
import { locales } from '../lib/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eastfront.pk';
  
  const routes = [
    { path: '', priority: 1.0, changefreq: 'daily' },
    { path: '/about', priority: 0.8, changefreq: 'weekly' },
    { path: '/books', priority: 0.8, changefreq: 'weekly' },
    { path: '/contact', priority: 0.8, changefreq: 'weekly' },
    { path: '/news', priority: 0.8, changefreq: 'weekly' },
    { path: '/whatsapp', priority: 0.8, changefreq: 'weekly' },
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate URLs for all locales and routes
  locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = `${baseUrl}/${locale}${route.path}`;
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.changefreq as 'daily' | 'weekly' | 'monthly',
        priority: route.priority,
      });
    });
  });

  // Add root redirect URL
  sitemapEntries.push({
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  });

  return sitemapEntries;
}