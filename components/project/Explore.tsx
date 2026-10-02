import Reveal from "@/components/Reveal";
import ProjectLinks from "@/components/project/ProjectLinks";
import type { Project } from "@/lib/content";

// Encart affiché seulement si le projet a au moins un lien public.
export default function Explore({ links }: { links: Project["links"] }) {
  if (!links.live && !links.repo) return null;
  return (
    <Reveal className="flex flex-col justify-between gap-8 rounded-2xl border border-line p-6 md:flex-row md:items-center md:p-10">
      <div>
        <h2 className="font-display text-2xl uppercase tracking-[-0.02em] md:text-4xl">
          Explorer <span className="font-serif normal-case italic text-accent">ce projet</span>
        </h2>
        <p className="mt-2 text-muted">Voir le site en ligne ou parcourir le code source.</p>
      </div>
      <ProjectLinks links={links} />
    </Reveal>
  );
}
