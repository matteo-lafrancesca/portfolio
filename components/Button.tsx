import type { ComponentProps } from "react";
import Magnetic from "@/components/Magnetic";
import RollText from "@/components/RollText";

const base =
  "group/roll inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-mono text-xs uppercase md:px-8 md:py-4 md:text-sm tracking-widest transition-colors duration-300";
const variants = {
  primary: "bg-accent text-black hover:bg-fg hover:text-bg",
  ghost: "border border-line hover:border-fg hover:bg-fg hover:text-bg",
};

type Variant = { variant?: keyof typeof variants; children: string; hover?: string };

export function LinkButton({ variant = "primary", className = "", children, hover, ...props }: ComponentProps<"a"> & Variant) {
  return (
    <Magnetic className={className}>
      <a {...props} className={`${base} ${variants[variant]}`}>
        <RollText hover={hover}>{children}</RollText>
      </a>
    </Magnetic>
  );
}

export function Button({ variant = "primary", className = "", children, hover, ...props }: ComponentProps<"button"> & Variant) {
  return (
    <Magnetic className={className}>
      <button {...props} className={`${base} ${variants[variant]}`}>
        <RollText hover={hover}>{children}</RollText>
      </button>
    </Magnetic>
  );
}
