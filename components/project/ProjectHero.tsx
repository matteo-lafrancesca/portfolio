import Link from "next/link";
import SplitHeading from "@/components/SplitHeading";
import Reveal from "@/components/Reveal";
import ProjectLinks from "@/components/project/ProjectLinks";
import type { Project } from "@/lib/content";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <div>
      <Link href="/#projects" className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-fg">
        <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
        Retour aux projets
      </Link>
      <p className="mt-12 font-mono text-xs uppercase tracking-[0.3em] text-accent">{project.year}</p>
      <SplitHeading as="h1" className="font-display mt-4 break-words text-5xl uppercase leading-[0.95] tracking-[-0.03em] md:text-8xl">
        {project.title}
      </SplitHeading>
      <Reveal className="mt-8 max-w-2xl text-lg text-muted md:text-xl">
        <p>{project.summary}</p>
        <ProjectLinks links={project.links} className="mt-8" />
      </Reveal>
    </div>
  );
}
