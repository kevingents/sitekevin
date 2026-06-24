import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { AvgSection } from "@/components/avg-section";
import { swvCase } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case: branchevereniging meubel",
  description:
    "Hoe een branchevereniging in de meubelindustrie van Excel, Outlook en zes losse systemen naar één portaal voor 400 BBL-studenten ging.",
};

export default function SwvCasePage() {
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
            <Eyebrow icon="briefcase">Case study</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              Van Excel-chaos naar één portaal voor 400 studenten.
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink/65 sm:text-xl">
              {swvCase.intro}
            </p>
          </div>

          {/* Scale */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {swvCase.scale.map((s) => (
              <div key={s.label} className="rounded-2xl border border-ink/8 bg-white p-5 shadow-sm">
                <div className="text-3xl font-semibold tracking-tight text-brand-600">{s.value}</div>
                <div className="mt-1 text-sm text-ink/55">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vervangen systemen */}
      <Section className="py-14 sm:py-16">
        <div className="rounded-3xl border border-ink/8 bg-white p-7 shadow-sm sm:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Eyebrow icon="repeat">Vervangen</Eyebrow>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                Zeven systemen, nu één portaal.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {swvCase.replaced.map((sys) => (
                <span
                  key={sys}
                  className="rounded-full bg-bone-200/70 px-3 py-1.5 text-sm font-medium text-ink/50 line-through"
                >
                  {sys}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Probleem */}
      <Section className="pt-4">
        <SectionHeading
          align="left"
          eyebrow="Het probleem"
          eyebrowIcon="alert"
          title="Vijf knelpunten die elke week tijd en zekerheid kostten."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {swvCase.problemen.map((p, i) => (
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

      {/* Aanpak timeline */}
      <section className="bg-bone-200/50 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="De aanpak"
            eyebrowIcon="repeat"
            title="In twaalf weken live, in vier heldere fases."
            lead="Geen big bang. Een gefaseerd traject met steeds een werkend tussenresultaat en korte lijnen met binnendienst en coördinatoren."
          />
          <ol className="mt-14 space-y-4">
            {swvCase.aanpak.map((step, i) => (
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
          title="Eén bron van waarheid — en uren werk terug per week."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {swvCase.resultaten.map((r, i) => (
            <Reveal
              key={r.label}
              delay={i * 70}
              className="rounded-2xl border border-ink/8 bg-gradient-to-br from-white to-bone-200/40 p-6 text-center shadow-sm"
            >
              <div className="text-4xl font-semibold tracking-tight text-brand-600">{r.value}</div>
              <div className="mt-2 text-sm leading-snug text-ink/60">{r.label}</div>
            </Reveal>
          ))}
        </div>

        {/* Quote placeholder */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10 bg-ink p-8 text-white sm:p-12">
          <Icon name="quote" className="h-8 w-8 text-brand-300" />
          <blockquote className="mt-4 max-w-2xl text-balance text-xl font-medium leading-relaxed sm:text-2xl">
            &ldquo;Alles staat nu op één plek. We zien in één oogopslag waar actie
            nodig is, en de binnendienst is een hoop overtypwerk
            kwijtgeraakt.&rdquo;
          </blockquote>
          <figcaption className="mt-5 text-sm text-white/55">
            — Citaat wordt toegevoegd na akkoord van de klant
          </figcaption>
        </div>
      </Section>

      {/* Screenshots */}
      <section className="bg-bone-200/50 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Het portaal"
            eyebrowIcon="layout-dashboard"
            title="Een blik in de software."
            lead="Vier kernschermen uit het live portaal. Echte screenshots worden hier toegevoegd."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {swvCase.screenshots.map((shot, i) => (
              <Reveal
                key={shot.title}
                delay={i * 70}
                className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card"
              >
                {/* Placeholder-frame — vervang door echte screenshot */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-bone-200 to-white">
                  <div className="bg-dot-grid-ink absolute inset-0" aria-hidden="true" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-ink/35">
                    <Icon name="layout-dashboard" className="h-8 w-8" />
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
        </div>
      </section>

      <AvgSection />

      <CtaBand
        title="Zoiets voor jouw vereniging?"
        body="Plan een kennismaking. Ik laat dit portaal live zien en denk mee over hoe het er voor jullie processen uit zou zien."
        primaryLabel="Plan kennismaking"
        secondaryLabel="Bekijk de aanpak"
        secondaryHref="/aanpak"
      />
    </>
  );
}
