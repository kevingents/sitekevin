import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { gentsCase } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case: GENTS — omnichannel retail",
  alternates: { canonical: "/werk/gents" },
  description:
    "Hoe GENTS van losse kassa, webshop en voorraad naar één omnichannel-keten ging: kassa en webshop gebouwd én gekoppeld, met realtime voorraad en één klantbeeld.",
};

export default function GentsCasePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 -top-40 -z-10 h-[34rem] bg-gradient-to-b from-brand-50 via-bone to-bone"
          aria-hidden="true"
        />
        <div className="container-page pb-6 pt-12 sm:pt-16">
          <Link
            href="/werk"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/55 transition-colors hover:text-ink"
          >
            <Icon name="arrow-left" className="h-4 w-4" />
            Terug naar werk
          </Link>

          <div className="mt-6 max-w-3xl animate-fade-up">
            <Eyebrow icon="building-2">Case study · {gentsCase.type}</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Kassa, webshop en voorraad als één keten.
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink/65 sm:text-xl">
              {gentsCase.intro}
            </p>
          </div>

          {/* Geleverd */}
          <div className="mt-10">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
              Gebouwd & gekoppeld
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {gentsCase.geleverd.map((g) => (
                <span
                  key={g}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-white px-3 py-1.5 text-sm font-medium text-ink/70 shadow-sm"
                >
                  <Icon name="check" className="h-3.5 w-3.5 text-brand-600" strokeWidth={2.5} />
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Probleem */}
      <Section className="pt-14 sm:pt-16">
        <SectionHeading
          align="left"
          eyebrow="Het probleem"
          eyebrowIcon="alert"
          title="Online en winkel draaiden langs elkaar heen."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {gentsCase.problemen.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-ink/8 bg-white p-6 shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-600">
                {i + 1}
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Aanpak */}
      <section className="bg-bone-200/50 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="De aanpak"
            eyebrowIcon="repeat"
            title="Bouwen, koppelen, samenvoegen, automatiseren."
            lead="Niet alleen een nieuw systeem ernaast, maar de kanalen écht aan elkaar verbinden tot één werkende keten."
          />
          <ol className="mt-14 space-y-4">
            {gentsCase.aanpak.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 70}
                as="li"
                className="flex flex-col gap-4 rounded-2xl border border-ink/8 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:gap-8 sm:p-7"
              >
                <div className="flex items-center gap-4 sm:w-48 sm:shrink-0">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                    {step.week}
                  </span>
                </div>
                <div className="sm:border-l sm:border-ink/8 sm:pl-8">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Resultaat */}
      <Section>
        <SectionHeading
          eyebrow="Het resultaat"
          eyebrowIcon="trending-up"
          title="Eén keten, één klantbeeld, realtime voorraad."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gentsCase.resultaten.map((r, i) => (
            <Reveal
              key={r.label}
              delay={i * 70}
              className="rounded-2xl border border-ink/8 bg-gradient-to-br from-white to-bone-200/40 p-6 text-center shadow-sm"
            >
              <div className="text-3xl font-semibold tracking-tight text-brand-600">{r.value}</div>
              <div className="mt-2 text-sm leading-snug text-ink/60">{r.label}</div>
            </Reveal>
          ))}
        </div>

        {/* Screenshots */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {gentsCase.screenshots.map((shot, i) => (
            <Reveal
              key={shot.title}
              delay={i * 70}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-bone-200 to-white">
                <div className="bg-dot-grid-ink absolute inset-0" aria-hidden="true" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ink/35">
                  <Icon name="building-2" className="h-8 w-8" />
                  <span className="text-xs font-medium uppercase tracking-wide">Screenshot volgt</span>
                </div>
              </div>
              <div className="border-t border-ink/8 p-5">
                <h3 className="text-sm font-semibold tracking-tight text-ink">{shot.title}</h3>
                <p className="mt-1 text-sm text-ink/55">{shot.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink/40">
          Deze case is een beknopte weergave — exacte cijfers en screenshots worden in
          overleg toegevoegd.
        </p>
      </Section>

      <CtaBand
        title="Online en winkel die samenwerken?"
        body="Plan een kennismaking. Of je nu een kassa, webshop of de koppeling daartussen nodig hebt — ik bouw en verbind het op maat."
        secondaryLabel="Andere cases"
        secondaryHref="/werk"
      />
    </>
  );
}
