export interface ProjectSection {
  label: string
  description: string
}

export interface Project {
  id: number
  name: string
  description: string
  category: string
  year: string
  ctas: { label: string }[]
  images: string[]
  sections: {
    challenge: ProjectSection
    strategy: ProjectSection
    identity: ProjectSection
    application: ProjectSection
    outcome: ProjectSection
  }
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: 'Lozinr',
    description: 'A brand design studio built on one belief — that the most powerful ideas are hidden in plain sight. We created a complete visual identity system rooted in a single conceptual discovery.',
    category: 'Brand Design',
    year: '2024',
    ctas: [
      { label: 'Brand Strategy' },
      { label: 'Brand Design' }
    ],
    images: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2001-WcAWbaFGMsa8gBIagDbeIVAx3k4w5n.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2002-SnyZMlJgYUnNWQMuKP3csrwceRC8O3.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2003-QtKQZDFCFPcFf4qfS6S0wCpqSIFXZn.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2004-KlKPqT3JZgH1dklluiBxVQOa7Tt8ws.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2005-45N5ikNUEPvZlVVtT0815EeMEPuk62.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2006-7fswQvDb3Nj6BsAEdaUyXJ5SxHzGLT.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2007-hyn2O3bUWszqUxI8wxvfyPbi8PPh6h.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2008-n6DpfEgiAkwXXr4rTw7GqGrzdtB6oq.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2009-biW0QkZOSsDOg5QsRSe0KtJPdgLsxI.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2010-e6EmHrBBJeKV0ZH7mCTxYaL3adEY3V.jpg',
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artboard%201%20copy%2011-ZPVPiZJDP6ZNDu6FhmtPLKokYyHzJS.jpg'
    ],
    sections: {
      challenge: {
        label: 'Challenge',
        description: 'Building a brand identity for a design studio from scratch presents a unique pressure — the studio itself becomes the proof of concept. Every design decision is scrutinised because the audience is designers, founders, and businesses who judge quality instantly. The challenge was to create an identity that was not just visually strong, but conceptually undeniable. It had to communicate intelligence, craft, and humanity — all without a single word.'
      },
      strategy: {
        label: 'Strategy',
        description: 'Rather than designing a logo first, we started with a question: what if the identity came entirely from the name itself? This constraint-led approach pushed us away from generic geometric shapes and toward something genuinely discovered. The strategy was to build the entire visual system around a single insight — one idea strong enough to carry every touchpoint from business card to website. Three colours, two fonts, one concept. Maximum restraint for maximum impact.'
      },
      identity: {
        label: 'Identity',
        description: 'Inside the first two letters — "L" and "o" — we discovered a hidden face: two eyes and a nose formed by the negative space between them. This became the heart of Lozinr\'s identity. The logomark is both a letterform and a human expression — conceptual yet warm, minimal yet full of meaning. The colour system is built on Solid Black (#0E0C0A) as the primary canvas, Light Silver (#E2E2E2) for contrast and warmth, and Tribal Green (#26775C) as the accent that gives the brand its distinct, memorable personality. Typography is set in a single geometric sans-serif — clean, confident, and consistent across all applications.'
      },
      application: {
        label: 'Application',
        description: 'The identity was applied across every touchpoint a design studio encounters — business cards, letterhead, envelopes, tote bags, and digital platforms. Each application was designed to feel intentional: the business card uses the green as the primary face with the logomark anchoring the front, while the back carries the wordmark bold and full-bleed in black. The stationery suite uses the green as a surface, with black materials layered on top — creating a visual system that is immediately recognisable across print and screen. The website carries the same palette and typographic rhythm, ensuring consistency from first impression to final interaction.'
      },
      outcome: {
        label: 'Outcome',
        description: 'The Lozinr identity achieved what every studio brand should — it became a portfolio piece in itself. The hidden face concept gives clients and collaborators an immediate story to hold onto, turning a logo into a talking point. The case study garnered over 268 views and 40 appreciations on Behance organically, with zero paid promotion. More importantly, it established a clear visual language that now extends across all Lozinr projects — a foundation that scales as the studio grows.'
      }
    }
  },
  {
    id: 2,
    name: 'Cnyf',
    description: 'An elevated packaging and branding system for a premium fashion house. We blended minimalist design with sophisticated storytelling to create an unforgettable experience.',
    category: 'Packaging Design',
    year: '2024',
    ctas: [
      { label: 'Packaging Design' },
      { label: 'Brand Design' }
    ],
    images: [
      '#'
    ],
    sections: {
      challenge: {
        label: 'Challenge',
        description: '#LuxuryBrand #PackagingDesign #FashionHouse #Exclusivity #PremiumExperience'
      },
      strategy: {
        label: 'Strategy',
        description: '#LuxuryStrategy #MinimalDesign #UnboxingExperience #PremiumMaterials #HighEndFashion'
      },
      identity: {
        label: 'Identity',
        description: '#PackagingIdentity #ColorPalette #CustomTypography #DesignSystem #PremiumPackaging'
      },
      application: {
        label: 'Application',
        description: '#PackagingApplication #QualityControl #RetailExperience #DetailedDesign #ConsistentExecution'
      },
      outcome: {
        label: 'Outcome',
        description: '#PackagingSuccess #BrandPerception #SocialMediaImpact #CustomerLoyalty #DesignExcellence'
      }
    }
  },
  {
    id: 3,
    name: 'Luvena',
    description: 'A comprehensive rebrand for a cutting-edge technology startup. Our design system positioned them as industry leaders with innovation and clarity at every interaction.',
    category: 'Web Development',
    year: '2023',
    ctas: [
      { label: 'Web Development' },
      { label: 'App UI / UX Design' }
    ],
    images: [
      '#'
    ],
    sections: {
      challenge: {
        label: 'Challenge',
        description: '#TechStartup #BrandIdentity #Innovation #DigitalTransformation #MarketDifferentiation'
      },
      strategy: {
        label: 'Strategy',
        description: '#InnovationStrategy #HumanCenteredDesign #DesignSystem #DesignPrinciples #Scalability'
      },
      identity: {
        label: 'Identity',
        description: '#TechIdentity #LogoSystem #ColorPalette #CustomTypography #VisualLanguage'
      },
      application: {
        label: 'Application',
        description: '#DesignApplication #WebDesign #MobileApp #ComponentLibrary #UserEngagement'
      },
      outcome: {
        label: 'Outcome',
        description: '#FundingSuccess #ConversionOptimization #BrandValue #MarketLeadership #GrowthMetrics'
      }
    }
  },
  {
    id: 4,
    name: 'Trevora',
    description: 'A transformative digital ecosystem for an international e-commerce platform. We created seamless experiences that increased engagement and brand loyalty.',
    category: 'Motion Design',
    year: '2023',
    ctas: [
      { label: 'Motion Design' },
      { label: 'Web Design' }
    ],
    images: [
      '#'
    ],
    sections: {
      challenge: {
        label: 'Challenge',
        description: '#ECommerce #GlobalPlatform #UserExperience #CartAbandonement #InternationalDesign'
      },
      strategy: {
        label: 'Strategy',
        description: '#ECommerceStrategy #HumanCenteredDesign #MotionDesign #UserResearch #GlobalStrategy'
      },
      identity: {
        label: 'Identity',
        description: '#DesignSystem #GlobalConsistency #MotionDesign #ColorPalette #VisualLanguage'
      },
      application: {
        label: 'Application',
        description: '#WebDesign #MobileDesign #CheckoutFlow #InteractionPatterns #PerformanceOptimization'
      },
      outcome: {
        label: 'Outcome',
        description: '#ConversionOptimization #SalesGrowth #CustomerSatisfaction #MarketLeadership #SuccessMetrics'
      }
    }
  },
  {
    id: 5,
    name: 'Finure Health',
    description: 'A boutique brand identity for a luxury craft studio. We designed every element to reflect artisanal excellence and timeless elegance.',
    category: 'Marketing Posts',
    year: '2023',
    ctas: [
      { label: 'Marketing Posts' },
      { label: '3D Animation' }
    ],
    images: [
      '#'
    ],
    sections: {
      challenge: {
        label: 'Challenge',
        description: '#ArtisanCraft #LuxuryBrand #HandmadeDesign #Craftsmanship #BrandVisibility'
      },
      strategy: {
        label: 'Strategy',
        description: '#CraftsmanshipStrategy #Heritage #Exclusivity #LuxuryPositioning #BrandStrategy'
      },
      identity: {
        label: 'Identity',
        description: '#BespokeLogo #SerifTypography #MetallicAccents #HandmadeDesign #VisualStory'
      },
      application: {
        label: 'Application',
        description: '#BrandApplication #PackagingDesign #PhotographyDirection #ArtisanalProcess #AuthenticStorytelling'
      },
      outcome: {
        label: 'Outcome',
        description: '#BusinessGrowth #SalesIncrease #MarketPosition #CollectorValue #SuccessStory'
      }
    }
  },
  {
    id: 6,
    name: 'Digital Renaissance',
    description: 'A transformative digital identity for a creative agency. We crafted a modern visual system that resonates with forward-thinking audiences.',
    category: 'Brand Design',
    year: '2022',
    ctas: [
      { label: 'Brand Strategy' },
      { label: 'Web Design' }
    ],
    images: [
      'https://images.unsplash.com/photo-1523821741446-edb7b68bb885?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1551633360-fdf7d9e5e29f?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1571115764595-644a12c4a3fb?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1548690596-f1e82b4e7b5d?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1524634126288-917f1e37c4d4?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1551633360-fdf7d9e5e29f?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1523821741446-edb7b68bb885?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop'
    ],
    sections: {
      challenge: {
        label: 'Challenge',
        description: 'Digital Renaissance was a forward-thinking creative agency struggling to communicate its own vision. Their internal identity was scattered, making it difficult to attract top talent and land premium clients. They needed a brand that matched the quality of their work.'
      },
      strategy: {
        label: 'Strategy',
        description: 'We developed a strategy celebrating digital innovation and human creativity. Our approach combined contemporary design trends with timeless principles. We focused on creating a brand that would attract creatives, technologists, and visionary clients.'
      },
      identity: {
        label: 'Identity',
        description: 'The new identity features dynamic gradients, bold typography, and an adaptive logo system. We created a color palette that shifts from digital blues to creative purples. Every element conveys movement, innovation, and creative excellence.'
      },
      application: {
        label: 'Application',
        description: 'The brand system was applied across their digital presence, office environment, and client presentations. We created animated brand assets and interactive guidelines. The identity became a selling point in client pitches.'
      },
      outcome: {
        label: 'Outcome',
        description: 'Following the rebrand, Digital Renaissance attracted 150+ top creative professionals and increased client proposals by 200%. Their win rate on pitches improved from 35% to 72%, and average project budgets increased by 85%.'
      }
    }
  },
  {
    id: 7,
    name: 'Sustainable Future',
    description: 'A eco-conscious brand rebrand for an environmental tech company. We designed with sustainability in mind, reflecting their mission at every touchpoint.',
    category: 'Packaging Design',
    year: '2023',
    ctas: [
      { label: 'Packaging Design' },
      { label: 'Brand Design' }
    ],
    images: [
      'https://images.unsplash.com/photo-1524634126288-917f1e37c4d4?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1571115764595-644a12c4a3fb?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1548690596-f1e82b4e7b5d?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1551633360-fdf7d9e5e29f?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1523821741446-edb7b68bb885?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1571115764595-644a12c4a3fb?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1548690596-f1e82b4e7b5d?w=1280&h=720&fit=crop'
    ],
    sections: {
      challenge: {
        label: 'Challenge',
        description: 'Sustainable Future had groundbreaking environmental technology but struggled to compete with larger established companies. Their brand felt corporate and failed to inspire action or conviction among environmentally conscious consumers. They needed an identity that matched their mission and values.'
      },
      strategy: {
        label: 'Strategy',
        description: 'We created a strategy centered on environmental impact and actionable sustainability. Our approach used nature-inspired design paired with modern innovation. We positioned the brand as a catalyst for positive environmental change.'
      },
      identity: {
        label: 'Identity',
        description: 'The new identity features organic shapes, sustainable color palettes inspired by nature, and clean modern typography. We created a living logo system that evolves with seasonal changes. Every design choice reflects environmental consciousness.'
      },
      application: {
        label: 'Application',
        description: 'The brand was applied to sustainable packaging, digital platforms, and educational materials. We used eco-friendly materials for all collateral. The design system extended to office spaces and customer touchpoints.'
      },
      outcome: {
        label: 'Outcome',
        description: 'The rebrand resulted in 320% increase in brand awareness and 410% growth in customer acquisition. Sustainable Future secured partnerships with major global brands and became the go-to provider for environmental technology solutions.'
      }
    }
  },
  {
    id: 8,
    name: 'Fintech Solutions',
    description: 'A comprehensive digital transformation for a fintech platform. We built an intuitive interface that simplifies complex financial transactions.',
    category: 'App UI / UX Design',
    year: '2024',
    ctas: [
      { label: 'App UI / UX Design' },
      { label: 'Web Development' }
    ],
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1523821741446-edb7b68bb885?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1551633360-fdf7d9e5e29f?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1571115764595-644a12c4a3fb?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1548690596-f1e82b4e7b5d?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1524634126288-917f1e37c4d4?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1551633360-fdf7d9e5e29f?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1523821741446-edb7b68bb885?w=1280&h=720&fit=crop'
    ],
    sections: {
      challenge: {
        label: 'Challenge',
        description: 'Fintech Solutions offered powerful financial tools but their platform felt overwhelming and technical. Users struggled with complex workflows and poor information architecture. They needed a complete redesign to make financial transactions accessible to everyone.'
      },
      strategy: {
        label: 'Strategy',
        description: 'Our strategy focused on simplicity, clarity, and trust. We conducted extensive user research to understand pain points in financial management. The approach emphasized progressive disclosure and smart defaults to reduce cognitive load.'
      },
      identity: {
        label: 'Identity',
        description: 'The new identity combines trustworthy greens with modern blues and clean typography. We created an extensive component library and interaction patterns. Every visual element reinforces security and simplicity.'
      },
      application: {
        label: 'Application',
        description: 'The design system was applied across web and mobile platforms covering account management, trading, analytics, and payments. We implemented sophisticated data visualization for complex financial information. Accessibility was prioritized throughout.'
      },
      outcome: {
        label: 'Outcome',
        description: 'Following the redesign, user retention improved by 250%, and daily active users increased by 400%. Customer support tickets dropped by 65%, and the app received a 4.9-star rating. Fintech Solutions became the fastest-growing platform in their category.'
      }
    }
  },
  {
    id: 9,
    name: 'Creative Motion',
    description: 'Dynamic motion design and animation for a creative studio. We brought brands to life through compelling visual storytelling and smooth animations.',
    category: 'Motion Design',
    year: '2024',
    ctas: [
      { label: 'Motion Design' },
      { label: '3D Animation' }
    ],
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1524634126288-917f1e37c4d4?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1551633360-fdf7d9e5e29f?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1523821741446-edb7b68bb885?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1569163139394-de4798aa62b3?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1524634126288-917f1e37c4d4?w=1280&h=720&fit=crop',
      'https://images.unsplash.com/photo-1551633360-fdf7d9e5e29f?w=1280&h=720&fit=crop'
    ],
    sections: {
      challenge: {
        label: 'Challenge',
        description: 'Creative Motion struggled to showcase their animation and motion design capabilities. Static portfolios couldn\'t capture the essence of their dynamic work. They needed a way to demonstrate motion design excellence while building their brand.'
      },
      strategy: {
        label: 'Strategy',
        description: 'We created a strategy centered on motion as the core message. Our approach used animation at every touchpoint to demonstrate expertise. We positioned Creative Motion as the leading studio for motion-driven storytelling.'
      },
      identity: {
        label: 'Identity',
        description: 'The identity is inherently motion-based with animated logos, fluid color transitions, and kinetic typography. We designed a visual language that moves and evolves. Static applications feature motion direction for guidance.'
      },
      application: {
        label: 'Application',
        description: 'The brand was applied through animated website, interactive portfolios, and motion design specifications. We created a library of motion principles and animation patterns. Every client deliverable showcased brand motion language.'
      },
      outcome: {
        label: 'Outcome',
        description: 'Creative Motion\'s website became a viral design showcase with 500K+ monthly visitors. They attracted top international talent and secured projects with Fortune 500 companies. Their work became an industry standard for motion design excellence.'
      }
    }
  }
]
