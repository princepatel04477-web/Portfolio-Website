import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Terminal } from 'lucide-react';
import { ShaderBackground } from './ui/shaders-hero-section';
import { SplitText } from './ui/SplitText';
import { RotatingText } from './ui/RotatingText';
import { CountUp } from './ui/CountUp';
import { Magnet } from './ui/Magnet';
import LiveClock from './Hero/LiveClock';
import PortraitCard from './Hero/PortraitCard';
import { profile } from '../data/profile';

interface HeroSectionProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWork,
  onContactClick
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100vh] w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 px-4 sm:px-6 md:px-12"
    >
      {/* Background WebGL Shader Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <ShaderBackground>
          <div className="absolute inset-0 bg-gradient-to-b from-[#08080c]/60 via-[#08080c]/80 to-[#08080c]" />
          <div className="global-noise" />
        </ShaderBackground>
      </div>

      {/* Main Hero Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Column: Typography, Value Prop, Roles & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/[0.06] px-4 py-1.5 backdrop-blur-md w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono font-medium text-accent tracking-wide">
              Available for Q1–Q2 Engineering &amp; Client Projects
            </span>
          </motion.div>

          {/* Headline with SplitText */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              <SplitText
                text="Engineering Scalable Intelligence."
                duration={0.6}
              />
            </h1>

            {/* Rotating Role Line */}
            <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-medium text-zinc-300">
              <span className="text-zinc-500 font-mono text-base sm:text-xl">
                I am an
              </span>
              <RotatingText
                texts={[
                  "AI Engineer",
                  "Full-Stack Developer",
                  "Founder, Varunya Technologies"
                ]}
              />
            </div>
          </div>

          {/* One-line Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed"
          >
            {profile.valueProp} Operating across modern machine learning workflows, edge architectures, and high-frequency motion systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Magnet strength={0.25}>
              <button
                onClick={onExploreWork}
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-[#d8be96] hover:shadow-xl hover:shadow-accent/25 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
              </button>
            </Magnet>

            <Magnet strength={0.25}>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30 cursor-pointer"
              >
                <Mail size={15} className="text-zinc-400" />
                <span>Get in Touch</span>
              </button>
            </Magnet>
          </motion.div>

          {/* Location & Live Clock */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2 flex items-center gap-2 text-xs text-zinc-400 font-mono"
          >
            <Terminal size={14} className="text-accent" />
            <LiveClock />
          </motion.div>
        </div>

        {/* Right Column: 3D Portrait Card */}
        <div className="lg:col-span-5 flex justify-center items-center py-6">
          <PortraitCard
            cardRef={cardRef}
            innerRef={innerRef}
          />
        </div>
      </div>

      {/* Above the fold stats bar (using CountUp) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 mt-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {profile.stats.map((stat, i) => (
            <div key={i} className="flex flex-col space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono flex items-baseline">
                <CountUp to={stat.value} duration={1.6} suffix={stat.suffix} />
              </div>
              <span className="text-xs text-zinc-400 font-medium tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
