import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Use a default export for `getRequestConfig`
export default getRequestConfig(async ({ locale }) => {
  if (!['en', 'ur', 'hi', 'fa', 'ar'].includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: 'Asia/Karachi'
  };
});

export const locales = ['en', 'ur', 'hi', 'fa', 'ar'] as const;
export const defaultLocale = 'ur' as const;
export const localeNames = {
  en: 'English',
  ur: 'اردو',
  hi: 'हिंदी',
  fa: 'فارسی',
  ar: 'العربية'
} as const;