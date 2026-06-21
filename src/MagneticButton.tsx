import { useRef, useEffect } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  range?: number;
  strength?: number;
  className?: string;
}

const MagneticButton = ({ 
  children, 
  range = 45, 
  strength = 0.35, 
  className = "", 
  ...props 
}: MagneticButtonProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.hypot(dx, dy);

      // If mouse is within the active magnetic radius range
      if (distance < range) {
        gsap.to(element, {
          x: dx * strength,
          y: dy * strength,
          scale: 1.05,
          duration: 0.45,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      } else {
        // Smoothly ease back if it exits range
        gsap.to(element, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'elastic.out(1.1, 0.4)',
          overwrite: 'auto'
        });
      }
    };

    const handleMouseLeave = () => {
      // Elastic spring back on mouse leave
      gsap.to(element, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: 'elastic.out(1.1, 0.4)',
        overwrite: 'auto'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [range, strength]);

  return (
    <div 
      ref={wrapperRef} 
      className={`magnetic-container ${className}`} 
      style={{ display: 'inline-block', willChange: 'transform' }} 
      {...props}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
