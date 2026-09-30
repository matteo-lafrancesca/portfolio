import {
  siDocker, siFigma, siGit, siLaravel, siMongodb, siMysql, siNextdotjs, siOpenjdk,
  siPhp, siPostgresql, siPython, siReact, siSpringboot, siTypescript,
  type SimpleIcon,
} from "simple-icons";

// Nom (tel qu'écrit dans content.json) → icône. Sans entrée, la carte affiche un monogramme.
export const icons: Record<string, SimpleIcon> = {
  TypeScript: siTypescript,
  Python: siPython,
  PHP: siPhp,
  Java: siOpenjdk,
  React: siReact,
  "Next.js": siNextdotjs,
  Laravel: siLaravel,
  "Spring Boot": siSpringboot,
  Git: siGit,
  Docker: siDocker,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  MongoDB: siMongodb,
  Figma: siFigma,
};
