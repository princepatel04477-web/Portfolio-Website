import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShaderBackground } from './components/ui/shaders-hero-section';
import LiveClock from './components/Hero/LiveClock';
import PortraitCard from './components/Hero/PortraitCard';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const parallaxInnerRef = useRef<HTMLDivElement>(null);
  const portraitCardRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const mouseGlowRef = useRef<HTMLDivElement>(null);
  
  const [imagesLoaded] = useState(true);

  // 1. Scroll pinning setup for background container (Desktop only)
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 769px)', () => {
      const pinTrigger = ScrollTrigger.create({
        trigger: '.hero-container',
        start: 'top top',
        end: '+=5150',
        pin: canvasContainerRef.current,
        pinSpacing: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      return () => {
        pinTrigger.kill();
      };
    });

    return () => mm.revert();
  }, []);

  // 2. Entrance Sequence and Mouse Parallax (Local to Hero component)
  useEffect(() => {
    if (!imagesLoaded) return;

    const mm = gsap.matchMedia();

    // Desktop Animations
    mm.add('(min-width: 769px)', () => {
      const loadTl = gsap.timeline({
        defaults: { ease: 'power4.out' }
      });

      // Background reset
      loadTl.to(containerRef.current, {
        backgroundColor: '#050816',
        duration: 0.3
      });

      // Shader background reveals gradually
      loadTl.fromTo(canvasContainerRef.current,
        { opacity: 0, scale: 1.04 },
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' },
        '-=0.1'
      );

      // Portrait Card scales in & fades in
      loadTl.fromTo(portraitCardRef.current,
        { scale: 0.86, opacity: 0, rotationY: 15 },
        { scale: 1, opacity: 1, rotationY: 0, duration: 1.3, ease: 'power3.out' },
        '-=1.2'
      );

      // Left Column slides from left
      loadTl.fromTo(leftColRef.current,
        { x: -120, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.3 },
        '-=1.2'
      );

      // Right Column slides from right
      loadTl.fromTo(rightColRef.current,
        { x: 120, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.3 },
        '-=1.2'
      );

      // Subtitles, Words & Location fade in
      loadTl.fromTo('.hero-subtitle, .hero-word, .hero-location',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out' },
        '-=0.8'
      );

      // Mouse Parallax with Inertia (Ambient Elements drift, Card tilt is handled by CSS)
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      let prevTargetX = -9999;
      let prevTargetY = -9999;
      let isHeroVisible = true;

      // Intersection Observer to monitor Hero section visibility
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isHeroVisible = entry.isIntersecting;
        });
      }, { threshold: 0.05 });

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      };

      window.addEventListener('mousemove', handleMouseMove);

      let animId = 0;
      const tick = () => {
        if (!isHeroVisible) {
          animId = requestAnimationFrame(tick);
          return;
        }

        targetX += (mouseX - targetX) * 0.08;
        targetY += (mouseY - targetY) * 0.08;

        const diffX = Math.abs(targetX - prevTargetX);
        const diffY = Math.abs(targetY - prevTargetY);

        // OPTIMIZATION: Only write to DOM if target has changed significantly, preventing layout thrashing when mouse is stationary
        if (diffX > 0.0005 || diffY > 0.0005) {
          prevTargetX = targetX;
          prevTargetY = targetY;

          if (leftColRef.current && rightColRef.current) {
            gsap.set(leftColRef.current, {
              x: targetX * -12,
              y: targetY * -8
            });
            gsap.set(rightColRef.current, {
              x: targetX * -12,
              y: targetY * -8
            });
          }

          if (canvasContainerRef.current) {
            gsap.set(canvasContainerRef.current, {
              x: targetX * -8,
              y: targetY * -8
            });
          }

          // Drifting radial spotlight behind the card wrapper
          if (mouseGlowRef.current) {
            gsap.set(mouseGlowRef.current, {
              x: targetX * 50,
              y: targetY * 50
            });
          }
        }

        animId = requestAnimationFrame(tick);
      };

      animId = requestAnimationFrame(tick);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animId);
        observer.disconnect();
      };
    });

    // Mobile Animations (Simplified to avoid lag and vertical layout shift)
    mm.add('(max-width: 768px)', () => {
      const loadTl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      // Background reset
      loadTl.to(containerRef.current, {
        backgroundColor: '#050816',
        duration: 0.3
      });

      // Ambient bg fade-in
      loadTl.fromTo(canvasContainerRef.current,
        { opacity: 0, scale: 1.02 },
        { opacity: 1, scale: 1, duration: 1.2 },
        '-=0.1'
      );

      // Portrait Card scale-in (positioned inline on mobile)
      loadTl.fromTo(portraitCardRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 },
        '-=1.0'
      );

      // Left Column slides up
      loadTl.fromTo(leftColRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        '-=1.0'
      );

      // Right Column slides up
      loadTl.fromTo(rightColRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        '-=1.0'
      );

      // Subtitles, Words & Location fade in
      loadTl.fromTo('.hero-subtitle, .hero-word, .hero-location',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out' },
        '-=0.8'
      );
    });

    return () => mm.revert();
  }, [imagesLoaded]);

  const handleCardMouseEnter = () => {
    gsap.fromTo('.portrait-sheen-sweep', 
      { left: '-150%' },
      { left: '150%', duration: 1.1, ease: 'power2.inOut' }
    );
  };

  return (
    <section className="hero-container" ref={containerRef}>

      {/* Shader Background replacing the Canvas */}
      <div className="hero-video-bg" ref={canvasContainerRef}>
        <ShaderBackground>
          <div className="hero-video-overlay" />
          <div className="hero-noise" />
          <div className="hero-spotlight" ref={mouseGlowRef} />
        </ShaderBackground>
      </div>

      {/* Split Typography Columns */}
      <div className="hero-content-wrapper">
        {/* Left Column: Subtitle + PRINCE */}
        <div className="hero-column column-left" ref={leftColRef}>
          <span className="hero-subtitle">AI Engineer & Full Stack Developer</span>
          <span className="hero-word">PRINCE</span>
        </div>
        
        {/* Spacer where portrait floats */}
        <div className="portrait-spacer" />

        {/* Right Column: Subtitle + PATEL + Live Clock */}
        <div className="hero-column column-right" ref={rightColRef}>
          <span className="hero-subtitle">Founder • Varunya Technologies</span>
          <span className="hero-word">PATEL</span>
          <LiveClock />
        </div>
      </div>

      {/* Floating Portrait Card */}
      <PortraitCard 
        cardRef={portraitCardRef} 
        innerRef={parallaxInnerRef} 
        onMouseEnterSheen={handleCardMouseEnter} 
      />
    </section>
  );
};

export default Hero;
