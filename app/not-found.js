import LandingShell from '@/components/landing/LandingShell'
import NotFound from '@/components/landing/NotFound'

// Next.js already marks not-found responses noindex.
export const metadata = {
  title: 'Page Not Found',
}

export default function NotFoundPage() {
  return (
    <LandingShell>
      <NotFound />
    </LandingShell>
  )
}
