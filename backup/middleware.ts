import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/lib/i18n';

export default createMiddleware({
  locales: locales as any,
  defaultLocale,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(ur|en|hi|fa|ar)/:path*']
};