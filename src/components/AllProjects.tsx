import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ExternalLink, Layers, ArrowUpRight } from 'lucide-react';
import { Github } from './ui/Icons';
import { SpotlightCard } from './ui/SpotlightCard';
import { ProjectImage } from './ui/ProjectImage';
import { CATEGORIES, type Project } from '../data/projects';

interface AllProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const AllProjects: React.FC<AllProjectsProps> = ({ projects, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.oneLiner.toLowerCase().includes(q) ||
        project.problem.toLowerCase().includes(q) ||
        project.stack.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="relative w-full py-24 site-container border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent mb-2">
            <Layers size={14} /> / Project Archive &amp; Catalogue
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            All Projects &amp; <span className="text-accent">Systems</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
            Explore {projects.length} production platforms, client websites, trading engines, and proprietary tools built across 8 industries.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack, title, or problem..."
            className="w-full rounded-full border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2 text-xs sm:text-sm text-zinc-200 placeholder-zinc-500 backdrop-blur-md outline-none transition focus:border-accent/50 focus:bg-white/[0.06]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-500 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 custom-scrollbar">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`relative whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'text-zinc-950'
                  : 'text-zinc-400 hover:text-white bg-white/[0.02] border border-white/5'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-category-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mb-6">
        <span>
          Showing {filteredProjects.length} of {projects.length} projects
        </span>
        {searchQuery && <span>Filtered by "{searchQuery}"</span>}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 text-center rounded-3xl border border-white/5 bg-white/[0.02]">
          <p className="text-zinc-400 text-sm">No projects found matching your search criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-3 text-xs text-accent underline underline-offset-4"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard
                  onClick={() => onSelectProject(project)}
                  className="cursor-pointer group flex flex-col justify-between h-full p-6"
                >
                  <div className="space-y-4">
                    {/* Media Thumbnail with fallback */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40">
                      <ProjectImage
                        src={project.thumbnail}
                        alt={project.title}
                        width={800}
                        height={500}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                      <div className="absolute top-2.5 left-2.5">
                        <span className="rounded-full bg-black/70 px-2.5 py-0.5 text-[10px] font-semibold text-zinc-300 backdrop-blur-md border border-white/10">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute top-2.5 right-2.5">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-medium backdrop-blur-md ${
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

                      {/* Key Metric Chip if available */}
                      {project.metrics && project.metrics[0] && (
                        <div className="absolute bottom-2.5 left-2.5 right-2.5">
                          <div className="inline-flex items-center gap-1.5 rounded-lg bg-black/75 px-2.5 py-1 text-[10px] font-medium text-accent border border-accent/25 backdrop-blur-md">
                            <span className="truncate">{project.metrics[0]}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Title & One-Liner */}
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight size={15} className="text-zinc-500 group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </h3>
                      <p className="mt-1.5 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                        {project.oneLiner}
                      </p>
                    </div>
                  </div>

                  {/* Stack & Links */}
                  <div className="pt-4 mt-4 border-t border-white/5 flex flex-col gap-3">
                    {project.stack.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {project.stack.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] font-mono text-zinc-400"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 3 && (
                          <span className="rounded-md border border-white/5 bg-white/[0.02] px-2 py-0.5 text-[10px] font-mono text-zinc-500">
                            +{project.stack.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Card Footer: Details & Case Study never clipped */}
                    <div className="flex items-center justify-between text-xs pt-1 min-h-[28px]">
                      <span className="text-accent group-hover:underline text-[11px] font-semibold whitespace-nowrap shrink-0 pr-2">
                        Details &amp; Case Study
                      </span>

                      <div className="flex items-center gap-2.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition"
                            title="GitHub Repository"
                          >
                            <Github size={14} />
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
                            <span className="text-[11px] font-medium">Live</span>
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
};
