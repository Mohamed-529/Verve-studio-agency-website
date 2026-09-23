import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { ThemeMode } from '../types';
import { AGENCY_INFO } from '../data/agencyData';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#0a0a0c]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-left group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white rounded-sm"
          aria-label="Verve Studio Home"
        >
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white transition-opacity group-hover:opacity-80">
            VERVE<span className="text-neutral-400 dark:text-neutral-500 font-normal">.STUDIO</span>
          </span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-300" aria-label="Main Navigation">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Social profile icons + Theme switch + Primary CTA */}
        <div className="flex items-center gap-2.5">
          {/* GitHub Profile */}
          <a
            href={AGENCY_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-2 rounded-lg text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors"
            aria-label="GitHub Profile"
            title="GitHub: Mohamed-529"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn Profile */}
          <a
            href={AGENCY_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex p-2 rounded-lg text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-[#0a66c2] dark:hover:bg-neutral-800 transition-colors"
            aria-label="LinkedIn Profile"
            title="LinkedIn: Mohamed Yusuff"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-neutral-700" />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 rounded-lg transition-all shadow-xs cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0a0a0c] px-6 py-5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-neutral-800 dark:text-neutral-200">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left py-2 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
            >
              Services (4 Core Capabilities)
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left py-2 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
            >
              Portfolio (Selected Projects)
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
            >
              Contact Us
            </button>

            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-3">
              <div className="flex items-center justify-center gap-4 py-2">
                <a
                  href={AGENCY_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-neutral-300 dark:text-neutral-700">·</span>
                <a
                  href={AGENCY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                >
                  <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-lg cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
