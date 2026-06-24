import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Icon, type IconName } from "@/components/icon";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Plan een vrijblijvende kennismaking of stuur een bericht. Ik reageer doorgaans binnen één werkdag.",
  alternates: { canonical: "/contact" },
};

const methods: { icon: IconName; label: string; value: string; href: string; sub: string }[] = [
  {
    icon: "mail",
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    sub: "Reactie binnen één werkdag",
  },
  // Telefoon alleen tonen zodra er een echt nummer is ingevuld
  ...(site.phoneHref
    ? [
        {
          icon: "message-circle" as IconName,
          label: "Telefoon",
          value: site.phoneDisplay,
          href: `tel:${site.phoneHref}`,
          sub: "Op werkdagen tussen 9 en 17 uur",
        },
      ]
    : []),
];

export default function ContactPage() {
  const waHref = site.whatsapp
    ? `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`
    : "";
  const calSrc = site.calLink ? `https://cal.com/${site.calLink}` : "";

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        eyebrowIcon="message-circle"
        title="Laten we kennismaken."
        lead="Demo aanvragen, offerte opvragen of gewoon een vraag? Vul het formulier in of pak direct contact. Ik reageer doorgaans binnen één werkdag."
      />

      <section className="pb-8 pt-10 sm:pt-12">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Formulier */}
            <div>
              <ContactForm />
            </div>

            {/* Zijbalk */}
            <aside className="flex flex-col gap-4">
              <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm sm:p-7">
                <h2 className="text-base font-semibold tracking-tight text-ink">Direct contact</h2>
                <div className="mt-4 flex flex-col gap-3">
                  {methods.map((m) => (
                    <a
                      key={m.label}
                      href={m.href}
                      className="group flex items-center gap-4 rounded-2xl border border-ink/8 bg-bone-200/40 p-4 transition-colors hover:border-brand/30 hover:bg-brand-50/40"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
                        <Icon name={m.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-ink">{m.value}</span>
                        <span className="block text-xs text-ink/50">{m.sub}</span>
                      </span>
                      <Icon name="arrow-up-right" className="ml-auto h-4 w-4 text-ink/30 transition-colors group-hover:text-brand-600" />
                    </a>
                  ))}

                  {waHref ? (
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 transition-colors hover:bg-emerald-50"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-500 text-white shadow-sm">
                        <Icon name="message-circle" className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-ink">WhatsApp</span>
                        <span className="block text-xs text-ink/50">Stuur een appje</span>
                      </span>
                      <Icon name="arrow-up-right" className="ml-auto h-4 w-4 text-ink/30 group-hover:text-emerald-600" />
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Demo-planner */}
              <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name="calendar" className="h-5 w-5" />
                  </span>
                  <h2 className="text-base font-semibold tracking-tight text-ink">
                    Plan direct een gesprek
                  </h2>
                </div>
                {calSrc ? (
                  <div className="mt-4 overflow-hidden rounded-2xl border border-ink/8">
                    <iframe
                      src={calSrc}
                      title="Plan een kennismaking"
                      className="h-[34rem] w-full"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    Liever meteen een moment prikken? De online agenda (Cal.com) komt
                    hier zodra die gekoppeld is. Mail of bel tot die tijd gerust —
                    dan plannen we het samen.
                  </p>
                )}
              </div>

              {/* Bedrijfsgegevens */}
              <div className="rounded-3xl border border-ink/10 bg-ink p-6 text-white shadow-sm sm:p-7">
                <h2 className="text-sm font-semibold tracking-tight text-white/90">Bedrijfsgegevens</h2>
                <dl className="mt-4 space-y-2 text-sm text-white/60">
                  <div className="flex justify-between gap-4">
                    <dt>Handelsnaam</dt>
                    <dd className="text-right text-white/85">{site.name}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt>Naam</dt>
                    <dd className="text-right text-white/85">{site.legalName}</dd>
                  </div>
                  {site.kvk ? (
                    <div className="flex justify-between gap-4">
                      <dt>KvK</dt>
                      <dd className="text-right text-white/85">{site.kvk}</dd>
                    </div>
                  ) : null}
                  {site.btw ? (
                    <div className="flex justify-between gap-4">
                      <dt>Btw</dt>
                      <dd className="text-right text-white/85">{site.btw}</dd>
                    </div>
                  ) : null}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="h-12" />
    </>
  );
}
