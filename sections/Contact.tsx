import ThemeSection from "@/components/ThemeSection";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { content } from "@/lib/content";

export default function Contact() {
  const { email } = content.identity;
  return (
    <ThemeSection theme="dark" id="contact">
      <SectionTitle label="Contact" before="Parlons" accent="ensemble" />
      <a href={`mailto:${email}`} className="font-serif mt-10 block text-center text-2xl italic hover:text-accent">
        {email}
      </a>
      <div className="mx-auto mt-16 max-w-xl">
        <ContactForm />
      </div>
    </ThemeSection>
  );
}
