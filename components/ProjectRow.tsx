import Link from "next/link";
import type { Project } from "@/lib/content";

export default function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="grid gap-4 border-t border-line py-10 transition-opacity hover:opacity-60 md:grid-cols-[5rem_1fr] md:py-12"
    >
      <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
      <div className="flex flex-col gap-6">
        <h3 className="font-display max-w-4xl text-4xl uppercase leading-[0.95] tracking-[-0.03em] md:text-6xl">{project.title}</h3>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-4 py-1.5 text-sm">{tag}</li>
          ))}
        </ul>
        <span className="self-end font-mono text-xs uppercase tracking-widest">Voir le projet →</span>
      </div>
    </Link>
  );
}
