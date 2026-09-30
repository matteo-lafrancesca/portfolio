"use client";

import { useEffect, useRef } from "react";

const TRAIL = 64; // points gardés par traînée

type Particle = { x: number; y: number; trail: number[]; life: number; max: number; speed: number; hot: boolean };

// Flow field à courants : des particules glissent le long d'un champ orienté (courant principal + tourbillons)
// et laissent des traînées qui s'effacent. La souris crée un remous local.
export default function FlowField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const style = getComputedStyle(canvas);
    const fg = style.getPropertyValue("--fg").trim() || "#fff";
    const accent = style.getPropertyValue("--accent").trim() || "#ff5a1f";

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let time = Math.random() * 100;
    const mouse = { x: -9999, y: -9999, vx: 0, vy: 0 };
    let particles: Particle[] = [];

    // courant principal vers la droite/bas + ondulations lentes
    const angle = (x: number, y: number, t: number) =>
      0.45 + Math.sin(x * 0.006 + t) * 1.1 + Math.cos(y * 0.008 - t * 0.8) * 1.1 + Math.sin((x - y) * 0.004 + t * 0.6) * 0.9;

    const spawn = (): Particle => {
      const x = Math.random() * w;
      const y = Math.random() * h;
      return { x, y, trail: [], life: 0, max: 220 + Math.random() * 260, speed: 0.9 + Math.random() * 1, hot: Math.random() < 0.2 };
    };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      particles = Array.from({ length: w < 400 ? 110 : 280 }, () => {
        const p = spawn();
        p.life = Math.random() * p.max;
        return p;
      });
      if (reduced) {
        for (let i = 0; i < 300; i++) frame();
      }
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1.7;

      for (const p of particles) {
        const a = angle(p.x, p.y, time);
        let vx = Math.cos(a) * p.speed;
        let vy = Math.sin(a) * p.speed;

        // remous de la souris : les particules proches sont déviées et emportées dans son sillage
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 130 * 130) {
          const d = Math.sqrt(d2) || 1;
          const k = 1 - d / 130;
          vx += (-dy / d) * k * 2 + (dx / d) * k * 0.8 + mouse.vx * k * 0.15;
          vy += (dx / d) * k * 2 + (dy / d) * k * 0.8 + mouse.vy * k * 0.15;
        }

        p.trail.push(p.x, p.y);
        if (p.trail.length > TRAIL * 2) p.trail.splice(0, 2);
        p.x += vx;
        p.y += vy;
        p.life++;

        if (p.life > p.max || p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) {
          Object.assign(p, spawn());
          continue;
        }

        // traînée dessinée en 4 tronçons de plus en plus opaques vers la tête
        const fade = Math.sin((p.life / p.max) * Math.PI);
        ctx.strokeStyle = p.hot ? accent : fg;
        const n = p.trail.length / 2;
        const seg = Math.ceil(n / 4);
        for (let q = 0; q < 4; q++) {
          const from = q * seg;
          const to = Math.min(from + seg + 1, n);
          if (to - from < 2) break;
          ctx.globalAlpha = fade * (p.hot ? 0.95 : 0.5) * ((q + 1) / 4) ** 1.5;
          ctx.beginPath();
          ctx.moveTo(p.trail[from * 2], p.trail[from * 2 + 1]);
          for (let i = from + 1; i < to; i++) ctx.lineTo(p.trail[i * 2], p.trail[i * 2 + 1]);
          if (to === n) ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
      time += 0.004;
      mouse.vx *= 0.9;
      mouse.vy *= 0.9;
    };

    const loop = () => {
      if (visible) frame();
      raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (mouse.x > -1000) {
        mouse.vx = x - mouse.x;
        mouse.vy = y - mouse.y;
      }
      mouse.x = x;
      mouse.y = y;
    };
    const leave = () => {
      mouse.x = mouse.y = -9999;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(canvas);

    if (!reduced) {
      raf = requestAnimationFrame(loop);
      canvas.addEventListener("pointermove", move);
      canvas.addEventListener("pointerleave", leave);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={`block size-full ${className}`} />;
}
