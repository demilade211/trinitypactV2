import { SITE } from '@/components/landing/site'

export default function manifest() {
  return {
    name: SITE.name,
    short_name: 'TPL Trinitypact',
    description: 'Real estate development and investment in Lagos, Nigeria.',
    start_url: '/',
    display: 'standalone',
    background_color: '#e4e5df',
    theme_color: '#191917',
    icons: [{ src: '/icon.png', sizes: '103x103', type: 'image/png' }],
  }
}
