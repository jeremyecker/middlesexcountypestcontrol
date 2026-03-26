import { MetadataRoute } from 'next';
import { DOMAIN, towns, services, wildlifeServices, blogPosts } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: DOMAIN, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${DOMAIN}/services`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${DOMAIN}/commercial`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${DOMAIN}/residential`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${DOMAIN}/wildlife`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${DOMAIN}/locations`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${DOMAIN}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${DOMAIN}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${DOMAIN}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${DOMAIN}/reviews`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${DOMAIN}/privacy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const townPages = towns.map(town => ({
    url: `${DOMAIN}/${town.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const servicePages = services.map(service => ({
    url: `${DOMAIN}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const wildlifePages = wildlifeServices.map(service => ({
    url: `${DOMAIN}/wildlife/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages = blogPosts.map(post => ({
    url: `${DOMAIN}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...townPages, ...servicePages, ...wildlifePages, ...blogPages];
}
