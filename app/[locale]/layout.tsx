import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

// ✅ OPTIMIZED: Subset fonts for faster loading
const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // ✅ FCP fix
  preload: true, // ✅ Preload font
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'], // ✅ Only needed weights
});

// Base URL configuration
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://eastfront.pk';

// ✅ OPTIMIZED: Cleaner locale translations
const localeConfig = {
  en: {
    code: 'en',
    name: 'English',
    dir: 'ltr',
    ogLocale: 'en_US',
    title: 'EastFront PK - Islamic Resistance Movement',
    description: 'Since 2011, 24/7 coverage of Islamic resistance news, research and analysis',
    keywords: 'Islamic Resistance, Middle East, Geopolitics, Military Analysis, Research Papers, WhatsApp Groups',
    siteName: 'EastFront PK',
  },
  ur: {
    code: 'ur',
    name: 'اردو',
    dir: 'rtl',
    ogLocale: 'ur_PK',
    title: 'ایسٹ فرنٹ پی کے - اسلامی مزاحمت تحریک',
    description: 'سن 2011 سے، اسلامی مزاحمت کی خبروں، تحقیق اور تجزیے کی 24/7 کوریج',
    keywords: 'اسلامی مزاحمت, مشرق وسطیٰ, جیوپولیٹکس, فوجی تجزیہ, تحقیقی مقالے, واٹس ایپ گروپس',
    siteName: 'ایسٹ فرنٹ پی کے',
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    ogLocale: 'ar_SA',
    title: 'الجبهة الشرقية باكستان - حركة المقاومة الإسلامية',
    description: 'منذ 2011، تغطية على مدار 24/7 لأخبار وبحوث وتحليل المقاومة الإسلامية',
    keywords: 'المقاومة الإسلامية, الشرق الأوسط, الجيوسياسية, التحليل العسكري, أوراق البحث, مجموعات واتساب',
    siteName: 'الجبهة الشرقية باكستان',
  },
  fa: {
    code: 'fa',
    name: 'فارسی',
    dir: 'rtl',
    ogLocale: 'fa_IR',
    title: 'فرونت شرق پاکستان - جنبش مقاومت اسلامی',
    description: 'از سال 2011، پوشش 24/7 اخبار، تحقیقات و تحلیل مقاومت اسلامی',
    keywords: 'مقاومت اسلامی, خاورمیانه, ژئوپلیتیک, تحلیل نظامی, مقالات تحقیقاتی, گروه های واتساپ',
    siteName: 'فرونت شرق پاکستان',
  },
  hi: {
    code: 'hi',
    name: 'हिन्दी',
    dir: 'ltr',
    ogLocale: 'hi_IN',
    title: 'ईस्टफ्रंट पीके - इस्लामिक प्रतिरोध आंदोलन',
    description: '2011 से, इस्लामिक प्रतिरोध समाचार, शोध और विश्लेषण की 24/7 कवरेज',
    keywords: 'इस्लामिक प्रतिरोध, मध्य पूर्व, भूराजनीति, सैन्य विश्लेषण, शोध पत्र, व्हाट्सएप समूह',
    siteName: 'ईस्टफ्रंट पीके',
  },
} as const;

// ✅ OPTIMIZED: Dynamic page metadata generator
const getPageMetadata = (locale: string, pathname: string = '/') => {
  const localeData = localeConfig[locale as keyof typeof localeConfig] || localeConfig.en;
  
  // Page-specific metadata
  const pageTitles: Record<string, Record<string, string>> = {
    '/': {
      en: 'Home - EastFront PK',
      ur: 'ہوم پیج - ایسٹ فرنٹ پی کے',
      ar: 'الصفحة الرئيسية - الجبهة الشرقية',
      fa: 'صفحه اصلی - فرونت شرق',
      hi: 'होम पेज - ईस्टफ्रंट पीके',
    },
    '/about': {
      en: 'About Us - EastFront PK',
      ur: 'ہمارے بارے میں - ایسٹ فرنٹ پی کے',
      ar: 'من نحن - الجبهة الشرقية',
      fa: 'درباره ما - فرونت شرق',
      hi: 'हमारे बारे में - ईस्टफ्रंट पीके',
    },
    '/books': {
      en: 'Digital Library - EastFront PK',
      ur: 'ڈیجیٹل لائبریری - ایسٹ فرنٹ پی کے',
      ar: 'المكتبة الرقمية - الجبهة الشرقية',
      fa: 'کتابخانه دیجیتال - فرونت شرق',
      hi: 'डिजिटल लाइब्रेरी - ईस्टफ्रंट पीके',
    },
    '/contact': {
      en: 'Contact Us - EastFront PK',
      ur: 'رابطہ کریں - ایسٹ فرنٹ پی کے',
      ar: 'اتصل بنا - الجبهة الشرقية',
      fa: 'تماس با ما - فرونت شرق',
      hi: 'संपर्क करें - ईस्टफ्रंट पीके',
    },
    '/whatsapp': {
      en: 'WhatsApp Groups - EastFront PK',
      ur: 'واٹس ایپ گروپس - ایسٹ فرنٹ پی کے',
      ar: 'مجموعات واتساب - الجبهة الشرقية',
      fa: 'گروه های واتساپ - فرونت شرق',
      hi: 'व्हाट्सएप समूह - ईस्टफ्रंट पीके',
    },
    '/news': {
      en: 'News & Updates - EastFront PK',
      ur: 'نیوز اور اپڈیٹس - ایسٹ فرنٹ پی کے',
      ar: 'الأخبار والتحديثات - الجبهة الشرقية',
      fa: 'اخبار و به روزرسانی ها - فرونت شرق',
      hi: 'समाचार और अपडेट - ईस्टफ्रंट पीके',
    },
  };

  const pageTitle = pageTitles[pathname]?.[locale] || localeData.title;
  const fullTitle = pathname === '/' 
    ? localeData.title 
    : `${pageTitle} | ${localeData.siteName}`;

  return {
    title: fullTitle,
    description: localeData.description,
    keywords: localeData.keywords,
    ogLocale: localeData.ogLocale,
    siteName: localeData.siteName,
    dir: localeData.dir,
  };
};

// ✅ OPTIMIZED: Dynamic metadata generator
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const { locale } = await params;
  const metadata = getPageMetadata(locale);
  const currentUrl = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: metadata.title,
      template: `%s | ${metadata.siteName}`,
    },
    description: metadata.description,
    keywords: metadata.keywords,
    
    // ✅ OPTIMIZED: Open Graph with better image optimization
    openGraph: {
      type: 'website',
      locale: metadata.ogLocale,
      url: currentUrl,
      title: metadata.title,
      description: metadata.description,
      siteName: metadata.siteName,
      images: [
        {
          url: `${baseUrl}/logo-1200x630.jpg`, // ✅ Pre-sized social image
          width: 1200,
          height: 630,
          alt: metadata.title,
          type: 'image/jpeg',
        },
      ],
    },
    
    // ✅ OPTIMIZED: Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [`${baseUrl}/logo-1200x630.jpg`],
      creator: '@eastfront_pk',
      site: '@eastfront_pk',
    },
    
    // ✅ OPTIMIZED: Icons with modern formats
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/logo-192x192.jpg', sizes: '192x192', type: 'image/jpeg' },
        { url: '/logo-512x512.jpg', sizes: '512x512', type: 'image/jpeg' },
      ],
      apple: [
        { url: '/logo-180x180.jpg', sizes: '180x180', type: 'image/jpeg' },
      ],
      shortcut: ['/favicon.ico'],
    },
    
    // ✅ OPTIMIZED: Robots config
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // ✅ OPTIMIZED: Alternates for multilingual SEO
    alternates: {
      canonical: currentUrl,
      languages: {
        'en-US': `${baseUrl}/en`,
        'ur-PK': `${baseUrl}/ur`,
        'ar-SA': `${baseUrl}/ar`,
        'fa-IR': `${baseUrl}/fa`,
        'hi-IN': `${baseUrl}/hi`,
      },
    },
    
    // ✅ OPTIMIZED: Additional metadata
    authors: [{ name: 'EastFront PK Editorial Team' }],
    publisher: metadata.siteName,
    category: 'Education & Research',
    classification: 'News & Strategic Analysis',
  };
}

// ✅ OPTIMIZED: Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
};

// ✅ OPTIMIZED: Generate static params for SSG
export function generateStaticParams() {
  return Object.keys(localeConfig).map((locale) => ({ locale }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();
  const { dir } = localeConfig[locale as keyof typeof localeConfig] || localeConfig.en;

  return (
    <html 
      lang={locale} 
      dir={dir} 
      suppressHydrationWarning
      className={`${inter.variable}`} // ✅ Font variable for performance
    >
      <head>
        {/* ✅ CRITICAL: Preconnect for performance - TTFB fix */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href={baseUrl} />
        
        {/* ✅ OPTIMIZED: Font loading with swap and only needed weights */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        
        {/* ✅ OPTIMIZED: Preload critical assets */}
        <link rel="preload" href={`${baseUrl}/logo-1200x630.jpg`} as="image" type="image/jpeg" />
        <link rel="preload" href="/logo-192x192.jpg" as="image" type="image/jpeg" />
        
        {/* ✅ OPTIMIZED: Additional meta tags for social sharing */}
        <meta name="twitter:site" content="@eastfront_pk" />
        <meta name="twitter:creator" content="@eastfront_pk" />
        
        {/* ✅ OPTIMIZED: WhatsApp specific metadata */}
        <meta property="og:whatsapp:page" content="https://wa.me/+923412786433" />
        
        {/* ✅ OPTIMIZED: Telegram specific metadata */}
        <meta property="og:telegram:channel" content="https://t.me/eastfront_pk" />
        
        {/* ✅ OPTIMIZED: Additional structured data for better SEO */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EastFront PK",
              "url": baseUrl,
              "logo": `${baseUrl}/logo.jpg`,
              "description": "Islamic Resistance Movement Since 2011",
              "foundingDate": "2011",
              "sameAs": [
                "https://t.me/eastfront_pk",
                "https://wa.me/+923412786433"
              ]
            })
          }}
        />
        
        {/* ✅ OPTIMIZED: Critical CSS for FCP improvement */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS for initial render */
              .critical-render {
                opacity: 0;
                animation: fadeIn 0.3s ease forwards;
              }
              @keyframes fadeIn {
                to { opacity: 1; }
              }
              
              /* Prevent layout shift */
              img {
                content-visibility: auto;
              }
              
              /* System font stack for faster text rendering */
              .system-fonts {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
              }
            `,
          }}
        />
      </head>
      <body 
        className={`${inter.className} bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-200 min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow critical-render">
                {children}
              </main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
        
        {/* ✅ OPTIMIZED: Additional schema markup */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": baseUrl,
              "name": "EastFront PK",
              "description": "Islamic Resistance Movement Since 2011",
              "inLanguage": Object.values(localeConfig).map(l => l.code)
            })
          }}
        />
        
        {/* ✅ OPTIMIZED: Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if (window.performance) {
                window.addEventListener('load', () => {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  if (perfData) {
                    console.log('🚀 Performance Metrics:', {
                      TTFB: perfData.responseStart - perfData.requestStart,
                      FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
                      LCP: performance.getEntriesByName('largest-contentful-paint')[0]?.startTime
                    });
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}