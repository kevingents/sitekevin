import { Eyebrow } from "@/components/section";
import { Icon, type IconName } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const pillars: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "database",
    title: "Verwerkingsregister",
    body: "Elke verwerking van persoonsgegevens automatisch vastgelegd. Altijd aantoonbaar wie, wat en waarom.",
  },
  {
    icon: "file-check",
    title: "Verwerkersovereenkomst",
    body: "DPA standaard inbegrepen. Geen losse juridische trajecten of consultancy-rekeningen.",
  },
  {
    icon: "clock",
    title: "Automatische retentie",
    body: "Een cron ruimt gegevens op zodra de bewaartermijn verstrijkt. Geen vergeten dossiers.",
  },
  {
    icon: "lock",
    title: "Audit-flow",
    body: "Volledige logging van inzage en wijzigingen. Bij een verzoek of incident weet je precies wat er gebeurde.",
  },
];

export function AvgSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="bg-dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Eyebrow icon="shield-check" tone="light">
              AVG ingebouwd
            </Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Privacy is geen bijzaak — het zit in het fundament.
            </h2>
            <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-white/65">
              Branche-verenigingen verwerken gevoelige gegevens van honderden
              studenten. In het portaal is AVG geen los project achteraf, maar
              ingebouwd vanaf dag één. Dat bespaart al snel €5.000–€15.000 aan
              externe compliance-consultancy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/diensten" variant="primary" size="md" iconRight="arrow-right">
                Bekijk de aanpak
              </ButtonLink>
              <ButtonLink href="/contact" variant="light" size="md">
                Stel een vraag
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:bg-white/[0.07]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/15 text-brand-200 ring-1 ring-inset ring-brand/20">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
