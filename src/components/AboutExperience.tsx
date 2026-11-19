import React from 'react';
import { Award, Briefcase, MapPin, Calendar, CheckCircle2, UserCheck } from 'lucide-react';
import { SplitText } from './ui/SplitText';
import { SpotlightCard } from './ui/SpotlightCard';
import { profile } from '../data/profile';
import princePhoto from '../assets/Prince.png';

export const AboutExperience: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      {/* 1. About Header & Bio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        {/* Left Column: Portrait Card */}
        <div className="lg:col-span-5 flex justify-center">
          <SpotlightCard className="relative p-3 w-full max-w-sm rounded-3xl border border-white/10 bg-[#0e0e16]/80 shadow-2xl">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/50">
              <img
                src={princePhoto}
                alt={profile.name}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono font-medium text-accent">Founder &amp; CTO</span>
                <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">Surat, India • Varunya Technologies</p>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column: Bio Narrative */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent">
            <UserCheck size={14} /> / About &amp; Engineering Philosophy
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Where Deep Intelligence Meets <span className="text-accent">Pure Execution</span>
          </h2>

          {/* SplitText with preserved real whitespace and accessible label */}
          <div className="pt-2">
            <SplitText
              text="I build digital environments where deep technology meets flawless visual execution."
              className="text-lg sm:text-xl font-medium text-accent leading-relaxed"
            />
          </div>

          <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            {profile.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Value Badges */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs font-medium text-zinc-300">
              <span className="text-accent font-semibold block mb-0.5">Performance-First</span>
              Sub-second render targets &amp; zero bloat.
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs font-medium text-zinc-300">
              <span className="text-accent font-semibold block mb-0.5">End-to-End</span>
              From AI model fine-tuning to production cloud.
            </div>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs font-medium text-zinc-300 col-span-2 sm:col-span-1">
              <span className="text-accent font-semibold block mb-0.5">Commercial Focus</span>
              Delivered across 8 industry verticals.
            </div>
          </div>
        </div>
      </div>

      {/* 2. Work Experience Timeline */}
      <div className="mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent mb-2">
              <Briefcase size={14} /> / Career History
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Work Experience &amp; <span className="text-accent">Leadership</span>
            </h3>
          </div>
        </div>

        <div className="space-y-6">
          {profile.careerTimeline.map((item, idx) => (
            <SpotlightCard key={idx} className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-xl font-bold text-white">{item.role}</h4>
                    <span className="rounded-full bg-accent/15 px-3 py-0.5 text-xs font-semibold text-accent">
                      {item.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-1.5 text-xs text-zinc-400 font-mono">
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={12} className="text-zinc-500" />
                      {item.loc}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={12} className="text-zinc-500" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-2 mt-4 pt-4 border-t border-white/5">
                {item.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-accent" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* 3. Verified Certifications */}
      <div className="mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-accent mb-2">
              <Award size={14} /> / Credentials &amp; Verification
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Professional Certifications
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md transition hover:border-accent/40 hover:bg-white/[0.05]"
            >
              <div className="space-y-2">
                <span className="rounded-md bg-white/[0.05] px-2.5 py-1 text-[11px] font-mono text-accent">
                  {cert.issuer}
                </span>
                <h4 className="text-sm font-semibold text-zinc-100 leading-snug pt-1">
                  {cert.title}
                </h4>
              </div>
              <div className="flex items-center justify-end pt-4 mt-2 border-t border-white/5 text-[11px] text-zinc-400">
                <Award size={15} className="text-accent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
