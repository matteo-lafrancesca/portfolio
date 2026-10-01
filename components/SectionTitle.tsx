import SplitHeading from "@/components/SplitHeading";

// Grand titre de section : mots en Archivo, un mot en Instrument Serif italique + accent.
export default function SectionTitle({
  label,
  before,
  accent,
  after,
  align = "center",
}: {
  label: string;
  before?: string;
  accent: string;
  after?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">({label})</p>
      <SplitHeading className="font-display mt-4 text-5xl uppercase leading-none md:text-8xl">
        {before} <span className="font-serif normal-case italic text-accent">{accent}</span> {after}
      </SplitHeading>
    </div>
  );
}
