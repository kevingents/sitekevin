import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/icon";

export function CtaBand({
  title = "Klaar om over te stappen?",
  body = "Eén werkplek voor studenten, leerbedrijven, coördinatoren en binnendienst. Plan een kennismaking en bekijk het werkende portaal.",
  primaryHref = "/contact",
  primaryLabel = "Plan kennismaking",
  secondaryHref = "/aanpak",
  secondaryLabel = "Bekijk de aanpak",
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-brand-600 px-6 py-14 text-center shadow-glow sm:px-12 sm:py-16">
          <div className="bg-dot-grid absolute inset-0 opacity-40" aria-hidden="true" />
          <div
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-inset ring-white/20">
              <Icon name="sparkles" className="h-3.5 w-3.5" />
              Vrijblijvend
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
              {body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href={primaryHref}
                size="lg"
                className="bg-white text-ink shadow-card hover:bg-white/90"
                iconRight="arrow-right"
              >
                {primaryLabel}
              </ButtonLink>
              <ButtonLink
                href={secondaryHref}
                size="lg"
                variant="light"
                className="bg-white/10 ring-white/30"
              >
                {secondaryLabel}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
