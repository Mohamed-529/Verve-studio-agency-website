import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { ContactFormData, FormErrors } from '../types';

interface ContactProps {
  initialService?: string;
  initialProject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService, initialProject }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: 'UI/UX Design',
    message: '',
    budget: '₹5L - ₹15L'
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (initialProject) {
      setFormData((prev) => ({
        ...prev,
        message: `Hello Verve Studio, I am interested in building a project with scope similar to "${initialProject}".`
      }));
    }
  }, [initialService, initialProject]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters describing your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate brief processing & API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      service: 'UI/UX Design',
      message: '',
      budget: '₹5L - ₹15L'
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const serviceOptions = [
    'UI/UX Design',
    'Web Development',
    'Brand Identity',
    'Digital Marketing',
    'Full Scope Flagship'
  ];

  const budgetOptions = [
    '₹2.5L - ₹5L',
    '₹5L - ₹15L',
    '₹15L - ₹30L',
    '₹30L+'
  ];

  return (
    <section id="contact" className="py-24 relative bg-neutral-100/50 dark:bg-neutral-900/30 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Agency Info & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
                <span>Start a Project</span>
                <span aria-hidden="true">·</span>
                <span>04 / Contact</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight mb-6">
                Let's architect something unforgettable.
              </h2>
              <p className="font-body text-base text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                Have a new product, brand reimagination, or engineering challenge? We review new briefs weekly and respond within 24 hours.
              </p>

              {/* Direct Touchpoints */}
              <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-3.5 text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                    <Mail className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">Inquiries</div>
                    <a href={`mailto:${AGENCY_INFO.contactEmail}`} className="font-medium hover:underline">
                      {AGENCY_INFO.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                    <Phone className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">Studio Phone</div>
                    <span className="font-medium">{AGENCY_INFO.contactPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shrink-0">
                    <MapPin className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium">Studios in India</div>
                    <div className="font-medium">Bengaluru · Indiranagar, 100 Feet Rd</div>
                    <div className="font-medium text-neutral-500 dark:text-neutral-400">Mumbai · BKC, Bandra East</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="mt-8 p-4 rounded-xl bg-white dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 text-xs text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold text-neutral-900 dark:text-white block mb-1">Standard SLA Response</span>
              All inbound submissions receive an initial scoping memo from a Lead Partner within 24 business hours (IST).
            </div>
          </div>

          {/* Right Column: Interactive Form & Success State */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#111114] border border-neutral-200 dark:border-neutral-800 shadow-md">
              {isSubmitted ? (
                /* Success Message State */
                <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-800">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-2">
                      Brief Received
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-md mx-auto">
                      Thank you, <span className="font-semibold text-neutral-900 dark:text-white">{formData.name}</span>. We have forwarded your project scope to our design director and sent confirmation to <span className="font-semibold text-neutral-900 dark:text-white">{formData.email}</span>.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs text-left max-w-md mx-auto space-y-1 text-neutral-600 dark:text-neutral-400">
                    <div><span className="font-semibold text-neutral-800 dark:text-neutral-200">Selected Discipline:</span> {formData.service}</div>
                    <div><span className="font-semibold text-neutral-800 dark:text-neutral-200">Estimated Budget:</span> {formData.budget}</div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Discipline Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                      Primary Service Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => setFormData({ ...formData, service: svc })}
                          className={`px-3 py-1.5 text-xs rounded-lg transition-colors cursor-pointer border ${
                            formData.service === svc
                              ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white font-medium'
                              : 'bg-neutral-50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-neutral-400'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name Input Field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-sm bg-neutral-50 dark:bg-neutral-900 border text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-hidden focus:ring-2 transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-neutral-200 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-white focus:ring-neutral-900/10 dark:focus:ring-white/10'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. maya@acme-ventures.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-sm bg-neutral-50 dark:bg-neutral-900 border text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-hidden focus:ring-2 transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-neutral-200 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-white focus:ring-neutral-900/10 dark:focus:ring-white/10'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Budget Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2 px-3 text-xs rounded-lg transition-colors cursor-pointer border text-center ${
                            formData.budget === b
                              ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white font-medium'
                              : 'bg-neutral-50 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-neutral-400'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Project Goals & Timeline <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Describe the product objectives, key deliverables, target launch date..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-lg text-sm bg-neutral-50 dark:bg-neutral-900 border text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-hidden focus:ring-2 transition-colors resize-y ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500/20'
                          : 'border-neutral-200 dark:border-neutral-700 focus:border-neutral-900 dark:focus:border-white focus:ring-neutral-900/10 dark:focus:ring-white/10'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 rounded-lg shadow-md transition-all duration-200 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
