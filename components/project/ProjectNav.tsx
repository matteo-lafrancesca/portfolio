import Link from "next/link";
import type { Project } from "@/lib/content";

const title = "font-display text-3xl uppercase leading-none tracking-[-0.03em] text-fg/60 transition-colors duration-300 group-hover:text-accent md:text-5xl";

export default function ProjectNav({ prev, next }: { prev: Project; next: Project }) {
  return (
    <nav aria-label="Projets" className="grid border-t border-line md:grid-cols-2">
      <Link href={`/projects/${prev.slug}`} className="group border-b border-line py-8 md:border-b-0 md:border-r md:py-12 md:pr-10">
        <p className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted">
          <span className="transition-transform duration-300 group-hover:-translate-x-1.5">←</span>
          Précédent
        </p>
        <p className={title}>{prev.title}</p>
      </Link>
      <Link href={`/projects/${next.slug}`} className="group py-8 text-right md:py-12 md:pl-10">
        <p className="mb-3 flex items-center justify-end gap-2 font-mono text-xs uppercase tracking-widest text-muted">
          Suivant
          <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
        </p>
        <p className={title}>{next.title}</p>
      </Link>
    </nav>
  );
}
