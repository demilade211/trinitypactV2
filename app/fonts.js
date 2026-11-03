import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

// Instrument Serif is not in Next 14.0's Google font registry, so it is
// self-hosted from app/fonts (OFL licensed, downloaded from Google Fonts).
export const serif = localFont({
  src: [
    { path: './fonts/InstrumentSerif-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/InstrumentSerif-Italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
})

export const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})
