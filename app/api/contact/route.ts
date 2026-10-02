const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL = "Portfolio <onboarding@resend.dev>" } = process.env;

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " "); // pas de saut de ligne dans l'objet du mail
const EMAIL = /^[^\s@<>(),;:"]+@[^\s@<>(),;:"]+\.[^\s@<>(),;:"]+$/;
const MAX_BODY = 10_000; // octets : largement assez pour un message de 5000 caractères

// Limite de fréquence : 3 envois / 10 min par IP, 30 / heure au total (le quota Resend gratuit est limité).
// ponytail: mémoire d'une instance serverless, donc contournable et remise à zéro à chaque démarrage à froid.
// Pour une vraie limite : règle de rate limiting dans Vercel Firewall (ou Upstash Redis).
const hits = new Map<string, number[]>();
const limited = (ip: string) => {
  const now = Date.now();
  const recent = (key: string, window: number) => (hits.get(key) ?? []).filter((t) => now - t < window);
  const mine = recent(ip, 600_000);
  const all = recent("*", 3_600_000);
  if (mine.length >= 3 || all.length >= 30) return true;
  hits.set(ip, [...mine, now]);
  hits.set("*", [...all, now]);
  return false;
};

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Mail aux couleurs du portfolio. Styles inline et polices système : seul moyen fiable dans les clients mail.
const html = (name: string, email: string, message: string) => `
<div style="margin:0;padding:0 16px;background:#1b211f;font-family:Helvetica,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:96px 40px;background:#090d0c;color:#e6eae7">
    <p style="margin:0 0 24px;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#8a9690">(Nouveau message)</p>
    <h1 style="margin:0 0 4px;font-size:30px;line-height:1.1;font-weight:900;text-transform:uppercase;color:#e6eae7">${esc(name)}</h1>
    <a href="mailto:${esc(email)}" style="font-family:Georgia,serif;font-style:italic;font-size:20px;color:#ff5a1f;text-decoration:none">${esc(email)}</a>
    <div style="margin:28px 0;border-top:1px solid #2a302d"></div>
    <p style="margin:0;font-size:16px;line-height:1.6;white-space:pre-wrap;color:#e6eae7">${esc(message)}</p>
    <a href="mailto:${esc(email)}?subject=${encodeURIComponent("Re : ton message")}" style="display:inline-block;margin-top:32px;padding:14px 28px;border-radius:999px;background:#ff5a1f;color:#000;font-size:12px;letter-spacing:3px;text-transform:uppercase;text-decoration:none">Répondre</a>
  </div>
</div>`;

const fail = (error: string, status: number) => Response.json({ error }, { status });

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "inconnue";
  if (limited(ip)) return fail("Trop de messages envoyés, réessayez plus tard.", 429);

  const raw = await request.text();
  if (raw.length > MAX_BODY) return fail("Message trop long.", 413);
  const body = (() => {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  })();
  if (!body || typeof body !== "object" || Array.isArray(body)) return fail("Requête invalide.", 400);

  // Champ piège : invisible pour un humain, rempli par les robots. On répond « ok » sans rien envoyer.
  if (body.website) return Response.json({ ok: true });

  const name = oneLine(clean(body.name, 100));
  const email = clean(body.email, 200);
  const message = clean(body.message, 5000);
  if (!name || !message || !EMAIL.test(email)) return fail("Merci de remplir correctement tous les champs.", 400);

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error("Contact : RESEND_API_KEY ou CONTACT_TO_EMAIL manquant.");
    return fail("Le service d'envoi n'est pas configuré.", 500);
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `Message de ${name}`,
      html: html(name, email, message),
      text: `De : ${name} <${email}>\n\n${message}`,
    }),
    signal: AbortSignal.timeout(8000),
  }).catch(() => null);

  if (!res?.ok) {
    console.error("Contact : échec Resend", res?.status, await res?.text());
    return fail("L'envoi a échoué, réessayez ou écrivez-moi directement par email.", 502);
  }
  return Response.json({ ok: true });
}
