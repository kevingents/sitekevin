"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/icon";

const OLD_SYSTEMS = [
  "Losse Excel-sheets",
  "Outlook-mapjes",
  "Aparte kassa",
  "Losse webshop",
  "Papieren planning",
  "Los boekhoudpakket",
];

/**
 * Geanimeerde "voor → na": losse systemen worden één voor één
 * opgeslokt door één portaal. Loopt continu, pauzeert bij reduced-motion.
 */
export function FlowTransform() {
  const [absorbed, setAbsorbed] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setAbsorbed(OLD_SYSTEMS.length);
      return;
    }
    const id = window.setInterval(() => {
      setAbsorbed((n) => (n >= OLD_SYSTEMS.length ? 0 : n + 1));
    }, 900);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="grid items-center gap-4 rounded-3xl border border-ink/10 bg-white p-5 shadow-card sm:grid-cols-[1fr_auto_1fr] sm:p-7">
      {/* Voor */}
      <div>
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-ink/5 text-ink/50">
            <Icon name="table" className="h-3 w-3" />
          </span>
          Voor
        </div>
        <ul className="flex flex-col gap-1.5">
          {OLD_SYSTEMS.map((sys, i) => {
            const gone = i < absorbed;
            return (
              <li
                key={sys}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 py-2 text-xs transition-all duration-500",
                  gone
                    ? "border-transparent bg-bone-200/50 text-ink/30 line-through"
                    : "border-ink/8 bg-white text-ink/70 shadow-sm",
                )}
              >
                <Icon
                  name={gone ? "check" : "alert"}
                  className={cn("h-3.5 w-3.5 shrink-0", gone ? "text-emerald-400" : "text-brand-400")}
                />
                {sys}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Pijl */}
      <div className="flex items-center justify-center sm:flex-col">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white shadow-glow">
          <Icon name="arrow-right" className="h-5 w-5 sm:hidden" />
          <Icon name="arrow-right" className="hidden h-5 w-5 sm:block" />
        </div>
      </div>

      {/* Na */}
      <div>
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-brand/10 text-brand-600">
            <Icon name="sparkles" className="h-3 w-3" />
          </span>
          Na
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand-50 to-white p-5 shadow-glow">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-600 text-white">
              <Icon name="layout-dashboard" className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-semibold text-ink">Eén werkende stack</div>
              <div className="text-[0.72rem] text-ink/55">
                {absorbed} van {OLD_SYSTEMS.length} systemen vervangen
              </div>
            </div>
          </div>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
            <div
              className="h-full rounded-full bg-brand transition-all duration-500"
              style={{ width: `${(absorbed / OLD_SYSTEMS.length) * 100}%` }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {["Bouwen", "Koppelen", "Automatiseren", "AVG-proof"].map((r) => (
              <span
                key={r}
                className="rounded-full bg-white px-2 py-0.5 text-[0.65rem] font-medium text-ink/60 ring-1 ring-inset ring-ink/8"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
