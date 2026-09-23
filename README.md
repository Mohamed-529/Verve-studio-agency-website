Verve Design Studio India — Premier Digital & Design Agency
Task-Based Evaluation Submission for Next.js Developer Internship
Candidate / Developer: Mohamed Yusuff
GitHub: https://github.com/Mohamed-529
LinkedIn: https://www.linkedin.com/in/mohamed-yusuff427
A modern, responsive, and performance-optimized design agency homepage built with Next.js/React functional components, Tailwind CSS, TypeScript, and micro-interactions tailored for the Indian tech and global market ecosystem.
1. Features & Assignment Requirements Overview
This project satisfies 100% of the core evaluation criteria and bonus objectives specified in the internship brief:
Core Requirements
Hero Section
Agency name: VERVE.STUDIO
High-impact tagline and subtagline crafted for Indian enterprise & startup scale
Call-to-action buttons: "Explore Selected Work" & "Start a Project"
Architectural studio background image with optical gradient scrim and subtle geometry grid
Verified proof metrics strip (35+ Design Awards, 99.4% On-Time Delivery, ₹850 Cr+ Client Value Created, 8.4x Average ROI Growth)
Services Section
4 service cards:
01. UI/UX Design (Layout icon, deliverables list, engagement metrics)
02. Web Development (Code icon, core web vitals speed, Next.js architecture, UPI/Razorpay integration)
03. Brand Identity (Sparkles icon, typography guidelines, brand recall metrics)
04. Digital Marketing (TrendingUp icon, conversion optimization, inbound growth)
Distinct icons, title, short description, core deliverables, and direct inquiry link
Portfolio Section
Responsive grid layout showcasing 6 marquee case studies (Aetheria Wealth India, Maison Noire Artisanal, Strata 3D Spatial India, Monolith Architectural Monograph, Hyperion Cloud Systems, Lumina Heritage High-Jewelry)
High-resolution thumbnails with 4:3 / 16:9 aspect ratios
Project titles, client names, years, and verified impact metrics
Smooth hover zoom and overlay animations
Interactive category filter tabs (All, UI/UX Design, Web Development, Brand Identity, Digital Marketing)
Interactive Project Detail Modal displaying challenge, solution, tech stack, client testimonials, and inquiry actions
Contact Section
Name input field
Email input field
Message textarea
Indian Rupees (₹) estimated project budget selector (₹2.5L – ₹5L, ₹5L – ₹15L, ₹15L – ₹30L, ₹30L+)
Submit button with async loading state
Real-time client-side validation (name min-length, RFC email regex check, message length)
Animated success confirmation state with clear feedback and reset inquiry capability
Direct Indian contact touchpoints (email: hello@vervestudio.in, phone: +91 (080) 4128-9800, studios in Bengaluru & Mumbai)
Bonus Objectives Implemented
Tailwind CSS: Utility-first styling with strict typographic hierarchy and responsive layout math.
Social Profile Integration: Direct links to developer's GitHub (https://github.com/Mohamed-529) and LinkedIn (https://www.linkedin.com/in/mohamed-yusuff427) in navbar and footer.
Basic Animations & Micro-Interactions: Smooth hover effects, subtle scale transitions, modal fade/zoom, active button feedback.
SEO Metadata Implementation:
Complete <title>, meta description, OpenGraph (og:title, og:description, og:image), and Twitter cards in index.html.
Schema.org ProfessionalService JSON-LD structured data for Google Search rich snippets with Indian address, telephone, and INR currency.
Dark Mode Toggle:
Seamless light/dark mode switch in the navigation bar.
Persistent state saved to localStorage and system color preference detection (prefers-color-scheme).
Image Optimization & Zero-Broken-Image Policy:
Studio-grade photography generated for this specific agency domain.
referrerPolicy="no-referrer" on all image tags with descriptive alt text and graceful CSS fallback containers.
2. Tech Stack Used
Framework: React 19 / Next.js architecture patterns (App Router mental model with modular components)
Language: TypeScript 5+ (Strict typing, no any, exhaustive interfaces)
Styling: Tailwind CSS v4
Icons: lucide-react
Typography: Syne (Display/Headings) & Plus Jakarta Sans (Body text) from Google Fonts
Tooling & Bundler: Vite / tsx
3. Project Structure
code
Code
├── index.html                  # SEO tags, fonts, & Schema.org JSON-LD (India localized)
├── metadata.json               # AI Studio application metadata
├── package.json                # Project dependencies
├── README.md                   # This evaluation document
├── src/
│   ├── assets/
│   │   └── images/             # Generated high-resolution imagery
│   ├── components/
│   │   ├── Navbar.tsx          # 3-zone header, theme switcher, GitHub & LinkedIn links
│   │   ├── Hero.tsx            # Hero section with tagline, CTAs & proof metrics
│   │   ├── Services.tsx        # 4 service cards with deliverables & metrics
│   │   ├── Portfolio.tsx       # 6 projects grid with category filters & hover zoom
│   │   ├── ProjectModal.tsx    # Comprehensive case study dialog
│   │   ├── Contact.tsx         # Contact form with INR budget tiers, validation & success state
│   │   └── Footer.tsx          # Agency footer, Bengaluru & Mumbai studios, social links
│   ├── data/
│   │   └── agencyData.ts       # Centralized typed agency data, services, & projects
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx                 # Root layout & state management
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Tailwind imports, font utilities & scrollbars
└── tsconfig.json               # TypeScript configuration
4. Setup & Running Locally
Prerequisites
Node.js version 18 or above
npm or pnpm
Installation Steps
Clone the repository:
code
Bash
git clone https://github.com/Mohamed-529/verve-design-studio.git
cd verve-design-studio
Install dependencies:
code
Bash
npm install
Start the development server:
code
Bash
npm run dev
Open in browser:
Open http://localhost:3000.
Build for production:
code
Bash
npm run build