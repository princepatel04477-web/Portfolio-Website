import { useEffect, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "./hooks/useLenis";
import { useStore } from "./store/appStore";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import Nav from "./components/Nav";
import Scene3D from "./components/Scene3D";
import Hero from "./components/Hero";
import { AboutSection, SkillsSection } from "./components/AboutAndSkills";
import {
  ProjectsSection,
  TimelineSection,
  ExperienceSection,
} from "./components/ProjectsAndTimeline";
import { ServicesSection, VisionSection } from "./components/ServicesAndVision";
import {
  ProcessSection,
  TestimonialsSection,
  FaqSection,
  ContactSection,
  Footer,
} from "./components/ProcessTestimonialsContact";

function MarqueeDivider({ text = "GEN AI · MACHINE LEARNING · DEEP LEARNING · RAG · LLMs · BI · " }) {
  return (
    <div className="relative overflow-hidden py-6 border-y border-white/5">
      <div className="marquee-track whitespace-nowrap font-display text-4xl md:text-6xl text-[#d97757]/20">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="relative h-32 md:h-48 pointer-events-none">
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M 0 100 Q 150 50 300 90 T 600 100 T 900 80 T 1200 100 L 1200 200 L 0 200 Z"
          fill="url(#ink-blend)"
        />
        <defs>
          <linearGradient id="ink-blend" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#050505" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function App() {
  useLenis();
  const { setLoaded, setMouse, setActiveSection } = useStore();
  const [ready, setReady] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
    setTimeout(() => setReady(true), 100);
  }, [setLoaded]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse(e.clientX / window.innerWidth, e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouse);

    // Section observer
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => obs.observe(s));

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      obs.disconnect();
    };
  }, [setMouse, setActiveSection]);

  return (
    <div className="relative bg-[#050505] text-white min-h-screen">
      {/* Ambient overlays */}
      <div className="noise" />
      <div className="fixed inset-0 pointer-events-none z-[1] vignette" />

      {/* Persistent 3D background */}
      <Scene3D />

      {/* Custom cursor */}
      <Cursor />

      {/* Loader */}
      <AnimatePresence>
        {!ready && <Loader onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {/* Navigation */}
      <Nav />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />

        <MarqueeDivider />

        <AboutSection />

        <SectionDivider />

        <SkillsSection />

        <MarqueeDivider text="PYTHON · PYTORCH · SCIKIT-LEARN · PANDAS · SQL · FASTAPI · DOCKER · " />

        <ServicesSection />

        <ProjectsSection />

        <SectionDivider />

        <TimelineSection />

        <ExperienceSection />

        <MarqueeDivider text="FOUNDATION · CLEAN CODE · EXPERIENCES · DATA · EVALS · DELIVERY · " />

        <VisionSection />

        <ProcessSection />

        <TestimonialsSection />

        <FaqSection />

        <ContactSection />

        <Footer />
      </main>

      {/* Side meta info */}
      <div className="fixed left-6 bottom-6 z-50 hidden md:flex flex-col gap-1 font-mono-ui text-[9px] text-[#808080] mix-blend-difference">
        <div>◆ SYS.ONLINE</div>
        <div>◈ V 2.6.0</div>
      </div>

      <div className="fixed right-6 bottom-6 z-50 hidden md:flex flex-col gap-1 font-mono-ui text-[9px] text-[#808080] text-right mix-blend-difference">
        <div>SCROLL DEPTH · {useStore((s) => Math.round(s.mouseY * 100))}%</div>
        <div>◉ {new Date().getFullYear()}</div>
      </div>
    </div>
  );
}
