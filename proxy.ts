import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n';

const intlMiddleware = createMiddleware({
  locales: locales as any,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true,
  alternateLinks: true,
});

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const fullUrl = request.url;  // ✅ ADD THIS
  
  // Skip proxy for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    const response = NextResponse.next();
    response.headers.set('x-pathname', pathname);
    response.headers.set('x-url', fullUrl);  // ✅ ADD THIS
    return response;
  }
  
  // Apply internationalization middleware
  const response = await intlMiddleware(request);
  
  if (!response) {
    const fallbackResponse = NextResponse.next();
    fallbackResponse.headers.set('x-pathname', pathname);
    fallbackResponse.headers.set('x-url', fullUrl);  // ✅ ADD THIS
    return fallbackResponse;
  }
  
  // Add pathname and URL to headers for metadata access
  response.headers.set('x-pathname', pathname);
  response.headers.set('x-url', fullUrl);  // ✅ ADD THIS
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  
  // Add HSTS for production
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    );
  }
  
  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon|og|manifest.webmanifest|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|css|js|json)).*)',
  ],
};