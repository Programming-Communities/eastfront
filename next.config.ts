import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ['drive.google.com'],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default withNextIntl(nextConfig);