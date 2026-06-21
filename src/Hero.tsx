import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import princeImage from './assets/Prince.png';
import { ShaderBackground } from './components/ui/shaders-hero-section';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const portraitWrapperRef = useRef<HTMLDivElement>(null);
  const parallaxInnerRef = useRef<HTMLDivElement>(null);
  const portraitCardRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const mouseGlowRef = useRef<HTMLDivElement>(null);
  
  const [currentTime, setCurrentTime] = useState('');
  const [imagesLoaded] = useState(true);

  // 1. Dynamic Live Clock for Surat, India (GMT+5:30)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      try {
        const timeString = new Date().toLocaleTimeString('en-US', options);
        setCurrentTime(`${timeString} GMT+5:30`);
      } catch (e) {
        const now = new Date();
        const hrs = String(now.getUTCHours() + 5).padStart(2, '0');
        const mins = String(now.getUTCMinutes() + 30).padStart(2, '0');
        setCurrentTime(`${hrs}:${mins} GMT+5:30`);
      }
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // 2. Scroll pinning setup for background container
  useEffect(() => {
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
  }, []);

  // 3. Entrance Sequence and Mouse Parallax (Local to Hero component)
  useEffect(() => {
    if (!imagesLoaded) return;

    const ctx = gsap.context(() => {
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

      // Soft continuous floating animation for portrait card
      gsap.to(portraitCardRef.current, {
        y: '10px',
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.2
      });

      // Mouse Parallax with Inertia (Tilt + Translation)
      let mouseX = 0;
      let mouseY = 0;
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      };

      window.addEventListener('mousemove', handleMouseMove);

      let animId = 0;
      const tick = () => {
        targetX += (mouseX - targetX) * 0.08;
        targetY += (mouseY - targetY) * 0.08;

        if (parallaxInnerRef.current) {
          gsap.set(parallaxInnerRef.current, {
            rotationY: targetX * 14,
            rotationX: -targetY * 14,
            x: targetX * 20,
            y: targetY * 20
          });
        }

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

        animId = requestAnimationFrame(tick);
      };

      animId = requestAnimationFrame(tick);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animId);
      };
    }, containerRef);

    return () => ctx.revert();
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
          <span className="hero-location">Surat, India — {currentTime}</span>
        </div>
      </div>

      {/* Floating Portrait Card */}
      <div className="portrait-card-wrapper" ref={portraitWrapperRef}>
        <div className="parallax-inner" ref={parallaxInnerRef}>
          {/* Orbiting Tech Rings */}
          <div className="orbiting-ring" />
          <div className="orbiting-ring-two" />
          
          <div 
            className="portrait-card" 
            ref={portraitCardRef}
            onMouseEnter={handleCardMouseEnter}
          >
            {/* Card Front Face */}
            <div className="scroll-card-face scroll-card-front">
              <div className="portrait-glass-reflection" />
              <div className="portrait-sheen-sweep" />
              <div className="portrait-card-glow" />
              <img 
                src={princeImage} 
                alt="Prince Patel Portrait" 
                className="portrait-image"
              />
            </div>
            
            {/* Card Back Face */}
            <div className="scroll-card-face scroll-card-back">
              <div className="dark-card-overlay">
                <span className="overlay-name">Prince Patel</span>
                <span className="overlay-role">AI Engineer &amp; CTO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
