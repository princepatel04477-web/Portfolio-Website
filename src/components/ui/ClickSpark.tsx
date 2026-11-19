import React, { useRef } from 'react';

interface ClickSparkProps {
  children: React.ReactNode;
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  className?: string;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
  children,
  sparkColor = '#C5A880',
  sparkSize = 10,
  sparkRadius = 25,
  sparkCount = 8,
  duration = 400,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement('div');
      const angle = (i * 2 * Math.PI) / sparkCount;
      const vx = Math.cos(angle) * sparkRadius;
      const vy = Math.sin(angle) * sparkRadius;

      spark.style.position = 'absolute';
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.width = `${sparkSize}px`;
      spark.style.height = '2px';
      spark.style.backgroundColor = sparkColor;
      spark.style.borderRadius = '2px';
      spark.style.pointerEvents = 'none';
      spark.style.zIndex = '9999';
      spark.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
      spark.style.transition = `all ${duration}ms cubic-bezier(0.25, 1, 0.5, 1)`;
      spark.style.opacity = '1';

      container.appendChild(spark);

      requestAnimationFrame(() => {
        spark.style.transform = `translate(calc(-50% + ${vx}px), calc(-50% + ${vy}px)) rotate(${angle}rad) scale(0)`;
        spark.style.opacity = '0';
      });

      setTimeout(() => {
        spark.remove();
      }, duration);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className={`relative inline-block overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};
