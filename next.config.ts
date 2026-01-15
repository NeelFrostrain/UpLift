/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // The actual image host
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com', // The redirect host you're using
      },
      { hostname: 'thispersondoesnotexist.com' },
      { hostname: 'i.pravatar.cc' },
    ],
  },
};

export default nextConfig;
