import { MetadataRoute } from 'next'
import { caseStudies } from '@/content/case-studies'
import { services } from '@/content/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.guptaabhay.in'
  const currentDate = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic case study pages
  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: study.featured ? 0.9 : 0.7,
  }))

  // Dynamic service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: service.category === 'core' ? 0.8 : 0.7,
  }))

  return [...staticPages, ...caseStudyPages, ...servicePages]
}
