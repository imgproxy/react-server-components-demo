/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: 'apod.nasa.gov',
        hostname: 'live.staticflickr.com',
      },
    ],
  },
};

module.exports = nextConfig;
