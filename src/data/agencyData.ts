import { ServiceItem, PortfolioProject } from '../types';

export const AGENCY_INFO = {
  name: 'VERVE STUDIO',
  shortName: 'VERVE',
  tagline: 'Architecting digital flagships, iconic brand systems, and transformative web experiences across India and globally.',
  subtagline: 'We partner with ambitious Indian startups and visionary global enterprises to craft high-conversion interfaces and award-winning digital identities.',
  stats: [
    { value: '35+', label: 'Design Awards' },
    { value: '99.4%', label: 'On-Time Delivery' },
    { value: '₹850 Cr+', label: 'Client Value Created' },
    { value: '8.4x', label: 'Average ROI Growth' }
  ],
  locations: [
    'Bengaluru · 100 Feet Rd, Indiranagar, Karnataka 560038',
    'Mumbai · Maker Maxity, BKC, Bandra East, Maharashtra 400051'
  ],
  contactEmail: 'hello@vervestudio.in',
  contactPhone: '+91 (080) 4128-9800',
  socials: {
    github: 'https://github.com/Mohamed-529',
    linkedin: 'https://www.linkedin.com/in/mohamed-yusuff427'
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ui-ux',
    number: '01',
    title: 'UI/UX Design',
    tagline: 'Human-centered interfaces engineered for conversion and clarity.',
    description: 'We design intuitive, research-backed digital products from wireframe logic to pixel-perfect design systems with exhaustive component states tailored for diverse user demographics.',
    iconName: 'Layout',
    deliverables: [
      'Interactive Design Prototypes',
      'Scalable Multi-Brand Design Systems',
      'User Journey & Usability Audits',
      'Micro-Interaction Specifications'
    ],
    clientMetric: '+64% User Engagement'
  },
  {
    id: 'web-dev',
    number: '02',
    title: 'Web Development',
    tagline: 'High-performance Next.js architectures with sub-second page loads.',
    description: 'Clean, modern full-stack web applications built with Next.js, React, TypeScript, and modern headless integrations optimized for pan-India broadband and 5G networks.',
    iconName: 'Code',
    deliverables: [
      'Next.js App Router Architecture',
      'Full Responsive Viewport Adaptation',
      'Lighthouse 98+ Core Web Vitals',
      'Headless CMS & Razorpay/UPI Integration'
    ],
    clientMetric: '0.6s Initial Load Time'
  },
  {
    id: 'branding',
    number: '03',
    title: 'Brand Identity',
    tagline: 'Distinctive visual identities that command market authority.',
    description: 'We craft comprehensive visual languages including bespoke typography guidelines, color psychology, and multi-channel asset kits celebrating heritage and modern tech.',
    iconName: 'Sparkles',
    deliverables: [
      'Bespoke Wordmark & Logomarks',
      'Comprehensive Brand Guidelines Book',
      'Editorial & Packaging Design Kits',
      'Motion Identity & 3D Assets'
    ],
    clientMetric: '3.8x Brand Recall Rate'
  },
  {
    id: 'digital-marketing',
    number: '04',
    title: 'Digital Marketing',
    tagline: 'Data-driven growth strategies that scale revenue pipelines.',
    description: 'End-to-end digital acquisition funnels, technical search engine optimization (SEO), and high-converting landing page experiences targeting domestic and overseas markets.',
    iconName: 'TrendingUp',
    deliverables: [
      'Data & Conversion Rate Optimization (CRO)',
      'Technical SEO & Schema Optimization',
      'Multi-Channel Performance Campaigns',
      'Lead Generation Architecture'
    ],
    clientMetric: '+140% Qualified Inbound'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'aetheria-wealth',
    title: 'Aetheria Wealth India',
    client: 'Aetheria Capital Advisory',
    year: '2026',
    category: 'UI/UX Design',
    summary: 'Next-generation Indian wealth management platform featuring instant UPI portfolio top-ups and real-time equity analytics.',
    thumbnail: '/src/assets/images/portfolio_fintech_app_1790164486534.jpg',
    featured: true,
    impactMetric: '+184% Asset Onboarding',
    challenge: 'High-net-worth investors across Mumbai and Bengaluru experienced friction with slow, cluttered traditional banking interfaces.',
    solution: 'Designed an elegant dark-mode first design system with real-time portfolio analytics, one-click UPI auto-mandates, and tactile feedback.',
    techStack: ['Next.js 14', 'React Native', 'Tailwind CSS', 'TypeScript', 'UPI/Fintech APIs'],
    testimonial: {
      quote: 'Verve Studio transformed our entire product trajectory. Our investor onboarding drop-off decreased by 42% in the first quarter post-launch.',
      author: 'Elena Rostova',
      role: 'Chief Product Officer, Aetheria Capital'
    }
  },
  {
    id: 'maison-noire',
    title: 'Maison Noire Artisanal',
    client: 'Maison Noire Luxury House',
    year: '2025',
    category: 'Brand Identity',
    summary: 'Luxury botanical fragrance and wellness brand identity with flagship digital boutiques across Mumbai and Paris.',
    thumbnail: '/src/assets/images/portfolio_luxury_brand_1790164499814.jpg',
    featured: true,
    impactMetric: '₹26 Cr+ Launch Season Sales',
    challenge: 'Translating artisanal Indian botanicals and heritage luxury craftsmanship into an immersive, sensory digital storefront.',
    solution: 'Engineered a bespoke typographical identity pairing custom serif letterforms with tactile macro-photography and headless commerce checkout.',
    techStack: ['Brand Design', 'Next.js App Router', 'Shopify Storefront API', 'Tailwind CSS'],
    testimonial: {
      quote: 'The level of aesthetic discipline and attention to tactile detail was unlike any agency we have partnered with in Mumbai or London.',
      author: 'Jean-Luc Moreau',
      role: 'Creative Director, Maison Noire'
    }
  },
  {
    id: 'strata-cad',
    title: 'Strata 3D Spatial India',
    client: 'Strata Urban Dynamics',
    year: '2026',
    category: 'Web Development',
    summary: 'Browser-based architectural visualization engine with real-time BIM collaborative rendering for smart city projects in Bengaluru.',
    thumbnail: '/src/assets/images/portfolio_spatial_dashboard_1790164511287.jpg',
    featured: false,
    impactMetric: '60 FPS 3D Viewport in Browser',
    challenge: 'Architects across Indian urban development consortiums were delayed by heavy desktop CAD setups during remote structural reviews.',
    solution: 'Developed a WebGL-powered cloud workstation with instant model loading, real-time sunlight calculations for Indian latitudes, and collaborative pins.',
    techStack: ['Next.js 14', 'Three.js / WebGL', 'TypeScript', 'Tailwind CSS', 'WebSockets'],
    testimonial: {
      quote: 'They achieved 60fps rendering in Chrome for complex 2M polygon structural models. It revolutionized how our 400+ architects collaborate across offices.',
      author: 'David Vance',
      role: 'VP of Engineering, Strata Dynamics'
    }
  },
  {
    id: 'monolith-review',
    title: 'Monolith Architectural Monograph',
    client: 'Monolith Cultural Foundation India',
    year: '2025',
    category: 'Digital Marketing',
    summary: 'Digital publishing platform and editorial archive celebrating modernist Indian architecture and sustainable urban planning.',
    thumbnail: '/src/assets/images/portfolio_arch_journal_1790164523086.jpg',
    featured: false,
    impactMetric: '420,000+ Monthly Readers',
    challenge: 'A renowned architectural foundation needed to digitize 30 years of archive photography while maintaining the physical gravitas of print.',
    solution: 'Designed a Swiss-Indian grid-based reading experience with typographic rhythm, zero intrusive banner ads, and high-performance CDN delivery.',
    techStack: ['Next.js', 'Tailwind CSS', 'Algolia Search', 'Schema.org SEO', 'TypeScript'],
    testimonial: {
      quote: 'The digital publication captures the exact reverence and quiet elegance of our physical print monographs.',
      author: 'Karin Lindqvist',
      role: 'Editor-in-Chief, Monolith Review'
    }
  },
  {
    id: 'hyperion-core',
    title: 'Hyperion Cloud Systems',
    client: 'Hyperion Infrastructure India',
    year: '2026',
    category: 'UI/UX Design',
    summary: 'Distributed server telemetry and autonomous cloud orchestration dashboard engineered for high-concurrency Indian payment rails.',
    thumbnail: '/src/assets/images/portfolio_spatial_dashboard_1790164511287.jpg',
    featured: false,
    impactMetric: '99.99% Incident Resolution Speed',
    challenge: 'Site reliability engineers in Bengaluru suffered alert fatigue from fragmented terminal logs during high-volume festive sales bursts.',
    solution: 'Created a unified incident canvas with high-density data visualization, keyboard-first command bar, and automated anomaly triage.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Web Audio API'],
    testimonial: {
      quote: 'Hyperion Core became our engineering team\'s daily cockpit. It eliminated 90% of alert noise during peak traffic peaks.',
      author: 'Marcus Chen',
      role: 'Head of Infrastructure, Hyperion'
    }
  },
  {
    id: 'atelier-lumina',
    title: 'Lumina Heritage High-Jewelry',
    client: 'Lumina Atelier Jaipur & Mumbai',
    year: '2025',
    category: 'Brand Identity',
    summary: 'Interactive private client catalogue and immersive exhibition portal for bespoke handcrafted Indian and contemporary high-jewelry.',
    thumbnail: '/src/assets/images/portfolio_luxury_brand_1790164499814.jpg',
    featured: false,
    impactMetric: '+210% Private Inquiries',
    challenge: 'Private international and domestic collectors required a confidential, secure virtual salon to inspect rare gemstones and bespoke bridal sets.',
    solution: 'Built an exclusive invite-only digital salon with 360-degree interactive gemstone inspection and direct concierge video scheduling.',
    techStack: ['Next.js', 'Tailwind CSS', 'WebRTC', 'Framer Motion'],
    testimonial: {
      quote: 'Our clients felt as though they were walking into our private salon in Mumbai.',
      author: 'Sophie de Vigny',
      role: 'Managing Director, Lumina Atelier'
    }
  }
];

export const CLIENT_LOGOS = [
  'RAZORPAY',
  'CRED',
  'SWIGGY',
  'ATHER ENERGY',
  'TITAN',
  'ZOMATO'
];
