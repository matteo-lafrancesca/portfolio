"use client";

import { useLayoutEffect } from "react";
import { gsap, motionOK } from "@/lib/gsap";

// Entrée successive : header (descend), puis texte, puis boutons (rebond léger). Le nom s'anime dans SplitHeading.
// Les éléments [data-intro] sont masqués en CSS (globals.css) tant que ce script ne les révèle pas.
export default function HeroIntro() {
  useLayoutEffect(() => {
    if (!motionOK()) return;
    const q = (k: string) => gsap.utils.toArray<HTMLElement>(`[data-intro="${k}"]`);
    const ctx = gsap.context(() => {
      gsap.set(q("header"), { y: -28 });
      gsap.set(q("text"), { y: 34 });
      gsap.set(q("btn"), { y: 26, scale: 0.96 });
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(q("header"), { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, 0.1)
        .to(q("text"), { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }, 0.8)
        .to(q("btn"), { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: "back.out(1.6)" }, 1.1);
    });
    return () => ctx.revert();
  }, []);
  return null;
}
