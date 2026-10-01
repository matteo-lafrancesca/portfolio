"use client";

import { useState } from "react";

// Un clic copie l'adresse dans le presse-papiers.
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      location.href = `mailto:${email}`; // presse-papiers indisponible : on ouvre le client mail
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={copy}
        className="font-serif cursor-pointer bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-bottom bg-no-repeat text-3xl italic transition-[background-size,color] duration-500 hover:bg-[length:100%_1px] hover:text-accent md:text-6xl"
      >
        {email}
      </button>
      <p aria-live="polite" className="font-mono text-xs uppercase tracking-widest text-muted">
        {copied ? "Adresse copiée ✓" : "Cliquer pour copier l'adresse"}
      </p>
    </div>
  );
}
