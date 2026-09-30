import Link from "next/link";
import { content } from "@/lib/content";

const nav = [
  { href: "/#about", label: "À propos" },
  { href: "/#projects", label: "Projets" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-6 font-sans text-sm uppercase tracking-wider text-neutral-500 md:px-14 md:text-lg">
      <Link href="/#top">{content.identity.firstName}</Link>
      <nav className="flex gap-5 md:gap-8">
        {nav.map((n) => (
          <Link key={n.href} href={n.href} className="hover:opacity-60">
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
