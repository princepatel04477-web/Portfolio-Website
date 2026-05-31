import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PROFILE } from "../data/content";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100vh] w-full overflow-hidden flex items-end md:items-center"
    >
      {/* Background ink / image composition */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(217,119,87,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(160,59,45,0.2) 0%, transparent 60%)",
          }}
        />
        {/* Massive character render */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative w-full max-w-[900px] aspect-[3/4]"
            style={{
              WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 35%, transparent 70%)",
              maskImage: "radial-gradient(ellipse at 50% 50%, black 35%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 50%, #d97757 0%, #a03b2d 30%, #050505 70%)",
                filter: "blur(80px)",
                opacity: 0.4,
              }}
            />
            {/* Central character render */}
            <motion.img
              src="/images/hero-character.jpg"
              alt="Cinematic warrior character"
              className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-70"
              style={{
                filter: "contrast(1.2) brightness(0.8) drop-shadow(0 0 40px rgba(217,119,87,0.5))",
              }}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.75, scale: 1 }}
              transition={{ duration: 2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Ember overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, transparent 0%, #050505 80%)",
              }}
            />
          </motion.div>
        </div>

      </motion.div>

      {/* Foreground text */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full px-6 md:px-16 pb-20 md:pb-24"
      >
        <motion.div
          className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          ◆ CHARACTER DOSSIER · 001 / 001
        </motion.div>

        <h1 className="font-display text-[8vw] md:text-[5.5vw] leading-[0.95] tracking-tight">
          <motion.span
            className="block text-[#f4d7c5] overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="inline-block">I BUILD INTELLIGENT AI SYSTEMS</span>
          </motion.span>
          <motion.span
            className="block text-[#d97757] italic overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <span className="inline-block">THAT SHIP</span>
          </motion.span>
        </h1>

        <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.p
            className="font-serif text-lg md:text-xl text-[#d9d9d9] max-w-2xl italic leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            className="font-mono-ui text-[10px] text-[#808080] space-y-1 min-w-[200px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div>◆ {PROFILE.hero.role.toUpperCase()}</div>
            <div>◈ {PROFILE.location}</div>
            <div>◉ {PROFILE.availability}</div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <div className="glass rounded-sm p-4 relative group">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d97757]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-mono-ui text-[9px] text-[#d97757] tracking-[0.2em] mb-1">GEN AI & ML ENGINEER</div>
            <div className="text-[13px] text-[#d9d9d9]">Building practical AI systems for real products.</div>
          </div>
          <div className="glass rounded-sm p-4 relative group">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d97757]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-mono-ui text-[9px] text-[#d97757] tracking-[0.2em] mb-1">HANDS-ON WITH LLMS</div>
            <div className="text-[13px] text-[#d9d9d9]">RAG, multi-context models, and prompt-driven apps.</div>
          </div>
          <div className="glass rounded-sm p-4 relative group">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d97757]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-mono-ui text-[9px] text-[#d97757] tracking-[0.2em] mb-1">DATA TO DECISIONS</div>
            <div className="text-[13px] text-[#d9d9d9]">From raw data to dashboards and AI-powered insights.</div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <a
            href="#projects"
            className="magnetic group relative px-8 py-4 bg-[#d97757] text-[#050505] font-mono-ui text-[11px] tracking-[0.2em] hover:bg-[#f4d7c5] transition-colors"
            data-hover
          >
            VIEW MISSIONS
            <span className="absolute -bottom-2 left-8 right-8 h-px bg-[#d97757] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
          <a
            href="#contact"
            className="magnetic px-8 py-4 border border-[#d97757]/40 text-[#f4d7c5] font-mono-ui text-[11px] tracking-[0.2em] hover:border-[#d97757] hover:bg-[#d97757]/10 transition-all"
            data-hover
          >
            INITIATE CONTACT
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <div className="font-mono-ui text-[9px] text-[#808080] tracking-[0.3em]">SCROLL</div>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#d97757] to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

    </section>
  );
}
