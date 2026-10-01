"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, SplitText, motionOK } from "@/lib/gsap";

// Titre dont les mots (ou caractères) montent dans un masque à l'arrivée dans le viewport.
export default function SplitHeading({
  as: Tag = "h2",
  type = "words",
  waveFrom = "end",
  className,
  children,
}: {
  as?: "h1" | "h2" | "p";
  type?: "words" | "chars";
  waveFrom?: "start" | "end";
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !motionOK()) return;
    let ctx: gsap.Context | undefined;
    let dead = false;
    const ac = new AbortController();
    document.fonts.ready.then(() => {
      if (dead) return;
      ctx = gsap.context(() => {
        // mots : masque ; caractères : pas de masque (sinon la vague au survol est rognée)
        const split = SplitText.create(el, type === "words" ? { type, mask: type } : { type });
        gsap.from(split[type], {
          yPercent: 110,
          opacity: type === "chars" ? 0 : 1,
          duration: 1,
          ease: "power4.out",
          stagger: type === "chars" ? 0.04 : 0.08,
          scrollTrigger: { trigger: el, start: "top 90%", once: true, toggleActions: "play play none none" },
        });
        if (type === "chars" && matchMedia("(hover: hover)").matches) {
          (el.closest("[data-wave-group]") ?? el).addEventListener("mouseenter", () =>
            gsap.to(split.chars, {
              keyframes: [
                { yPercent: -14, duration: 0.22 },
                { yPercent: 0, duration: 0.5 },
              ],
              ease: "power2.out",
              stagger: { each: 0.03, from: waveFrom },
              overwrite: "auto",
            }),
            { signal: ac.signal },
          );
        }
      }, el);
    });
    return () => {
      dead = true;
      ac.abort();
      ctx?.revert();
    };
  }, [type, waveFrom]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
