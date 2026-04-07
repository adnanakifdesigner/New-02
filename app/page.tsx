import type { Metadata } from 'next'
import HomeClient from '@/components/home-client'

export const metadata: Metadata = {
  title: 'Lozinr — Brand Design Studio',
  description: 'We build minimal, modern brand identities for tech startups and ambitious businesses. Strategy-led. Craft-driven.',
}

export default function Home() {
  return <HomeClient />
}
