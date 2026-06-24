import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Over",
  description:
    "Over Kevin van Willigenburg — software developer gespecialiseerd in maatwerk webportalen voor MKB-bedrijven die nog met Excel en losse systemen werken.",
};

const principles: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "check-circle",
    title: "Vaste prijs waar het kan",
    body: "Je weet vooraf waar je aan toe bent. Geen open eindes, geen verrassingen op de factuur.",
  },
  {
    icon: "users",
    title: "Eén aanspreekpunt",
    body: "Je werkt rechtstreeks met mij. Geen accountmanager, geen ticket-systeem, korte lijnen.",
  },
  {
    icon: "code",
    title: "Eigenaar van eigen werk",
    body: "Ik bouw, beheer en ken de code. Dat houdt het portaal snel, onderhoudbaar en uitlegbaar.",
  },
  {
    icon: "shield-check",
    title: "Privacy serieus",
    body: "AVG zit in het fundament, niet als bijlage achteraf. Jouw data blijft van jou.",
  },
];

export default function OverPage() {
  return (
    <>
      <PageHeader
        eyebrow="Over"
        eyebrowIcon="sparkles"
        title="Ik bouw de software die het MKB uit Excel haalt."
        lead="Geen consultancy-bureau met lagen ertussen, maar één developer die de hele keten kent — van datamodel tot het werkproces op de werkvloer."
      />

      <Section className="pt-10 sm:pt-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Foto placeholder */}
          <Reveal className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card">
              <div className="relative aspect-[4/5] bg-gradient-to-br from-ink to-ink-700">
                <div className="bg-dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/40">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-2xl font-bold text-white/70">
                    KvW
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wide">Foto volgt</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-lg font-semibold tracking-tight text-ink">{site.name}</div>
                <div className="mt-0.5 text-sm text-ink/55">
                  Software developer · branche-portalen
                </div>
                <div className="mt-4 flex flex-col gap-2 text-sm text-ink/65">
                  <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-brand-600">
                    <Icon name="mail" className="h-4 w-4 text-ink/40" />
                    {site.email}
                  </a>
                  <span className="inline-flex items-center gap-2">
                    <Icon name="map-pin" className="h-4 w-4 text-ink/40" />
                    {site.locatie}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Verhaal */}
          <div className="flex flex-col gap-10">
            <Reveal className="space-y-4 text-pretty text-lg leading-relaxed text-ink/70">
              <p>
                Ik ben Kevin — software developer en ZZP&apos;er. Ik bouw maatwerk
                software én koppel bestaande systemen voor organisaties die nog met
                Excel, Outlook-mapjes en losse tools werken. Soms is dat een portaal,
                soms een kassa met webshop en omnichannel, en vaak de koppeling die
                alles met elkaar laat samenwerken.
              </p>
              <p>
                Mijn werk loopt van een BBL-portaal dat de complete administratie van
                een branchevereniging vervangt (studenten, leerbedrijven, scholen,
                coördinatoren en binnendienst) tot de omnichannel-keten van GENTS,
                waar kassa, webshop en voorraad als één geheel werken. Datzelfde
                patroon past op retail, klus, horeca en dienstverlening.
              </p>
              <p>
                Wat me overal opvalt: de mensen zijn vakkundig en betrokken, maar hun
                gereedschap loopt achter. Outlook-mapjes als archief, Excel als
                vangnet, en een handvol losse systemen die niet met elkaar praten.
                Daar gaat elke week tijd — en zekerheid — verloren.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="text-xl font-semibold tracking-tight text-ink">
                Waarom juist maatwerk portalen
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-ink/70">
                Omdat het verschil maakt dat blijft. Eén goed portaal vervangt zes
                tot acht systemen, voorkomt fouten in salaris en facturatie, en geeft
                managers en coördinatoren rust omdat ze niets meer over het hoofd
                zien. Het is software die je elke dag merkt — geen project dat in een
                la verdwijnt.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="text-xl font-semibold tracking-tight text-ink">Hoe ik werk</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {principles.map((p) => (
                  <div key={p.title} className="rounded-2xl border border-ink/8 bg-white p-5 shadow-sm">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon name={p.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold tracking-tight text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{p.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="md" iconRight="arrow-right">
                  Plan een kennismaking
                </ButtonLink>
                <ButtonLink href="/werk/swv-meubel" size="md" variant="ghost">
                  Bekijk mijn werk
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Even kennismaken?"
        body="Een gesprek van 30 minuten, vrijblijvend. Ik hoor graag waar jullie tegenaan lopen en denk eerlijk mee — ook als een portaal (nog) niet de oplossing is."
        primaryLabel="Plan kennismaking"
        secondaryLabel="Bekijk diensten"
        secondaryHref="/diensten"
      />
    </>
  );
}
