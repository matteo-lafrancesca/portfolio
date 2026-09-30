import { content } from "@/lib/content";

export default function Footer() {
  const { firstName, lastName } = content.identity;
  return (
    <footer
      data-theme="dark"
      className="bg-bg text-muted flex flex-col items-center gap-3 border-t border-line px-6 py-8 font-mono text-xs uppercase tracking-widest md:flex-row md:justify-center md:gap-10 md:px-16"
    >
      <span>© {new Date().getFullYear()} {firstName} {lastName}</span>
      <span className="flex gap-6">
        <a href={content.links.github} className="hover:text-fg">GitHub</a>
        <a href={content.links.linkedin} className="hover:text-fg">LinkedIn</a>
      </span>
    </footer>
  );
}
