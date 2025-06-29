/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'villaqrmenu.b-cdn.net',
      },
      {
        protocol: 'https',
        hostname: 'www.turkdenizcilik.com',
      }
      
    ],
  },
}

module.exports = nextConfig 