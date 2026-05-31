import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { PROCESS, TESTIMONIALS, HEROIC_LINES, FAQS, PROFILE } from "../data/content";

function useISTTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const date = new Date();
      const str = date.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(str + " (IST)");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);
  return time;
}

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pathLength = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  return (
    <section id="process" ref={ref} className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 md:mb-28">
          <div className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-3">
            § 07 · STRATEGY
          </div>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
            <span className="block text-[#f4d7c5]">Tactical</span>
            <span className="block italic text-[#d97757]">Strategy.</span>
          </h2>
        </div>

        <div className="relative">
          {/* SVG flow line */}
          <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 hidden md:block overflow-visible">
            <motion.path
              d="M 50 60 Q 300 20 600 60 T 1200 60"
              stroke="#d97757"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
              style={{ pathLength }}
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 relative">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
              >
                <motion.div
                  className="glass rounded-sm p-6 md:p-8 relative group h-full flex flex-col"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a03b2d] to-[#d97757] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <div className="font-display text-5xl text-[#d97757]/30 group-hover:text-[#d97757] transition-colors mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-display text-xl text-[#f4d7c5] mb-3 tracking-wider">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-[#808080] leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>

                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-[#d97757] text-xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-16 bg-[#030303]/20 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 md:mb-28">
          <div className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-3">
            § 08 · TRANSMISSIONS
          </div>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
            <span className="block text-[#f4d7c5]">Voices</span>
            <span className="block italic text-[#d97757]">From the Field.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass rounded-sm p-8 relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-display text-5xl text-[#d97757]/30 mb-4">"</div>
              <p className="font-serif text-lg text-[#d9d9d9] italic leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="pt-4 border-t border-white/5">
                <div className="font-display text-lg text-[#f4d7c5]">{t.name}</div>
                <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.2em]">
                  {t.role.toUpperCase()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 md:py-48 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-20 text-center">
          <div className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-3">
            § 09 · DEBRIEFING
          </div>
          <h2 className="font-display text-4xl md:text-7xl text-[#f4d7c5]">
            Frequently Asked <span className="text-[#d97757] italic">Questions.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-white/10 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-4 flex items-center justify-between group"
              >
                <span className="font-display text-lg md:text-xl text-[#f4d7c5] group-hover:text-[#d97757] transition-colors">
                  {faq.q}
                </span>
                <span className="font-mono-ui text-[#d97757] text-lg font-bold ml-4">
                  {openIndex === i ? "—" : "+"}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-sans text-sm text-[#808080] leading-relaxed pb-4 pt-2">
                  {faq.a}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const [hovered, setHovered] = useState(false);
  const istTime = useISTTime();

  return (
    <section id="contact" className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(217,119,87,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto text-center">
        <motion.div
          className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          § 10 · FINAL TRANSMISSION
        </motion.div>

        <motion.h2
          className="font-display text-[7vw] md:text-[5.5vw] leading-[1.0] tracking-tight mb-8 max-w-5xl mx-auto text-[#f4d7c5]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          READY TO BUILD SOMETHING WITH AI <br />
          <span className="text-[#d97757] italic">THAT ACTUALLY WORKS?</span>
        </motion.h2>

        <motion.p
          className="font-serif text-lg text-[#d9d9d9] max-w-3xl mx-auto italic mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Clear problem framing, solid engineering, and grounded experimentation — all working together in one pipeline. If you want AI that is reliable in production, not just impressive in a demo, let’s talk.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <span className="flex items-center gap-2 font-mono-ui text-[10px] text-[#d97757] border border-[#d97757]/30 px-3 py-1.5 rounded-full bg-[#d97757]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d97757] animate-ping" />
            {PROFILE.availability}
          </span>
          <span className="flex items-center gap-2 font-mono-ui text-[10px] text-[#808080] border border-white/10 px-3 py-1.5 rounded-full bg-white/5">
            ◈ Response time: {PROFILE.responseTime}
          </span>
        </div>

        <motion.a
          href={`mailto:${PROFILE.email}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="magnetic inline-block relative px-12 py-6 bg-[#d97757] text-[#050505] font-display text-2xl md:text-3xl overflow-hidden group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          data-hover
        >
          <span className="relative z-10">LET'S TALK</span>
          <motion.div
            className="absolute inset-0 bg-[#f4d7c5]"
            initial={{ y: "100%" }}
            animate={{ y: hovered ? 0 : "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.a>

        {/* Contact Info Card Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 text-left max-w-[1100px] mx-auto">
          {/* Left card: Dossier info */}
          <div className="md:col-span-6 glass rounded-sm p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d97757]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.3em] mb-6">◈ DOSSIER PROFILE</div>
            
            <h3 className="font-display text-2xl text-[#f4d7c5] mb-1">Prince Patel</h3>
            <div className="font-serif text-sm text-[#d97757] italic mb-6">Gen AI / ML Engineer</div>
            
            <div className="space-y-4 text-sm">
              <div className="flex flex-col border-b border-white/5 pb-3">
                <span className="text-[#808080] font-mono-ui text-[9px] tracking-[0.15em] mb-1">BASED IN</span>
                <span className="text-[#d9d9d9]">Surat, Gujarat, India</span>
              </div>
              <div className="flex flex-col border-b border-white/5 pb-3">
                <span className="text-[#808080] font-mono-ui text-[9px] tracking-[0.15em] mb-1">LOCAL TIME</span>
                <span className="text-[#f4d7c5] font-mono-ui">{istTime}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#808080] font-mono-ui text-[9px] tracking-[0.15em] mb-1">COLLABORATION</span>
                <span className="text-[#d9d9d9]">{PROFILE.collaboration}</span>
              </div>
            </div>
          </div>

          {/* Right card: Channels */}
          <div className="md:col-span-6 glass rounded-sm p-8 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d97757]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <div>
              <div className="font-mono-ui text-[10px] text-[#808080] tracking-[0.3em] mb-6">◈ COMMS CHANNEL</div>
              
              <div className="space-y-4 text-sm">
                <div className="flex flex-col border-b border-white/5 pb-3">
                  <span className="text-[#808080] font-mono-ui text-[9px] tracking-[0.15em] mb-1">GENERAL ENQUIRIES</span>
                  <a href={`mailto:${PROFILE.email}`} className="text-[#d97757] hover:text-[#f4d7c5] transition-colors font-mono">
                    {PROFILE.email}
                  </a>
                </div>
                <div className="flex flex-col border-b border-white/5 pb-3">
                  <span className="text-[#808080] font-mono-ui text-[9px] tracking-[0.15em] mb-1">SECURE LINE</span>
                  <a href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`} className="text-[#d9d9d9] hover:text-[#d97757] transition-colors font-mono">
                    {PROFILE.phone}
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#808080] font-mono-ui text-[9px] tracking-[0.15em] mb-1">LINKEDIN</span>
                  <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#d97757] hover:text-[#f4d7c5] transition-colors flex items-center gap-1 font-mono">
                    {PROFILE.linkedinLabel} <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex gap-6 font-mono-ui text-[10px] text-[#808080]">
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#d97757] transition-colors">→ LINKEDIN</a>
              <a href="mailto:princepatel01258@gmail.com" className="hover:text-[#d97757] transition-colors">→ EMAIL</a>
            </div>
          </div>
        </div>

        {/* Heroic lines */}
        <motion.div
          className="mt-20 md:mt-28 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {HEROIC_LINES.map((line) => (
            <div key={line.en} className="text-center">
              <div className="font-serif text-sm text-[#d97757] italic">{line.en}</div>
              <div className="font-mono-ui text-[9px] text-[#808080] mt-1">{line.zh}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative py-12 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono-ui text-[10px] text-[#808080]">
          © {new Date().getFullYear()} PRINCE PATEL · ALL SYSTEMS OPERATIONAL
        </div>
        <div className="flex items-center gap-2 font-mono-ui text-[10px] text-[#808080]">
          <span className="w-2 h-2 rounded-full bg-[#d97757] pulse-glow" />
          <span>ONLINE</span>
        </div>
      </div>
    </footer>
  );
}
