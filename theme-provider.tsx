import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Enerama Environmental Technologies | Atmospheric Resource Management',
  description: 'Enerama delivers full-service climate control projects using patented liquid desiccant technology. From design to commissioning and beyond.',
  keywords: 'climate control, liquid desiccant, dehumidification, water recovery, air sterilization, HVAC, environmental technology',
}

export const viewport: Viewport = {
  themeColor: '#1B3A6B',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
