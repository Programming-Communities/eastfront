import { MetadataRoute } from 'next';

const baseUrl = 'https://eastfront.pk';
const locales = ['en', 'ur', 'ar', 'fa', 'hi'];
const pages = ['', 'about', 'books', 'contact', 'whatsapp'];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // Generate URLs for all locales and pages
  locales.forEach(locale => {
    pages.forEach(page => {
      const url = page ? `${baseUrl}/${locale}/${page}` : `${baseUrl}/${locale}`;
      
      urls.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page ? `/${page}` : ''}`,
            ur: `${baseUrl}/ur${page ? `/${page}` : ''}`,
            ar: `${baseUrl}/ar${page ? `/${page}` : ''}`,
            fa: `${baseUrl}/fa${page ? `/${page}` : ''}`,
            hi: `${baseUrl}/hi${page ? `/${page}` : ''}`,
          },
        },
      });
    });
  });

  return urls;
}