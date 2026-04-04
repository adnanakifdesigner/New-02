'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Projects from '@/components/projects'
import Footer from '@/components/footer'

export default function Home() {
  const [openWorkOverlay, setOpenWorkOverlay] = useState(false)

  return (
    <main className="min-h-screen bg-black">
      <Header onWorkClick={() => setOpenWorkOverlay(true)} />
      <Projects openWorkOverlay={openWorkOverlay} onWorkOverlayClose={() => setOpenWorkOverlay(false)} />
      <Footer />
    </main>
  )
}
