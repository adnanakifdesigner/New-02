'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ProjectOverlay } from './project-overlay'
import { projectsData } from '@/lib/projects-data'
import { ArrowUpRight } from 'lucide-react'

interface ProjectsProps {
  openWorkOverlay: boolean
  onWorkOverlayClose: () => void
}

export default function Projects({ openWorkOverlay, onWorkOverlayClose }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const [overlayOpen, setOverlayOpen] = useState(openWorkOverlay)
  const audioContextRef = useRef<AudioContext | null>(null)

  const playLinkHoverSound = () => {
    try {
      // Initialize AudioContext on first interaction
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      const context = audioContextRef.current

      // Create a subtle, minimal sound
      const oscillator = context.createOscillator()
      const gainNode = context.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(context.destination)

      // Soft, gentle tone - single note
      oscillator.frequency.setValueAtTime(600, context.currentTime)
      oscillator.type = 'sine'

      // Soft attack and fade out
      gainNode.gain.setValueAtTime(0.05, context.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.12)

      oscillator.start(context.currentTime)
      oscillator.stop(context.currentTime + 0.12)
    } catch (error) {
      // Silently fail if audio context can't be created
    }
  }

  const playBrandHoverSound = () => {
    try {
      // Initialize AudioContext on first interaction
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      const context = audioContextRef.current

      // Create a subtle, minimal sound
      const oscillator = context.createOscillator()
      const gainNode = context.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(context.destination)

      // Soft, gentle tone - single note
      oscillator.frequency.setValueAtTime(600, context.currentTime)
      oscillator.type = 'sine'

      // Soft attack and fade out
      gainNode.gain.setValueAtTime(0.05, context.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.12)

      oscillator.start(context.currentTime)
      oscillator.stop(context.currentTime + 0.12)
    } catch (error) {
      // Silently fail if audio context can't be created
    }
  }

  const brandsList = [
    { name: 'Lozinr', projectId: 0 },
    { name: 'Cnyf', projectId: 1 },
    { name: 'Luvena', projectId: 2 },
    { name: 'Trevora', projectId: 3 },
    { name: 'Finure Health', projectId: 4 },
  ]

  const handleBrandClick = (projectId: number) => {
    if (projectsData[projectId]) {
      setSelectedProject(projectsData[projectId])
      setOverlayOpen(true)
    }
  }

  return (
    <>
      <section className="bg-black px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 min-h-[600px] md:min-h-[700px]">
          {/* Left Grid - Hero Content */}
          <div className="flex flex-col justify-end h-full">
            <h1 className="text-[28px] font-medium tracking-tight leading-tighter text-[#F2EDE4]">
              <span className="inline">(→)</span> LOZINR is a branding studio run by <motion.a
                href="https://www.instagram.com/masterpeees_adnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline cursor-pointer hover:opacity-70 transition-opacity"
                onHoverStart={playLinkHoverSound}
                whileHover={{ scale: 1.02 }}
              >
                Adnan Akif
              </motion.a>. helping ambitious creative brands stand out with distinctive brand identity systems and story-driven strategy.
            </h1>
          </div>

          {/* Right Grid - Brands List */}
          <div className="flex flex-col justify-end">
            <div className="space-y-0">
              <p className="text-[14px] uppercase tracking-tight text-[#D9D9D9]/60 mb-0 pb-2 border-b border-[#D9D9D9]/50">
                Creative Brands We&apos;ve Helped
              </p>

              {brandsList.map((brand, index) => (
                <motion.div
                  key={index}
                  className="group"
                  whileHover="hover"
                  initial="normal"
                  onHoverStart={playBrandHoverSound}
                >
                  <motion.div
                    className="flex items-center justify-between py-2 px-0 border-b border-[#D9D9D9]/50 cursor-pointer"
                    variants={{
                      normal: { backgroundColor: 'rgba(0, 0, 0, 0)' },
                      hover: { backgroundColor: 'rgba(242, 237, 228)' }
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    onClick={() => handleBrandClick(brand.projectId)}
                  >
                    <motion.span
                      className="text-[16px] tracking-tight font-medium"
                      variants={{
                        normal: { color: 'rgba(242, 237, 228)', x: 0 },
                        hover: { color: 'rgba(0, 0, 0, 1)', x: 8 }
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      suppressHydrationWarning
                    >
                      {brand.name}
                    </motion.span>
                    <motion.div
                      variants={{
                        normal: { x: 0, y: 0, color: 'rgba(242, 237, 228)' },
                        hover: { x: -6, y: 0, color: 'rgba(0, 0, 0, 1)' }
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 px-6">
        <ProjectOverlay project={selectedProject} isOpen={overlayOpen} onClose={() => setOverlayOpen(false)} />
      </section>
    </>
  )
}
