import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, SplitText };

// À appeler dans un effet : pas d'animation si l'utilisateur demande moins de mouvement.
export const motionOK = () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
