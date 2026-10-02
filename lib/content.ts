import raw from "@/content/content.json";

// Champs optionnels : une section absente n'est pas affichée sur la page projet.
// displayWidth : largeur d'affichage max en px, pour réduire une capture peu nette.
export type ProjectImage = { src: string; width: number; height: number; displayWidth?: number };

export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  description: string;
  stack: string[];
  image: string; // cover : aperçu au survol dans la liste
  links: { live?: string; repo?: string };
  architecture?: string;
  technical?: string;
  keyPoints?: string[];
  images?: ProjectImage[]; // galerie, dans l'ordre d'affichage
};

export const content = { ...raw, projects: raw.projects as Project[] };
