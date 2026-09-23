import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CLIENT_LOGOS } from './data/agencyData';
import { ThemeMode, PortfolioProject } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('verve-theme') as ThemeMode | null;
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [contactServicePrefill, setContactServicePrefill] = useState<string | undefined>(undefined);
  const [contactProjectPrefill, setContactProjectPrefill] = useState<string | undefined>(undefined);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('verve-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToContact = (service?: string, projectTitle?: string) => {
    if (service) setContactServicePrefill(service);
    if (projectTitle) setContactProjectPrefill(projectTitle);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const navOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioEl = document.getElementById('portfolio');
    if (portfolioEl) {
      const navOffset = 80;
      const elementPosition = portfolioEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 dark:bg-[#0a0a0c] dark:text-neutral-100 flex flex-col transition-colors duration-300">
      {/* Navigation Bar (Zone 1: Wordmark, Zone 2: Links, Zone 3: Actions) */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-grow">
        {/* 1. Hero Section (Required: Agency name, short tagline, CTA button, background image/gradient) */}
        <Hero
          onExploreWork={scrollToPortfolio}
          onStartProject={() => scrollToContact()}
        />

        {/* Client Trust Marquee Strip */}
        <section className="py-8 border-y border-neutral-200/70 dark:border-neutral-800/70 bg-white/40 dark:bg-[#0a0a0c]/40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 shrink-0">
                Selected Client Partners
              </span>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 dark:opacity-75">
                {CLIENT_LOGOS.map((logo, index) => (
                  <span
                    key={index}
                    className="font-display text-sm tracking-wider font-bold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. Services Section (Required: 3-4 service cards with icon, title, short description) */}
        <Services
          onSelectService={(serviceTitle) => scrollToContact(serviceTitle)}
        />

        {/* 3. Portfolio Section (Required: Grid layout 3-6 projects, image thumbnail, project title, hover effects) */}
        <Portfolio
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 4. Contact Section (Required: Name, email, message textarea, submit button, basic validation, success message) */}
        <Contact
          initialService={contactServicePrefill}
          initialProject={contactProjectPrefill}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactRegardingProject={(projectTitle) => scrollToContact(undefined, projectTitle)}
      />
    </div>
  );
}
