"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, motionOK } from "@/lib/gsap";

// Décalage vertical léger lié au scroll.
export default function Parallax({
  children,
  className,
  distance = 40,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !motionOK()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: distance },
        { y: -distance, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
      );
    }, el);
    return () => ctx.revert();
  }, [distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
