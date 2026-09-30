import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeSection from "@/components/ThemeSection";
import { content } from "@/lib/content";

export function generateStaticParams() {
  return content.projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = content.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main>
        <ThemeSection theme="light" className="min-h-svh pt-40">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.year}</p>
          <h1 className="font-display mt-4 text-5xl uppercase leading-none md:text-8xl">{project.title}</h1>
          <p className="mt-8 max-w-2xl text-lg text-muted">{project.summary}</p>
          <div className="mt-12 flex aspect-video items-center justify-center border border-line font-mono text-xs uppercase tracking-widest text-muted">
            Capture à venir
          </div>
          <p className="mt-12 max-w-2xl text-lg">{project.description}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="rounded-full border border-line px-4 py-1.5 text-sm">{s}</li>
            ))}
          </ul>
          <Link href="/#projects" className="mt-16 inline-block font-mono text-xs uppercase tracking-widest hover:text-accent">
            ← Retour aux projets
          </Link>
        </ThemeSection>
      </main>
      <Footer />
    </>
  );
}
