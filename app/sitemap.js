import { absolute } from '@/components/landing/seo'

// One entry per route, with each page's lead image for image search.
const ROUTES = [
  { path: '/', priority: 1, changeFrequency: 'monthly', images: ['/images/home/hero-house.jpg'] },
  { path: '/about', priority: 0.8, changeFrequency: 'yearly', images: ['/images/pages/about/ceo.jpeg'] },
  { path: '/services', priority: 0.8, changeFrequency: 'yearly', images: ['/images/services/hero-site.jpg'] },
  { path: '/projects', priority: 0.9, changeFrequency: 'monthly', images: ['/images/pages/home/l2.jpeg', '/images/pages/home/l1.jpeg', '/images/pages/home/l3.jpeg'] },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly', images: [] },
]

export default function sitemap() {
  const lastModified = new Date()
  return ROUTES.map(({ path, priority, changeFrequency, images }) => ({
    url: absolute(path),
    lastModified,
    changeFrequency,
    priority,
    images: images.map(absolute),
  }))
}
