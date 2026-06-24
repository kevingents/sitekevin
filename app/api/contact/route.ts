import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type Payload = {
  naam?: string;
  bedrijf?: string;
  email?: string;
  telefoon?: string;
  rol?: string;
  sector?: string;
  onderwerp?: string;
  bericht?: string;
  company_website?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const onderwerpLabel: Record<string, string> = {
  demo: "Demo aanvragen",
  offerte: "Offerte",
  vraag: "Algemene vraag",
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  // Honeypot: bots vullen dit verborgen veld in
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const naam = (data.naam ?? "").trim();
  const bedrijf = (data.bedrijf ?? "").trim();
  const email = (data.email ?? "").trim();
  const telefoon = (data.telefoon ?? "").trim();
  const rol = (data.rol ?? "").trim();
  const sector = (data.sector ?? "").trim();
  const onderwerp = onderwerpLabel[data.onderwerp ?? ""] ?? "Algemene vraag";
  const bericht = (data.bericht ?? "").trim();

  if (!naam || !bedrijf || !email || !bericht) {
    return NextResponse.json({ error: "Vul alle verplichte velden in." }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Vul een geldig e-mailadres in." }, { status: 422 });
  }
  if (bericht.length > 5000) {
    return NextResponse.json({ error: "Bericht is te lang." }, { status: 422 });
  }

  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const apiKey = process.env.RESEND_API_KEY;

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;color:#0F172A;max-width:560px">
      <h2 style="margin:0 0 4px">Nieuw bericht via de website</h2>
      <p style="margin:0 0 16px;color:#64748b">Onderwerp: <strong>${escapeHtml(onderwerp)}</strong></p>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:6px 0;color:#64748b">Naam</td><td style="padding:6px 0"><strong>${escapeHtml(naam)}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#64748b">Organisatie</td><td style="padding:6px 0">${escapeHtml(bedrijf)}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b">E-mail</td><td style="padding:6px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        ${telefoon ? `<tr><td style="padding:6px 0;color:#64748b">Telefoon</td><td style="padding:6px 0">${escapeHtml(telefoon)}</td></tr>` : ""}
        ${rol ? `<tr><td style="padding:6px 0;color:#64748b">Rol</td><td style="padding:6px 0">${escapeHtml(rol)}</td></tr>` : ""}
        ${sector ? `<tr><td style="padding:6px 0;color:#64748b">Sector</td><td style="padding:6px 0">${escapeHtml(sector)}</td></tr>` : ""}
      </table>
      <div style="margin-top:16px;padding:16px;background:#F8FAFC;border-radius:12px;white-space:pre-wrap">${escapeHtml(bericht)}</div>
    </div>
  `;

  const text = [
    `Nieuw bericht via de website (${onderwerp})`,
    `Naam: ${naam}`,
    `Organisatie: ${bedrijf}`,
    `E-mail: ${email}`,
    telefoon ? `Telefoon: ${telefoon}` : "",
    rol ? `Rol: ${rol}` : "",
    sector ? `Sector: ${sector}` : "",
    "",
    bericht,
  ]
    .filter(Boolean)
    .join("\n");

  // Geen API-key geconfigureerd: in development laten we het slagen zodat
  // het formulier testbaar is. In productie geven we een nette fout.
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[contact] RESEND_API_KEY ontbreekt — bericht niet verzonden:\n" + text);
      return NextResponse.json({ ok: true, simulated: true });
    }
    return NextResponse.json(
      { error: "E-mail is nog niet geconfigureerd. Mail rechtstreeks naar " + to + "." },
      { status: 500 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Website] ${onderwerp} — ${bedrijf}`,
      html,
      text,
    });
    if (error) {
      console.error("[contact] Resend-fout:", error);
      return NextResponse.json({ error: "Versturen mislukt. Probeer het later opnieuw." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Onverwachte fout:", err);
    return NextResponse.json({ error: "Versturen mislukt. Probeer het later opnieuw." }, { status: 500 });
  }
}
