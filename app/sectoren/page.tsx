import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icon";
import { CtaBand } from "@/components/cta-band";
import { sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sectoren",
  alternates: { canonical: "/sectoren" },
  description:
    "Maatwerk portalen voor branche-verenigingen, retail, klusplatformen, horeca en dienstverlening. Eén patroon, vijf sectoren.",
};

export default function SectorenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sectoren"
        eyebrowIcon="layout-dashboard"
        title="Eén patroon, vijf sectoren."
        lead="Het probleem is overal hetzelfde: informatie versnipperd, werk handmatig, geen overzicht. De oplossing ook: één portaal. Alleen de modules verschillen per sector."
      />

      <Section className="pt-10 sm:pt-12">
        <div className="grid gap-5 md:grid-cols-2">
          {sectors.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/sectoren/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon name={s.icon as IconName} className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold tracking-tight text-ink">{s.name}</h2>
                    <p className="text-xs text-ink/45">{s.voorbeelden}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/60">{s.tagline}</p>
                <ul className="mt-5 space-y-2">
                  {s.pijnpunten.slice(0, 3).map((p) => (
                    <li key={p.title} className="flex items-start gap-2 text-sm text-ink/65">
                      <Icon name="alert" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" />
                      {p.title}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Lees meer over {s.short.toLowerCase()}
                  <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}

          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-ink/15 bg-bone-200/40 p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-ink/40 shadow-sm">
              <Icon name="message-circle" className="h-5 w-5" />
            </span>
            <h2 className="mt-4 text-lg font-semibold tracking-tight text-ink">
              Andere sector?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Mbo-instellingen, O&amp;O-fondsen, sportclubs, franchise-organisaties —
              het patroon is universeel. Staat jouw sector er niet bij? Laten we
              kijken of het past.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Neem contact op
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Niet zeker of jouw situatie past?"
        body="Plan een kennismaking. Ik laat de live case zien en vertaal de patronen naar jouw sector — eerlijk, ook als een portaal (nog) niet de beste keuze is."
      />
    </>
  );
}
