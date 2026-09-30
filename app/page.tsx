import { content } from "@/lib/content";

const swatches = ["bg-bg", "bg-fg", "bg-muted", "bg-accent"];

function Sample({ theme }: { theme: "light" | "dark" }) {
  const { firstName, lastName, role } = content.identity;
  return (
    <section data-theme={theme} className="bg-bg text-fg px-6 py-24 md:px-16">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">({theme})</p>
      <h1 className="font-display mt-4 text-6xl uppercase leading-none md:text-9xl">{firstName}</h1>
      <p className="font-serif -mt-1 text-6xl italic md:text-9xl">{lastName}</p>
      <p className="mt-8 max-w-xl text-lg text-muted">{role}. {content.identity.tagline}</p>
      <div className="mt-8 flex gap-3">
        {swatches.map((c) => (
          <span key={c} className={`${c} size-10 rounded-full border border-line`} />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Sample theme="light" />
      <Sample theme="dark" />
    </main>
  );
}
