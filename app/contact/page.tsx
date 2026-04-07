import type { Metadata } from 'next'
import ContactClient from '@/components/contact-client'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a brand project with Lozinr. Open for brand identity, logo design, and brand strategy projects. Limited spots available each month.',
}

export default function Contact() {
  return <ContactClient />
}

