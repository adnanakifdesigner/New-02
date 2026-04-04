'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Header />

      <section className="flex-1 flex flex-col px-3 lg:px-4 py-10 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0, filter: 'blur(10px)' }}
          animate={isMounted ? { y: 0, opacity: 1, filter: 'blur(0px)' } : { y: 20, opacity: 0, filter: 'blur(10px)' }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="mb-12 md:mb-20"
        >
          <h1 className="text-[59px] lg:text-[160px] flex items-center font-regular text-white tracking-tighter text-left leading-tight">
            Contact us
          </h1>
        </motion.div>

        {/* Calendly Embed */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isMounted ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: 'easeOut'
          }}
          className="w-full flex-1 bg-transparent"
        >
          <iframe
            src="https://cal.com/adnanakif/30-min-meeting?embed=true"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a meeting"
            className="min-h-[600px] sm:min-h-[700px] md:min-h-[800px]"
          />
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
