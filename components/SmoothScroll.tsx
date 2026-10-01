"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, motionOK } from "@/lib/gsap";

// Lenis piloté par le ticker GSAP. Désactivé en reduced-motion et sur tactile (scroll natif).
export default function SmoothScroll() {
  useEffect(() => {
    if (!motionOK() || matchMedia("(pointer: coarse)").matches) return;

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    document.fonts.ready.then(() => ScrollTrigger.refresh());

    // Liens d'ancre (#x ou /#x sur la page courante) passent par Lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest("a");
      if (!a || !a.hash || e.metaKey || e.ctrlKey) return;
      const url = new URL(a.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname) return;
      const target = url.hash === "#top" ? 0 : document.querySelector<HTMLElement>(url.hash);
      if (target === null) return;
      e.preventDefault();
      lenis.scrollTo(target);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
