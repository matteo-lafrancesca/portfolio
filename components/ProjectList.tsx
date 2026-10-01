"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import ProjectRow from "@/components/ProjectRow";
import { gsap, motionOK } from "@/lib/gsap";
import type { Project } from "@/lib/content";

const clamp = gsap.utils.clamp;

// Liste de projets + aperçu flottant qui suit le curseur, penche selon la vitesse et défile d'un projet à l'autre.
export default function ProjectList({ projects }: { projects: Project[] }) {
  const root = useRef<HTMLDivElement>(null);
  const float = useRef<HTMLDivElement>(null);
  const reel = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const f = float.current;
    const r = reel.current;
    const inner = img.current;
    if (!el || !f || !r || !inner || !motionOK() || !matchMedia("(hover: hover)").matches) return;

    gsap.set(f, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0, autoAlpha: 0 });
    const x = gsap.quickTo(f, "x", { duration: 0.6, ease: "power3.out" });
    const y = gsap.quickTo(f, "y", { duration: 0.6, ease: "power3.out" });
    const rot = gsap.quickTo(f, "rotation", { duration: 0.5, ease: "power3.out" });
    const ix = gsap.quickTo(inner, "x", { duration: 0.5, ease: "power3.out" });
    let visible = false;
    let current = -1;
    const settle = gsap.delayedCall(0.08, () => {
      rot(0);
      ix(0);
    });

    const show = (on: boolean) => {
      if (visible === on) return;
      visible = on;
      gsap.to(f, on ? { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(1.6)", overwrite: "auto" } : { autoAlpha: 0, scale: 0, duration: 0.35, ease: "power3.in", overwrite: "auto" });
    };

    const move = (e: MouseEvent) => {
      const row = (e.target as Element).closest<HTMLElement>("[data-project-index]");
      if (!row) return show(false);
      const i = Number(row.dataset.projectIndex);
      if (i !== current) {
        if (current === -1) gsap.set(r, { yPercent: -100 * i });
        else gsap.to(r, { yPercent: -100 * i, duration: 0.6, ease: "power3.inOut", overwrite: "auto" });
        current = i;
      }
      if (!visible) {
        // première apparition : on place l'aperçu sans traîner depuis l'ancienne position
        gsap.set(f, { x: e.clientX, y: e.clientY });
      }
      show(true);
      x(e.clientX);
      y(e.clientY);
      rot(clamp(-9, 9, e.movementX * 0.6));
      ix(clamp(-14, 14, -e.movementX * 0.8));
      settle.restart(true);
    };
    const leave = () => {
      current = -1;
      show(false);
    };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
      settle.kill();
    };
  }, []);

  return (
    <div ref={root}>
      <Reveal stagger className="mx-auto mt-16 max-w-6xl border-b border-line">
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </Reveal>
      <div ref={float} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[60] invisible">
        <div ref={img} className="relative aspect-[16/10] w-[300px] overflow-hidden rounded-2xl bg-fg/10 shadow-2xl md:w-[420px]">
          <div ref={reel} className="h-full w-full">
            {projects.map((p) => (
              <div key={p.slug} className="relative h-full w-full">
                <Image src={p.image} alt="" fill unoptimized sizes="420px" className="object-cover object-top" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
