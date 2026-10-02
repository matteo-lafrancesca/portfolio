import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import ThemeSection from "@/components/ThemeSection";
import Reveal from "@/components/Reveal";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectSection from "@/components/project/ProjectSection";
import KeyPoints from "@/components/project/KeyPoints";
import Gallery from "@/components/project/Gallery";
import Explore from "@/components/project/Explore";
import ProjectNav from "@/components/project/ProjectNav";
import ContactBar from "@/components/project/ContactBar";
import { content } from "@/lib/content";

const { projects } = content;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();

  const project = projects[i];
  // Navigation circulaire ; masquée s'il n'y a qu'un projet.
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <SmoothScroll />
      <Header />
      <main>
        <ThemeSection theme="dark" variant="plain" className="pt-24 pb-10 md:pt-32 md:pb-14">
          <div className="mx-auto flex max-w-6xl flex-col gap-16 md:gap-24">
            <ProjectHero project={project} />
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line md:w-4/5">
                <Image src={project.image} alt={project.title} fill priority sizes="(min-width: 1152px) 900px, 100vw" className="object-cover object-top" />
              </div>
            </Reveal>
            <div className="flex flex-col gap-10 md:gap-16">
              <ProjectSection label="Présentation" large>{project.description}</ProjectSection>
              {project.architecture && <ProjectSection label="Architecture">{project.architecture}</ProjectSection>}
              {project.technical && <ProjectSection label="Points techniques">{project.technical}</ProjectSection>}
            </div>
            {project.keyPoints && <KeyPoints points={project.keyPoints} />}
            {project.images && <Gallery title={project.title} images={project.images} />}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">(Construit avec)</p>
              <Reveal className="mt-5">
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line px-4 py-1.5 text-sm">{s}</li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Explore links={project.links} />
            {projects.length > 1 && <ProjectNav prev={prev} next={next} />}
            <ContactBar />
          </div>
        </ThemeSection>
      </main>
    </>
  );
}
