import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { AvgSection } from "@/components/avg-section";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Portaal-implementatie, integraties, AVG-compliance, training, onderhoud en custom development voor branche-verenigingen met BBL-administratie.",
};

const process = [
  {
    icon: "sparkles" as IconName,
    title: "1 · Kennismaking",
    body: "Een gesprek van 30 minuten over jullie situatie, systemen en wensen. Vrijblijvend en zonder verkooppraat.",
  },
  {
    icon: "layout-dashboard" as IconName,
    title: "2 · Inventarisatie",
    body: "Ik breng processen, bronnen en rollen in kaart en bepaal het datamodel dat de hele keten dekt.",
  },
  {
    icon: "code" as IconName,
    title: "3 · Bouw & migratie",
    body: "Het portaal wordt ingericht op jullie branche, met data uit Excel en Outlook geïmporteerd en opgeschoond.",
  },
  {
    icon: "presentation" as IconName,
    title: "4 · Training & go-live",
    body: "Binnendienst en coördinatoren worden getraind, we starten met een pilot en gaan gefaseerd live.",
  },
  {
    icon: "life-buoy" as IconName,
    title: "5 · Onderhoud",
    body: "Daarna doorlopend beheer, updates en doorontwikkeling — met mij als vast aanspreekpunt.",
  },
];

export default function DienstenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Diensten"
        eyebrowIcon="layout-dashboard"
        title="Alles om van losse systemen naar één portaal te gaan."
        lead="Van implementatie tot onderhoud. Vaste prijzen waar het kan, transparant per uur waar het moet. Je hebt één aanspreekpunt — geen consultancy-laag ertussen."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="md" iconRight="arrow-right">
            Plan kennismaking
          </ButtonLink>
          <ButtonLink href="/aanpak" size="md" variant="ghost">
            Aanpak & prijs
          </ButtonLink>
        </div>
      </PageHeader>

      {/* Dienstenkaarten */}
      <Section className="pt-10 sm:pt-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 60}
              className="flex flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                <Icon name={s.icon as IconName} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{s.body}</p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-ink/65">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-ink/8 pt-4">
                <span className="text-xs uppercase tracking-wide text-ink/40">Prijs</span>
                <span className="text-sm font-semibold text-ink">{s.price}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Proces */}
      <section className="bg-bone-200/50 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Zo werkt het"
            eyebrowIcon="repeat"
            title="Van kennismaking tot live in 4 tot 12 weken."
            lead="Een duidelijk traject met vaste fases. Je weet steeds waar we staan en wat de volgende stap is."
          />
          <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 70} as="li" className="relative rounded-2xl border border-ink/8 bg-white p-6 shadow-sm">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <AvgSection />
      <CtaBand
        title="Niet zeker welk traject past?"
        body="Plan een kennismaking. We kijken samen naar jullie systemen en ik vertel eerlijk wat wél en niet zinvol is."
        primaryLabel="Plan kennismaking"
        secondaryLabel="Bekijk de case"
        secondaryHref="/werk/swv-meubel"
      />
    </>
  );
}
