import React, { useState } from 'react';
import { Calendar, Copy, Check, FileText, Send, Sparkles, Mail } from 'lucide-react';
import { Magnet } from './ui/Magnet';
import { ClickSpark } from './ui/ClickSpark';
import { profile } from '../data/profile';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.name || !formState.message) return;

    setFormStatus('submitting');
    // Direct mailto fallback or simulated instant confirmation
    setTimeout(() => {
      setFormStatus('sent');
      const mailtoUrl = `mailto:${profile.email}?subject=Project Inquiry from ${encodeURIComponent(
        formState.name
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="relative w-full py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading, Direct CTAs & Quick Info */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent mb-2">
              <Sparkles size={14} /> / Let's Build Something Meaningful
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to start your next <span className="text-accent">breakthrough?</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-lg">
              Whether you need to scale custom AI pipelines, develop an end-to-end web platform, or automate mission-critical operations, let's align and start moving.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Magnet strength={0.25}>
              <a
                href={profile.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-xs sm:text-sm font-semibold text-zinc-950 transition hover:bg-[#d8be96] hover:shadow-lg hover:shadow-accent/25"
              >
                <Calendar size={15} />
                <span>Schedule a Call</span>
              </a>
            </Magnet>

            <Magnet strength={0.25}>
              <ClickSpark sparkColor="#C5A880" sparkCount={10}>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/30 cursor-pointer"
                >
                  {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                  <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
                </button>
              </ClickSpark>
            </Magnet>

            <Magnet strength={0.25}>
              <a
                href={profile.resumeUrl}
                download="Prince_Patel_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/30"
              >
                <FileText size={15} />
                <span>Download CV</span>
              </a>
            </Magnet>
          </div>

          {/* Direct Contact Details */}
          <div className="pt-4 space-y-2 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-accent" />
              <a href={`mailto:${profile.email}`} className="hover:text-white transition">
                {profile.email}
              </a>
            </div>
            <div className="text-zinc-500">
              Location: Surat, Gujarat, India (IST / GMT+5:30)
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-6 rounded-3xl border border-white/10 bg-[#0e0e16]/90 p-7 sm:p-9 backdrop-blur-xl shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-2">Send an Instant Message</h3>
          <p className="text-xs text-zinc-400 mb-6">
            Directly dispatches your inquiry to Prince's primary inbox.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                placeholder="e.g. Alexander Vance"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition focus:border-accent/50 focus:bg-white/[0.06]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                placeholder="e.g. alexander@company.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition focus:border-accent/50 focus:bg-white/[0.06]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-zinc-300 mb-1">
                Project Details or Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Tell me about your product, objectives, and timeline..."
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 outline-none transition focus:border-accent/50 focus:bg-white/[0.06] resize-none"
              />
            </div>

            <ClickSpark sparkColor="#C5A880">
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-accent py-3 text-xs sm:text-sm font-semibold text-zinc-950 transition hover:bg-[#d8be96] disabled:opacity-50 cursor-pointer"
              >
                {formStatus === 'submitting' ? (
                  <span>Opening Mailer...</span>
                ) : formStatus === 'sent' ? (
                  <span className="flex items-center gap-1.5 text-emerald-950">
                    <Check size={16} /> Dispatched!
                  </span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </ClickSpark>
          </form>
        </div>
      </div>
    </section>
  );
};
