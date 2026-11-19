import React from 'react';
import type { TechItem } from '../../data/profile';

interface LogoLoopProps {
  items: TechItem[];
  speed?: number; // seconds for one full loop
  direction?: 'left' | 'right';
  className?: string;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({
  items,
  speed = 28,
  direction = 'left',
  className = ''
}) => {
  return (
    <div className={`group relative flex overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] ${className}`}>
      <div
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.03] px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.08]"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="h-5 w-5 object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 hover:scale-110"
              loading="lazy"
            />
            <span className="text-sm font-medium tracking-wide text-zinc-300">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Duplicate for seamless infinite loop */}
      <div
        aria-hidden="true"
        className={`flex min-w-full shrink-0 items-center justify-around gap-8 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        } group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, idx) => (
          <div
            key={`dup-${idx}`}
            className="flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.03] px-5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.08]"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="h-5 w-5 object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 hover:scale-110"
              loading="lazy"
            />
            <span className="text-sm font-medium tracking-wide text-zinc-300">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
