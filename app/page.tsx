import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Eyebrow, Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { PortalShowcase } from "@/components/portal-showcase";
import { FlowTransform } from "@/components/flow-transform";
import { SectorFilter } from "@/components/sector-filter";
import { SoftwareStack } from "@/components/software-stack";
import { AvgSection } from "@/components/avg-section";
import { CtaBand } from "@/components/cta-band";
import { capabilities, problems, roles, comparison, ownership, swvCase } from "@/lib/site";

const heroStats = [
  { value: "50–500", label: "gebruikers in één portaal" },
  { value: "6–8", label: "systemen vervangen" },
  { value: "8–12 wk", label: "van kickoff tot live" },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────── Hero ───────────────── */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 -top-40 -z-10 h-[40rem] bg-gradient-to-b from-brand-50 via-bone to-bone"
          aria-hidden="true"
        />
        <div
          className="absolute -right-40 top-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-page pb-16 pt-12 sm:pt-16 lg:pb-20 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="animate-fade-up">
              <Eyebrow icon="sparkles">Branche · Retail · Klus · Horeca · Dienstverlening</Eyebrow>
              <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Maatwerk software die{" "}
                <span className="relative whitespace-nowrap text-brand">
                  handmatig werk
                  <svg
                    className="absolute -bottom-1.5 left-0 h-2.5 w-full text-brand/30"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M0 6 Q 50 0 100 4 T 200 3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                vervangt.
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink/65 sm:text-xl">
                Ik bouw eigen systemen — portalen, kassa&apos;s, webshops en
                omnichannel — en koppel wat je al hebt. Van Excel, Outlook en losse
                tools naar één werkende stack. Voor branche, retail, klus, horeca en
                dienstverlening.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg" icon="calendar">
                  Plan kennismaking
                </ButtonLink>
                <ButtonLink href="/werk" size="lg" variant="ghost" iconRight="arrow-right">
                  Bekijk demo
                </ButtonLink>
              </div>

              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-8">
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      {s.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-ink/55">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="animate-fade-in lg:pl-4">
              <PortalShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── Wat ik doe (3 poten) ───────────────── */}
      <Section className="py-16 sm:py-20">
        <SectionHeading
          eyebrow="Wat ik doe"
          eyebrowIcon="sparkles"
          title="Bouwen, koppelen, vervangen."
          lead="Geen one-size-fits-all tool, maar software die past op jouw proces. Ik bouw eigen systemen, verbind wat je al hebt, en vervang het handwerk ertussen."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 80}
              className="flex flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-600 text-white shadow-glow">
                <Icon name={c.icon as never} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{c.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2 border-t border-ink/8 pt-4">
                {c.examples.map((e) => (
                  <li
                    key={e}
                    className="rounded-full bg-bone-200/60 px-2.5 py-1 text-xs font-medium text-ink/60"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────────────── Software: koppelen of vervangen ───────────────── */}
      <Section className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Koppelen of vervangen"
          eyebrowIcon="plug"
          title="Welke software we koppelen — en welke we vervangen."
          lead="De systemen die je houdt, verbinden we. De losse abonnementen die elke maand geld kosten — denk aan Spotler, Mailchimp of Channable — neemt maatwerk over, zodat je ze opzegt. Wat in welke bak hoort, bepalen we samen."
        />
        <div className="mt-12">
          <SoftwareStack />
        </div>
        <p className="mt-6 text-center text-xs text-ink/45">
          Voorbeelden — de juiste keuze (koppelen of vervangen) verschilt per situatie
          en stack.
        </p>
      </Section>

      {/* ───────────────── Sector-filter ───────────────── */}
      <section className="bg-bone-200/50 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Welke sector ben jij?"
            eyebrowIcon="layout-dashboard"
            title="Eén patroon, vijf sectoren."
            lead="Branche, retail, klus, horeca of dienstverlening — de kern is altijd hetzelfde: van handmatig werk naar één portaal. Kies je sector en zie wat dat oplost."
          />
          <div className="mt-12">
            <SectorFilter />
          </div>
        </div>
      </section>

      {/* ───────────────── Probleem ───────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Herken je dit?"
          eyebrowIcon="alert"
          title="De administratie is uit elkaar gegroeid."
          lead="Zes tot acht losse systemen, een Excel-vangnet voor de rest, en kennis die in iemands hoofd of Outlook-map zit. Tot iemand met vakantie gaat."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 70}
              className="group rounded-2xl border border-ink/8 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand group-hover:text-white">
                <Icon name={p.icon as never} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.body}</p>
            </Reveal>
          ))}

          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-brand/30 bg-brand-50/40 p-6">
            <p className="text-lg font-semibold tracking-tight text-ink">Klinkt bekend?</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Dit is precies wat één portaal oplost — zonder dat jij je manier van
              werken hoeft om te gooien.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              Bespreek jouw situatie
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <FlowTransform />
        </div>
      </Section>

      {/* ───────────────── Oplossing ───────────────── */}
      <section className="bg-bone-200/50 py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="De oplossing"
            eyebrowIcon="layout-dashboard"
            title="Eén systeem voor jouw mensen."
            lead="Iedere rol ziet precies wat relevant is — maar het is dezelfde data, hetzelfde dossier, dezelfde waarheid. Geen overtypen, geen versieverwarring."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {roles.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 80}
                className="flex gap-5 rounded-2xl border border-ink/8 bg-white p-6 shadow-sm transition-all hover:shadow-card sm:p-7"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-ink to-ink-700 text-white">
                  <Icon name={r.icon as never} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <ButtonLink href="/diensten" variant="secondary" size="md" iconRight="arrow-right">
              Bekijk wat ik aanbied
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ───────────────── AVG ───────────────── */}
      <AvgSection />

      {/* ───────────────── Werk-teaser ───────────────── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <Eyebrow icon="briefcase">Case study</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Van Excel-chaos naar één portaal voor 400 studenten.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-ink/65">{swvCase.intro}</p>
            <ul className="mt-6 space-y-2.5">
              {[
                "6–8 losse systemen vervangen",
                "20–40 uur binnendienst bespaard per week",
                "AVG-dossier volledig op orde",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-ink/70">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <ButtonLink href="/werk/swv-meubel" size="md" iconRight="arrow-right">
                Lees de case study
              </ButtonLink>
              <Link
                href="/werk/gents"
                className="text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Ook: GENTS omnichannel →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-4">
            {swvCase.scale.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-ink/8 bg-white p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-semibold tracking-tight text-brand-600 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-ink/55">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      {/* ───────────────── Aanpak-teaser ───────────────── */}
      <section className="bg-bone-200/50 py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-ink/8 bg-white p-8 shadow-card sm:p-12 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <Eyebrow icon="trending-up">Wat het kost</Eyebrow>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Goedkoper dan middleware, sneller dan enterprise-development.
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-ink/65">
                Geen vaste prijslijst, want elk project is anders. Wel volledige
                transparantie over waar de prijs tussen staat en wat hem bepaalt.
                Reken zelf je besparing uit met de ROI-calculator.
              </p>
              <div className="mt-6">
                <ButtonLink href="/aanpak" size="md" iconRight="arrow-right">
                  Bekijk de aanpak & ROI
                </ButtonLink>
              </div>
            </div>
            <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-ink/8 lg:w-auto">
              {comparison.map((c) => (
                <div
                  key={c.label}
                  className={`flex items-center justify-between gap-4 border-b border-ink/8 px-4 py-3 text-sm last:border-b-0 ${
                    c.highlight ? "bg-brand-50" : "bg-white"
                  }`}
                >
                  <span className={c.highlight ? "font-semibold text-brand-700" : "text-ink/65"}>
                    {c.label}
                  </span>
                  <span className={c.highlight ? "font-semibold text-brand-700" : "text-ink/45"}>
                    {c.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── In eigen beheer ───────────────── */}
      <Section>
        <SectionHeading
          eyebrow="In eigen beheer"
          eyebrowIcon="lock"
          title="Jouw data, jouw code, jouw regie."
          lead="Het grootste verschil met een stapel SaaS-abonnementen: je bent eigenaar. Je gegevens en je software zitten niet gegijzeld bij externe leveranciers."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {ownership.map((o, i) => (
            <Reveal
              key={o.title}
              delay={i * 80}
              className="rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white">
                <Icon name={o.icon as never} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{o.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ───────────────── Final CTA ───────────────── */}
      <CtaBand />
    </>
  );
}
