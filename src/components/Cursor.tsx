import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [variant, setVariant] = useState<"default" | "hover" | "drag">("default");

  const springX = useSpring(x, { stiffness: 400, damping: 30, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 400, damping: 30, mass: 0.5 });
  const dotX = useSpring(x, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(y, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [data-hover], .skill-card, .project-card")) {
        setVariant("hover");
      } else {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  const ringSize = variant === "hover" ? 56 : 24;
  const dotSize = variant === "hover" ? 4 : 6;

  return (
    <>
      <motion.div
        className="cursor-ring fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference hidden md:block"
        style={{
          x: springX,
          y: springY,
          width: ringSize,
          height: ringSize,
          marginLeft: -ringSize / 2,
          marginTop: -ringSize / 2,
          border: "1px solid rgba(244,215,197,0.7)",
          background: "transparent",
        }}
        animate={{
          scale: variant === "hover" ? 1 : 1,
          borderColor: variant === "hover" ? "#f4d7c5" : "rgba(244,215,197,0.6)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="cursor-dot fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#d97757] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          width: dotSize,
          height: dotSize,
          marginLeft: -dotSize / 2,
          marginTop: -dotSize / 2,
        }}
      />
    </>
  );
}
