"use client";

import { Button } from "./Button";

const label = "flex flex-col gap-1 font-mono text-xs uppercase tracking-widest text-muted";
const field =
  "w-full border-b border-line bg-transparent py-3 font-sans text-base normal-case tracking-normal text-fg outline-none focus:border-accent";

// Non branché : l'envoi arrive en Phase 6.
export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
      <label className={label}>
        Nom
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className={label}>
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className={label}>
        Message
        <textarea name="message" required rows={5} className={field} />
      </label>
      <Button type="submit" className="self-start">Envoyer</Button>
    </form>
  );
}
