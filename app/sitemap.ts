import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lozinr.com'
  
  return [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/process`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work`,
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.9,
      lastModified: new Date(),
    },
  ]
}
