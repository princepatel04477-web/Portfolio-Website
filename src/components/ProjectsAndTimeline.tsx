import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { PROJECTS, TIMELINE, EXPERIENCE } from "../data/content";

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    if (open) {
      (window as any).lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      (window as any).lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      (window as any).lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleMove(e: React.MouseEvent) {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  }
  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={() => setOpen(true)}
        className="project-card glass rounded-sm p-6 md:p-8 relative overflow-hidden cursor-none group"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Cinematic thumbnail */}
        <div className="relative aspect-[16/10] mb-6 overflow-hidden rounded-sm">
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
            style={{
              background: `radial-gradient(circle at 30% 40%, ${project.accent}66 0%, #050505 70%), linear-gradient(135deg, #101010, #050505)`,
            }}
          />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-display text-6xl md:text-8xl text-white/10 group-hover:text-white/20 transition-colors">
              {project.id}
            </div>
          </div>
          <div
            className="absolute top-3 left-3 font-mono-ui text-[9px] tracking-[0.2em] px-2 py-1 border"
            style={{ color: project.accent, borderColor: `${project.accent}80` }}
          >
            {project.rarity}
          </div>
          <div className="absolute bottom-3 right-3 font-mono-ui text-[9px] text-[#808080]">
            {project.year}
          </div>
          {/* Hover glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.accent}33 0%, transparent 60%)`,
            }}
          />
        </div>

        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.2em] mb-1">
              {project.category.toUpperCase()}
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-[#f4d7c5]">
              {project.title}
            </h3>
          </div>
          <div className="font-display text-4xl text-[#d97757]/30 group-hover:text-[#d97757] transition-colors">
            →
          </div>
        </div>

        <p className="font-sans text-sm text-[#808080] line-clamp-2 mb-4">
          {project.challenge}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="font-mono-ui text-[9px] px-2 py-1 bg-white/5 text-[#d9d9d9]"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.div>

      {open && createPortal(
        <motion.div
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl overflow-y-auto"
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <div className="min-h-screen p-6 md:p-16 max-w-[1200px] mx-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              className="fixed top-6 right-6 font-mono-ui text-[11px] text-[#d97757] tracking-[0.3em] hover:text-[#f4d7c5] z-[210]"
            >
              ✕ CLOSE DOSSIER
            </button>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.3em] mb-4">
                ◆ MISSION DOSSIER · {project.id}
              </div>
              <h2 className="font-display text-6xl md:text-9xl text-[#f4d7c5] mb-2">
                {project.title}
              </h2>
              <div className="font-serif text-xl text-[#d97757] italic mb-12">
                {project.category} · {project.year}
              </div>

              <div className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7 space-y-8">
                  <div className="glass rounded-sm p-8">
                    <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.3em] mb-3">◈ CHALLENGE</div>
                    <p className="font-serif text-lg text-[#d9d9d9] italic leading-relaxed">{project.challenge}</p>
                  </div>
                  <div className="glass rounded-sm p-8">
                    <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.3em] mb-3">◆ SOLUTION</div>
                    <p className="font-serif text-lg text-[#d9d9d9] italic leading-relaxed">{project.solution}</p>
                  </div>
                  <div className="glass rounded-sm p-8 border-l-4" style={{ borderLeftColor: project.accent }}>
                    <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.3em] mb-3">◉ IMPACT</div>
                    <p className="font-serif text-lg text-[#f4d7c5] italic leading-relaxed">{project.impact}</p>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-6">
                  <div className="glass rounded-sm p-6">
                    <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.3em] mb-4">INTEL</div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-[#808080]">CLIENT</span>
                        <span className="text-[#d9d9d9]">{project.client}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-[#808080]">ROLE</span>
                        <span className="text-[#d9d9d9]">{project.role}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-[#808080]">DURATION</span>
                        <span className="text-[#d9d9d9]">{project.duration}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-[#808080]">RARITY</span>
                        <span style={{ color: project.accent }}>{project.rarity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-sm p-6">
                    <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.3em] mb-4">STACK</div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono-ui text-[10px] px-3 py-1.5 border border-white/10 text-[#d9d9d9]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>,
        document.body
      )}
    </>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("ALL");
  const filters = ["ALL", "Gen AI & Systems", "ML Engineering", "Data & Analytics"];
  const filtered = filter === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <div className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-3">
              § 03 · MISSIONS
            </div>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
              <span className="block text-[#f4d7c5]">Classified</span>
              <span className="block italic text-[#d97757]">Dossiers.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono-ui text-[10px] tracking-[0.2em] px-4 py-2 border transition-all ${
                  filter === f
                    ? "bg-[#d97757] text-[#050505] border-[#d97757]"
                    : "border-white/10 text-[#808080] hover:border-[#d97757]/50 hover:text-[#d9d9d9]"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section id="timeline" ref={ref} className="relative py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-20 md:mb-28">
          <div className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-3">
            § 04 · EVOLUTION
          </div>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
            <span className="block text-[#f4d7c5]">The</span>
            <span className="block italic text-[#d97757]">Journey.</span>
          </h2>
        </div>

        <div className="relative">
          <motion.div
            className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-px bg-white/5"
            style={{ scaleY: lineProgress, transformOrigin: "top" }}
          />

          <div className="space-y-20 md:space-y-28">
            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={`md:col-span-1 ${isLeft ? "md:text-right md:pr-16" : "md:order-2 md:pl-16"} pl-[80px] md:pl-0`}>
                    <div className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-2">
                      ◆ {item.era}
                    </div>
                    <div className="font-display text-5xl md:text-7xl text-[#f4d7c5] mb-4">
                      {item.year}
                    </div>
                    <h3 className="font-serif text-2xl text-[#f4d7c5] italic mb-3">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[15px] text-[#808080] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="hidden md:block" />

                  <div className="absolute left-[30px] md:left-1/2 top-2 w-3 h-3 rounded-full bg-[#d97757] -translate-x-1/2 pulse-glow" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-20 md:mb-28">
          <div className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-3">
            § 05 · BATTLE RECORD
          </div>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
            <span className="block text-[#f4d7c5]">Service</span>
            <span className="block italic text-[#d97757]">History.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="glass rounded-sm p-8 md:p-12 relative overflow-hidden group"
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#d97757]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative grid md:grid-cols-12 gap-6">
                <div className="md:col-span-4">
                  <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.2em] mb-2">
                    ◈ {exp.period}
                  </div>
                  <div className="font-mono-ui text-[10px] text-[#808080] mb-4">
                    ◉ {exp.location}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-[#f4d7c5] mb-2">
                    {exp.company}
                  </h3>
                  <div className="font-serif text-lg text-[#d97757] italic">
                    {exp.role}
                  </div>
                </div>

                <div className="md:col-span-8 space-y-3">
                  <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.3em] mb-3">
                    ◆ ACHIEVEMENTS
                  </div>
                  {exp.achievements.map((a, j) => (
                    <div key={j} className="flex gap-3 text-[15px] text-[#d9d9d9]">
                      <span className="text-[#d97757]">◇</span>
                      <span>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
