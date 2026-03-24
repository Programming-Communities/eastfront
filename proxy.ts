import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n';

// Create next-intl middleware for internationalization
const intlMiddleware = createMiddleware({
  locales: locales as any,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: true,
  alternateLinks: true,
});

// PROXY function (renamed from middleware)
export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Skip proxy for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }
  
  // Apply internationalization
  const response = await intlMiddleware(request);
  
  if (!response) {
    return NextResponse.next();
  }
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
  
  // Add caching headers for better performance
  if (pathname.startsWith('/_next/static')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  }
  
  // Add HSTS for production
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    );
  }
  
  return response;
}

// Configure which routes to run proxy on
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|icon|og|manifest.webmanifest|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|css|js|json)).*)',
  ],
};