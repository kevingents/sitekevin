"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sectors } from "@/lib/site";
import { Icon, type IconName } from "@/components/icon";

/**
 * Interactieve sector-filter: pills wisselen direct de getoonde pijnpunten
 * en tagline — zonder page-load. Voldoet aan de "sector-filter werkt direct".
 */
export function SectorFilter() {
  const [active, setActive] = useState(0);
  const sector = sectors[active];

  return (
    <div>
      {/* Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {sectors.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
              i === active
                ? "bg-ink text-white shadow-card"
                : "bg-white text-ink/60 ring-1 ring-inset ring-ink/10 hover:ring-ink/25 hover:text-ink",
            )}
          >
            <Icon
              name={s.icon as IconName}
              className={cn("h-4 w-4", i === active ? "text-brand-300" : "text-ink/40")}
            />
            {s.short}
          </button>
        ))}
      </div>

      {/* Paneel */}
      <div key={sector.slug} className="mx-auto mt-8 max-w-4xl animate-fade-up">
        <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card">
          <div className="grid md:grid-cols-[1fr_1.1fr]">
            {/* Sector-intro */}
            <div className="flex flex-col justify-between gap-6 bg-gradient-to-br from-ink to-ink-700 p-7 text-white sm:p-8">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-brand-200 ring-1 ring-inset ring-white/15">
                  <Icon name={sector.icon as IconName} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{sector.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{sector.tagline}</p>
              </div>
              <Link
                href={`/sectoren/${sector.slug}`}
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-brand-600"
              >
                Bekijk {sector.short}-portaal
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>

            {/* Pijnpunten */}
            <div className="p-7 sm:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                Herken je dit?
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {sector.pijnpunten.slice(0, 3).map((p) => (
                  <li key={p.title} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                      <Icon name="alert" className="h-3.5 w-3.5" />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-ink">{p.title}</div>
                      <div className="text-sm leading-snug text-ink/55">{p.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
