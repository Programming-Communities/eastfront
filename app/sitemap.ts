import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

const baseUrl = 'https://eastfront.pk';
const locales = ['en', 'ur', 'ar', 'fa', 'hi'];
const pages = ['', 'about', 'books', 'contact', 'news', 'whatsapp'];

// Dynamic content types that should be updated more frequently
const dynamicPages = ['news', 'whatsapp'];
const staticPages = ['about', 'books', 'contact'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get('host') || 'eastfront.pk';
  const currentUrl = `https://${host}`;
  
  const urls: MetadataRoute.Sitemap = [];
  const currentDate = new Date();
  
  // Generate URLs for all locales and pages with SEO-optimized priorities
  locales.forEach(locale => {
    pages.forEach(page => {
      const url = page ? `${currentUrl}/${locale}/${page}` : `${currentUrl}/${locale}`;
      const isDynamic = dynamicPages.includes(page);
      const isStatic = staticPages.includes(page);
      
      // Determine priority based on page type
      let priority = 0.8;
      let changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly';
      
      if (page === '') {
        // Homepage - highest priority
        priority = 1.0;
        changefreq = 'daily';
      } else if (isDynamic) {
        // Dynamic content like news - updated frequently
        priority = 0.9;
        changefreq = 'hourly';
      } else if (isStatic) {
        // Static pages like about, contact
        priority = 0.7;
        changefreq = 'monthly';
      }
      
      // Add main URL with alternates for SEO
      urls.push({
        url,
        lastModified: currentDate,
        changeFrequency: changefreq,
        priority: priority,
        alternates: {
          languages: {
            en: `${currentUrl}/en${page ? `/${page}` : ''}`,
            ur: `${currentUrl}/ur${page ? `/${page}` : ''}`,
            ar: `${currentUrl}/ar${page ? `/${page}` : ''}`,
            fa: `${currentUrl}/fa${page ? `/${page}` : ''}`,
            hi: `${currentUrl}/hi${page ? `/${page}` : ''}`,
            'x-default': `${currentUrl}/en${page ? `/${page}` : ''}`,
          },
        },
      });
    });
  });
  
  // Add canonical URLs for important pages
  const canonicalPages = [
    { path: '', priority: 1.0, changefreq: 'daily' as const },
    { path: 'about', priority: 0.8, changefreq: 'monthly' as const },
    { path: 'books', priority: 0.9, changefreq: 'weekly' as const },
    { path: 'contact', priority: 0.7, changefreq: 'monthly' as const },
    { path: 'news', priority: 0.9, changefreq: 'hourly' as const },
    { path: 'whatsapp', priority: 0.8, changefreq: 'daily' as const },
  ];
  
  canonicalPages.forEach(page => {
    urls.push({
      url: `${currentUrl}/${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.changefreq,
      priority: page.priority,
    });
  });
  
  // Add API endpoints for search engines
  urls.push({
    url: `${currentUrl}/api/sitemap`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 0.5,
  });
  
  return urls;
}