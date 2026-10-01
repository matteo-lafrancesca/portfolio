import Link from "next/link";
import type { Project } from "@/lib/content";

export default function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      data-project-index={index}
      className="group grid gap-4 border-t border-line py-10 md:grid-cols-[5rem_1fr] md:py-12"
    >
      <span className="font-mono text-xs text-muted transition-colors duration-300 group-hover:text-accent">{String(index + 1).padStart(2, "0")}</span>
      <div className="flex flex-col gap-6">
        <h3 className="font-display max-w-4xl transition-transform duration-500 ease-out group-hover:translate-x-4 text-4xl uppercase leading-[0.95] tracking-[-0.03em] md:text-6xl">{project.title}</h3>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-4 py-1.5 text-sm transition-colors duration-300 group-hover:border-accent/60">{tag}</li>
          ))}
        </ul>
        <span className="self-end font-mono text-xs uppercase tracking-widest transition-transform duration-300 group-hover:translate-x-2 group-hover:text-accent">Voir le projet →</span>
      </div>
    </Link>
  );
}
