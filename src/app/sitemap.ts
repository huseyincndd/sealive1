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

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // İleride blog veya dinamik hizmet sayfaları eklerseniz,
  // onları da buraya ekleyebilirsiniz.
  // const dynamicUrls = ...

  return [
    ...staticUrls,
    // ...dynamicUrls
  ]
} 