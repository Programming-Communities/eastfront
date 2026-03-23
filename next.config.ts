import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // ✅ SEO: Enable trailing slashes for better URL structure
  trailingSlash: false,
  
  // ✅ SEO: Remove powered by header
  poweredByHeader: false,
  
  // ✅ SEO: Image optimization for better LCP scores
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
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.cloudfront.net',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // ✅ SEO: Compress output
  compress: true,
  
  // ✅ SEO: Production optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  
  // ✅ SEO: Generate static pages for better performance
  output: 'standalone',
  
  // ✅ SEO: Production source maps disabled
  productionBrowserSourceMaps: false,
  
  // ✅ SEO: Skip TypeScript errors in production
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ✅ SEO: Skip ESLint errors in production
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // ✅ SEO: Optimized headers for caching and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
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
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
        ],
      },
      {
        source: '/:path*.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/:path*.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.{jpg,jpeg,png,gif,ico,webp,avif,svg}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/:path*.{woff,woff2,ttf,otf,eot}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.{js,css}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // ✅ SEO: Redirects for SEO optimization
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/en',
        permanent: true,
      },
    ];
  },
  
  // ✅ SEO: Rewrites for better URL structure
  async rewrites() {
    return [
      {
        source: '/sitemap',
        destination: '/sitemap.xml',
      },
      {
        source: '/robots',
        destination: '/robots.txt',
      },
      {
        source: '/manifest',
        destination: '/manifest.webmanifest',
      },
    ];
  },
  
  // ✅ SEO: Webpack optimization
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Optimize bundle size
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-is)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          next: {
            test: /[\\/]node_modules[\\/](next|next-intl)[\\/]/,
            name: 'next',
            chunks: 'all',
            priority: 30,
          },
        },
      },
    };
    
    return config;
  },
  
  // ✅ SEO: Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', 'next-intl'],
    // Removed: turbo (not supported in this version)
    // Removed: optimizeServerReact (not supported)
  },
  
  // ✅ SEO: i18n configuration for multilingual SEO
  i18n: {
    locales: ['en', 'ur', 'ar', 'fa', 'hi'],
    defaultLocale: 'en',
    localeDetection: true,
    domains: [
      {
        domain: 'eastfront.pk',
        defaultLocale: 'en',
      },
    ],
  },
};

export default withNextIntl(nextConfig);