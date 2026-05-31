import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.08,
    });

    (window as any).lenis = lenis;

    let raf: number;
    function rafLoop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(rafLoop);
    }
    raf = requestAnimationFrame(rafLoop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);
}
