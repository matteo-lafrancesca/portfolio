import type { ComponentProps } from "react";

const cls =
  "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-black transition-opacity hover:opacity-80";

export function LinkButton({ className = "", ...props }: ComponentProps<"a">) {
  return <a {...props} className={`${cls} ${className}`} />;
}

export function Button({ className = "", ...props }: ComponentProps<"button">) {
  return <button {...props} className={`${cls} ${className}`} />;
}
