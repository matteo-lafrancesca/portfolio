import ThemeSection from "@/components/ThemeSection";
import SectionTitle from "@/components/SectionTitle";
import FlowField from "@/components/FlowField";
import TechCard from "@/components/TechCard";
import { content } from "@/lib/content";

export default function About() {
  const { about, experience, stack } = content;
  return (
    <ThemeSection theme="dark" id="about">
      <SectionTitle label="À propos" before="Qui" accent="suis" after="-je ?" />
      <div className="mx-auto mt-16 grid max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-16">
        <div className="mx-auto h-[360px] w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-fg/[0.03] md:h-[480px]">
          <FlowField />
        </div>
        <div className="space-y-5 text-base leading-relaxed text-muted md:text-[1.05rem]">
          {about.bio.split("\n").map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <SectionTitle label="Expérience" before="Mon" accent="parcours" />
      </div>

      {/* Frise verticale : ligne à gauche en mobile ; en desktop les points alternent de part et d'autre du centre, reliés par des obliques */}
      <ol className="relative mx-auto mt-20 max-w-[90rem] before:absolute before:inset-y-0 before:left-[5px] before:w-px before:bg-line md:before:hidden">
        {experience.map((e, i) => {
          const right = i % 2 === 1;
          return (
            <li
              key={e.title + e.period}
              className={`relative pb-28 pl-10 last:pb-0 md:w-1/2 md:pl-0 ${right ? "md:ml-[50%] md:pl-24" : "md:pr-24 md:text-right"
                }`}
            >
              <span className={`absolute top-1.5 left-0 size-[11px] rounded-full bg-fg ${right ? "md:left-[0.5px]" : "md:left-auto md:right-[0.5px]"}`} />
              {/* trait + année vers le texte */}
              <span className={`absolute top-[11px] hidden h-px w-14 bg-line md:block ${right ? "left-[6px]" : "right-[6px]"}`} />
              <span className={`absolute top-6 hidden font-mono text-xs tracking-widest text-muted md:block ${right ? "left-[18px]" : "right-[18px]"}`}>{e.period}</span>
              {i < experience.length - 1 && (
                <svg
                  aria-hidden
                  viewBox="0 0 12 100"
                  preserveAspectRatio="none"
                  className={`absolute top-[11px] hidden h-full w-3 text-muted/50 md:block ${right ? "left-[-6px]" : "right-[-6px]"}`}
                >
                  <line x1={right ? 12 : 0} y1="0" x2={right ? 0 : 12} y2="100" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                </svg>
              )}
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                {e.kind}
                <span className="md:hidden"> · {e.period}</span>
              </p>
              <h3 className="font-display mt-4 md:mt-10 text-4xl uppercase leading-[0.9] tracking-[-0.04em] md:text-[clamp(2.25rem,3.9vw,3.75rem)]">{e.title}</h3>
              <p className={`mt-6 w-fit border-t border-line pt-4 font-mono text-sm text-muted ${right ? "" : "md:ml-auto"}`}>{e.place}</p>
            </li>
          );
        })}
      </ol>

      <div className="mt-32">
        <SectionTitle label="Stack" before="Mes" accent="outils" />
      </div>
      <div className="mx-auto mt-16 max-w-6xl space-y-14">
        {stack.map((s) => (
          <div key={s.category} className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10">
            <div>
              <h3 className="font-display text-3xl uppercase leading-[0.95] tracking-[-0.03em] text-accent md:text-5xl">{s.category}</h3>
            </div>
            <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3">
              {s.items.map((name) => (
                <TechCard key={name} name={name} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ThemeSection>
  );
}
