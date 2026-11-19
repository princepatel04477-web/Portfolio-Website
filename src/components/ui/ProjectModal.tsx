import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Award } from 'lucide-react';
import { Github } from './Icons';
import type { Project } from '../../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c12] text-zinc-100 shadow-2xl shadow-black/90"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            {/* Header bar with close button */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
                  {project.category}
                </span>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  project.status === 'Live'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : project.status === 'Prototype'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${
                    project.status === 'Live' ? 'bg-emerald-400 animate-pulse' : 'bg-current'
                  }`} />
                  {project.status}
                </span>
                <span className="text-xs text-zinc-500 font-mono">{project.year}</span>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
              {/* Media Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent opacity-80" />
              </div>

              {/* Title & One-Liner */}
              <div>
                <h2 id="project-modal-title" className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-base md:text-lg text-accent/90 font-medium leading-relaxed">
                  {project.oneLiner}
                </p>
              </div>

              {/* Metrics Highlights (if available) */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-xl border border-accent/20 bg-accent/[0.04] p-3 text-xs md:text-sm font-medium text-accent"
                    >
                      <Award size={16} className="shrink-0 text-accent" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Problem & Role Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                <div className="md:col-span-2 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    <Cpu size={14} className="text-accent" /> The Problem
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                    {project.problem}
                  </p>
                </div>
                <div className="space-y-1 md:border-l md:border-white/5 md:pl-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    <Layers size={14} className="text-accent" /> Role
                  </div>
                  <p className="text-sm font-medium text-zinc-200 pt-1">
                    {project.role}
                  </p>
                </div>
              </div>

              {/* Detailed Case Study */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Case Study
                </h3>
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed whitespace-pre-line">
                  {project.caseStudy}
                </p>
              </div>

              {/* Key Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    Key Highlights & Capabilities
                  </h3>
                  <div className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-emerald-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer with action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 px-6 py-4 bg-white/[0.02]">
              <div className="text-xs text-zinc-400">
                Prince Patel • Portfolio Project Detail
              </div>

              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2 text-xs font-medium text-white transition hover:bg-white/10"
                  >
                    <Github size={15} /> Source Code
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-xs font-semibold text-zinc-950 transition hover:bg-accent/90"
                  >
                    <ExternalLink size={15} /> Open Live Site
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
