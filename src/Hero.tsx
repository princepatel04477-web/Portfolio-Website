import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Mail } from 'lucide-react';
import { ShaderBackground } from './components/ui/shaders-hero-section';
import LiveClock from './components/Hero/LiveClock';
import PortraitCard from './components/Hero/PortraitCard';
import { projects } from './data/projects';

gsap.registerPlugin(ScrollTrigger);

const ROLES = [
  "an AI Engineer",
  "a Full-Stack Developer",
  "Founder, Varunya Technologies"
];

function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: number;

    if (!isDeleting && displayedText === currentRole) {
      // Pause at end of word
      timer = window.setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      // Switch to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      const speed = isDeleting ? 30 : 65;
      timer = window.setTimeout(() => {
        setDisplayedText(
          currentRole.substring(
            0,
            displayedText.length + (isDeleting ? -1 : 1)
          )
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <span className="typewriter-text font-mono inline-flex items-center">
      <span>{displayedText}</span>
      <span className="typewriter-cursor inline-block w-[2px] h-[1em] bg-accent ml-1 animate-pulse" />
    </span>
  );
}

interface HeroProps {
  onExploreWork?: () => void;
  onContactClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
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
      loadTl.fromTo('.hero-subtitle, .hero-word, .hero-location, .hero-badge-container',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.08, ease: 'power3.out' },
        '-=0.8'
      );

      // Mouse Parallax with Inertia
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;
      let prevTargetX = -9999;
      let prevTargetY = -9999;
      let isHeroVisible = true;

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

    // Mobile Animations
    mm.add('(max-width: 768px)', () => {
      const loadTl = gsap.timeline({
        defaults: { ease: 'power3.out' }
      });

      loadTl.to(containerRef.current, {
        backgroundColor: '#050816',
        duration: 0.3
      });

      loadTl.fromTo(canvasContainerRef.current,
        { opacity: 0, scale: 1.02 },
        { opacity: 1, scale: 1, duration: 1.2 },
        '-=0.1'
      );

      loadTl.fromTo(portraitCardRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 },
        '-=1.0'
      );

      loadTl.fromTo(leftColRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        '-=1.0'
      );

      loadTl.fromTo(rightColRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        '-=1.0'
      );

      loadTl.fromTo('.hero-subtitle, .hero-word, .hero-location, .hero-badge-container',
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

  const projectCount = projects.length;

  return (
    <section className="hero-container relative" ref={containerRef}>
      {/* Shader Background */}
      <div className="hero-video-bg" ref={canvasContainerRef}>
        <ShaderBackground>
          <div className="hero-video-overlay" />
          <div className="hero-noise" />
          <div className="hero-spotlight" ref={mouseGlowRef} />
        </ShaderBackground>
      </div>

      {/* Hero Availability Badge - Placed above headline, preventing nav collision */}
      <div className="hero-badge-container site-container absolute top-6 sm:top-10 left-0 right-0 z-10 flex justify-center pointer-events-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-black/40 px-4 py-1.5 backdrop-blur-md shadow-lg shadow-black/40">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium text-accent tracking-wide">
            Available for Q1–Q2 Engineering &amp; Client Projects
          </span>
        </div>
      </div>

      {/* Split Typography Columns */}
      <div className="hero-content-wrapper site-container">
        {/* Left Column: Role Typewriter + PRINCE + CTA Buttons */}
        <div className="hero-column column-left" ref={leftColRef}>
          <div className="hero-subtitle">
            <TypewriterRole />
          </div>
          <span className="hero-word">PRINCE</span>

          {/* Action Buttons: View My Work next to Get in Touch */}
          <div className="hero-cta-buttons mt-4 flex items-center gap-3 pointer-events-auto">
            <button
              onClick={onExploreWork}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-zinc-950 transition-all duration-300 hover:bg-[#d8be96] hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
              style={{ opacity: 1, visibility: 'visible' }}
            >
              <span>View My Work</span>
              <ArrowDown size={14} />
            </button>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30 cursor-pointer"
              style={{ opacity: 1, visibility: 'visible' }}
            >
              <Mail size={14} className="text-zinc-400" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
        
        {/* Spacer where portrait floats */}
        <div className="portrait-spacer" />

        {/* Right Column: Subtitle + PATEL + Clean Live Clock */}
        <div className="hero-column column-right" ref={rightColRef}>
          <span className="hero-subtitle">Founder • Varunya Technologies</span>
          <span className="hero-word">PATEL</span>
          <div className="hero-location mt-4 pointer-events-auto">
            <LiveClock />
          </div>
        </div>
      </div>

      {/* Floating Portrait Card */}
      <PortraitCard 
        cardRef={portraitCardRef} 
        innerRef={parallaxInnerRef} 
        onMouseEnterSheen={handleCardMouseEnter} 
      />

      {/* Static 4-item Stats Strip directly below Hero with NO empty vertical gap */}
      <div className="hero-stats-strip-container site-container absolute bottom-4 sm:bottom-6 left-0 right-0 z-10 pointer-events-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-3 px-4 sm:px-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
              {projectCount}+
            </span>
            <span className="text-[11px] text-zinc-400 font-medium">Projects Built</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
              10+
            </span>
            <span className="text-[11px] text-zinc-400 font-medium">Live Websites</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
              8
            </span>
            <span className="text-[11px] text-zinc-400 font-medium">Industries</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold font-mono text-accent tracking-tight">
              Founder
            </span>
            <span className="text-[11px] text-zinc-400 font-medium">Varunya Technologies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
