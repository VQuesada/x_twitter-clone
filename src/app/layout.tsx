import './globals.css'
import type { Metadata } from 'next'
import { AppProviders } from './providers'

export const metadata: Metadata = {
  title: 'X clone',
  description: 'X clone - formerly Twitter clone'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  )
}
