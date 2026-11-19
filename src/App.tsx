import { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AllProjects } from './components/AllProjects';
import { TechStack } from './components/TechStack';
import { AboutExperience } from './components/AboutExperience';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ui/ProjectModal';
import CustomCursor from './CustomCursor';

import { projects, type Project } from './data/projects';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const globalParticlesRef = useRef<HTMLCanvasElement>(null);
  const currentAccentRef = useRef('197, 168, 128'); // Champagne gold

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.1,
      infinite: false,
    });

    setLenis(lenisInstance);

    const updateTicker = (time: number) => {
      lenisInstance.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    lenisInstance.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Active Section Observer
    const sectionIds = ['home', 'featured', 'projects', 'stack', 'about', 'reviews', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      lenisInstance.destroy();
      gsap.ticker.remove(updateTicker);
      observer.disconnect();
    };
  }, []);

  // Ambient Canvas Particles
  useEffect(() => {
    const canvas = globalParticlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.6 + 0.5,
        speedY: -(Math.random() * 0.2 + 0.05),
        speedX: (Math.random() - 0.5) * 0.08,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const draw = () => {
      if (document.hidden) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const accent = currentAccentRef.current;

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0 || p.x > canvas.width) {
          p.speedX = -p.speedX;
        }

        ctx.fillStyle = `rgba(${accent}, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    if (lenis) {
      lenis.scrollTo(target, {
        offset: -40,
        duration: 1.2,
      });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app relative min-h-screen bg-[#08080c] text-zinc-100 selection:bg-accent selection:text-zinc-950 font-sans">
      {/* Custom Desktop Cursor */}
      <CustomCursor />

      {/* Global Ambient Glow & Canvas Particles */}
      <div className="ambient-bg-layer" />
      <div className="global-noise" />
      <canvas ref={globalParticlesRef} className="global-particles-canvas" />

      {/* Dynamic Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col items-center w-full">
        {/* 1. Hero Section */}
        <HeroSection
          onExploreWork={() => scrollToSection('featured')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. Featured Projects (Hero of the site) */}
        <FeaturedProjects
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
          onViewAllClick={() => scrollToSection('projects')}
        />

        {/* 3. All Projects (Archive, Filters, Live Search) */}
        <AllProjects
          projects={projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 4. Tech Stack (Categorized & LogoLoop) */}
        <TechStack />

        {/* 5. About & Experience & Certifications */}
        <AboutExperience />

        {/* 6. Testimonials */}
        <Testimonials />

        {/* 7. Contact Section */}
        <ContactSection />
      </main>

      {/* 8. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Project Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
