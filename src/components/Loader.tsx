import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit">("loading");

  useEffect(() => {
    const start = performance.now();
    const duration = 2400;

    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("exit"), 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (phase === "exit") {
      setTimeout(onComplete, 900);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {(phase === "loading" || progress < 100) && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          animate={phase === "exit" ? { opacity: 0, y: -40 } : { opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 bg-grid opacity-30" />

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-end gap-1 font-display text-[#d97757]">
              <motion.span
                className="text-[72px] md:text-[120px] leading-none"
                animate={{ y: [20, 0] }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                P
              </motion.span>
              <motion.span
                className="text-[72px] md:text-[120px] leading-none text-[#f4d7c5]"
                animate={{ y: [20, 0] }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                P
              </motion.span>
            </div>
            <motion.div
              className="absolute -inset-4 border border-[#d97757]/20 rounded-full"
              animate={{ scale: [0.8, 1.2], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          </motion.div>

          <motion.div
            className="mt-12 w-[280px] h-[1px] bg-[#1a1a1a] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#a03b2d] to-[#d97757]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0 }}
            />
          </motion.div>

          <div className="mt-4 flex items-center gap-4 font-mono-ui text-[11px] text-[#808080]">
            <span className="text-[#d97757]">INITIALIZING</span>
            <span>{String(progress).padStart(3, "0")}%</span>
          </div>

          <motion.div
            className="absolute bottom-12 left-12 font-mono-ui text-[10px] text-[#808080] space-y-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div>SYS.ARCHIVE // 0x4A3C</div>
            <div>CINEMATIC_MODE · ENABLED</div>
          </motion.div>

          <motion.div
            className="absolute bottom-12 right-12 font-mono-ui text-[10px] text-[#808080] space-y-1 text-right"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div>ASSETS LOADED: {Math.min(84, Math.floor(progress * 0.84))}/84</div>
            <div>GPU · WEBGL · ONLINE</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
