import Figure from "@/components/project/Figure";
import SectionTitle from "@/components/SectionTitle";
import type { ProjectImage } from "@/lib/content";

const ratio = (i: ProjectImage) => i.width / i.height;

// Captures portrait consécutives (écrans mobiles) regroupées sur une ligne ; les autres en pleine largeur.
// Les petites images ne sont pas agrandies au-delà de leur taille d'origine (ou de `displayWidth`).
function groupImages(images: ProjectImage[]) {
  const rows: ProjectImage[][] = [];
  for (const img of images) {
    const last = rows[rows.length - 1];
    if (ratio(img) < 1 && last && ratio(last[0]) < 1) last.push(img);
    else rows.push([img]);
  }
  return rows;
}

export default function Gallery({ title, images }: { title: string; images: ProjectImage[] }) {
  const total = images.length;
  let n = 0;
  const caption = () => `${String(++n).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <div>
      <SectionTitle accent="Galerie" align="left" small />
      <div className="mt-10 flex flex-col gap-8 md:mt-14 md:gap-14">
        {groupImages(images).map((row, k) => {
          // Alternance gauche / droite sur grand écran, largeur réduite : les captures ne sont pas très nettes.
          const side = `md:w-[65%] ${k % 2 ? "md:ml-auto" : ""}`;
          return row.length > 1 ? (
            <div key={row[0].src} className="flex items-start justify-between">
              {row.map((img) => (
                <div key={img.src} className="w-[27%]">
                  <Figure image={img} alt={`${title}, capture ${n + 1}`} sizes="(min-width: 1152px) 310px, 27vw" caption={caption()} />
                </div>
              ))}
            </div>
          ) : (
            <div key={row[0].src} className={`w-full ${side}`} style={{ maxWidth: row[0].displayWidth ?? row[0].width }}>
              <Figure image={row[0]} alt={`${title}, capture ${n + 1}`} sizes="(min-width: 1152px) 750px, 100vw" caption={caption()} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
