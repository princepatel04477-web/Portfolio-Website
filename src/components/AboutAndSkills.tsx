import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PROFILE } from "../data/content";

function Stat({ label, value, suffix = "", delay = 0 }: { label: string; value: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const startTime = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value]);

  return (
    <motion.div
      ref={ref}
      className="glass rounded-sm p-6 relative overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d97757]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.3em] mb-3">
        ◈ {label.toUpperCase()}
      </div>
      <div className="font-display text-5xl md:text-6xl text-[#f4d7c5]">
        {count}
        {suffix}
      </div>
      <div className="font-serif text-sm text-[#d97757] italic mt-1">verified</div>
    </motion.div>
  );
}

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="flex items-start justify-between mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-3">
              CURIOUS MIND
            </div>
            <h2 className="font-display text-4xl md:text-7xl leading-[1.0] text-[#f4d7c5]">
              BUILT WITH MODELS <br />
              <span className="text-[#d97757] italic">DESIGNED FOR PEOPLE</span>
            </h2>
          </div>
          <motion.div
            style={{ y }}
            className="hidden md:block font-mono-ui text-[10px] text-[#808080] text-right tracking-[0.3em] max-w-[200px]"
          >
            NO SHORTCUTS
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass rounded-sm p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a03b2d] via-[#d97757] to-[#f4d7c5]" />
              <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.3em] mb-4">
                ◆ CORE STATEMENT
              </div>
              <p className="font-serif text-xl md:text-2xl text-[#d9d9d9] leading-relaxed italic">
                I create AI experiences that feel simple on the surface and robust underneath — aligning models, data, and UX so users don’t have to think about the complexity behind them.
              </p>
              <p className="font-sans text-[15px] text-[#808080] mt-6 leading-relaxed">
                Based in Surat, India, I specialize in Generative AI and Machine Learning. I turn ideas into reliable production workflows, ensuring high accuracy, low latency, and interfaces that let users interact with complex calculations seamlessly.
              </p>

              <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 font-mono-ui text-[10px] text-[#808080]">
                <span>◈ LOCATION · {PROFILE.location}</span>
                <span>◉ TIMEZONE · UTC+5:30</span>
                <span>◆ FOCUS · GEN AI & ML ENGINEERING</span>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            <Stat label="Years Active" value={PROFILE.yearsExperience} suffix="+" delay={0} />
            <Stat label="AI Missions" value={PROFILE.projectsCompleted} suffix="" delay={0.1} />
            <Stat label="Models Built" value={12} suffix="+" delay={0.2} />
            <Stat label="Pipelines" value={PROFILE.technologies} suffix="" delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 md:py-48 px-6 md:px-16 bg-[#030303]/40 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-8">
            <div className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-3">
              § 03 · ARSENAL
            </div>
            <h2 className="font-display text-4xl md:text-7xl leading-[1.0] text-[#f4d7c5] mb-6">
              Skills & <br />
              <span className="text-[#d97757] italic">Weapons.</span>
            </h2>
            <p className="font-serif text-lg md:text-xl text-[#d9d9d9] italic max-w-2xl leading-relaxed">
              Skills for me are problem-solving frameworks, not just tools. They help me move from raw data and vague ideas to clear systems — one layer at a time.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end gap-4">
            <p className="font-sans text-sm text-[#808080] leading-relaxed">
              Vision is deciding why a system should exist before deciding which model to use. Purpose, constraints, and users guide every technical choice.
            </p>
            <div className="font-mono-ui text-[9px] text-[#d97757] tracking-[0.2em] border border-[#d97757]/30 p-3 rounded-sm text-center bg-[#d97757]/5">
              CURIOUS HOW THIS WEBSITE AND MY MODELS ARE BUILT?
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            className="glass rounded-sm p-6 md:p-8 relative overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d97757]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-mono-ui text-[11px] text-[#d97757] tracking-[0.3em] mb-4">01 · ML ENGINEERING</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Problem framing & experimentation strategy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Feature engineering & model selection</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Training, validation and error analysis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Building and hardening inference pipelines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Monitoring, logging and model iteration</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="glass rounded-sm p-6 md:p-8 relative overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d97757]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-mono-ui text-[11px] text-[#d97757] tracking-[0.3em] mb-4">02 · DATA & ANALYTICS</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Data cleaning and preprocessing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">SQL and NoSQL for analytics (Postgres, MongoDB)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Dashboards with Excel, Power BI, Tableau, Fabric</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Business intelligence and reporting flows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Turning metrics into product decisions</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="glass rounded-sm p-6 md:p-8 relative overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d97757]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-mono-ui text-[11px] text-[#d97757] tracking-[0.3em] mb-4">03 · GEN AI & SYSTEMS</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Large Language Models and prompt design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">RAG and multi-context retrieval pipelines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Computer vision and deep learning models</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">API design and integration (RESTful services)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d97757] mt-1 text-xs">◇</span>
                <span className="font-sans text-sm text-[#d9d9d9] leading-relaxed">Containerization and deployment with Docker</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
