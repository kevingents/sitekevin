import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { AvgSection } from "@/components/avg-section";
import { sectors, getSector, cases } from "@/lib/site";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const sector = getSector(params.slug);
  if (!sector) return {};
  return {
    title: `${sector.name} portaal`,
    description: sector.tagline,
    alternates: { canonical: `/sectoren/${sector.slug}` },
  };
}

export default function SectorDetailPage({ params }: { params: { slug: string } }) {
  const sector = getSector(params.slug);
  if (!sector) notFound();

  const relatedCase = sector.relatedCaseSlug ? cases[sector.relatedCaseSlug] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 -top-40 -z-10 h-[34rem] bg-gradient-to-b from-brand-50 via-bone to-bone"
          aria-hidden="true"
        />
        <div
          className="absolute -right-32 -top-10 -z-10 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page pb-6 pt-12 sm:pt-16">
          <Link
            href="/sectoren"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink/55 transition-colors hover:text-ink"
          >
            <Icon name="arrow-left" className="h-4 w-4" />
            Alle sectoren
          </Link>

          <div className="mt-6 max-w-3xl animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon name={sector.icon as IconName} className="h-6 w-6" />
              </span>
              <Eyebrow icon="layout-dashboard">{sector.name}</Eyebrow>
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Eén systeem voor {sector.name.toLowerCase()}.
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink/65 sm:text-xl">
              {sector.tagline}
            </p>
            <p className="mt-3 text-sm text-ink/45">Typisch voor: {sector.voorbeelden}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="md" iconRight="arrow-right">
                Plan kennismaking
              </ButtonLink>
              <ButtonLink
                href={relatedCase ? `/werk/${relatedCase.slug}` : "/werk"}
                size="md"
                variant="ghost"
              >
                Bekijk de live case
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Pijnpunten */}
      <Section className="pt-14 sm:pt-16">
        <SectionHeading
          align="left"
          eyebrow="Herken je dit?"
          eyebrowIcon="alert"
          title="De knelpunten in deze sector."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sector.pijnpunten.map((p, i) => (
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

      {/* Modules */}
      <section className="bg-bone-200/50 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Wat het portaal voor jou doet"
            eyebrowIcon="layout-dashboard"
            title="Modules voor deze sector."
            lead="De universele kern — rollen, workflows, documentbeheer en AVG — aangevuld met functionaliteit die past bij jouw werk."
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sector.modules.map((m, i) => (
              <Reveal
                key={m}
                delay={i * 50}
                className="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white p-5 shadow-sm"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="text-sm font-medium text-ink">{m}</span>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Vergelijkbare klanten / case */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Eyebrow icon="briefcase">Vergelijkbaar werk</Eyebrow>
            <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {relatedCase ? "De live case in deze sector." : "Bewezen patroon, nieuwe sector."}
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-ink/65">
              {relatedCase
                ? relatedCase.intro
                : "Mijn cases draaien bij een branchevereniging in de meubelindustrie en bij GENTS (omnichannel retail). Dezelfde aanpak past op jouw sector — bouwen, koppelen en handmatig werk vervangen."}
            </p>
            <div className="mt-6">
              <ButtonLink
                href={relatedCase ? `/werk/${relatedCase.slug}` : "/werk"}
                size="md"
                iconRight="arrow-right"
              >
                {relatedCase ? "Lees de case study" : "Bekijk het werk"}
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-ink/8 bg-gradient-to-br from-ink to-ink-700 p-7 text-white shadow-card sm:p-8">
            <Eyebrow icon="trending-up" tone="light">
              Indicatie
            </Eyebrow>
            <p className="mt-4 text-pretty leading-relaxed text-white/75">{sector.priceHint}</p>
            <div className="mt-6 border-t border-white/10 pt-5 text-sm text-white/55">
              Geen vaste prijslijst — wel volledige transparantie.{" "}
              <Link href="/aanpak" className="font-semibold text-brand-200 hover:text-brand-100">
                Bekijk wat de prijs bepaalt →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <AvgSection />

      <CtaBand
        title={`Een systeem voor ${sector.name.toLowerCase()}?`}
        body="Plan een kennismaking van 30 minuten. Ik laat de live case zien en vertaal de aanpak naar jouw situatie."
        secondaryLabel="Andere sectoren"
        secondaryHref="/sectoren"
      />
    </>
  );
}
