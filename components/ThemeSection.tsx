export default function ThemeSection({
  theme,
  id,
  className = "",
  children,
}: {
  theme: "light" | "dark";
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-theme={theme}
      className={`bg-bg text-fg px-6 py-24 md:px-16 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
}
