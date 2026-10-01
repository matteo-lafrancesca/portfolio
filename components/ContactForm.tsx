"use client";

import { Button } from "./Button";

// Étiquette flottante : le placeholder vide permet à `peer` de savoir si le champ est rempli.
const wrap = "relative";
const field =
  "peer w-full rounded-xl border border-line bg-fg/[0.03] px-5 pb-3 pt-7 font-sans text-base text-fg outline-none transition-colors duration-300 placeholder-transparent hover:border-fg/30 focus:border-accent focus:bg-fg/[0.05]";
const label =
  "pointer-events-none absolute left-5 top-5 origin-left font-mono text-xs uppercase tracking-widest text-muted transition-all duration-300 peer-focus:top-2.5 peer-focus:text-[0.65rem] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[0.65rem]";

// Non branché : l'envoi arrive en Phase 6.
export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 md:grid-cols-2">
      <div className={wrap}>
        <input id="name" name="name" required autoComplete="name" placeholder=" " className={field} />
        <label htmlFor="name" className={label}>Nom</label>
      </div>
      <div className={wrap}>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder=" " className={field} />
        <label htmlFor="email" className={label}>Email</label>
      </div>
      <div className={`${wrap} md:col-span-2`}>
        <textarea id="message" name="message" required rows={6} placeholder=" " className={`${field} resize-none`} />
        <label htmlFor="message" className={label}>Message</label>
      </div>
      <div className="md:col-span-2">
        <Button type="submit" hover="C'est parti">Envoyer</Button>
      </div>
    </form>
  );
}
