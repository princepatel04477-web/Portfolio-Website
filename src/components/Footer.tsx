import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin, Instagram } from './ui/Icons';
import { profile } from '../data/profile';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Hero', id: 'home' },
    { label: 'Featured Work', id: 'featured' },
    { label: 'All Projects', id: 'projects' },
    { label: 'Tech Stack', id: 'stack' },
    { label: 'Experience & About', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#060609] py-16 px-4 sm:px-6 md:px-12 text-zinc-400">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-zinc-950 font-mono">
                P
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Prince Patel
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
              AI Engineer, Full-Stack Developer &amp; Founder of Varunya Technologies. Engineering high-performance intelligence and modern web platforms.
            </p>
          </div>

          {/* Social Icons Row */}
          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-accent hover:text-accent hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-accent hover:text-accent hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>

            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-accent hover:text-accent hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>

            <a
              href={profile.socials.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-accent hover:text-accent hover:scale-110"
              aria-label="Upwork"
            >
              <img src="https://cdn.simpleicons.org/upwork/FFFFFF" alt="Upwork" className="h-4 w-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:border-accent hover:text-accent hover:scale-110 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="hover:text-white transition cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href={profile.resumeUrl}
            download="Prince_Patel_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Download Resume (PDF)
          </a>
        </div>

        {/* Bottom Meta & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500 pt-6 border-t border-white/5">
          <div>
            © {new Date().getFullYear()} Prince Patel. Surat, Gujarat, India. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with React 19 &amp; Tailwind CSS</span>
            <span>•</span>
            <span className="text-zinc-400">princepatel.dpdns.org</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
