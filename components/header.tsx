'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'

interface HeaderProps {
  onWorkClick?: () => void
}

export default function Header({ onWorkClick }: HeaderProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const lastScrollYRef = useRef(0)
  const audioContextRef = useRef<AudioContext | null>(null)

  // Logo hover sound - subtle minimal
  const playLogoSound = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      const ctx = audioContextRef.current
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.setValueAtTime(600, ctx.currentTime)
      osc.type = 'sine'
      gain.gain.setValueAtTime(0.05, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.12)
    } catch (e) { }
  }

  // Menu open sound - subtle minimal
  const playMenuOpenSound = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      const ctx = audioContextRef.current
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.setValueAtTime(600, ctx.currentTime)
      osc.type = 'sine'
      gain.gain.setValueAtTime(0.05, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.12)
    } catch (e) { }
  }

  // Nav link hover sound - subtle minimal
  const playNavSound = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      const ctx = audioContextRef.current
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.setValueAtTime(600, ctx.currentTime)
      osc.type = 'sine'
      gain.gain.setValueAtTime(0.05, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.12)
    } catch (e) { }
  }

  // Social link hover sound - subtle minimal
  const playSocialSound = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
      const ctx = audioContextRef.current
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.setValueAtTime(600, ctx.currentTime)
      osc.type = 'sine'
      gain.gain.setValueAtTime(0.05, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.12)
    } catch (e) { }
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Trigger nav link sounds with delays when menu opens
  useEffect(() => {
    if (isMenuOpen) {
      navLinks.forEach((_, index) => {
        const delay = 0.15 + index * 0.12
        setTimeout(() => {
          playNavSound()
        }, delay * 1000)
      })

      // Trigger social link sounds with delays
      socialLinks.forEach((_, index) => {
        const delay = 0.55 + index * 0.1
        setTimeout(() => {
          playSocialSound()
        }, delay * 1000)
      })
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
        // Scrolling down
        setIsHeaderVisible(false)
      } else {
        // Scrolling up
        setIsHeaderVisible(true)
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    if (!isMenuOpen) {
      playMenuOpenSound()
    }
    setIsMenuOpen(!isMenuOpen)
  }

  // SVG Logo Component - Footer SVG
  const Logo = () => (
    <svg width="80" height="auto" viewBox="0 0 743 166" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" className="w-16 md:w-20 h-auto">
      <path d="M6 11H39.7424V124.543H106.232V154.675H6V11Z" fill="#F2EDE4" />
      <path d="M149.496 144.899C138.819 138.538 130.752 129.929 125.288 119.062C119.819 108.203 117.089 96.0895 117.089 82.7176C117.089 69.3457 119.819 57.2363 125.288 46.3734C130.752 35.5145 138.823 26.9008 149.496 20.5405C160.169 14.1802 172.901 11 187.692 11C202.482 11 215.21 14.1802 225.887 20.5445C236.56 26.9048 244.631 35.5185 250.096 46.3774C255.56 57.2403 258.295 69.3537 258.295 82.7216C258.295 96.0895 255.56 108.203 250.096 119.066C244.627 129.929 236.56 138.538 225.887 144.903C215.21 151.263 202.478 154.447 187.692 154.447C172.905 154.447 160.169 151.267 149.496 144.903V144.899ZM160.105 113.664C166.149 121.699 175.344 125.714 187.692 125.714C200.04 125.714 209.23 121.699 215.278 113.664C221.322 105.634 224.344 95.3184 224.344 82.7216C224.344 70.1248 221.322 59.8132 215.278 51.7789C209.23 43.7485 200.04 39.7294 187.692 39.7294C175.344 39.7294 166.149 43.7485 160.105 51.7789C154.057 59.8132 151.039 70.1288 151.039 82.7216C151.039 95.3144 154.061 105.634 160.105 113.664Z" fill="#F2EDE4" />
      <path d="M271.75 127.739L346.027 40.5364L309.686 41.1357H274.145V11H390.151V36.9407L314.679 125.142L352.415 124.543H391.15V154.675H271.75V127.735V127.739Z" fill="#F2EDE4" />
      <path d="M412.34 11H446.083V154.679H412.34V11Z" fill="#F2EDE4" />
      <path d="M499.624 58.295V154.679H467.277V11H503.817L560.921 107.783V11H593.268V154.679H556.728L499.624 58.295Z" fill="#F2EDE4" />
      <path d="M614.458 11H682.027C699.348 11 712.344 14.9313 721.01 22.7858C729.673 30.6443 734.002 41.0997 734.002 54.152C734.002 61.4792 732.067 68.1072 728.206 74.0321C724.34 79.9609 707.507 88.5026 696.758 86.509C702.754 89.4415 715.146 88.7503 725.507 100.704C729.137 104.895 730.472 110.964 731.404 117.488L737 154.847H702.418L697.621 122.482C696.554 115.29 694.287 109.997 690.826 106.597C687.36 103.201 682.295 101.503 675.631 101.503H648.245V154.847H614.462V11H614.458ZM676.027 75.734C683.754 75.734 689.55 74.2038 693.42 71.1395C697.286 68.0752 699.216 63.3489 699.216 56.9526C699.216 50.5563 697.282 45.834 693.42 42.7657C689.554 39.7014 683.754 38.1713 676.027 38.1713H648.241V75.73H676.027V75.734Z" fill="#F2EDE4" />
    </svg>
  )

  const navLinks = ['HOME', 'PROCESS', 'CONTACT']
  const socialLinks = [
    { name: 'INSTAGRAM', link: 'https://www.instagram.com/masterpeees_adnan/' },
    { name: 'YOUTUBE', link: 'https://www.youtube.com/@masterpeees_adnan' },
    { name: 'LINKEDIN', link: 'https://www.linkedin.com/in/masterpeees-adnan/' }
  ]

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 flex items-center justify-start w-full"
        initial={{ y: -100, opacity: 0 }}
        animate={isMounted ? {
          y: isHeaderVisible ? 0 : -120,
          opacity: isHeaderVisible ? 1 : 0
        } : { y: -100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 15, delay: isMounted ? 0 : 0.5 }}
      >
        <div
          className="flex items-center justify-between gap-4 py-3 px-4 lg:px-6 w-full"
          style={{ backgroundColor: '#26775C' }}
        >
          {/* Logo - Left Side */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => router.push('/')}
            onMouseEnter={playLogoSound}
          >
            <Logo />
          </motion.div>

          {/* Active Page Nav - Center on Desktop */}
          <div className="hidden md:flex items-center gap-4 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => {
              const isActive =
                (link === 'HOME' && pathname === '/') ||

                (link === 'PROCESS' && pathname === '/process') ||
                (link === 'CONTACT' && pathname === '/contact')

              // Only show active link always
              if (!isActive) return null

              return (
                <button
                  key={link}
                  onClick={() => {
                    if (link === 'HOME') router.push('/')
                    else if (link === 'WORK') router.push('/work')
                    else if (link === 'PROCESS') router.push('/process')
                    else if (link === 'CONTACT') router.push('/contact')
                  }}
                  className="text-[16px] font-medium tracking-tight text-[#F2EDE4] whitespace-nowrap"
                >
                  {link}
                </button>
              )
            })}
          </div>

          {/* Hamburger Menu - Always visible on Mobile and Desktop, Right Side */}
          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1 cursor-pointer w-7 h-7 justify-center items-center flex-shrink-0 ml-auto"
            aria-label="Toggle menu"
          >
            {/* Top Line - Shorter */}
            <motion.span
              className="h-0.5 bg-[#F2EDE4] rounded-full"
              animate={{
                width: isMenuOpen ? 24 : 18,
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8.5 : 0,
              }}
              initial={{ width: 18 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              style={{ transformOrigin: 'center' }}
            />

            {/* Middle Line - Full Width */}
            <motion.span
              className="w-7 h-0.5 bg-[#F2EDE4] rounded-full"
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            />

            {/* Bottom Line - Shorter */}
            <motion.span
              className="h-0.5 bg-[#F2EDE4] rounded-full"
              animate={{
                width: isMenuOpen ? 24 : 12,
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8.5 : 0,
              }}
              initial={{ width: 12 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              style={{ transformOrigin: 'center' }}
            />
          </button>
        </div>
      </motion.header>

      {/* Slide-up Menu */}
      <AnimatePresence>
        {isMounted && isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#26775C] backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMounted && isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center px-1"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, mass: 1 }}
          >
            {/* Nav Links - Centered */}
            <div className="flex flex-col items-center justify-center gap-0 flex-1" style={{ lineHeight: '0.9' }}>
              {navLinks.map((link, index) => {
                const isActive =
                  (link === 'HOME' && pathname === '/') ||

                  (link === 'PROCESS' && pathname === '/process') ||
                  (link === 'CONTACT' && pathname === '/contact')

                return (
                  <motion.div
                    key={link}
                    className={`text-[70px] lg:text-[90px] tracking-tighter font-regular cursor-pointer transition-colors ${isActive ? 'text-[#F2EDE4]' : 'text-[#F2EDE4] hover:text-[#26775C]'
                      }`}
                    initial={{ opacity: 0.3, y: -40 }}
                    animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0.3, y: -40 }}
                    transition={{ type: 'spring', stiffness: 40, damping: 15, mass: 0.8, delay: isMenuOpen ? 0.15 + index * 0.12 : 0 }}
                    onMouseEnter={playNavSound}
                    onClick={() => {
                      setIsMenuOpen(false)
                      if (link === 'HOME') router.push('/')
                      else if (link === 'WORK') {
                        router.push('/work')
                        onWorkClick?.()
                      }
                      else if (link === 'PROCESS') router.push('/process')
                      else if (link === 'CONTACT') router.push('/contact')
                    }}
                  >
                    {link}
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links - Bottom with slight margin */}
            <motion.div
              className="flex flex-col items-center justify-center gap-2 pb-5"
            >
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 cursor-pointer group"
                    initial={{ opacity: 0, y: 60 }}
                    animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                    transition={{ type: 'spring', stiffness: 60, damping: 18, delay: isMenuOpen ? 0.55 + index * 0.1 : 0 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={playSocialSound}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-[14px] text-[#F2EDE4] tracking-tight font-medium">{social.name}</span>
                    <motion.div
                      className="relative w-5 h-5 flex items-center justify-center rounded-full bg-[#F2EDE4] group-hover:bg-[#26775C] transition-colors duration-300"
                      transition={{ duration: 0.3 }}
                    >
                      <motion.svg
                        className="w-3 h-3 text-[#26775C] group-hover:text-[#F2EDE4] transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: 0 }}
                        whileHover={{ rotate: 0 }}
                        initial={{ rotate: -35 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.55 + index * 0.1 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
