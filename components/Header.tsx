import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import RollText from "@/components/RollText";
import { content } from "@/lib/content";

const nav = [
  { href: "/#about", label: "À propos" },
  { href: "/#projects", label: "Projets" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 font-sans text-sm uppercase tracking-wider text-neutral-500 md:px-14 md:text-lg">
      <Magnetic><Link data-intro="header" href="/#top" className="group/roll"><RollText>{content.identity.firstName}</RollText></Link></Magnetic>
      <nav className="flex gap-5 md:gap-8">
        {nav.map((n) => (
          <Magnetic key={n.href}>
            <Link data-intro="header" href={n.href} className="group/roll hover:text-fg">
              <RollText>{n.label}</RollText>
            </Link>
          </Magnetic>
        ))}
      </nav>
    </header>
  );
}
