import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EastFront PK - اسلامی مزاحمت و مقاومت',
  description: 'سن 2011 سے جاری مزاحمت و مقاومت اسلامی کے متعلق تازہ ترین خبریں اور تجزیے',
  keywords: 'Islamic Resistance, Middle East, Geopolitics, Defense Analysis, EastFront PK',
  authors: [{ name: 'Muzammil Hassan Hatmi' }],
  openGraph: {
    title: 'EastFront PK - اسلامی مزاحمت و مقاومت',
    description: 'سن 2011 سے جاری مزاحمت و مقاومت اسلامی کے متعلق تازہ ترین خبریں اور تجزیے',
    type: 'website',
    locale: 'ur_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EastFront PK',
    description: 'Islamic Resistance since 2011',
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' || locale === 'fa' ? 'rtl' : 'ltr'}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://eastfront.pk" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}