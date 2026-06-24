"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/icon";
import { ButtonLink } from "@/components/ui/button";

const WERKWEKEN = 46; // werkweken per jaar na vakantie/feestdagen
const FOUT_PER_GEBRUIKER = 25; // indicatieve foutkosten (salaris/facturatie) per gebruiker/jaar

const eur = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-ink/70">{label}</label>
        <span className="text-base font-semibold tabular-nums text-ink">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-ink/10 accent-brand"
        style={{
          background: `linear-gradient(to right, #EC6806 ${pct}%, rgba(15,23,42,0.1) ${pct}%)`,
        }}
      />
    </div>
  );
}

export function RoiCalculator() {
  const [gebruikers, setGebruikers] = useState(150);
  const [uren, setUren] = useState(25);
  const [uurloon, setUurloon] = useState(45);
  const [abonnement, setAbonnement] = useState(750);

  const r = useMemo(() => {
    const tijdJaar = uren * uurloon * WERKWEKEN;
    const foutJaar = gebruikers * FOUT_PER_GEBRUIKER;
    const abonnementJaar = abonnement * 12;
    const totaal = tijdJaar + foutJaar + abonnementJaar;
    return { tijdJaar, foutJaar, abonnementJaar, totaal };
  }, [gebruikers, uren, uurloon, abonnement]);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-card-lg">
      <div className="grid lg:grid-cols-[1fr_1fr]">
        {/* Inputs */}
        <div className="border-b border-ink/8 p-7 sm:p-9 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
            <Icon name="trending-up" className="h-4 w-4" />
            Reken je besparing uit
          </div>
          <p className="mt-2 text-sm text-ink/55">
            Schuif naar jouw situatie. De uitkomst is indicatief en toont alleen de
            besparing — geen vaste prijzen, want elk project is anders.
          </p>

          <div className="mt-8 flex flex-col gap-7">
            <Slider
              label="Aantal medewerkers / leden / klanten"
              value={gebruikers}
              min={50}
              max={500}
              step={10}
              onChange={setGebruikers}
              format={(v) => `${v}`}
            />
            <Slider
              label="Uren handmatig werk / week"
              value={uren}
              min={5}
              max={40}
              step={1}
              onChange={setUren}
              format={(v) => `${v} uur`}
            />
            <Slider
              label="Uurkosten medewerker"
              value={uurloon}
              min={30}
              max={70}
              step={1}
              onChange={setUurloon}
              format={(v) => eur.format(v)}
            />
            <Slider
              label="Software-abonnementen nu / maand"
              value={abonnement}
              min={0}
              max={2500}
              step={50}
              onChange={setAbonnement}
              format={(v) => eur.format(v)}
            />
          </div>

          <div className="mt-7 flex items-start gap-2 rounded-xl bg-bone-200/60 px-4 py-3 text-xs leading-relaxed text-ink/55">
            <Icon name="check-circle" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            Gebaseerd op {WERKWEKEN} werkweken per jaar, plus de software-abonnementen
            die je vervangt en een indicatieve foutreductie.
          </div>
        </div>

        {/* Resultaat */}
        <div className="relative overflow-hidden bg-ink p-7 text-white sm:p-9">
          <div className="bg-dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative">
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-200">
              Jouw indicatieve besparing
            </div>

            <div className="mt-5">
              <div className="text-sm text-white/55">Per jaar</div>
              <div className="mt-1 text-4xl font-semibold tracking-tight sm:text-5xl">
                {eur.format(r.totaal)}
              </div>
              <div className="mt-1 text-xs text-white/45">aan tijd, abonnementen en voorkomen fouten</div>
            </div>

            <dl className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-white/60">Tijdsbesparing / jaar</dt>
                <dd className="font-semibold tabular-nums">{eur.format(r.tijdJaar)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/60">Minder fouten / jaar</dt>
                <dd className="font-semibold tabular-nums">{eur.format(r.foutJaar)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/60">Abonnementen vervangen / jaar</dt>
                <dd className="font-semibold tabular-nums">{eur.format(r.abonnementJaar)}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-white/60">AVG-consultancy bespaard</dt>
                <dd className="font-semibold tabular-nums text-white/80">€5.000–€15.000</dd>
              </div>
            </dl>

            <p className="mt-6 text-xs leading-relaxed text-white/40">
              Dit is een schatting van de besparing, niet de prijs van het portaal.
              Die maken we op maat — een maatwerk portaal is goedkoper dan
              middleware en sneller dan enterprise-development.
            </p>

            <div className="mt-6">
              <ButtonLink
                href="/contact"
                size="md"
                className="w-full bg-white text-ink hover:bg-white/90"
                iconRight="arrow-right"
              >
                Vraag een offerte op maat
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
