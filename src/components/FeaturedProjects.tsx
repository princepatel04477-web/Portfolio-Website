import React from 'react';
import { ExternalLink, Sparkles, ArrowRight, Award } from 'lucide-react';
import { Github } from './ui/Icons';
import { SpotlightCard } from './ui/SpotlightCard';
import type { Project } from '../data/projects';

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onViewAllClick: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  onSelectProject,
  onViewAllClick,
}) => {
  // Take the 6 featured projects
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="featured" className="relative w-full py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent mb-2">
            <Sparkles size={14} /> / Featured Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Projects as the <span className="text-accent underline decoration-accent/40 underline-offset-8">Hero</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
            Selected engineering builds spanning AI pipelines, distributed trading systems, high-motion e-commerce, and enterprise B2B infrastructure.
          </p>
        </div>

        <button
          onClick={onViewAllClick}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent hover:text-white transition w-fit group cursor-pointer"
        >
          <span>Explore All 16 Projects</span>
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project, idx) => {
          // Make the top 2 cards span slightly larger on large displays for bento dynamism
          const isLarge = idx === 0 || idx === 1;

          return (
            <SpotlightCard
              key={project.slug}
              onClick={() => onSelectProject(project)}
              className={`cursor-pointer group flex flex-col justify-between p-6 sm:p-7 ${
                isLarge ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Media Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/50">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Status Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md border border-white/15">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-medium backdrop-blur-md ${
                      project.status === 'Live'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : project.status === 'Prototype'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${
                        project.status === 'Live' ? 'bg-emerald-400 animate-pulse' : 'bg-current'
                      }`} />
                      {project.status}
                    </span>
                  </div>

                  {/* Key Metric Pill if available */}
                  {project.metrics && project.metrics[0] && (
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-black/70 px-2.5 py-1 text-[11px] font-medium text-accent border border-accent/25 backdrop-blur-md">
                        <Award size={13} className="shrink-0 text-accent" />
                        <span className="truncate">{project.metrics[0]}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Title & One-Liner */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowRight size={16} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-accent" />
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed">
                    {project.oneLiner}
                  </p>
                </div>
              </div>

              {/* Stack Chips & Action Link */}
              <div className="pt-6 mt-4 border-t border-white/5 flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-white/5 bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="rounded-md border border-white/5 bg-white/[0.02] px-2 py-0.5 text-[10px] font-mono text-zinc-500">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-accent group-hover:underline">View Case Study ›</span>

                  <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition"
                        title="GitHub Repo"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-400 hover:text-accent transition"
                        title="Open Live Website"
                      >
                        <span>Live</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
};
