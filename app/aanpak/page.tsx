import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { RoiCalculator } from "@/components/roi-calculator";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/utils";
import { comparison, priceFactors, aanpakFaq } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aanpak & wat het kost",
  description:
    "Wat kost een maatwerk portaal? Geen vaste prijslijst, wel volledige transparantie: waar het tussen staat, wat de prijs bepaalt en hoe ik werk. Met ROI-calculator.",
};

const werkwijze: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "message-circle",
    title: "Gratis kennismaking",
    body: "30 minuten over jullie situatie en systemen. Vrijblijvend, zonder verkooppraat.",
  },
  {
    icon: "check-circle",
    title: "Vaste prijs per project",
    body: "Een heldere projectprijs vooraf — geen open eindes en geen verrassende uurtjes.",
  },
  {
    icon: "trending-up",
    title: "50 / 50 betaling",
    body: "De helft bij de start, de helft bij oplevering. Eerlijk en overzichtelijk.",
  },
  {
    icon: "life-buoy",
    title: "Onderhoud apart",
    body: "Hosting, support en doorontwikkeling als een maandbedrag op maat — los van de bouw.",
  },
];

export default function AanpakPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aanpak & prijs"
        eyebrowIcon="trending-up"
        title="Wat kost een maatwerk portaal?"
        lead="Goedkoper dan middleware. Sneller dan enterprise-development. Eerlijker dan SaaS-abonnementen die je toch niet helemaal gebruikt. Geen vaste prijslijst — wel volledige transparantie."
      />

      {/* Vergelijking */}
      <Section className="pt-10 sm:pt-12">
        <SectionHeading
          align="left"
          eyebrow="Waar staat het tussen?"
          eyebrowIcon="trending-up"
          title="Van Excel tot enterprise — en waar maatwerk landt."
        />
        <div className="mt-10 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card">
          {comparison.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 50}
              className={cn(
                "flex flex-col gap-1 border-b border-ink/8 px-6 py-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8",
                c.highlight && "bg-gradient-to-r from-brand-50 to-white",
              )}
            >
              <div className="flex items-center gap-3">
                {c.highlight ? (
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-white">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                ) : (
                  <span className="h-7 w-7 shrink-0" aria-hidden="true" />
                )}
                <div>
                  <div
                    className={cn(
                      "text-base font-semibold tracking-tight",
                      c.highlight ? "text-brand-700" : "text-ink",
                    )}
                  >
                    {c.label}
                  </div>
                  <div className="text-sm text-ink/55">{c.note}</div>
                </div>
              </div>
              <div
                className={cn(
                  "pl-10 text-sm font-semibold tabular-nums sm:pl-0 sm:text-right",
                  c.highlight ? "text-brand-700" : "text-ink/70",
                )}
              >
                {c.price}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Wat bepaalt de prijs */}
      <section className="bg-bone-200/50 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Wat bepaalt de prijs"
            eyebrowIcon="layout-dashboard"
            title="Vijf dingen die de projectprijs sturen."
            lead="Elke organisatie is anders. Daarom geen vaste lijst, maar een eerlijke offerte op basis van wat jij nodig hebt."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {priceFactors.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 60}
                className="rounded-2xl border border-ink/8 bg-white p-6 shadow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon name={f.icon as IconName} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{f.body}</p>
              </Reveal>
            ))}
            <div className="flex flex-col justify-center rounded-2xl border border-dashed border-brand/30 bg-brand-50/40 p-6">
              <p className="text-base font-semibold tracking-tight text-ink">Liever gewoon een getal?</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Stuur je situatie en je krijgt binnen één werkdag een heldere
                offerte op maat.
              </p>
              <ButtonLink href="/contact" size="sm" className="mt-4 w-fit" iconRight="arrow-right">
                Vraag offerte aan
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <Section>
        <SectionHeading
          eyebrow="ROI-calculator"
          eyebrowIcon="trending-up"
          title="Wat levert het op?"
          lead="Een portaal vervangt 6 tot 8 systemen en bespaart elke week handmatig werk. Reken voor jouw situatie uit wat dat oplevert — geen prijzen, alleen besparing."
        />
        <div className="mt-12">
          <RoiCalculator />
        </div>
      </Section>

      {/* Hoe ik werk */}
      <section className="bg-bone-200/50 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Hoe ik werk"
            eyebrowIcon="check-check"
            title="Transparant van kennismaking tot onderhoud."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {werkwijze.map((w, i) => (
              <Reveal
                key={w.title}
                delay={i * 70}
                className="rounded-2xl border border-ink/8 bg-white p-6 shadow-sm"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white">
                  <Icon name={w.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{w.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Veelgestelde vragen"
              eyebrowIcon="message-circle"
              title="Geen verrassingen."
              lead="De vragen die altijd terugkomen over aanpak, prijs en voorwaarden — eerlijk beantwoord."
            />
            <div className="mt-6">
              <ButtonLink href="/contact" variant="ghost" size="md" icon="mail">
                Andere vraag? Mail me
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-ink/8 rounded-2xl border border-ink/8 bg-white px-6 shadow-sm sm:px-8">
            {aanpakFaq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink marker:hidden">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink/5 text-ink/50 transition-transform group-open:rotate-180">
                    <Icon name="chevron-down" className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title="Klaar voor een offerte op maat?"
        body="Stuur je situatie en ik maak een heldere offerte — projectprijs, doorlooptijd en eventuele integraties. Binnen één werkdag."
        primaryLabel="Vraag offerte aan"
        secondaryLabel="Bekijk diensten"
        secondaryHref="/diensten"
      />
    </>
  );
}
