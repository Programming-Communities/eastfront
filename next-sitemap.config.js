/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://eastfront.pk',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  outDir: './public',
  
  // Exclude specific paths
  exclude: [
    '/icon',
    '/og',
    '/manifest.webmanifest',
    '/robots.txt',
    '/sitemap.xml',
    '/server-sitemap.xml',
    '/api/*',
    '/admin/*',
    '/private/*',
    '/_next/*',
    '/_error',
    '/404',
    '/500'
  ],
  
  // Default transformation settings
  transform: async (config, path) => {
    // Handle dynamic locale-based paths
    const locales = ['en', 'ur', 'ar', 'fa', 'hi'];
    const staticPaths = ['', 'about', 'books', 'contact', 'news', 'whatsapp'];
    
    // If path matches a locale pattern
    if (locales.some(locale => path.startsWith(`/${locale}`))) {
      return {
        loc: path,
        changefreq: 'daily',
        priority: path === `/${locales[0]}` ? 1.0 : 0.8,
        lastmod: new Date().toISOString(),
        alternateRefs: locales.map(locale => ({
          href: `https://eastfront.pk/${locale}${path.substring(path.indexOf('/', 1))}`,
          hreflang: locale,
        })),
      };
    }
    
    // Default transformation for other paths
    return {
      loc: path,
      changefreq: config.changefreq || 'weekly',
      priority: config.priority || 0.7,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    };
  },
  
  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/_next/',
          '/*.json$',
          '/*_buildManifest.js$',
          '/*_ssgManifest.js$'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://eastfront.pk/sitemap.xml',
      'https://eastfront.pk/server-sitemap.xml',
    ],
    host: 'https://eastfront.pk',
    sitemapBaseFileName: 'sitemap',
    robotsTxtBaseFileName: 'robots',
  },
  
  // Additional sitemap options
  sourceDir: 'app',
  outDir: 'public',
  autoLastmod: true,
  priority: 0.7,
  changefreq: 'daily',
  
  // For better SEO with multiple languages
  alternateRefs: [
    {
      href: 'https://eastfront.pk/en',
      hreflang: 'en',
    },
    {
      href: 'https://eastfront.pk/ur',
      hreflang: 'ur',
    },
    {
      href: 'https://eastfront.pk/ar',
      hreflang: 'ar',
    },
    {
      href: 'https://eastfront.pk/fa',
      hreflang: 'fa',
    },
    {
      href: 'https://eastfront.pk/hi',
      hreflang: 'hi',
    },
    {
      href: 'https://eastfront.pk',
      hreflang: 'x-default',
    },
  ],
};