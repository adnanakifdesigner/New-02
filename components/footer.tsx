'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Footer() {
  const router = useRouter()
  const [hoveredCTA, setHoveredCTA] = useState<string | null>(null)
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  const playHoverSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gain = audioContext.createGain()

    oscillator.connect(gain)
    gain.connect(audioContext.destination)

    oscillator.frequency.value = 600
    oscillator.type = 'sine'
    gain.gain.setValueAtTime(0.05, audioContext.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.12)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.12)
  }

  return (
    <footer className="relative w-full bg-[#26775C] overflow-hidden">
      {/* Top Border Line */}
      <div className="w-full h-px bg-[#D9D9D9]/50" />

      {/* Empty Top Gap */}
      <div className="h-8 md:h-10" />

      {/* Second Divider Line */}
      <div className="w-full h-px bg-[#D9D9D9]/50" />

      {/* Grid Section */}
      <div className="relative px-2 lg:px-3">
        <div className="grid grid-cols-2 md:grid-cols-2">
          {/* Left Column - CTA Buttons */}
          <div className="relative border-r border-[#D9D9D9]/50">
            {/* Contact Us Button */}
            <div className="border-b border-[#D9D9D9]/50 border-b-0">
              <motion.a
                href="mailto:adnanakif.co@gmail.com"
                className="block"
                onMouseEnter={() => {
                  setHoveredCTA('contact')
                  playHoverSound()
                }}
                onMouseLeave={() => setHoveredCTA(null)}
              >
                <div className="py-1 md:py-2 px-2 lg:px-3 md:pr-3">
                  <motion.span
                    className="block w-full px-4 md:px-6 py-2 md:py-3 font-semibold text-[16px] md:text-[18px] tracking-tighter uppercase text-center"
                    animate={{
                      backgroundColor: hoveredCTA === 'contact' ? '#26775C' : '#e2e2e2',
                      color: hoveredCTA === 'contact' ? '#e2e2e2' : '#26775C',
                      border: hoveredCTA === 'contact' ? '2px solid #e2e2e2' : '2px solid transparent',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    CONTACT US
                  </motion.span>
                </div>
              </motion.a>
            </div>

            {/* Book a Call Button */}
            <div className="border-b border-[#D9D9D9]/50 border-b-0">
              <motion.button
                onClick={() => router.push('/contact')}
                className="block w-full text-left cursor-pointer"
                onMouseEnter={() => {
                  setHoveredCTA('book')
                  playHoverSound()
                }}
                onMouseLeave={() => setHoveredCTA(null)}
              >
                <div className="py-1 md:py-2 px-2 lg:px-3 md:pr-3">
                  <motion.span
                    className="block w-full px-4 md:px-6 py-2 md:py-3 font-semibold text-[16px] md:text-[18px] tracking-tighter uppercase text-center"
                    animate={{
                      backgroundColor: hoveredCTA === 'book' ? '#26775C' : '#e2e2e2',
                      color: hoveredCTA === 'book' ? '#e2e2e2' : '#26775C',
                      border: hoveredCTA === 'book' ? '2px solid #e2e2e2' : '2px solid transparent',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    BOOK A CALL
                  </motion.span>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className="flex flex-col">
            {/* YouTube */}
            <motion.div>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="block py-1 md:py-2 px-2 lg:px-3 md:pl-4 text-right overflow-hidden"
                onMouseEnter={() => {
                  setHoveredSocial('youtube')
                  playHoverSound()
                }}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div className="relative h-6 md:h-7">
                  <motion.span
                    className="block text-[#e2e2e2] font-semibold text-[16px] md:text-[18px] tracking-tight uppercase absolute right-0"
                    animate={{
                      y: hoveredSocial === 'youtube' ? -24 : 0,
                      opacity: hoveredSocial === 'youtube' ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    YOUTUBE
                  </motion.span>
                  <motion.span
                    className="block text-[#e2e2e2] font-semibold text-[14px] md:text-[16px] tracking-tight absolute right-0"
                    animate={{
                      y: hoveredSocial === 'youtube' ? 0 : 24,
                      opacity: hoveredSocial === 'youtube' ? 1 : 0,
                      x: hoveredSocial === 'youtube' ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    VISIT
                  </motion.span>
                </div>
              </Link>
              <div className="h-px bg-[#D9D9D9]/50 -mr-4 md:-mr-3" />
            </motion.div>

            {/* Instagram */}
            <motion.div>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="block py-1 md:py-2 px-2 lg:px-3 md:pl-4 text-right overflow-hidden"
                onMouseEnter={() => {
                  setHoveredSocial('instagram')
                  playHoverSound()
                }}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div className="relative h-6 md:h-7">
                  <motion.span
                    className="block text-[#e2e2e2] font-semibold text-[16px] md:text-[18px] tracking-tight uppercase absolute right-0"
                    animate={{
                      y: hoveredSocial === 'instagram' ? -24 : 0,
                      opacity: hoveredSocial === 'instagram' ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    INSTAGRAM
                  </motion.span>
                  <motion.span
                    className="block text-[#e2e2e2] font-semibold text-[14px] md:text-[16px] tracking-tight absolute right-0"
                    animate={{
                      y: hoveredSocial === 'instagram' ? 0 : 24,
                      opacity: hoveredSocial === 'instagram' ? 1 : 0,
                      x: hoveredSocial === 'instagram' ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    VISIT
                  </motion.span>
                </div>
              </Link>
              <div className="h-px bg-[#D9D9D9]/50 -mr-4 md:-mr-3" />
            </motion.div>

            {/* LinkedIn */}
            <motion.div>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="block py-1 md:py-2 px-2 lg:px-3 md:pl-4 text-right overflow-hidden"
                onMouseEnter={() => {
                  setHoveredSocial('linkedin')
                  playHoverSound()
                }}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div className="relative h-6 md:h-7">
                  <motion.span
                    className="block text-[#e2e2e2] font-semibold text-[16px] md:text-[18px] tracking-tight uppercase absolute right-0"
                    animate={{
                      y: hoveredSocial === 'linkedin' ? -24 : 0,
                      opacity: hoveredSocial === 'linkedin' ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    LINKEDIN
                  </motion.span>
                  <motion.span
                    className="block text-[#e2e2e2] font-semibold text-[14px] md:text-[16px] tracking-tight absolute right-0"
                    animate={{
                      y: hoveredSocial === 'linkedin' ? 0 : 24,
                      opacity: hoveredSocial === 'linkedin' ? 1 : 0,
                      x: hoveredSocial === 'linkedin' ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    VISIT
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Border Line */}
      <div className="w-full h-px bg-[#D9D9D9]/50" />

      {/* Full Width SVG at Bottom */}
      <div className="w-full px-3 md:px-3 py-4 md:py-5">
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 743 166"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path d="M6 11H39.7424V124.543H106.232V154.675H6V11Z" fill="#e2e2e2" />
          <path d="M149.496 144.899C138.819 138.538 130.752 129.929 125.288 119.062C119.819 108.203 117.089 96.0895 117.089 82.7176C117.089 69.3457 119.819 57.2363 125.288 46.3734C130.752 35.5145 138.823 26.9008 149.496 20.5405C160.169 14.1802 172.901 11 187.692 11C202.482 11 215.21 14.1802 225.887 20.5445C236.56 26.9048 244.631 35.5185 250.096 46.3774C255.56 57.2403 258.295 69.3537 258.295 82.7216C258.295 96.0895 255.56 108.203 250.096 119.066C244.627 129.929 236.56 138.538 225.887 144.903C215.21 151.263 202.478 154.447 187.692 154.447C172.905 154.447 160.169 151.267 149.496 144.903V144.899ZM160.105 113.664C166.149 121.699 175.344 125.714 187.692 125.714C200.04 125.714 209.23 121.699 215.278 113.664C221.322 105.634 224.344 95.3184 224.344 82.7216C224.344 70.1248 221.322 59.8132 215.278 51.7789C209.23 43.7485 200.04 39.7294 187.692 39.7294C175.344 39.7294 166.149 43.7485 160.105 51.7789C154.057 59.8132 151.039 70.1288 151.039 82.7216C151.039 95.3144 154.061 105.634 160.105 113.664Z" fill="#e2e2e2" />
          <path d="M271.75 127.739L346.027 40.5364L309.686 41.1357H274.145V11H390.151V36.9407L314.679 125.142L352.415 124.543H391.15V154.675H271.75V127.735V127.739Z" fill="#e2e2e2" />
          <path d="M412.34 11H446.083V154.679H412.34V11Z" fill="#e2e2e2" />
          <path d="M499.624 58.295V154.679H467.277V11H503.817L560.921 107.783V11H593.268V154.679H556.728L499.624 58.295Z" fill="#e2e2e2" />
          <path d="M614.458 11H682.027C699.348 11 712.344 14.9313 721.01 22.7858C729.673 30.6443 734.002 41.0997 734.002 54.152C734.002 61.4792 732.067 68.1072 728.206 74.0321C724.34 79.9609 707.507 88.5026 696.758 86.509C702.754 89.4415 715.146 88.7503 725.507 100.704C729.137 104.895 730.472 110.964 731.404 117.488L737 154.847H702.418L697.621 122.482C696.554 115.29 694.287 109.997 690.826 106.597C687.36 103.201 682.295 101.503 675.631 101.503H648.245V154.847H614.462V11H614.458ZM676.027 75.734C683.754 75.734 689.55 74.2038 693.42 71.1395C697.286 68.0752 699.216 63.3489 699.216 56.9526C699.216 50.5563 697.282 45.834 693.42 42.7657C689.554 39.7014 683.754 38.1713 676.027 38.1713H648.241V75.73H676.027V75.734Z" fill="#e2e2e2" />
        </svg>
      </div>
    </footer>
  )
}
