import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icon";

const year = 2026;

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-white">
      <div className="bg-dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="container-page relative">
        {/* CTA-strip */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Klaar om van Excel-chaos naar één werkende stack te gaan?
            </h2>
            <p className="mt-2 max-w-lg text-white/60">
              Plan een vrijblijvende kennismaking van 30 minuten. Ik laat je het
              werkende portaal zien en denk mee over jullie situatie.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Plan kennismaking
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/10 px-6 text-sm font-semibold text-white ring-1 ring-inset ring-white/15 transition-colors hover:bg-white/15"
            >
              <Icon name="mail" className="h-4 w-4" />
              Mail direct
            </a>
          </div>
        </div>

        {/* Kolommen */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Maatwerk software die handmatig werk vervangt. Eigen systemen bouwen,
              bestaande systemen koppelen — voor branche, retail, klus, horeca en
              dienstverlening.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">Navigatie</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/55">
              <li>
                <a className="transition-colors hover:text-white" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-white" href={`tel:${site.phoneHref}`}>
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Icon name="map-pin" className="h-3.5 w-3.5 text-white/40" />
                {site.locatie}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">Bedrijf</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/55">
              <li>{site.legalName}</li>
              <li>{site.kvk}</li>
              <li>{site.btw}</li>
              <li>
                <Link href="/over" className="transition-colors hover:text-white">
                  Over Willie
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Onderbalk */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/45 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {site.name}. Alle rechten voorbehouden.
          </p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Juridisch">
            <Link href="/avg" className="transition-colors hover:text-white">
              AVG
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/voorwaarden" className="transition-colors hover:text-white">
              Voorwaarden
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
