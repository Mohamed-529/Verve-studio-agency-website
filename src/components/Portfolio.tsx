import React, { useState } from 'react';
import { ArrowUpRight, Filter, Eye } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { PortfolioProject } from '../types';

interface PortfolioProps {
  onSelectProject: (project: PortfolioProject) => void;
}

type CategoryFilter = 'All' | 'UI/UX Design' | 'Web Development' | 'Brand Identity' | 'Digital Marketing';

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('All');

  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  const categories: CategoryFilter[] = [
    'All',
    'UI/UX Design',
    'Web Development',
    'Brand Identity',
    'Digital Marketing'
  ];

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
              <span>Selected Case Studies</span>
              <span aria-hidden="true">·</span>
              <span>03 / Proof of Impact</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Crafted with discipline. Measured by results.
            </h2>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid Layout: 3-6 projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-[#111114] border border-neutral-200 dark:border-neutral-800/90 shadow-xs hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Thumbnail Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Scrim Overlay on Hover */}
                <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-neutral-900 text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </div>
                </div>

                {/* Impact Metric Badge on Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium tracking-tight bg-black/70 backdrop-blur-xs text-white border border-white/10">
                    {project.impactMetric}
                  </span>
                </div>
              </div>

              {/* Project Details Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project Title */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                  </div>

                  {/* Summary */}
                  <p className="font-body text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mt-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Tech Stack Preview */}
                <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="truncate">{project.techStack.slice(0, 3).join(' / ')}</span>
                  <span className="text-[11px] font-medium text-neutral-900 dark:text-neutral-300 group-hover:underline">Explore</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
