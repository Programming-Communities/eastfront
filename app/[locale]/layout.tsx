import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ui/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EastFront PK - اسلامی مزاحمت و مقاومت',
  description: 'سن 2011 سے جاری مزاحمت و مقاومت اسلامی کے متعلق تازہ ترین خبریں اور تجزیے',
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
      {/* ... head content ... */}
      <body className={`${inter.className} bg-white text-black`} suppressHydrationWarning>
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