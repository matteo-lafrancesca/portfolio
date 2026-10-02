import ThemeSection from "@/components/ThemeSection";
import SplitHeading from "@/components/SplitHeading";
import { LinkButton } from "@/components/Button";
import { content } from "@/lib/content";

export default function Hero() {
  const { firstName, lastName, role, tagline, cv } = content.identity;
  return (
    <ThemeSection theme="light" id="top" variant="hero" className="flex min-h-[calc(100svh+2.5rem)] flex-col items-center justify-center pb-[8.5rem] text-center md:min-h-[calc(100svh+3.5rem)] md:pb-[11.5rem]">
      <div data-curtain className="flex flex-col items-center">
      <div data-wave-group className="w-fit text-left">
        <SplitHeading as="h1" type="chars" className="font-display whitespace-nowrap text-[19vw] uppercase leading-[0.85] md:text-[13rem]">{firstName}</SplitHeading>
        <SplitHeading as="p" type="chars" waveFrom="start" className="font-serif whitespace-nowrap -mt-1 ml-[32%] text-[13.5vw] italic leading-none md:-mt-4 md:text-[10rem]">{lastName}</SplitHeading>
      </div>
      <p data-intro="text" className="mt-10 max-w-xl whitespace-pre-line text-lg text-muted">{tagline}</p>
      <p data-intro="text" className="mt-8 font-mono text-xs uppercase tracking-widest text-accent">{role}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkButton data-intro="btn" href="#projects" hover="Découvrir">Projets</LinkButton>
        <LinkButton data-intro="btn" variant="ghost" href="#contact" hover="écrivez moi">Contact</LinkButton>
        <LinkButton data-intro="btn" variant="ghost" href={cv} target="_blank" rel="noopener noreferrer" hover="Ouvrir">CV</LinkButton>
      </div>
      </div>
    </ThemeSection>
  );
}
