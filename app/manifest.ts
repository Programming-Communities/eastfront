import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const headersList = await headers();
  const host = headersList.get('host') || 'eastfront.pk';
  const baseUrl = `https://${host}`;
  
  return {
    name: 'EastFront PK - Islamic Resistance Movement',
    short_name: 'EastFront PK',
    description: 'Since 2011 - 24/7 Coverage of Islamic Resistance News, Research & Analysis',
    start_url: '/en',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#991b1b',
    scope: '/',
    id: '/',
    orientation: 'portrait',
    categories: ['news', 'education', 'politics', 'research'],
    lang: 'en',
    dir: 'ltr',
    // Removed: iarc_rating_id (not supported in Next.js Manifest type)
    // Removed: prefer_related_applications (not supported)
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192x192-maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512x512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Latest News',
        short_name: 'News',
        description: 'Read latest updates',
        url: '/en/news',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'Digital Library',
        short_name: 'Library',
        description: 'Access books and research',
        url: '/en/books',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
      {
        name: 'WhatsApp Groups',
        short_name: 'WhatsApp',
        description: 'Join our community',
        url: '/en/whatsapp',
        icons: [{ src: '/icon-192x192.png', sizes: '192x192' }],
      },
    ],
    screenshots: [
      {
        src: '/screenshot-desktop.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Desktop view of EastFront PK',
      },
      {
        src: '/screenshot-mobile.png',
        sizes: '360x720',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Mobile view of EastFront PK',
      },
    ],
  };
}