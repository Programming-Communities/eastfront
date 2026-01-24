import Head from 'next/head';
import { useTranslations } from 'next-intl';

export default function SEO({ title, description }: { title?: string; description?: string }) {
  const t = useTranslations();
  
  const siteTitle = title ? `${title} | EastFront PK` : 'EastFront PK - Islamic Resistance';
  const siteDescription = description || t('Hero.description');

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content="Islamic Resistance, Middle East Politics, Geopolitics, Defense Analysis, EastFront PK" />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      
      {/* Multilingual SEO */}
      <link rel="alternate" href="https://eastfront.pk/en" hrefLang="en" />
      <link rel="alternate" href="https://eastfront.pk/ur" hrefLang="ur" />
      <link rel="alternate" href="https://eastfront.pk/hi" hrefLang="hi" />
      <link rel="alternate" href="https://eastfront.pk/fa" hrefLang="fa" />
      <link rel="alternate" href="https://eastfront.pk/ar" hrefLang="ar" />
      <link rel="alternate" href="https://eastfront.pk/" hrefLang="x-default" />
    </Head>
  );
}