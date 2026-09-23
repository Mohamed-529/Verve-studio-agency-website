import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';

interface HeroProps {
  onExploreWork: () => void;
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onStartProject }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Studio Photography with Measured Gradient Scrim */}
      <div className="absolute inset-0 z-0 select-none">
        <img
          src="/src/assets/images/hero_design_agency_1790164472807.jpg"
          alt="Verve Design Studio Architectural Space"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Scrim Overlay for Optical Legibility & Light/Dark Theme Adaptation */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa]/90 via-[#fafafa]/75 to-[#fafafa] dark:from-[#0a0a0c]/92 dark:via-[#0a0a0c]/85 dark:to-[#0a0a0c] transition-colors duration-300" />
        
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#00000010_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-4xl">
          {/* Subtle human editorial kicker (Clean unboxed text, zero pills) */}
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Independent Design & Technology Studio</span>
            <span aria-hidden="true">·</span>
            <span>San Francisco & London</span>
          </div>

          {/* Agency Name & Primary Proposition Headline */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.08] mb-6 text-balance">
            {AGENCY_INFO.tagline}
          </h1>

          {/* Short Tagline / Secondary Proposition */}
          <p className="font-body text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed max-w-2xl mb-10">
            {AGENCY_INFO.subtagline}
          </p>

          {/* Call-To-Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 mb-16">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onStartProject}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-neutral-900 hover:text-neutral-950 bg-white/80 dark:bg-neutral-900/80 dark:text-neutral-100 dark:hover:text-white border border-neutral-300 dark:border-neutral-700/80 rounded-lg backdrop-blur-xs transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-[0.98] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="hidden lg:flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 pl-4 border-l border-neutral-300 dark:border-neutral-800">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Booking Q2/Q3 2026 Engagements</span>
            </div>
          </div>

          {/* Claim-to-Proof Quantitative Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-neutral-200 dark:border-neutral-800/80">
            {AGENCY_INFO.stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
