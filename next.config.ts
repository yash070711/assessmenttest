/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps identify potential problems in your React app
  
  images: {
    unoptimized: true, // Useful for static export; otherwise, consider optimizing images
  },
  swcMinify: true, // Use SWC compiler for faster builds
  trailingSlash: true, // Ensures all URLs end with a trailing slash
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during production builds
  },
  compiler: {
    styledComponents: true, // Adds support for styled-components if used
  },
  typescript: {
    ignoreBuildErrors: false, // Set to `false` to ensure TS errors are caught during builds
  },
  experimental: {
    appDir: true, // Enable experimental app directory (Next.js 13+ feature)
  },
  async redirects() {
    return [
      {
        source: '/old-path/:slug*',
        destination: '/new-path/:slug*', // Redirect old paths to new paths
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://backend.example.com/:path*', // Proxy API requests to backend
      },
    ];
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN', // Adds security headers
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ],
};

module.exports = nextConfig;
