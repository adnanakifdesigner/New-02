'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Brand Discovery',
    duration: '3–5 days',
    description:
      'Before we design a single pixel, we need to understand everything about your business. Brand Discovery is where we ask the questions most designers never ask — about your audience, your competitors, your values, your ambitions, and the feeling you want your brand to create in people. This phase is the foundation of everything that follows. A brand built without discovery is just decoration. A brand built with it is a business asset.',
    deliverables: [
      'Brand discovery questionnaire & deep-dive interview',
      'Competitor landscape analysis',
      'Target audience profiling',
      'Brand audit (if rebranding)',
      'Goals & positioning workshop',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'Brand Strategy',
    duration: '4–6 days',
    description:
      'Discovery tells us where you are. Strategy decides where you\'re going — and how your brand gets you there. This is where we define your brand\'s positioning, personality, voice, and the story you\'ll tell the world. Most businesses skip strategy and go straight to design. That\'s why most brands look like everyone else. Strategy is what makes your brand feel different before you\'ve even seen the logo.',
    deliverables: [
      'Brand positioning statement',
      'Brand personality & tone of voice definition',
      'Core values & brand promise',
      'Messaging hierarchy — tagline, elevator pitch, key messages',
      'Strategic brand brief document',
    ],
  },
  {
    id: 3,
    number: '03',
    title: 'Brand Direction',
    duration: '3–4 days',
    description:
      'Before we commit to designing your full identity, we present you with a clear visual direction — the mood, the aesthetic, the feeling of your brand before a single logo is drawn. Think of Brand Direction as the creative compass. We create 2–3 distinct visual directions, each rooted in your strategy, so you can see the possibilities and choose the path that feels most true to your brand. This prevents expensive revisions later and ensures we design with complete confidence.',
    deliverables: [
      '2–3 distinct moodboards with visual direction',
      'Colour direction exploration',
      'Typography direction proposals',
      'Visual reference & inspiration curation',
      'Direction presentation & client approval',
    ],
  },
  {
    id: 4,
    number: '04',
    title: 'Brand Identity',
    duration: '7–10 days',
    description:
      'This is where strategy becomes visual. Using the approved direction, we design your complete brand identity system — every element crafted with intention, every decision rooted in your strategy. The logo is only the beginning. We build a full visual system that works seamlessly across digital platforms, print materials, packaging, signage, and beyond. Every touchpoint is considered. Every asset is crafted to communicate your brand\'s essence instantly and consistently.',
    deliverables: [
      'Primary logo & all variations — horizontal, stacked, icon',
      'Complete colour palette with usage rules',
      'Typography system — primary & secondary typefaces',
      'Supporting visual elements — patterns, icons, illustration style',
      'Applied design — business cards, stationery, social media templates',
      '2 rounds of revisions included',
    ],
  },
  {
    id: 5,
    number: '05',
    title: 'Brand Guidelines',
    duration: '4–5 days',
    description:
      'A brand without guidelines is a brand without protection. Brand Guidelines — also called a Brand Bible — is the document that ensures your identity stays consistent and powerful across every platform, every designer, and every application — forever. This is the deliverable that separates a professional brand from a logo. It\'s what you hand to your web developer, your social media manager, your printer, and any future designer — so your brand is always presented exactly as it was designed to be.',
    deliverables: [
      'Logo usage rules — clear space, minimum sizes, prohibited uses',
      'Complete colour specifications — HEX, RGB, CMYK, Pantone',
      'Typography rules — hierarchy, sizing, pairing guidelines',
      'Photography & imagery style direction',
      'Tone of voice & writing guidelines',
      'Digital & print application examples',
      'Final files — PDF guidelines + all source files organised & delivered',
    ],
  },
]

export default function Process() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white flex flex-col">

        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-6 pb-30 flex-shrink-0 px-3"
        >
          <h1 className="text-[79px] lg:text-[160px] flex items-center font-regular text-white tracking-tighter text-left leading-tight">
            Process
          </h1>
        </motion.div>

        {/* Process Steps */}
        <div className="w-full px-4 lg:px-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full"
            >
              {/* Top Divider */}
              <div className="border-t border-white/20" />

              {/* Step Header - Clickable */}
              <button
                onClick={() =>
                  setExpandedStep(expandedStep === step.id ? null : step.id)
                }
                className="w-full text-left py-5 flex flex-row items-center justify-between gap-4 hover:bg-white/5 transition-colors duration-300 cursor-pointer group px-0"
              >
                {/* Step number */}
                <span className="text-[18px] text-white tracking-tight flex-shrink-0 w-8">
                  {step.number}
                </span>

                {/* Step title */}
                <h2 className="flex-1 text-[22px] md:text-[42px] font-medium text-white tracking-tighter leading-tight group-hover:text-white/70 transition-colors duration-300">
                  {step.title}
                </h2>

                <div className="flex items-center gap-4 flex-shrink-0">
                  {/* Duration pill — desktop only */}
                  <span className="hidden md:inline-block text-[14px] text-white border border-white rounded-full px-3 py-1 tracking-tight">
                    {step.duration}
                  </span>
                  {/* Arrow */}
                  <div className="text-white group-hover:text-white transition-colors">
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${expandedStep === step.id ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedStep === step.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden border-t border-white/10"
                  >
                    <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

                      {/* Left — Description */}
                      <div className="flex flex-col justify-start gap-6">
                        <p className="text-[14px] md:text-[16px] text-white leading-tight">
                          {step.description}
                        </p>
                      </div>

                      {/* Right — Deliverables */}
                      <div className="flex flex-col gap-4">
                        <p className="text-[16px] text-white font-regular tracking-tight uppercase">
                          What we deliver
                        </p>
                        <ul className="flex flex-col gap-3">
                          {step.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="mt-[7px] w-1 h-1 rounded-full bg-white flex-shrink-0" />
                              <span className="text-[13px] md:text-[16px] text-white leading-tight">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Divider on last item */}
              {index === processSteps.length - 1 && (
                <div className="border-b border-white/20" />
              )}
            </motion.div>
          ))}
        </div>

      </main>
      <Footer />
    </>
  )
}