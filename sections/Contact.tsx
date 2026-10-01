import ThemeSection from "@/components/ThemeSection";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import CopyEmail from "@/components/CopyEmail";
import Reveal from "@/components/Reveal";
import { content } from "@/lib/content";

export default function Contact() {
  const { email } = content.identity;
  return (
    <ThemeSection theme="dark" id="contact" variant="last" className="py-32 md:py-48">
      <SectionTitle label="Contact" before="Parlons" accent="ensemble" />
      <Reveal className="mx-auto mt-10 max-w-2xl text-center text-lg text-muted md:text-xl">
        Un projet à lancer, un poste à pourvoir ou simplement une idée à partager ? Dites-m&apos;en un peu plus,
        je vous réponds avec plaisir.
      </Reveal>

      <Reveal className="mx-auto mt-16 max-w-3xl">
        <ContactForm />
      </Reveal>

      <Reveal className="mx-auto mt-28 max-w-3xl border-t border-line pt-16 text-center">
        <p className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">(Contact direct)</p>
        <CopyEmail email={email} />
      </Reveal>
    </ThemeSection>
  );
}
