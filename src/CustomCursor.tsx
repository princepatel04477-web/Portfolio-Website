import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device is touch-based; if so, do not initialize custom cursor
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);
    if (isTouchDevice) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

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

    // Hover triggers for links/buttons
    const handleMouseEnterLink = () => {
      gsap.to(ring, {
        scale: 1.6,
        backgroundColor: 'rgba(227, 112, 0, 0.06)',
        borderColor: 'rgba(227, 112, 0, 0.35)',
        duration: 0.3,
        overwrite: 'auto'
      });
      gsap.to(dot, {
        scale: 0.5,
        backgroundColor: '#e37000',
        duration: 0.3,
        overwrite: 'auto'
      });
    };

    const handleMouseLeaveLink = () => {
      gsap.to(ring, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: 'rgba(28, 28, 26, 0.2)',
        duration: 0.3,
        overwrite: 'auto'
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: '#e37000',
        duration: 0.3,
        overwrite: 'auto'
      });
    };

    // Attach listeners to interactive elements
    const updateListeners = () => {
      const links = document.querySelectorAll('a, button, .portrait-card, .stack-card-luxury, .portfolio-card-luxury, .testimonial-card-luxury, .nav-home-btn');
      links.forEach((link) => {
        link.addEventListener('mouseenter', handleMouseEnterLink);
        link.addEventListener('mouseleave', handleMouseLeaveLink);
      });
    };

    // Run on mount
    updateListeners();

    // Re-attach listeners periodically to capture dynamically rendered elements
    const interval = setInterval(updateListeners, 1500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      clearInterval(interval);
      
      const links = document.querySelectorAll('a, button, .portrait-card, .stack-card-luxury, .portfolio-card-luxury, .testimonial-card-luxury, .nav-home-btn');
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);

  if (isTouch) return null;

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
          backgroundColor: '#e37000',
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
