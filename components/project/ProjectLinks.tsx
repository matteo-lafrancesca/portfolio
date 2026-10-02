import { LinkButton } from "@/components/Button";
import type { Project } from "@/lib/content";

// Boutons Live / Code : chacun n'apparaît que si le lien existe.
export default function ProjectLinks({ links, className = "" }: { links: Project["links"]; className?: string }) {
  if (!links.live && !links.repo) return null;
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.live && (
        <LinkButton href={links.live} target="_blank" rel="noreferrer" hover="Ouvrir ↗">
          Voir le site
        </LinkButton>
      )}
      {links.repo && (
        <LinkButton href={links.repo} target="_blank" rel="noreferrer" variant="ghost" hover="GitHub ↗">
          Code source
        </LinkButton>
      )}
    </div>
  );
}
