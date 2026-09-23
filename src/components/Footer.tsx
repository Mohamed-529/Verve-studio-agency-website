import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 dark:bg-[#070709] border-t border-neutral-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-800">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display text-2xl font-bold tracking-tight text-white">
              VERVE<span className="text-neutral-500 font-normal">.STUDIO</span>
            </span>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              An independent design and digital engineering studio based in India, crafting iconic brand systems and high-performance web applications for visionary companies.
            </p>
            {/* Social Icons linked to Mohamed Yusuff's GitHub & LinkedIn */}
            <div className="pt-2 flex items-center gap-4 text-neutral-400">
              <a
                href={AGENCY_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 hover:text-white transition-all border border-neutral-700/60 flex items-center gap-2 text-xs"
                aria-label="GitHub Profile: Mohamed-529"
                title="Mohamed Yusuff on GitHub"
              >
                <Github className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={AGENCY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 hover:text-white transition-all border border-neutral-700/60 flex items-center gap-2 text-xs"
                aria-label="LinkedIn Profile: Mohamed Yusuff"
                title="Mohamed Yusuff on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Hero Overview</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Four Disciplines</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio Case Studies</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Client Inquiry</a>
              </li>
            </ul>
          </div>

          {/* Indian Studios & Working Hours */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Studios in India
            </h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <div>
                <span className="font-semibold text-white">Bengaluru (HQ):</span> 100 Feet Rd, Indiranagar, Bengaluru, Karnataka 560038
              </div>
              <div>
                <span className="font-semibold text-white">Mumbai:</span> Maker Maxity, BKC, Bandra East, Mumbai, Maharashtra 400051
              </div>
              <div className="text-xs text-neutral-500 pt-1">
                Studio Hours: Monday – Friday, 9:30 AM – 6:30 PM IST
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Verve Design Studio India Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
