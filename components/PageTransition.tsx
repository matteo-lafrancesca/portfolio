"use client";

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { gsap, motionOK } from "@/lib/gsap";

const ease = "circ.inOut";
const duration = 0.55;

// Transition entre pages : deux rideaux (accent puis fond sombre) montent et couvrent l'écran,
// la navigation a lieu dessous, puis les rideaux sortent par le haut une fois la nouvelle page montée.
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  const covered = useRef(false); // rideaux fermés, en attente de la nouvelle page
  const busy = useRef(false);

  const uncover = useCallback(() => {
    covered.current = false;
    gsap
      .timeline({
        delay: 0.15,
        onComplete: () => {
          busy.current = false;
          if (root.current) root.current.style.pointerEvents = "none";
        },
      })
      .to(b.current, { yPercent: -100, duration, ease })
      .to(a.current, { yPercent: -100, duration, ease }, "<50%");
  }, []);

  // Position initiale posée par GSAP (jamais en CSS : il convertirait un translate CSS en pixels et le cumulerait).
  // Les rideaux restent invisibles jusque-là pour éviter un flash au chargement.
  useLayoutEffect(() => {
    gsap.set([a.current, b.current], { yPercent: 100 });
    if (root.current) root.current.style.visibility = "visible";
  }, []);

  // Nouvelle page montée : on rouvre.
  useEffect(() => {
    if (covered.current) uncover();
  }, [pathname, uncover]);

  useEffect(() => {
    // Capture : passe avant le <Link> de Next. Seuls les changements de page sont animés
    // (les ancres sur la même page restent gérées par SmoothScroll).
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest?.("a");
      if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if ((link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname === location.pathname || !motionOK()) return;

      e.preventDefault();
      e.stopPropagation();
      if (busy.current) return;
      busy.current = true;
      if (root.current) root.current.style.pointerEvents = "auto";

      gsap
        .timeline({
          onComplete: () => {
            covered.current = true;
            router.push(url.pathname + url.search + url.hash);
            // Filet de sécurité : si la navigation n'aboutit pas, on ne reste pas bloqué sous le rideau.
            setTimeout(() => covered.current && uncover(), 5000);
          },
        })
        .fromTo(a.current, { yPercent: 100 }, { yPercent: 0, duration, ease })
        .fromTo(b.current, { yPercent: 100 }, { yPercent: 0, duration, ease }, "<50%");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router, uncover]);

  return (
    <>
      {children}
      <div ref={root} aria-hidden className="pointer-events-none invisible fixed inset-0 z-[9990] overflow-hidden">
        <div ref={a} className="absolute inset-0 bg-accent" />
        <div ref={b} className="absolute inset-0 bg-[#090d0c]" />
      </div>
    </>
  );
}
