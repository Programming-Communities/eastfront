import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

// Base URL configuration
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://eastfront.pk';

// Translation mappings for each language
const localeTranslations = {
  en: {
    title: 'EastFront PK - Islamic Resistance Movement',
    description: 'Since 2011, 24/7 coverage of Islamic resistance news, research and analysis',
    keywords: 'Islamic Resistance, Middle East, Geopolitics, Military Analysis, Research Papers, WhatsApp Groups',
    siteName: 'EastFront PK',
  },
  ur: {
    title: 'ایسٹ فرنٹ پی کے - اسلامی مزاحمت تحریک',
    description: 'سن 2011 سے، اسلامی مزاحمت کی خبروں، تحقیق اور تجزیے کی 24/7 کوریج',
    keywords: 'اسلامی مزاحمت, مشرق وسطیٰ, جیوپولیٹکس, فوجی تجزیہ, تحقیقی مقالے, واٹس ایپ گروپس',
    siteName: 'ایسٹ فرنٹ پی کے',
  },
  ar: {
    title: 'الجبهة الشرقية باكستان - حركة المقاومة الإسلامية',
    description: 'منذ 2011، تغطية على مدار 24/7 لأخبار وبحوث وتحليل المقاومة الإسلامية',
    keywords: 'المقاومة الإسلامية, الشرق الأوسط, الجيوسياسية, التحليل العسكري, أوراق البحث, مجموعات واتساب',
    siteName: 'الجبهة الشرقية باكستان',
  },
  fa: {
    title: 'فرونت شرق پاکستان - جنبش مقاومت اسلامی',
    description: 'از سال 2011، پوشش 24/7 اخبار، تحقیقات و تحلیل مقاومت اسلامی',
    keywords: 'مقاومت اسلامی, خاورمیانه, ژئوپلیتیک, تحلیل نظامی, مقالات تحقیقاتی, گروه های واتساپ',
    siteName: 'فرونت شرق پاکستان',
  },
  hi: {
    title: 'ईस्टफ्रंट पीके - इस्लामिक प्रतिरोध आंदोलन',
    description: '2011 से, इस्लामिक प्रतिरोध समाचार, शोध और विश्लेषण की 24/7 कवरेज',
    keywords: 'इस्लामिक प्रतिरोध, मध्य पूर्व, भूराजनीति, सैन्य विश्लेषण, शोध पत्र, व्हाट्सएप समूह',
    siteName: 'ईस्टफ्रंट पीके',
  },
};

// Locale to OpenGraph locale mapping
const localeToOgLocale = {
  en: 'en_US',
  ur: 'ur_PK',
  ar: 'ar_SA', 
  fa: 'fa_IR',
  hi: 'hi_IN',
};

// Page-specific metadata (you can expand this for each page)
const pageMetadata = {
  '/': {
    en: { title: 'Home - EastFront PK', description: 'Islamic Resistance news and analysis since 2011' },
    ur: { title: 'ہوم پیج - ایسٹ فرنٹ پی کے', description: '2011 سے اسلامی مزاحمت کی خبریں اور تجزیہ' },
    ar: { title: 'الصفحة الرئيسية - الجبهة الشرقية', description: 'أخبار وتحليل المقاومة الإسلامية منذ 2011' },
    fa: { title: 'صفحه اصلی - فرونت شرق', description: 'اخبار و تحلیل مقاومت اسلامی از سال 2011' },
    hi: { title: 'होम पेज - ईस्टफ्रंट पीके', description: '2011 से इस्लामिक प्रतिरोध समाचार और विश्लेषण' },
  },
  '/about': {
    en: { title: 'About Us - EastFront PK', description: 'Learn about our mission, vision and team since 2011' },
    ur: { title: 'ہمارے بارے میں - ایسٹ فرنٹ پی کے', description: '2011 سے ہمارے مشن، ویژن اور ٹیم کے بارے میں جانیں' },
    ar: { title: 'من نحن - الجبهة الشرقية', description: 'تعرف على مهمتنا ورؤيتنا وفريقنا منذ 2011' },
    fa: { title: 'درباره ما - فرونت شرق', description: 'از سال 2011 درباره ماموریت، چشم انداز و تیم ما بیاموزید' },
    hi: { title: 'हमारे बारे में - ईस्टफ्रंट पीके', description: '2011 से हमारे मिशन, दृष्टि और टीम के बारे में जानें' },
  },
  '/books': {
    en: { title: 'Digital Library - EastFront PK', description: 'Download research papers, books and analysis on Islamic resistance' },
    ur: { title: 'ڈیجیٹل لائبریری - ایسٹ فرنٹ پی کے', description: 'اسلامی مزاحمت پر تحقیقی مقالے، کتابیں اور تجزیہ ڈاؤن لوڈ کریں' },
    ar: { title: 'المكتبة الرقمية - الجبهة الشرقية', description: 'تحميل أوراق البحث والكتب والتحليل حول المقاومة الإسلامية' },
    fa: { title: 'کتابخانه دیجیتال - فرونت شرق', description: 'دانلود مقالات تحقیقاتی، کتاب ها و تحلیل در مورد مقاومت اسلامی' },
    hi: { title: 'डिजिटल लाइब्रेरी - ईस्टफ्रंट पीके', description: 'इस्लामिक प्रतिरोध पर शोध पत्र, किताबें और विश्लेषण डाउनलोड करें' },
  },
  '/contact': {
    en: { title: 'Contact Us - EastFront PK', description: 'Get in touch for latest updates and discussions' },
    ur: { title: 'رابطہ کریں - ایسٹ فرنٹ پی کے', description: 'تازہ ترین اپڈیٹس اور مباحثوں کے لیے رابطہ کریں' },
    ar: { title: 'اتصل بنا - الجبهة الشرقية', description: 'تواصل للحصول على آخر التحديثات والمناقشات' },
    fa: { title: 'تماس با ما - فرونت شرق', description: 'برای آخرین به روزرسانی ها و بحث ها در تماس باشید' },
    hi: { title: 'संपर्क करें - ईस्टफ्रंट पीके', description: 'नवीनतम अपडेट और चर्चाओं के लिए संपर्क में रहें' },
  },
  '/whatsapp': {
    en: { title: 'WhatsApp Groups - EastFront PK', description: 'Join 18+ active WhatsApp groups for discussions and updates' },
    ur: { title: 'واٹس ایپ گروپس - ایسٹ فرنٹ پی کے', description: 'مباحثوں اور اپڈیٹس کے لیے 18+ فعال واٹس ایپ گروپس میں شامل ہوں' },
    ar: { title: 'مجموعات واتساب - الجبهة الشرقية', description: 'انضم إلى 18+ مجموعة واتساب نشطة للمناقشات والتحديثات' },
    fa: { title: 'گروه های واتساپ - فرونت شرق', description: 'به 18+ گروه فعال واتساپ برای بحث و به روزرسانی بپیوندید' },
    hi: { title: 'व्हाट्सएप समूह - ईस्टफ्रंट पीके', description: 'चर्चाओं और अपडेट के लिए 18+ सक्रिय व्हाट्सएप समूहों में शामिल हों' },
  },
};

// Dynamic metadata generator
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const pathname = '/'; // You can get this dynamically if needed
  const t = localeTranslations[locale as keyof typeof localeTranslations] || localeTranslations.en;
  const pageData = pageMetadata[pathname as keyof typeof pageMetadata]?.[locale as keyof typeof localeTranslations] || {};
  
  const title = pageData.title || t.title;
  const description = pageData.description || t.description;
  const currentUrl = `${baseUrl}/${locale}${pathname === '/' ? '' : pathname}`;
  const ogLocale = localeToOgLocale[locale as keyof typeof localeToOgLocale] || 'en_US';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${t.siteName}`,
    },
    description,
    keywords: t.keywords,
    
    // Open Graph (Facebook, WhatsApp, LinkedIn, etc.)
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url: currentUrl,
      title,
      description,
      siteName: t.siteName,
      images: [
        {
          url: `${baseUrl}/logo-social.jpg`, // Optimized logo for social media
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
        {
          url: `${baseUrl}/logo.jpg`, // Original logo as fallback
          width: 800,
          height: 600,
          alt: `${t.siteName} Logo`,
          type: 'image/jpeg',
        },
      ],
    },
    
    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/logo-social.jpg`],
      creator: '@eastfront_pk',
      site: '@eastfront_pk',
    },
    
    // Additional social media
    authors: [{ name: 'EastFront PK Editorial Team' }],
    publisher: t.siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    
    // SEO
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
    
    // Icons
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
    },
    
    // Manifest
    manifest: '/site.webmanifest',
    
    // Apple specific
    appleWebApp: {
      title: t.siteName,
      statusBarStyle: 'black-translucent',
    },
    
    // Application
    applicationName: t.siteName,
    
    // Alternates for multilingual
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
    
    // Other
    category: 'Education',
    classification: 'News & Research',
  };
}

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
};

// Generate static params for SSG
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ur' },
    { locale: 'hi' },
    { locale: 'fa' },
    { locale: 'ar' },
  ];
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' || locale === 'fa' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&family=Montserrat:wght@400;700&display=swap" 
          rel="stylesheet"
          crossOrigin="anonymous"
        />
        
        {/* Additional meta tags for better sharing */}
        <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />
        <meta property="fb:pages" content="YOUR_FACEBOOK_PAGE_ID" />
        <meta name="twitter:site" content="@eastfront_pk" />
        <meta name="twitter:creator" content="@eastfront_pk" />
        
        {/* WhatsApp specific */}
        <meta property="og:whatsapp:page" content="https://wa.me/+923412786433" />
        <meta property="og:whatsapp:site" content="EastFront PK WhatsApp Groups" />
        
        {/* Telegram specific */}
        <meta property="og:telegram:channel" content="https://t.me/eastfront_pk" />
        
        {/* Additional OG tags for better previews */}
        <meta property="og:see_also" content="https://t.me/eastfront_pk" />
        <meta property="og:see_also" content="https://wa.me/+923412786433" />
        <meta property="og:see_also" content={`${baseUrl}/books`} />
        <meta property="og:see_also" content={`${baseUrl}/whatsapp`} />
        
        {/* Additional structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EastFront PK",
              "url": baseUrl,
              "logo": `${baseUrl}/logo.jpg`,
              "description": "Islamic Resistance Movement Since 2011",
              "founder": "Muzammil Hassan Hatmi",
              "foundingDate": "2011",
              "sameAs": [
                "https://t.me/eastfront_pk",
                "https://wa.me/+923412786433"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white transition-colors duration-300`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
        
        {/* Schema markup for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": baseUrl,
              "name": "EastFront PK",
              "description": "Islamic Resistance Movement Since 2011",
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${baseUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              },
              "inLanguage": ["en", "ur", "ar", "fa", "hi"]
            })
          }}
        />
      </body>
    </html>
  );
}