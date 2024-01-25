import './globals.css'
import StyledComponentsRegistry from './registry'

export const metadata = {
  title: 'TPL Trinitypact Limited | Home',
  description: 'Welcome to TPL Trinitypact Limited, a dynamic real estate development company rooted in Lagos, Nigeria.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
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
