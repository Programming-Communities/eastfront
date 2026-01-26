// lib/i18n.ts
export const locales = ['en', 'ur', 'hi', 'fa', 'ar'] as const;
export const defaultLocale = 'ur' as const;
export const localeNames = {
  en: 'English',
  ur: 'اردو',
  hi: 'हिंदी',
  fa: 'فارسی',
  ar: 'العربية'
} as const;

// Helper to check if locale is valid
export function isValidLocale(locale: string): boolean {
  return (locales as readonly string[]).includes(locale);
}