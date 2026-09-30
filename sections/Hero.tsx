import ThemeSection from "@/components/ThemeSection";
import { LinkButton } from "@/components/Button";
import { content } from "@/lib/content";

const ghost =
  "inline-flex rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors hover:border-fg";

export default function Hero() {
  const { firstName, lastName, role, tagline, cv } = content.identity;
  return (
    <ThemeSection theme="light" id="top" className="flex min-h-svh flex-col items-center justify-center text-center">
      <div className="w-fit text-left">
        <h1 className="font-display text-7xl uppercase leading-[0.85] md:text-[13rem]">{firstName}</h1>
        <p className="font-serif -mt-1 ml-[32%] text-6xl italic leading-none md:-mt-4 md:text-[10rem]">{lastName}</p>
      </div>
      <p className="mt-10 max-w-xl whitespace-pre-line text-lg text-muted">{tagline}</p>
      <p className="mt-8 font-mono text-xs uppercase tracking-widest text-accent">{role}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkButton href="#projects">Projets</LinkButton>
        <a href="#contact" className={ghost}>Contact</a>
        <a href={cv} download className={ghost}>CV</a>
      </div>
    </ThemeSection>
  );
}
