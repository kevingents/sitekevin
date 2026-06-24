import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "AVG & privacy",
  description:
    "Hoe AVG in elk portaal is ingebouwd: verwerkingsregister, verwerkersovereenkomst, audit-log, automatische retentie, 2FA en RBAC. Privacy in het fundament.",
};

const pillars: { icon: IconName; title: string; body: string }[] = [
  { icon: "database", title: "Verwerkingsregister", body: "Elke verwerking van persoonsgegevens wordt automatisch vastgelegd. Altijd aantoonbaar wie, wat en waarom." },
  { icon: "file-check", title: "Verwerkersovereenkomst (DPA)", body: "Standaard inbegrepen, conform art. 28 AVG. Geen los juridisch traject of consultancy-rekening." },
  { icon: "clock", title: "Automatische retentie", body: "Een cron ruimt gegevens op zodra de bewaartermijn verstrijkt. Geen vergeten dossiers." },
  { icon: "lock", title: "Audit-log & access-log", body: "Volledige logging van inzage en wijzigingen. Bij een verzoek of incident weet je precies wat er gebeurde." },
  { icon: "shield-check", title: "2FA + RBAC", body: "Twee-factor-authenticatie en rol-gebaseerde toegang: iedereen ziet alleen wat bij zijn rol hoort." },
  { icon: "trending-up", title: "Backups & herstel", body: "Dagelijkse back-up plus een extra off-site export. RPO 24 uur, RTO 4 uur." },
];

export default function AvgPage() {
  return (
    <>
      <PageHeader
        eyebrow="AVG & privacy"
        eyebrowIcon="shield-check"
        title="Privacy zit in het fundament, niet als bijlage."
        lead="Elk portaal verwerkt persoonsgegevens van soms honderden mensen. Daarom is AVG geen los project achteraf, maar ingebouwd vanaf dag één. Dat bespaart al snel €5.000–€15.000 aan externe compliance-consultancy."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="md" iconRight="arrow-right">
            Stel een vraag
          </ButtonLink>
          <ButtonLink href="/privacy" size="md" variant="ghost">
            Privacyverklaring
          </ButtonLink>
        </div>
      </PageHeader>

      <Section className="pt-10 sm:pt-12">
        <SectionHeading
          eyebrow="Wat er standaard in zit"
          eyebrowIcon="check-check"
          title="Zes waarborgen, in elk portaal."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 60}
              className="rounded-2xl border border-ink/8 bg-white p-6 shadow-sm"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={p.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{p.body}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-ink/8 bg-bone-200/50 p-7 sm:p-9">
          <h2 className="text-lg font-semibold tracking-tight text-ink">
            Hosting in de EU, data van jou
          </h2>
          <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-ink/65">
            Portalen draaien standaard op infrastructuur binnen de EU (Vercel en een
            EU-database). Je data blijft te allen tijde jouw eigendom en is op elk
            moment exporteerbaar. Geen vendor lock-in. On-premise hosting kan tegen
            meerprijs, als jullie compliance dat vraagt.
          </p>
        </div>
      </Section>

      <CtaBand
        title="Vragen over AVG in jullie situatie?"
        body="Plan een kennismaking. Ik leg uit hoe het verwerkingsregister, de DPA en de retentie er voor jullie processen uitzien."
        secondaryLabel="Bekijk de aanpak"
        secondaryHref="/aanpak"
      />
    </>
  );
}
