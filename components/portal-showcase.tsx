"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "@/components/icon";

type Role = {
  key: string;
  label: string;
  icon: IconName;
  title: string;
  subtitle: string;
  render: () => JSX.Element;
};

function Bar({ label, value, tone = "brand" }: { label: string; value: number; tone?: "brand" | "emerald" | "ink" }) {
  const colors = {
    brand: "bg-brand",
    emerald: "bg-emerald-500",
    ink: "bg-ink",
  } as const;
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[0.7rem] text-ink/50">
        <span>{label}</span>
        <span className="tabular-nums">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
        <div className={cn("h-full rounded-full", colors[tone])} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Row({ children, status }: { children: React.ReactNode; status: "ok" | "wait" | "alert" }) {
  const map = {
    ok: { icon: "check-circle", cls: "text-emerald-500" },
    wait: { icon: "clock", cls: "text-amber-500" },
    alert: { icon: "alert", cls: "text-brand-600" },
  } as const;
  return (
    <li className="flex items-center gap-2.5 rounded-lg bg-bone-200/70 px-2.5 py-2 text-xs text-ink/70">
      <Icon name={map[status].icon as IconName} className={cn("h-3.5 w-3.5 shrink-0", map[status].cls)} />
      <span className="truncate">{children}</span>
    </li>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-bone-200/70 px-3 py-2.5">
      <div className="text-lg font-semibold tracking-tight text-ink">{value}</div>
      <div className="text-[0.7rem] text-ink/50">{label}</div>
    </div>
  );
}

const ROLES: Role[] = [
  {
    key: "student",
    label: "Student",
    icon: "graduation-cap",
    title: "Jan de Vries",
    subtitle: "BBL Meubelmaker · niveau 3",
    render: () => (
      <div className="flex flex-col gap-3">
        <Bar label="Voortgang opleiding" value={68} />
        <ul className="flex flex-col gap-1.5">
          <Row status="ok">Praktijkovereenkomst getekend</Row>
          <Row status="ok">Voortgangsgesprek · 12 mei</Row>
          <Row status="alert">Document ontbreekt: ID-bewijs</Row>
        </ul>
      </div>
    ),
  },
  {
    key: "leerbedrijf",
    label: "Leerbedrijf",
    icon: "building-2",
    title: "Meubelmakerij Hout & Co",
    subtitle: "3 gekoppelde studenten",
    render: () => (
      <ul className="flex flex-col gap-1.5">
        <Row status="ok">Jan de Vries · contract t/m 2027</Row>
        <Row status="ok">Sara Bos · contract t/m 2026</Row>
        <Row status="wait">Tom Visser · verlenging in behandeling</Row>
      </ul>
    ),
  },
  {
    key: "coordinator",
    label: "Coördinator",
    icon: "users",
    title: "Regio Oost",
    subtitle: "42 studenten · 5 signalen",
    render: () => (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          <Stat value="42" label="studenten" />
          <Stat value="5" label="signalen" />
          <Stat value="3" label="bezoeken" />
        </div>
        <ul className="flex flex-col gap-1.5">
          <Row status="alert">2 contracten lopen af deze maand</Row>
          <Row status="wait">1 student zonder leerbedrijf</Row>
        </ul>
      </div>
    ),
  },
  {
    key: "binnendienst",
    label: "Binnendienst",
    icon: "briefcase",
    title: "Administratie",
    subtitle: "Facturatie & AVG-dossier",
    render: () => (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2">
          <Stat value="98%" label="facturatie kloppend" />
          <Stat value="0" label="openstaande fouten" />
        </div>
        <ul className="flex flex-col gap-1.5">
          <Row status="ok">Verwerkingsregister bijgewerkt</Row>
          <Row status="ok">Retentie automatisch uitgevoerd</Row>
        </ul>
      </div>
    ),
  },
];

export function PortalShowcase() {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % ROLES.length);
    }, 3400);
    return () => window.clearInterval(id);
  }, []);

  const role = ROLES[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/* gloed achter het venster */}
      <div
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand/20 via-brand/5 to-transparent blur-2xl"
        aria-hidden="true"
      />

      <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card-lg">
        {/* venster-chrome */}
        <div className="flex items-center gap-2 border-b border-ink/5 bg-bone-200/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <div className="ml-2 flex h-6 flex-1 items-center rounded-md bg-white px-2.5 text-[0.7rem] text-ink/40 ring-1 ring-inset ring-ink/5">
            portaal.brancheportaal.nl
          </div>
        </div>

        <div className="grid grid-cols-[3.25rem_1fr] sm:grid-cols-[10rem_1fr]">
          {/* zijbalk met rollen */}
          <nav className="flex flex-col gap-1 border-r border-ink/5 bg-bone-200/40 p-2" aria-label="Rollen">
            {ROLES.map((r, i) => (
              <button
                key={r.key}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-xs font-medium transition-colors",
                  i === active ? "bg-white text-ink shadow-sm ring-1 ring-ink/5" : "text-ink/55 hover:bg-white/60",
                )}
              >
                <Icon name={r.icon} className={cn("h-4 w-4 shrink-0", i === active ? "text-brand-600" : "text-ink/40")} />
                <span className="hidden sm:inline">{r.label}</span>
              </button>
            ))}
          </nav>

          {/* inhoud */}
          <div className="min-h-[15.5rem] p-4 sm:p-5">
            <div key={role.key} className="animate-fade-up">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-ink">{role.title}</div>
                  <div className="text-[0.72rem] text-ink/50">{role.subtitle}</div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[0.65rem] font-semibold text-emerald-600 ring-1 ring-inset ring-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  live
                </span>
              </div>
              {role.render()}
            </div>
          </div>
        </div>
      </div>

      {/* indicator-stippen */}
      <div className="mt-4 flex justify-center gap-1.5">
        {ROLES.map((r, i) => (
          <button
            key={r.key}
            type="button"
            aria-label={`Toon ${r.label}`}
            onClick={() => setActive(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === active ? "w-6 bg-brand" : "w-1.5 bg-ink/15 hover:bg-ink/30",
            )}
          />
        ))}
      </div>
    </div>
  );
}
