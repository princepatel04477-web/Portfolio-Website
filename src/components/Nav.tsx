import { motion } from "framer-motion";
import { useState } from "react";
import { PROFILE } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "timeline", label: "Timeline" },
    { id: "vision", label: "Vision" },
    { id: "process", label: "Strategy" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-6 flex items-center justify-between mix-blend-difference"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <a href="#hero" className="flex items-center gap-2 font-display text-xl">
          <span className="text-[#d97757]">◈</span>
          <span>{PROFILE.name.split(" ")[0]}.{PROFILE.name.split(" ")[1][0]}.</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono-ui text-[11px] tracking-[0.2em]">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-[#d9d9d9] hover:text-[#d97757] transition-colors relative group"
            >
              {l.label.toUpperCase()}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d97757] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="menu"
        >
          <span className="w-6 h-px bg-white" />
          <span className="w-4 h-px bg-white ml-auto" />
          <span className="w-6 h-px bg-white" />
        </button>
      </motion.nav>

      {open && (
        <motion.div
          className="fixed inset-0 z-[99] bg-[#050505] flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {links.map((l, i) => (
            <motion.a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-[#f4d7c5] hover:text-[#d97757]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              {l.label}
            </motion.a>
          ))}
        </motion.div>
      )}
    </>
  );
}
