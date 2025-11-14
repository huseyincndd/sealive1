import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sealive.net'

  // Statik sayfalarınızın listesi
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/services/yacht-transportation',
    '/services/ocean-freight',
    '/services/air-freight',
    '/services/land-transport',
    '/contact',
    '/privacy',
    '/terms',
    '/quote',
    '/cookies',
  ]

  const staticUrls = staticRoutes.map((route) => {
    // Priority assignment for SEO
    let priority = 0.8
    if (route === '') priority = 1.0
    if (route === '/services/yacht-transportation') priority = 0.95 // Highest priority for yacht transportation
    if (route === '/services') priority = 0.9
    
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority,
    }
  })

  // İleride blog veya dinamik hizmet sayfaları eklerseniz,
  // onları da buraya ekleyebilirsiniz.
  // const dynamicUrls = ...

  return [
    ...staticUrls,
    // ...dynamicUrls
  ]
} 