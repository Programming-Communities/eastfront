import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ur', 'hi', 'fa', 'ar'],

  // Used when no locale matches
  defaultLocale: 'ur',
  
  // Always show locale in URL
  localePrefix: 'always'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ur|en|hi|fa|ar)/:path*']
};