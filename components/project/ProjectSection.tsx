import Reveal from "@/components/Reveal";

// Étiquette à gauche, texte à droite.
export default function ProjectSection({ label, large = false, children }: { label: string; large?: boolean; children: string }) {
  return (
    <Reveal className="grid gap-3 md:grid-cols-12 md:gap-8">
      <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-accent md:col-span-4">({label})</h2>
      <p className={`whitespace-pre-line leading-relaxed md:col-span-8 ${large ? "text-lg md:text-2xl" : "text-base text-fg/80 md:text-lg"}`}>{children}</p>
    </Reveal>
  );
}
