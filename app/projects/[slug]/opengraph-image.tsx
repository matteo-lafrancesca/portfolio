import { ogImage, ogSize } from "@/lib/og";
import { content } from "@/lib/content";

export const alt = "Projet du portfolio de Mattéo Lafrancesca";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return content.projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = content.projects.find((x) => x.slug === slug)!;
  return ogImage({ label: `Projet · ${p.year}`, title: p.title, text: p.summary.length > 110 ? `${p.summary.slice(0, 110).replace(/\s+\S*$/, "")}…` : p.summary });
}
