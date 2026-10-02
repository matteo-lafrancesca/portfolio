import CopyEmail from "@/components/CopyEmail";
import { content } from "@/lib/content";

// Pied de page des projets : email copiable au centre, flèche de retour en haut à droite.
export default function ContactBar() {
  return (
    <footer className="relative flex flex-col items-center gap-4 pt-16 text-center">
      <p className="text-muted">Un projet en tête ?</p>
      <CopyEmail email={content.identity.email} small />
      <a
        href="#top"
        aria-label="Retour en haut"
        className="group mt-6 grid size-12 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent md:absolute md:right-0 md:bottom-0 md:mt-0"
      >
        <svg viewBox="0 0 24 24" aria-hidden className="size-5 transition-transform duration-300 group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </footer>
  );
}
