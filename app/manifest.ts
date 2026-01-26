import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'EastFront PK - Islamic Resistance',
    short_name: 'EastFront PK',
    description: 'Islamic Resistance Movement Since 2011',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#991b1b',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512x512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['news', 'education', 'politics'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait',
  };
}