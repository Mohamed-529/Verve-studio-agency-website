import React from 'react';
import { Layout, Code, Sparkles, TrendingUp, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6" />;
      case 'Code':
        return <Code className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Layout className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-neutral-100/60 dark:bg-neutral-900/40 border-y border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
            <span>Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>02 / Four Disciplines</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-4">
            Services built for ambitious market leaders.
          </h2>
          <p className="font-body text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
            We don't offer generic templates or superficial redesigns. Every engagement is rooted in deep user research, architectural rigor, and commercial intent.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#111114] border border-neutral-200 dark:border-neutral-800/90 shadow-xs hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
            >
              <div>
                {/* Header with Icon, Number, and Impact Metric */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-900 transition-colors duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                      {service.clientMetric}
                    </span>
                    <span className="font-mono text-sm font-semibold text-neutral-400 dark:text-neutral-600">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                  {service.tagline}
                </p>

                {/* Detailed Description */}
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 mb-8">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-2">
                    Core Deliverables
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-lg bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800/50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Inquire About {service.title}</span>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
