import RollText from "@/components/RollText";
import { content } from "@/lib/content";

const menu = [
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

const heading = "font-sans text-lg uppercase tracking-wider text-fg";
const link = "group/roll font-sans text-sm uppercase tracking-wider transition-colors hover:text-fg";

export default function Footer() {
  const socials = [
    { href: content.links.github, label: "GitHub" },
    { href: content.links.linkedin, label: "LinkedIn" },
  ];
  return (
    <footer data-theme="dark" className="bg-bg px-6 pb-16 pt-20 text-muted md:px-16 md:pb-20 md:pt-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:min-h-[18rem] md:grid-cols-3">
        <nav aria-label="Menu" className="flex flex-col gap-4">
          <h2 className={heading}>Menu</h2>
          {menu.map((m) => (
            <a key={m.href} href={m.href} className={link}>
              <RollText>{m.label}</RollText>
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-4">
          <h2 className={heading}>Réseaux</h2>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={link}>
              <RollText>{s.label}</RollText>
            </a>
          ))}
        </div>
        {/* Troisième colonne : libre pour l'instant */}
        <div className="flex md:justify-end md:self-end">
          <a
            href="#top"
            aria-label="Retour en haut"
            className="group grid size-12 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
          >
            <svg viewBox="0 0 24 24" aria-hidden className="size-5 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
