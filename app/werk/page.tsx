import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { swvCase, gentsCase } from "@/lib/site";

export const metadata: Metadata = {
  title: "Werk",
  alternates: { canonical: "/werk" },
  description:
    "Cases: een branchevereniging in de meubelindustrie (BBL-portaal voor 400 studenten) en GENTS (omnichannel retail — kassa, webshop en voorraad als één keten).",
};

export default function WerkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Werk"
        eyebrowIcon="briefcase"
        title="Echte software, echte processen vervangen."
        lead="Geen mockups voor de bühne. Een live BBL-portaal voor een branchevereniging, en een omnichannel-keten voor GENTS — gebouwd, gekoppeld en in gebruik."
      />

      <Section className="pt-10 sm:pt-12">
        {/* Flagship case */}
        <Reveal className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-card-lg">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                <Icon name="sparkles" className="h-3.5 w-3.5" />
                Flagship-case
              </span>
              <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {swvCase.klant}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-ink/65">{swvCase.intro}</p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {swvCase.replaced.slice(0, 5).map((sys) => (
                  <li
                    key={sys}
                    className="rounded-full bg-bone-200/70 px-3 py-1 text-xs font-medium text-ink/55 line-through"
                  >
                    {sys}
                  </li>
                ))}
                <li className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                  → 1 portaal
                </li>
              </ul>

              <div className="mt-8">
                <ButtonLink href="/werk/swv-meubel" size="md" iconRight="arrow-right">
                  Lees de volledige case study
                </ButtonLink>
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-px bg-ink/8 lg:grid-cols-2">
              {swvCase.scale.map((s) => (
                <div key={s.label} className="flex flex-col justify-center bg-white p-6 sm:p-8">
                  <div className="text-3xl font-semibold tracking-tight text-brand-600 sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-ink/55">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Tweede case — GENTS */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <Link
              href="/werk/gents"
              className="group flex flex-col gap-6 rounded-2xl border border-ink/8 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card sm:flex-row sm:items-center sm:gap-10"
            >
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-bone-200/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
                  <Icon name="building-2" className="h-3.5 w-3.5" />
                  {gentsCase.type}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">
                  {gentsCase.klant}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{gentsCase.intro}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {gentsCase.geleverd.map((g) => (
                    <li
                      key={g}
                      className="rounded-full border border-ink/8 bg-bone-200/40 px-3 py-1 text-xs font-medium text-ink/60"
                    >
                      {g}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Lees de case study
                  <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
              <div className="grid w-full grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink/8 sm:w-72">
                {gentsCase.resultaten.slice(0, 4).map((r) => (
                  <div key={r.label} className="bg-white p-4 text-center">
                    <div className="text-lg font-semibold tracking-tight text-brand-600">{r.value}</div>
                    <div className="mt-0.5 text-[0.7rem] leading-tight text-ink/55">{r.label}</div>
                  </div>
                ))}
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col justify-between rounded-2xl border border-dashed border-ink/15 bg-bone-200/40 p-8">
            <div>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-ink/40 shadow-sm">
                <Icon name="briefcase" className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                Volgende case in de maak
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Nieuwe systemen en koppelingen voor klanten in andere sectoren staan
                op de planning. Wordt vervolgd.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-ink/8 bg-white p-8 shadow-sm">
            <div>
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name="message-circle" className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                Wordt jouw organisatie de volgende?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Ik werk met een beperkt aantal opdrachtgevers tegelijk, zodat elk
                project de aandacht krijgt die het verdient.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Neem contact op
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Bekijk het portaal van binnen."
        body="Plan een demo van 30 minuten. Ik laat het werkende portaal zien aan de hand van echte schermen — geen verkooppraatje, gewoon de software."
        primaryLabel="Plan een demo"
        secondaryLabel="Lees de case"
        secondaryHref="/werk/swv-meubel"
      />
    </>
  );
}
