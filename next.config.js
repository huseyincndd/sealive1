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
      },
      {
        protocol: 'https',
        hostname: 'www.shouf.io',
      },  
      {
        protocol: 'https',
        hostname: 'cdn.d-marin.com',
      },
      {
        protocol: 'https',
        hostname: 'da28ojrjakn6f.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'image.yachtbuyer.com',
      }
    ],
  },
}

module.exports = nextConfig 