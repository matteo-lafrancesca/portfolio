"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, motionOK } from "@/lib/gsap";

// Fondu + montée au scroll. `stagger` : anime chaque enfant direct l'un après l'autre.
export default function Reveal({
  children,
  className,
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !motionOK()) return;
    const ctx = gsap.context(() => {
      gsap.from(stagger ? Array.from(el.children) : el, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "opacity,transform",
        stagger: stagger ? { amount: 0.4 } : 0,
        scrollTrigger: { trigger: el, start: "top 95%", once: true, toggleActions: "play play none none" },
      });
    }, el);
    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
