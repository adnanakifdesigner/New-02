import type { Metadata } from 'next'
import ProcessClient from '@/components/process-client'

export const metadata: Metadata = {
  title: 'Process',
  description: 'Our 5-phase brand design process — Discovery, Strategy, Direction, Identity, and Guidelines. Built to deliver brands that mean something.',
}

export default function ProcessPage() {
  return <ProcessClient />
}
