# Refonte de mon portfolio : contexte et plan

## 1. Contexte

Je refais mon portfolio personnel. L'ancien (React, fait il y a plus d'un an) ne me satisfait plus. Je veux **conserver mon contenu** (bio, projets, compétences, expériences, liens, assets) mais **repartir de zéro** sur le code et le design.

### Organisation du repo
- Dossier de travail : `portfolio-2026` (branche `redesign`, vidée de l'ancien code)
- Ancien site : branche `legacy`, checkout dans un worktree `../portfolio-legacy` (à créer si absent : `git worktree add ../portfolio-legacy legacy`)
- L'ancien site est **en lecture seule** et sert **uniquement** à récupérer le contenu. Ne pas réutiliser son code, ses composants ni son style.
- Claude Code se lance depuis `portfolio-2026` avec `claude --add-dir ../portfolio-legacy`

## 2. Stack cible

- **Next.js** (App Router) + **TypeScript** + **Tailwind CSS**
- **GSAP** (+ ScrollTrigger) pour les animations
- **Lenis** pour le smooth scroll
- Déploiement sur **Vercel**
- Le contenu vit dans un fichier de données (`content/content.json` ou équivalent), séparé des composants

## 3. Direction design

Inspiration : https://aitezaz.xyz (portfolio public, code source visible sur GitHub).

**Ce que j'aime :**
- Original sans être déroutant
- Chaque section a son propre thème et on alterne **clair / sombre** au fil du scroll
- Animations au scroll (mais certaines sont à ne pas garder : rester sobre)
- Section projets : chaque projet a un **texte explicatif**, et au **survol** une image/screenshot du projet apparaît pour donner envie de cliquer
- Une **animation de transition** sympa entre les pages

**Règles importantes :**
- S'inspirer de l'esprit et de la structure, **ne rien copier** (ni code, ni textes, ni assets, ni animations sur mesure).
- Produire une identité **originale** : ma propre palette, mes propres typos, ma propre mise en page.
- Structure : **SPA one-page** (`/`) + pages séparées `/projects/[slug]`. Les pages E5, Veille, CV-page du legacy ne sont **pas** reprises (le legacy sert de source de contenu uniquement, ex. présentations de projets).
- Sections de `/` dans l'ordre, thème alterné : **Hero** (nom + header de navigation par ancres) → **About** (présentation, expériences, stack) → **Projets** (liste, clic vers `/projects/[slug]`) → **Contact** (formulaire).
- **CV téléchargeable** via un bouton (`public/cv.pdf`, repris du legacy).

_(Palette, typos et ambiance précises : à définir avec moi à la phase 1.)_

## 4. Plan par phases

Travailler **une phase à la fois**, proposer un plan des fichiers avant de coder, et **commit à chaque validation**.

### Phase 0 : Préparation (allégée)
Les projets et le contenu E5 du legacy sont **mis de côté** : on construit le squelette, les projets s'ajouteront plus tard.
1. `content/content.json` minimal : identité, bio, expériences, stack, liens, et 2-3 projets **factices** pour tester la liste et les pages `/projects/[slug]`.
2. Copier `cv.pdf` du legacy dans `public/`.
3. Compléter `CLAUDE.md` avec les règles de ce document.
4. **Validation** : je relis `content.json` et je corrige/complète mes infos.

### Phase 1 : Fondations
1. `create-next-app` (TypeScript, Tailwind, App Router, ESLint) — **fait**.
2. Installer `gsap` et `lenis`.
3. Design tokens : couleurs clair/sombre, typos via `next/font`, espacements dans la config Tailwind.
4. Structure : `components/`, `sections/`, `lib/`, `content/`.
5. Premier commit + déploiement Vercel.
6. **Validation** : page de base déployée avec typos et couleurs.

### Structure de fichiers cible
```
app/
  layout.tsx            polices, providers, metadata
  page.tsx              assemble les sections
  globals.css           tokens (couleurs clair/sombre) + Tailwind
  projects/[slug]/page.tsx
  api/contact/route.ts
components/             Header, Footer, ThemeSection, ProjectRow, ProjectPreview, ContactForm, Button...
sections/               Hero, About, Projects, Contact
lib/                    content.ts (typage + accès), lenis/gsap providers, hooks
content/content.json
public/                 cv.pdf, images/projects/<slug>/
```

### Phase 2 : Layout et contenu, sans animation
1. Header (ancres vers les sections) + footer + layout global.
2. Les 4 sections de `/` en statique (Hero, About avec expériences + stack + bouton CV, Projets, Contact avec formulaire non branché), alimentées par `content.json`.
3. Alternance clair/sombre en CSS (`data-theme` par section).
4. Page `/projects/[slug]` en statique (gabarit).
5. Responsive mobile-first dès maintenant.
6. **Validation** : site complet et propre sur mobile et desktop, sans animation.

### Phase 3 : Système d'animation
1. Provider Lenis synchronisé avec ScrollTrigger.
2. 2-3 animations **réutilisables** (texte au scroll, révélation d'images, parallaxe légère).
3. Transition de thème entre sections au scroll.
4. Respect de `prefers-reduced-motion`.
5. **Validation** : scroll fluide, pas de saccades, animations désactivables.

### Phase 4 : Section Projets
1. Preview image au survol qui suit la souris (`gsap.quickTo`), apparition/disparition douce.
2. Alternative mobile (pas de survol) : image visible ou tap.
3. Pages `/projects/[slug]` finalisées avec `generateStaticParams` (présentation reprise du legacy, captures, stack, liens).
4. Images optimisées (`next/image`, webp).
5. **Validation** : survol fluide, pages projet accessibles par lien direct.

### Phase 5 : Transitions entre pages
1. Comparer les approches (View Transitions API vs overlay GSAP) **avant de choisir**, et me proposer une recommandation.
2. Implémenter un rideau/overlay animé entre les pages.
3. Gérer le bouton retour du navigateur et la restauration du scroll.
4. **Validation** : aller-retour accueil ↔ projet sans flash ni saut.

### Phase 6 : Finitions
1. Loader d'entrée (court, 1-2 s max, optionnel).
2. Brancher le formulaire de contact (Route Handler + service d'envoi, validation).
3. SEO : metadata, Open Graph, sitemap, favicon.
4. Accessibilité : clavier, contrastes, focus, labels.
5. Performance : Lighthouse, lazy-loading, poids des images.

### Phase 7 : Mise en ligne
1. Domaine + config Vercel.
2. Tests sur vrais appareils et navigateurs (Safari, Firefox, iOS, Android).
3. Retirer le worktree legacy (`git worktree remove ../portfolio-legacy`), garder la branche `legacy` archivée, merger `redesign` dans `main`.

## 5. Règles de travail

- Une phase à la fois, jamais « tout le site d'un coup ».
- Toujours proposer un plan avant d'écrire du code.
- Vérifier visuellement les animations et le responsive (Playwright MCP ou Claude in Chrome si dispo).
- Code propre, typé, composants réutilisables, contenu séparé de la présentation.
- Si une animation est fragile ou nuit aux performances, la simplifier ou la retirer.
- Me demander confirmation avant toute action destructive (suppression de fichiers, changement de branche, push).

## 6. État actuel

### Fait
- **Phase 0** : `content/content.json` rempli (identité, bio en 3 lignes = 3 paragraphes, liens, expériences sans description, stack, 2 projets **factices** `projet-exemple-1/2` avec `stack` = tags). `public/cv.pdf`, `CLAUDE.md` complété.
- **Phase 1 (local)** : Next 16, React 19, Tailwind 4, TS, ESLint, `gsap`, `lenis`, `simple-icons`. Tokens dans `app/globals.css` : `data-theme="light"` (`#e9ecea`) / `"dark"` (`#090d0c`, voile + grain), accent orange `--accent: #ff5a1f`. Polices : Archivo (`font-display`), Instrument Serif italique (`font-serif`), Inter (`font-sans`), JetBrains Mono (`font-mono`).
- **Phase 2 (layout + contenu, validée visuellement par moi)** :
  - `app/page.tsx` assemble Header, Hero (clair), About (sombre), Projects (clair), Contact (sombre), Footer (sombre).
  - Hero centré : prénom très grand en Archivo, nom en serif italique décalé à droite, tagline, boutons Projets / Contact / CV (le CV se télécharge ici uniquement).
  - Header `absolute` (défile avec la page), texte gris plus grand en Inter majuscules.
  - `SectionTitle` : grand titre Archivo avec un mot en serif italique orange (option `align="left"`). Les textes des titres sont des libellés d'interface écrits dans les sections.
  - About : cadre `FlowField` (canvas 2D, particules à traînées dans un champ de courants, remous de souris, tourne en continu) à gauche de la bio en 3 paragraphes ; frise verticale « Mon parcours » (gros titres, points alternant autour du centre reliés par des obliques douces, trait + année vers le texte, filet sous le lieu à la largeur du texte) ; « Mes outils » en layout modèle (catégorie orange à gauche, grille de `TechCard` à droite avec logos `simple-icons`, mapping nom → icône dans `lib/icons.ts`, monogramme si pas d'icône).
  - Projects : titre aligné à gauche dans le même conteneur que la liste ; `ProjectRow` = filet, numéro, titre géant, tags (stack), « Voir le projet → ».
  - Contact : formulaire non branché (`ContactForm`, client).
  - `app/projects/[slug]/page.tsx` : gabarit statique (placeholder « Capture à venir »), `generateStaticParams`.
  - Scroll fluide + barre de scroll masquée en CSS (`globals.css`, `data-scroll-behavior="smooth"` sur `<html>`), désactivé si `prefers-reduced-motion`. À remplacer par Lenis en Phase 3.
- Abandonnés après essais : cercles en grille, lampe à lave WebGL (formes jugées pas assez réalistes), champ de traits orientés.
- `../portfolio-modele` (clone du portfolio inspirant) sert de référence de comportement **en lecture seule** : ne rien copier.

### Reste à faire
- **Phase 1** : déploiement Vercel (push de `redesign` + connexion du repo, **à faire avec mon accord**).
- **Phase 3** : Lenis synchronisé ScrollTrigger, 2-3 animations réutilisables, transition de thème au scroll, `prefers-reduced-motion`.
- **Phase 4** : preview d'image au survol des projets (`gsap.quickTo`), alternative mobile, vrais projets + captures, `next/image`.
- **Phases 5 à 7** : transitions de page, finitions (loader, contact branché, SEO, a11y, perf), mise en ligne.
- Vérifier le rendu mobile section par section (seul l'absence de débordement horizontal a été testé).

### Consignes de travail
- **Ne pas commiter à chaque modification** : commiter seulement quand je valide une phase (ou quand je le demande). Jamais de push sans mon accord.
- Un serveur `npm run dev` tourne peut-être déjà sur le port 3000 ; `.claude/launch.json` contient une config `dev`.
- Next 16 a des changements par rapport à ce que le modèle connaît : lire `node_modules/next/dist/docs/` avant de coder (voir `AGENTS.md`).
- Navigateur intégré : le `zoom` par région ne marche pas, utiliser `screenshot`. Après un changement de code, recharger la page complète avant de juger un rendu canvas (le rechargement à chaud peut laisser des artefacts).

### Prochaine étape
**Phase 3** (système d'animation) : proposer d'abord le plan (provider Lenis, hook/composant d'animation au scroll, transition de thème), puis coder après mon accord.

### Historique git (branche `redesign`)
Commits : init + Phase 0, Phase 1 (tokens/polices), 3 réglages accent/grain, puis **Phase 2**. Rien n'est poussé.
