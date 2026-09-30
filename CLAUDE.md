@AGENTS.md

# Portfolio 2026 — règles
Voir `resume.md` (contexte + phases). Points clés :
- Stack : Next.js App Router, TypeScript, Tailwind, GSAP/ScrollTrigger, Lenis, Vercel.
- Contenu dans `content/content.json`, jamais en dur dans les composants.
- `../portfolio-legacy` = source de contenu en lecture seule, ne rien réutiliser de son code/style.
- Design inspiré de aitezaz.xyz, **rien copié** (code, textes, assets, animations, palette exacte, polices identiques).
- Une phase à la fois, plan avant code, commit à la validation, confirmation avant toute action destructive ou push.
- Animations sobres, `prefers-reduced-motion` respecté, simplifier si fragile.
