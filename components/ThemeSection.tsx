const arc = "rounded-b-[50%_0.5rem] md:rounded-b-[50%_0.875rem]";
const overlap = "-mt-2 md:-mt-3.5"; // passe sous l'arrondi de la section précédente

// Jonctions entre sections : Hero collé, rideau à coins arrondis (About), puis arcs.
const variants = {
  plain: "relative",
  hero: "sticky top-0",
  curtain: `relative z-20 -mt-10 rounded-t-[2.5rem] md:-mt-14 md:rounded-t-[3.5rem] ${arc}`,
  arc: `relative z-10 ${overlap} ${arc}`,
  last: `relative ${overlap}`,
};

export default function ThemeSection({
  theme,
  id,
  className = "",
  variant = "plain",
  children,
}: {
  theme: "light" | "dark";
  id?: string;
  className?: string;
  variant?: keyof typeof variants;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-theme={theme}
      className={`bg-bg text-fg px-6 py-24 md:px-16 md:py-32 ${variants[variant]} ${className}`}
    >
      {children}
    </section>
  );
}
