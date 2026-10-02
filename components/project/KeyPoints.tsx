import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";

export default function KeyPoints({ points }: { points: string[] }) {
  return (
    <div>
      <SectionTitle before="Points" accent="clés" align="left" small />
      <Reveal className="mt-10 md:mt-14">
        <ol className="border-b border-line">
          {points.map((p, i) => (
            <li key={i} className="flex gap-5 border-t border-line py-4 md:gap-8 md:py-5">
              <span className="w-8 shrink-0 pt-1 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm leading-relaxed text-fg/80 md:text-base">{p}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </div>
  );
}
