"use client";

import { useLayoutEffect } from "react";
import { gsap, motionOK } from "@/lib/gsap";

// Le Hero reste collé (sticky) pendant que la section suivante le recouvre : il s'efface légèrement.
export default function CurtainDim() {
  useLayoutEffect(() => {
    const hero = document.getElementById("top");
    const next = document.getElementById("about");
    if (!hero || !next || !motionOK()) return;
    const ctx = gsap.context(() => {
      gsap.to(hero.querySelector("[data-curtain]"), {
        opacity: 0.15,
        y: -140,
        scale: 0.85,
        transformOrigin: "50% 100%",
        ease: "none",
        scrollTrigger: { trigger: next, start: "top bottom", end: "top top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);
  return null;
}
