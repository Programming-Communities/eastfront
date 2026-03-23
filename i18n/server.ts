// i18n/server.ts - SERVER-SIDE ONLY
import { cookies, headers } from 'next/headers';
import { defaultLocale, locales } from '../lib/i18n';

// Import the type
import type { Locale } from '../lib/i18n';

// Server-side locale detection
export async function getLocaleFromRequest(): Promise<Locale> {
  try {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('locale')?.value as Locale;
    
    if (localeCookie && locales.includes(localeCookie)) {
      return localeCookie;
    }
    
    // Fallback to Accept-Language header
    const headersList = await headers();
    const acceptLanguage = headersList.get('accept-language');
    if (acceptLanguage) {
      for (const lang of acceptLanguage.split(',')) {
        const locale = lang.split(';')[0].trim().split('-')[0] as Locale;
        if (locales.includes(locale)) {
          return locale;
        }
      }
    }
    
    return defaultLocale;
  } catch (error) {
    console.error('Error detecting locale:', error);
    return defaultLocale;
  }
}