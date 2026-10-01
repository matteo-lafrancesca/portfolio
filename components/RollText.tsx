// Le texte défile vers le haut au survol (vers `hover` s'il est fourni). À placer dans un parent `group/roll`.
// Les deux textes occupent la même cellule de grille : la largeur est celle du plus long, rien ne déborde.
export default function RollText({ children, hover = children }: { children: string; hover?: string }) {
  const cell = "col-start-1 row-start-1 block text-center transition-transform duration-300 ease-out";
  return (
    <span className="inline-grid overflow-hidden whitespace-nowrap align-bottom leading-[1.3]">
      <span className={`${cell} group-hover/roll:-translate-y-full`}>{children}</span>
      <span aria-hidden className={`${cell} translate-y-full group-hover/roll:translate-y-0`}>
        {hover}
      </span>
    </span>
  );
}
