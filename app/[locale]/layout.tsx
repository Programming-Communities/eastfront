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
  title: 'EastFront PK - Islamic Resistance & Resistance',
  description: 'سن 2011 سے جاری مزاحمت و مقاومت اسلامی کی خبریں، تحقیقات اور تجزیے',
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
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors`}>
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