import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // ✅ CRITICAL: Image optimization for LCP
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
    // ✅ OPTIMIZED: Image formats for modern browsers
    formats: ['image/avif', 'image/webp'],
    // ✅ OPTIMIZED: Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // ✅ OPTIMIZED: Image sizes for performance
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // ✅ OPTIMIZED: Cache TTL
    minimumCacheTTL: 60 * 60 * 24, // 24 hours
  },
  
  // ✅ CRITICAL: Bundle optimization
  compiler: {
    // ✅ Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // ✅ Remove React properties for smaller bundles
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  
  // ✅ OPTIMIZED: Compression
  compress: true,
  
  // ✅ OPTIMIZED: Headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // ✅ Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // ✅ Performance headers
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding'
          },
        ],
      },
      // ✅ Static assets caching
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      // ✅ Image caching
      {
        source: '/(.*).(jpg|jpeg|png|gif|ico|webp|avif|svg)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400'
          },
        ],
      },
      // ✅ Font caching
      {
        source: '/(.*).(woff|woff2|ttf|otf|eot)$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
    ];
  },
  
  // ✅ OPTIMIZED: Experimental features
  experimental: {
    optimizeCss: true, // ✅ CSS optimization
    // optimizeServerReact: true, // ✅ Comment out if not supported
  },
  
  // ✅ OPTIMIZED: Reduce bundle size
  output: 'standalone', // ✅ For better Docker/Serverless deployment
  
  // ✅ OPTIMIZED: Disable source maps in production
  productionBrowserSourceMaps: false,
  
  // ✅ OPTIMIZED: Remove powered by header
  poweredByHeader: false,
  
  // ✅ Keep existing configurations
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);