import React, { useState } from 'react';
import { Cpu, Code2, Server, Database, Wrench } from 'lucide-react';
import { LogoLoop } from './ui/LogoLoop';
import { profile } from '../data/profile';

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = [
    { label: 'All', icon: null },
    { label: 'AI / ML', icon: Cpu },
    { label: 'Frontend', icon: Code2 },
    { label: 'Backend', icon: Server },
    { label: 'Database & Cloud', icon: Database },
    { label: 'Tools & Design', icon: Wrench },
  ];

  const filteredItems = activeTab === 'All'
    ? profile.techStack
    : profile.techStack.filter((t) => t.category === activeTab);

  // Divide into two tracks for the infinite logo loop
  const mid = Math.ceil(profile.techStack.length / 2);
  const track1 = profile.techStack.slice(0, mid);
  const track2 = profile.techStack.slice(mid);

  return (
    <section id="stack" className="relative w-full py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent mb-2">
          <Cpu size={14} /> / Technical Architecture &amp; Stack
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Technologies &amp; <span className="text-accent">Toolchains</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
          Engineered with modern, battle-tested tools across machine learning models, reactive web clients, and distributed backends.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveTab(cat.label)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition cursor-pointer ${
                  isActive
                    ? 'bg-accent text-zinc-950 font-semibold shadow-md shadow-accent/20'
                    : 'bg-white/[0.03] text-zinc-400 border border-white/10 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {Icon && <Icon size={13} />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Tech Badges for Active Category */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-16">
        {filteredItems.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.06] hover:translate-y-[-2px]"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-black/40 border border-white/5 p-1.5">
              <img src={tech.logo} alt={tech.name} className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col truncate">
              <span className="text-xs font-semibold text-zinc-200 truncate">{tech.name}</span>
              <span className="text-[10px] text-zinc-500 font-mono truncate">{tech.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Infinite Dual-Track LogoLoop */}
      <div className="space-y-3 pt-4 border-t border-white/5">
        <LogoLoop items={track1} direction="left" speed={30} />
        <LogoLoop items={track2} direction="right" speed={32} />
      </div>
    </section>
  );
};
