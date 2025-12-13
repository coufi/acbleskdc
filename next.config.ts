import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'standalone', // Enable standalone output for Docker (not needed for Vercel)
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Environment variables available to the browser
  env: {
    SITE_NAME: 'ACbleskDC',
    SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://acbleskdc.cz',
  },
};

export default nextConfig;

