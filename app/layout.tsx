import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const lora = Lora({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Lozinr',
  description: 'Lozinr is a Branding agency',
  generator: 'Lozinr',
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
    apple: 'https://v7korlxmmmpzjkj8.private.blob.vercel-storage.com/Lozinr.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${lora.variable} antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
