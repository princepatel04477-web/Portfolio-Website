import { motion } from "framer-motion";
import { SERVICES, VISION } from "../data/content";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden bg-[#030303]/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 md:mb-28">
          <div className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-3">
            § 04 · SERVICES
          </div>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
            <span className="block text-[#f4d7c5]">What You</span>
            <span className="block italic text-[#d97757]">Get.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.num}
              className="glass rounded-sm p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between min-h-[350px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d97757] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="font-display text-4xl text-[#d97757]/30 group-hover:text-[#d97757] transition-colors duration-500">
                    {s.num}
                  </span>
                  <span className="font-mono-ui text-[10px] text-[#808080] tracking-[0.2em]">
                    ACTIVE OPERATION
                  </span>
                </div>
                
                <h3 className="font-display text-2xl text-[#f4d7c5] tracking-wider mb-1">
                  {s.title}
                </h3>
                <div className="font-serif text-sm text-[#d97757] italic mb-6">
                  ( {s.subtitle} )
                </div>
                
                <p className="font-sans text-sm text-[#808080] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 font-mono-ui text-[9px] text-[#808080] tracking-[0.1em]">
                ◈ OPERATIONAL METHODOLOGY
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisionSection() {
  return (
    <section id="vision" className="relative py-32 md:py-48 px-6 md:px-16 border-t border-white/5 bg-[#030303]/40">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* Left panel: Title and intro */}
          <div className="md:col-span-5">
            <div className="font-mono-ui text-[10px] text-[#d97757] tracking-[0.3em] mb-3">
              § 06 · VISION
            </div>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.9] text-[#f4d7c5] mb-8">
              Systems for <br />
              <span className="text-[#d97757] italic">Humans.</span>
            </h2>
            <p className="font-serif text-lg md:text-xl text-[#d9d9d9] italic leading-relaxed">
              {VISION.intro}
            </p>
          </div>

          {/* Right panel: Vision pillars */}
          <div className="md:col-span-7 space-y-6">
            {VISION.items.map((item, i) => (
              <motion.div
                key={i}
                className="glass rounded-sm p-6 relative overflow-hidden group flex items-start gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#d97757] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
                <div className="font-display text-xl text-[#d97757] font-mono-ui mt-0.5">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-display text-lg text-[#f4d7c5] tracking-wider leading-snug">
                    {item}
                  </h3>
                  <div className="font-mono-ui text-[9px] text-[#808080] tracking-[0.2em] mt-2">
                    PILLAR OF DEVELOPMENT
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
