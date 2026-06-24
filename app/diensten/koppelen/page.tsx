import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { integrationExamples, softwareStack } from "@/lib/site";

export const metadata: Metadata = {
  title: "Systemen koppelen — Exact, kassa, webshop & meer",
  description:
    "Bestaande systemen koppelen zonder consultancy-rekening: kassa-webshop-voorraad, Exact of AFAS koppelen, DocuSign, HR en custom API's. Data één keer invoeren, overal kloppend.",
  alternates: { canonical: "/diensten/koppelen" },
  keywords: [
    "systemen koppelen",
    "Exact koppelen",
    "AFAS koppelen",
    "kassa webshop koppeling",
    "voorraad koppeling",
    "API koppeling maatwerk",
  ],
};

const steps: { icon: IconName; title: string; body: string }[] = [
  { icon: "sparkles", title: "1 · In kaart", body: "Welke systemen je gebruikt, welke data waar leeft en waar het nu misloopt." },
  { icon: "plug", title: "2 · Koppelen", body: "Een betrouwbare koppeling via API of export/import, met foutafhandeling en logging." },
  { icon: "shield-check", title: "3 · Bewaken", body: "Monitoring en onderhoud, zodat de koppeling blijft werken als systemen updaten." },
];

export default function KoppelenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Diensten · Koppelen"
        eyebrowIcon="plug"
        title="Systemen koppelen zonder consultancy-rekening."
        lead="Je hoeft niet alles te vervangen. Vaak is de grootste winst om de systemen die je al hebt — kassa, webshop, voorraad, boekhouding, HR — met elkaar te laten praten. Data één keer invoeren, en overal klopt het."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="md" iconRight="arrow-right">
            Bespreek je koppeling
          </ButtonLink>
          <ButtonLink href="/diensten" size="md" variant="ghost">
            Alle diensten
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Veelvoorkomende koppelingen */}
      <Section className="pt-10 sm:pt-12">
        <SectionHeading
          eyebrow="Veelvoorkomende koppelingen"
          eyebrowIcon="plug"
          title="Wat ik aan elkaar knoop."
          lead="Van standaard-pakketten tot niche-software met een eigen API. De koppeling bouw ik op maat en houd ik in de lucht."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {integrationExamples.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 60}
              className="rounded-2xl border border-ink/8 bg-white p-6 shadow-sm"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={it.icon as IconName} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{it.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{it.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-ink/8 bg-bone-200/50 p-6 sm:p-7">
          <p className="text-sm font-medium text-ink/70">
            Systemen die ik vaak koppel:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {softwareStack.koppelen.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3.5 py-1.5 text-sm font-medium text-ink/75 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Hoe het werkt */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="Hoe het werkt"
          eyebrowIcon="repeat"
          title="In kaart, koppelen, bewaken."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className="rounded-2xl border border-ink/8 bg-white p-6 shadow-sm"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Welke systemen wil je koppelen?"
        body="Vertel welke pakketten je gebruikt en waar het nu misloopt. Ik vertel eerlijk wat koppelbaar is en wat het oplevert."
        primaryLabel="Bespreek je koppeling"
        secondaryLabel="Aanpak & prijs"
        secondaryHref="/aanpak"
      />
    </>
  );
}
