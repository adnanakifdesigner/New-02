'use client'

import { useState } from 'react'
import Image from 'next/image'
import { projectsData } from '@/lib/projects-data'
import { motion } from 'framer-motion'
import { ProjectOverlay } from '@/components/project-overlay'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function WorkPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null)
  const [isOverlayOpen, setIsOverlayOpen] = useState(false)
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null)

  // Get all images from all projects with their project data (10 thumbnails)
  const allImagesWithProject = projectsData.slice(0, 5).flatMap(project => 
    project.images.slice(0, 2).map(image => ({ image, project }))
  ).slice(0, 10)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#000000] text-white overflow-hidden flex flex-col">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 pt-6 pb-4 flex-shrink-0"
      >
        <h1 className="text-[79px] lg:text-[160px] flex items-center font-regular text-white tracking-tighter text-left leading-tight">
          Work
        </h1>
      </motion.div>

      {/* Desktop Layout */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        {/* Full Width Grid */}
        <div className="w-full overflow-y-scroll overflow-x-hidden" style={{ direction: 'ltr' }}>
          {/* Grid Container with Dividers */}
          <motion.div
            className="grid border-l border-t border-[#333333] p-2"
            style={{
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridAutoRows: 'auto',
              gap: '8px',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            {allImagesWithProject.map(({ image, project }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  delay: idx * 0.08
                }}
                onClick={() => {
                  setSelectedProject(project)
                  setIsOverlayOpen(true)
                }}
                onMouseEnter={() => setHoveredImageIndex(idx)}
                onMouseLeave={() => setHoveredImageIndex(null)}
                className="cursor-pointer border-r border-b border-[#333333] group"
              >
                <div className="relative w-full bg-[#000000] flex flex-col">
                  <motion.div
                    animate={{
                      scale: hoveredImageIndex === idx ? 0.95 : 1,
                    }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="relative aspect-video w-full"
                  >
                    <Image
                      src={image}
                      alt={`Work ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Hover Text Overlay */}
                  <motion.div
                    animate={{
                      opacity: hoveredImageIndex === idx ? 1 : 0,
                      y: hoveredImageIndex === idx ? 0 : 10,
                    }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="bg-black/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between gap-2"
                  >
                    <span className="text-white text-[14px] font-regular tracking-tighter truncate">{project.name}</span>
                    <span className="text-white text-[12px] font-regular tracking-tighter flex-shrink-0">{project.category}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col flex-1 overflow-hidden">
        {/* Bottom Section - Thumbnails Normal Scroll */}
        <div className="flex-1 overflow-y-scroll overflow-x-hidden">
          {/* Grid Container with Dividers */}
          <motion.div
            className="grid border-l border-t border-[#333333] p-2"
            style={{
              gridTemplateColumns: '1fr',
              gridAutoRows: 'auto',
              gap: '8px',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.08, delayChildren: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            {allImagesWithProject.map(({ image, project }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  delay: idx * 0.08
                }}
                onClick={() => {
                  setSelectedProject(project)
                  setIsOverlayOpen(true)
                }}
                onMouseEnter={() => setHoveredImageIndex(idx)}
                onMouseLeave={() => setHoveredImageIndex(null)}
                className="cursor-pointer border-r border-b border-[#333333] group"
              >
                <div className="relative w-full bg-[#000000] flex flex-col">
                  <motion.div
                    animate={{
                      scale: hoveredImageIndex === idx ? 0.95 : 1,
                    }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="relative aspect-video w-full"
                  >
                    <Image
                      src={image}
                      alt={`Work ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </motion.div>
                  
                  {/* Hover Text Overlay */}
                  <motion.div
                    animate={{
                      opacity: hoveredImageIndex === idx ? 1 : 0,
                      y: hoveredImageIndex === idx ? 0 : 10,
                    }}
                    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                    className="bg-black/90 backdrop-blur-sm px-4 py-3 flex items-center justify-between gap-2"
                  >
                    <span className="text-white text-[14px] font-regular tracking-tighter truncate">{project.name}</span>
                    <span className="text-white text-[12px] font-regular tracking-tighter flex-shrink-0">{project.category}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Project Overlay */}
      <ProjectOverlay
        project={selectedProject}
        isOpen={isOverlayOpen}
        onClose={() => {
          setIsOverlayOpen(false)
          setTimeout(() => setSelectedProject(null), 300)
        }}
      />
    </main>
      <Footer />
    </>
  )
}
