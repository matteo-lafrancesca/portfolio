"use client";

import { useState } from "react";
import { Button } from "./Button";

// Étiquette flottante : le placeholder vide permet à `peer` de savoir si le champ est rempli.
const wrap = "relative";
const field =
  "peer w-full rounded-xl border border-line bg-fg/[0.03] px-5 pb-3 pt-7 font-sans text-base text-fg outline-none transition-colors duration-300 placeholder-transparent hover:border-fg/30 focus:border-accent focus:bg-fg/[0.05]";
const label =
  "pointer-events-none absolute left-5 top-5 origin-left font-mono text-xs uppercase tracking-widest text-muted transition-all duration-300 peer-focus:top-2.5 peer-focus:text-[0.65rem] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[0.65rem]";

type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error);
      form.reset();
      setStatus({ state: "sent", message: "Message envoyé, merci ! Je vous réponds vite." });
    } catch (err) {
      setStatus({ state: "error", message: err instanceof Error && err.message ? err.message : "L'envoi a échoué, réessayez ou écrivez-moi directement par email." });
    }
  };

  return (
    <form onSubmit={submit} className="grid gap-4 md:grid-cols-2">
      {/* Champ piège anti-robots : hors écran, ignoré par les humains et les lecteurs d'écran. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
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
      <div className="flex flex-wrap items-center gap-6 md:col-span-2">
        <Button type="submit" disabled={status.state === "sending"} hover="C'est parti">{status.state === "sending" ? "Envoi…" : "Envoyer"}</Button>
        <p role="status" className={`font-mono text-xs uppercase tracking-widest ${status.state === "error" ? "text-accent" : "text-muted"}`}>{status.message}</p>
      </div>
    </form>
  );
}
