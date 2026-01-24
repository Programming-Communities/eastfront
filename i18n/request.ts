import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  // Validate locale
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  // Dynamically import messages - FIXED PATH
  let messages;
  try {
    // Path should be relative from i18n/request.ts to messages/
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    // Fallback to English if locale file doesn't exist
    messages = (await import(`../messages/en.json`)).default;
  }

  return {
    locale: locale as string,
    messages,
    timeZone: 'Asia/Karachi'
  };
});