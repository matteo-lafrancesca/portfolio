import { icons } from "@/lib/icons";

// Les marques presque noires sont illisibles sur fond sombre : on les passe à la couleur du texte.
const isDark = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.299 * r + 0.587 * g + 0.114 * b < 60;
};

export default function TechCard({ name }: { name: string }) {
  const icon = icons[name];
  return (
    <div className="group flex items-center gap-4 rounded-lg border border-line bg-fg/[0.03] px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-fg/[0.07]">
      {icon ? (
        <svg viewBox="0 0 24 24" aria-hidden className="size-8 shrink-0 transition-transform duration-500 ease-out group-hover:rotate-[360deg] group-hover:scale-110" fill={isDark(icon.hex) ? "currentColor" : `#${icon.hex}`}>
          <path d={icon.path} />
        </svg>
      ) : (
        <span aria-hidden className="grid size-8 shrink-0 transition-transform duration-500 ease-out group-hover:rotate-[360deg] group-hover:scale-110 place-items-center rounded-md border border-line font-mono text-xs text-muted">
          {name.slice(0, 2)}
        </span>
      )}
      <span className="font-mono text-sm">{name}</span>
    </div>
  );
}
