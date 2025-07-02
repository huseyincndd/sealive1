import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.sealive.net'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Örnek: Eğer taranmasını istemediğiniz bir dizin varsa
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
} 