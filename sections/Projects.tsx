import ThemeSection from "@/components/ThemeSection";
import SectionTitle from "@/components/SectionTitle";
import ProjectRow from "@/components/ProjectRow";
import { content } from "@/lib/content";

export default function Projects() {
  return (
    <ThemeSection theme="light" id="projects">
      <div className="mx-auto max-w-6xl">
        <SectionTitle label="Projets" before="Mes" accent="projets" align="left" />
      </div>
      <div className="mx-auto mt-16 max-w-6xl border-b border-line">
        {content.projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </div>
    </ThemeSection>
  );
}
