export const locales = ['en', 'ur', 'hi', 'fa', 'ar'] as const;
export const defaultLocale = 'ur' as const;

// Type definition
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ur: 'اردو',
  hi: 'हिंदी',
  fa: 'فارسی',
  ar: 'العربية'
} as const;

// Helper to check if locale is valid
export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale as Locale);
}

// Client-side functions
export function getUserLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;
  const savedLocale = localStorage.getItem('locale');
  return savedLocale && isValidLocale(savedLocale) ? savedLocale : defaultLocale;
}

export function setUserLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('locale', locale);
  document.cookie = `locale=${locale}; path=/; max-age=31536000`;
}

// Get messages for a locale
export async function getMessages(locale: Locale = defaultLocale) {
  try {
    return (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading messages for ${locale}:`, error);
    // Fallback to default
    try {
      return (await import(`../messages/${defaultLocale}.json`)).default;
    } catch {
      return {};
    }
  }
}