import './globals.css'
import type { Metadata } from 'next'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
