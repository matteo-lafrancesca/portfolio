import ThemeSection from "@/components/ThemeSection";
import SectionTitle from "@/components/SectionTitle";
import ProjectList from "@/components/ProjectList";
import { content } from "@/lib/content";

export default function Projects() {
  return (
    <ThemeSection theme="light" id="projects" variant="arc">
      <div className="mx-auto max-w-6xl">
        <SectionTitle label="Projets" before="Mes" accent="projets" align="left" />
      </div>
      <ProjectList projects={content.projects} />
    </ThemeSection>
  );
}
