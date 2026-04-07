'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Project, projectsData } from '@/lib/projects-data'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

interface ProjectOverlayProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectOverlay({ project, isOpen, onClose }: ProjectOverlayProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>('challenge')
  const [isHoveringClose, setIsHoveringClose] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)

  // Play overlay open sound effect
  useEffect(() => {
    if (isOpen) {
      playOverlayOpenSound()
    }
  }, [isOpen])

  const playOverlayOpenSound = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      const context = audioContextRef.current
      const oscillator = context.createOscillator()
      const gainNode = context.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(context.destination)

      // Subtle ascending tone for open
      oscillator.frequency.setValueAtTime(400, context.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(500, context.currentTime + 0.12)
      oscillator.type = 'sine'

      gainNode.gain.setValueAtTime(0.04, context.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.12)

      oscillator.start(context.currentTime)
      oscillator.stop(context.currentTime + 0.12)
    } catch (error) {
      // Silently fail if audio context can't be created
    }
  }

  const playCloseHoverSound = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }

      const context = audioContextRef.current
      const oscillator = context.createOscillator()
      const gainNode = context.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(context.destination)

      // Subtle descending tone for close hover
      oscillator.frequency.setValueAtTime(500, context.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(400, context.currentTime + 0.08)
      oscillator.type = 'sine'

      gainNode.gain.setValueAtTime(0.03, context.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.08)

      oscillator.start(context.currentTime)
      oscillator.stop(context.currentTime + 0.08)
    } catch (error) {
      // Silently fail if audio context can't be created
    }
  }

  if (!project) return null

  const sections = [
    { key: 'challenge', label: 'Challenge', content: project.sections.challenge.description },
    { key: 'strategy', label: 'Strategy', content: project.sections.strategy.description },
    { key: 'identity', label: 'Identity', content: project.sections.identity.description },
    { key: 'application', label: 'Application', content: project.sections.application.description },
    { key: 'outcome', label: 'Outcome', content: project.sections.outcome.description },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#000000] z-40"
          />

          {/* Overlay Content */}
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-50 flex flex-col"
          >
            {/* Header with Brand Name and Close Button */}
            <div className="h-10 bg-white flex items-center justify-between px-4 z-50 flex-shrink-0">
              <motion.span
                className="text-black text-sm font-medium tracking-tight uppercase flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                {project.name}
              </motion.span>
              <motion.button
                onClick={onClose}
                className="text-black text-sm font-medium tracking-tight uppercase relative w-16 h-10 flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                onMouseEnter={() => {
                  setIsHoveringClose(true)
                  playCloseHoverSound()
                }}
                onMouseLeave={() => setIsHoveringClose(false)}
              >
                {/* Original Close Text */}
                <motion.span
                  className="absolute text-sm font-medium tracking-tight uppercase"
                  animate={{
                    y: isHoveringClose ? -40 : 0,
                    opacity: isHoveringClose ? 0 : 1,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  Close
                </motion.span>

                {/* New Close Text from Bottom */}
                <motion.span
                  className="absolute text-sm font-medium tracking-tight uppercase"
                  animate={{
                    y: isHoveringClose ? 0 : 40,
                    opacity: isHoveringClose ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  Close
                </motion.span>
              </motion.button>
            </div>



            {/* Main Content - Responsive Layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="flex-1 overflow-hidden flex flex-col md:flex-row bg-black"
            >
              {/* Mobile Layout - Only Images */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="md:hidden flex-1 overflow-y-scroll px-0 py-4 bg-black"
              >
                <div className="space-y-1">
                  {/* Images grid - YouTube aspect ratio 16:9 */}
                  {project.images.map((image, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="w-full"
                    >
                      <div className="relative w-full bg-white/5 overflow-hidden aspect-video group hover:border-white/30 transition-colors">
                        <Image
                          src={image}
                          alt={`${project.name} - Image ${idx + 1}`}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Desktop Layout - Left Column (20%) + Right Column (80%) */}
              <>
                {/* Left Column - Project Sections Grid List */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  className="hidden md:flex w-1/5 overflow-y-auto bg-black border-r border-white/20 flex-col pt-16"
                >
                  <div className="w-full border-t border-white/20">
                    {sections.map((section, idx) => (
                      <motion.div
                        key={section.key}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.45 + idx * 0.05, duration: 0.5 }}
                      >
                        <button
                          onClick={() => setExpandedSection(expandedSection === section.key ? null : section.key)}
                          className="w-full text-left group border-b border-white/20 hover:bg-white/5 transition-colors duration-300"
                        >
                          <div className="px-3 py-2 flex items-center justify-between">
                            <span className={`text-[14px] tracking-tight transition-colors duration-300 uppercase ${expandedSection === section.key ? 'text-white font-medium' : 'text-white/70 group-hover:text-white'
                              }`}>
                              {section.label}
                            </span>
                            <span className={`w-2 h-2 rounded-full transition-colors duration-300 flex-shrink-0 ${expandedSection === section.key ? 'bg-white' : 'bg-white/40'
                              }`} />
                          </div>
                        </button>

                        {/* Expanded Description */}
                        <AnimatePresence>
                          {expandedSection === section.key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                              className="overflow-hidden bg-white/5 border-b border-white/20"
                            >
                              <p className="text-[12px] text-white/60 tracking-tight leading-relaxed px-3 py-2">
                                {section.content}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right Column - 80% - Desktop Only */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  className="hidden md:flex flex-1 overflow-y-auto px-0 py-0 md:py-0 bg-black flex-col"
                >
                  <div className="space-y-1">
                    {/* Images grid - YouTube aspect ratio 16:9 */}
                    {project.images.map((image, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="w-full"
                      >
                        <div className="relative w-full bg-white/5 overflow-hidden aspect-video group hover:border-white/30 transition-colors">
                          <Image
                            src={image}
                            alt={`${project.name} - Image ${idx + 1}`}
                            fill
                            sizes="80vw"
                            className="object-cover"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
