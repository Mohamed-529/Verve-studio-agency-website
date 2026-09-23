import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Quote } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onContactRegardingProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactRegardingProject
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#121216] rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 dark:bg-[#121216]/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            <span>Case Study</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Visual Asset */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800">
            <img
              src={project.thumbnail}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-lg text-xs font-mono">
              Key Outcome: {project.impactMetric}
            </div>
          </div>

          {/* Title & Client Lockup */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
                {project.title}
              </h2>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                Client: <span className="font-semibold text-neutral-800 dark:text-neutral-200">{project.client}</span> ({project.year})
              </div>
            </div>
            <p className="font-body text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                The Challenge
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                Our Strategic Solution
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Testimonial Quote */}
          {project.testimonial && (
            <div className="relative p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30">
              <Quote className="w-8 h-8 text-neutral-300 dark:text-neutral-700 mb-3" />
              <blockquote className="text-sm sm:text-base italic text-neutral-800 dark:text-neutral-200 mb-3">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                <span className="font-semibold text-neutral-900 dark:text-white">{project.testimonial.author}</span>
                {' · '}
                <span>{project.testimonial.role}</span>
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
              Technologies & Competencies Applied
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action CTA */}
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Verified Case Study Delivery</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onContactRegardingProject(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            >
              <span>Build Something Similar</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
