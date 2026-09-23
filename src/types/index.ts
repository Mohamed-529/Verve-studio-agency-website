export type ThemeMode = 'light' | 'dark';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: 'Layout' | 'Code' | 'Sparkles' | 'TrendingUp';
  deliverables: string[];
  clientMetric: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  year: string;
  category: 'UI/UX Design' | 'Web Development' | 'Brand Identity' | 'Digital Marketing';
  summary: string;
  thumbnail: string;
  aspectRatio?: string;
  featured?: boolean;
  impactMetric: string;
  challenge: string;
  solution: string;
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
  budget?: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
