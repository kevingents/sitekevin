# Kevin van Willigenburg — ZZP-site

Verkoopsite voor branche-portalen (BBL-administratie voor branche-verenigingen).
Next.js 14 (App Router) · TypeScript · Tailwind CSS · Resend.

## Lokaal draaien

```bash
npm install
cp .env.local.example .env.local   # vul de waarden in
npm run dev
```

De site draait op http://localhost:3000.

> Het contactformulier werkt zonder `RESEND_API_KEY` in development:
> inzendingen worden dan in de console gelogd in plaats van gemaild.

## Omgevingsvariabelen

| Variabele | Verplicht | Uitleg |
|---|---|---|
| `RESEND_API_KEY` | voor mail | API-key van [resend.com](https://resend.com) (gratis tier: 100 mails/dag). |
| `RESEND_FROM_EMAIL` | voor mail | Afzender, bv. `Kevin <kevin@jouwdomein.nl>`. Domein moet geverifieerd zijn in Resend. |
| `CONTACT_TO_EMAIL` | nee | Waar inzendingen heen gaan. Default: `kevin@gents.nl`. |
| `NEXT_PUBLIC_SITE_URL` | aanrader | Volledige URL voor canonical/OG/sitemap. |
| `NEXT_PUBLIC_CAL_LINK` | nee | Cal.com pad (bv. `kevin/kennismaking`) — toont de planner op /contact. |
| `NEXT_PUBLIC_WHATSAPP` | nee | WhatsApp-nummer (internationaal, zonder +), toont een WhatsApp-knop. |

## Structuur

```
app/
  layout.tsx            Root layout (header + footer + cookie-banner + metadata)
  page.tsx              Home (multi-sector hero + interactieve sector-filter)
  sectoren/             Sectoren-overzicht
  sectoren/[slug]/      Sector-detailpagina's (branche, retail, klus, horeca, diensten)
  diensten/             Diensten (universeel, prijs per project)
  werk/                 Werk-overzicht
  werk/swv-meubel/      Case study (anoniem, naam later in te vullen)
  aanpak/               Aanpak & prijs: vergelijking + ROI-calculator + FAQ
  over/                 Over
  contact/              Contact (formulier + Cal.com embed)
  avg/ privacy/ voorwaarden/   AVG-verhaal + juridische pagina's (concept)
  api/contact/route.ts  Verstuurt het contactformulier via Resend
  opengraph-image.tsx   Gegenereerde OG-image voor LinkedIn/social
  sitemap.ts robots.ts not-found.tsx
components/             Herbruikbare UI (header, footer, secties, sector-filter, animaties)
lib/site.ts             Eén bron van waarheid: nav, sectoren, diensten, vergelijking, case
```

De 5 sectoren draaien op één dynamische route (`sectoren/[slug]`) die de content
uit `lib/site.ts` rendert — nieuwe sector toevoegen = een item in de `sectors`-array.

### Prijsmodel

Geen vaste prijslijst (bewuste keuze): de `/aanpak`-pagina toont waar maatwerk
tussen de alternatieven staat, wat de prijs bepaalt, en een ROI-calculator die
alleen de besparing laat zien. Wil je toch vaste pakketten (Starter/Pro/Custom)?
Die stonden in een eerdere versie en zijn terug te halen.

## Inhoud aanpassen

De meeste teksten (navigatie, sectoren, diensten, vergelijking, case, FAQ,
bedrijfsgegevens) staan centraal in [`lib/site.ts`](lib/site.ts). Pas daar aan in
plaats van in de pagina's.

Nog in te vullen:
- **Bedrijfsgegevens** (`site.kvk`, `site.btw`, telefoon) in `lib/site.ts`.
- **Klantnaam** in de case study — nu anoniem; vervang in `lib/site.ts` (`swvCase`).
- **Screenshots** op de case- en sectorpagina's (placeholders staan klaar).
- **Foto** op de Over-pagina (placeholder staat klaar).
- **Klant-quote** op de case-pagina.
- **Juridische teksten** (`/privacy`, `/voorwaarden`) — concept, laat juridisch checken.

## Deploy (Vercel)

1. Push de repo naar GitHub.
2. Importeer in Vercel — framework wordt automatisch herkend (Next.js).
3. Zet de omgevingsvariabelen onder **Settings → Environment Variables**.
4. Koppel het domein onder **Settings → Domains**.

Auto-deploy bij elke push naar `main`.
