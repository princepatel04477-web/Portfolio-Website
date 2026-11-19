import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { Magnet } from './ui/Magnet';
import { profile } from '../data/profile';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 10) {
          setIsVisible(false); // scrolling down
        } else if (lastScrollY - currentScrollY > 10) {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'Work', id: 'featured' },
    { label: 'Projects', id: 'projects' },
    { label: 'Stack', id: 'stack' },
    { label: 'About', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-transform duration-300 pointer-events-none ${
          isVisible ? 'translate-y-0' : '-translate-y-28'
        }`}
      >
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-6 sm:gap-8 rounded-full border px-5 py-2.5 transition-all duration-300 ${
            isScrolled
              ? 'border-white/15 bg-black/60 shadow-xl shadow-black/40 backdrop-blur-xl'
              : 'border-white/10 bg-[#0d0d14]/40 backdrop-blur-md'
          }`}
        >
          {/* Brand Monogram */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group text-left cursor-pointer"
            aria-label="Prince Patel Portfolio Home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-[#94784a] text-xs font-bold text-zinc-950 font-mono shadow-md shadow-accent/20 transition-transform duration-300 group-hover:scale-105">
              P
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-semibold text-white tracking-wide leading-tight group-hover:text-accent transition">
                Prince Patel
              </span>
              <span className="text-[10px] text-zinc-400 font-mono leading-tight">
                AI &amp; Full-Stack
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition duration-200 cursor-pointer ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-100'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Actions: Resume button & Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <Magnet strength={0.25}>
              <a
                href={profile.resumeUrl}
                download="Prince_Patel_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-zinc-950 hover:shadow-lg hover:shadow-accent/25"
              >
                <FileText size={13} />
                <span>Resume</span>
                <ArrowUpRight size={13} className="opacity-70" />
              </a>
            </Magnet>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer Navigation (React Bits Staggered style) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/85 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-accent font-mono">
                Navigation
              </span>
              <ul className="space-y-3">
                {navLinks.map((link, idx) => (
                  <motion.li
                    key={link.id}
                    initial={{ x: -25, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.06 }}
                  >
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onNavigate(link.id);
                      }}
                      className="text-2xl font-semibold text-zinc-100 hover:text-accent transition flex items-center justify-between w-full"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={18} className="text-zinc-500" />
                    </button>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <a
                  href={profile.resumeUrl}
                  download="Prince_Patel_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-2xl bg-accent py-3 text-sm font-semibold text-zinc-950"
                >
                  <FileText size={16} /> Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
