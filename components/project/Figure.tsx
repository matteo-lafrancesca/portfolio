import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { ProjectImage } from "@/lib/content";

// Capture au ratio d'origine (jamais rognée). `sizes` guide next/image pour servir la bonne largeur.
export default function Figure({ image, alt, sizes, caption }: { image: ProjectImage; alt: string; sizes: string; caption?: string }) {
  return (
    <Reveal>
      <figure>
        <Image
          src={image.src}
          alt={alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          className="h-auto w-full rounded-2xl border border-line"
        />
        {caption && <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted">{caption}</figcaption>}
      </figure>
    </Reveal>
  );
}
