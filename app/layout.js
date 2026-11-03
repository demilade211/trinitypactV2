import './globals.css'
import StyledComponentsRegistry from './registry'
import { serif, sans } from './fonts'

export const metadata = {
  title: {
    default: 'TPL Trinitypact Limited | Real Estate Development in Lagos',
    template: '%s | TPL Trinitypact Limited',
  },
  description: 'Welcome to TPL Trinitypact Limited, a dynamic real estate development company rooted in Lagos, Nigeria.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <link
          rel="icon"
          href="/icon/icon.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
