import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable custom cursor if it's NOT a touch-only device (i.e. it has a fine pointer like a mouse/trackpad)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isTouchDevice = ('ontouchstart' in window || navigator.maxTouchPoints > 0) && !hasFinePointer;
    
    if (isTouchDevice) {
      return;
    }

    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    // Add active class to body so CSS hides the default cursor
    document.body.classList.add('custom-cursor-active');

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Instantly position the small center dot
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render loop for smooth lag tracking
    let animId = 0;
    const tick = () => {
      // Ring follows the mouse with linear interpolation (lerp) for soft delay weight
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      
      gsap.set(ring, { x: ringX, y: ringY });
      
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    // Event delegation on document.body for dynamic hover detection (no polling loops or leaks)
    let activeHoveredElement: Element | null = null;

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, .portrait-card, .stack-card-luxury, .portfolio-card-luxury, .testimonial-card-luxury, .nav-home-btn');
      if (interactive && interactive !== activeHoveredElement) {
        activeHoveredElement = interactive;
        gsap.to(ring, {
          scale: 1.6,
          backgroundColor: 'rgba(197, 168, 128, 0.06)',
          borderColor: 'rgba(197, 168, 128, 0.35)',
          duration: 0.3,
          overwrite: 'auto'
        });
        gsap.to(dot, {
          scale: 0.5,
          backgroundColor: '#C5A880',
          duration: 0.3,
          overwrite: 'auto'
        });
      }
    };

    const handlePointerOut = (e: PointerEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement | null;
      const currentInteractive = relatedTarget ? relatedTarget.closest('a, button, .portrait-card, .stack-card-luxury, .portfolio-card-luxury, .testimonial-card-luxury, .nav-home-btn') : null;

      if (activeHoveredElement && activeHoveredElement !== currentInteractive) {
        activeHoveredElement = null;
        gsap.to(ring, {
          scale: 1,
          backgroundColor: 'transparent',
          borderColor: 'rgba(28, 28, 26, 0.18)',
          duration: 0.3,
          overwrite: 'auto'
        });
        gsap.to(dot, {
          scale: 1,
          backgroundColor: '#C5A880',
          duration: 0.3,
          overwrite: 'auto'
        });
      }
    };

    document.body.addEventListener('pointerover', handlePointerOver);
    document.body.addEventListener('pointerout', handlePointerOut);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      document.body.removeEventListener('pointerover', handlePointerOver);
      document.body.removeEventListener('pointerout', handlePointerOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div 
        ref={cursorDotRef} 
        className="cursor-dot" 
        style={{
          position: 'fixed',
          top: -4,
          left: -4,
          width: '8px',
          height: '8px',
          backgroundColor: '#C5A880',
          borderRadius: '50%',
          zIndex: 9999,
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />
      <div 
        ref={cursorRingRef} 
        className="cursor-ring" 
        style={{
          position: 'fixed',
          top: -20,
          left: -20,
          width: '40px',
          height: '40px',
          border: '1.5px solid rgba(28, 28, 26, 0.18)',
          borderRadius: '50%',
          zIndex: 9998,
          pointerEvents: 'none',
          willChange: 'transform',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;
