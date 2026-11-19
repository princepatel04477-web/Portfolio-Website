import React, { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className = '',
  width = 800,
  height = 500
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div 
        className={`w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-br from-[#0e1017] via-[#161a24] to-[#0a0c10] border border-white/5 ${className}`}
        style={{ width: '100%', height: '100%' }}
      >
        <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent font-mono font-bold text-base mb-2 shadow-lg shadow-accent/10">
          {alt.slice(0, 2).toUpperCase()}
        </div>
        <span className="text-sm font-semibold text-zinc-100 tracking-wide">
          {alt}
        </span>
        <span className="text-[11px] text-accent/80 font-mono mt-1">
          Production Platform
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
};
