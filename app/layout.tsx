import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  metadataBase: new URL('https://lozinr.com'),
  title: {
    default: 'Lozinr — Brand Design Studio',
    template: '%s | Lozinr',
  },
  description: 'Lozinr is a brand design studio run by Adnan Akif. We build minimal, modern brand identities for tech startups and ambitious businesses. Logo design, brand strategy, brand guidelines.',
  keywords: [
    'brand design studio',
    'brand identity',
    'logo design',
    'brand strategy',
    'brand guidelines',
    'minimal branding',
    'visual identity',
    'Adnan Akif',
    'Lozinr',
    'startup branding',
    'tech branding',
  ],
  authors: [{ name: 'Adnan Akif' }],
  creator: 'Adnan Akif',
  publisher: 'Lozinr',
  robots: 'index, follow',
  canonical: 'https://lozinr.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lozinr.com',
    siteName: 'Lozinr',
    title: 'Lozinr — Brand Design Studio',
    description: 'We build minimal, modern brand identities for tech startups and ambitious businesses.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2001-WcAWbaFGMsa8gBIagDbeIVAx3k4w5n.jpg',
        width: 1200,
        height: 630,
        alt: 'Lozinr Brand Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lozinr — Brand Design Studio',
    description: 'We build minimal, modern brand identities for tech startups and ambitious businesses.',
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2001-WcAWbaFGMsa8gBIagDbeIVAx3k4w5n.jpg',
    ],
  },
  icons: {
    icon: [
      {
        url: 'https://v7korlxmmmpzjkj8.private.blob.vercel-storage.com/Lozinr.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: 'https://v7korlxmmmpzjkj8.private.blob.vercel-storage.com/Lozinr.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: 'https://v7korlxmmmpzjkj8.private.blob.vercel-storage.com/Lozinr.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: 'https://v7korlxmmmpzjkj8.private.blob.vercel-storage.com/Lozinr.png',
    apple: 'https://v7korlxmmmpzjkj8.private.blob.vercel-storage.com/Lozinr.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Lozinr',
    description: 'Brand design studio specializing in minimal, modern brand identities',
    url: 'https://lozinr.com',
    founder: {
      '@type': 'Person',
      name: 'Adnan Akif',
    },
    areaServed: 'Worldwide',
    serviceType: 'Brand Identity Design',
    sameAs: [
      'https://instagram.com/masterpeees_adnan',
    ],
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${inter.className} ${lora.variable} antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
