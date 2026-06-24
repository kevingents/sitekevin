"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { sectors } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const onderwerpen = [
  { value: "demo", label: "Demo aanvragen" },
  { value: "offerte", label: "Offerte" },
  { value: "vraag", label: "Algemene vraag" },
];

const field =
  "w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink shadow-sm transition-colors placeholder:text-ink/35 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30";
const labelCls = "mb-1.5 block text-sm font-medium text-ink/70";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [onderwerp, setOnderwerp] = useState("demo");
  const successRef = useRef<HTMLHeadingElement>(null);

  // Verplaats focus naar de bevestiging zodra het bericht verstuurd is
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Versturen mislukt");
      }
      setStatus("success");
      form.reset();
      setOnderwerp("demo");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Er ging iets mis. Probeer het later opnieuw.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-emerald-200 bg-emerald-50/60 p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white">
          <Icon name="check" className="h-7 w-7" strokeWidth={2.5} />
        </span>
        <h3
          ref={successRef}
          tabIndex={-1}
          className="mt-5 text-xl font-semibold tracking-tight text-ink focus:outline-none"
        >
          Bericht verstuurd
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/60">
          Bedankt voor je bericht. Ik reageer doorgaans binnen één werkdag — vaak
          sneller. Tot snel.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Nog een bericht sturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-card sm:p-8">
      {/* Honeypot tegen bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="naam" className={labelCls}>
            Naam <span className="text-brand">*</span>
          </label>
          <input id="naam" name="naam" type="text" required autoComplete="name" className={field} placeholder="Voor- en achternaam" />
        </div>
        <div>
          <label htmlFor="bedrijf" className={labelCls}>
            Organisatie <span className="text-brand">*</span>
          </label>
          <input id="bedrijf" name="bedrijf" type="text" required autoComplete="organization" className={field} placeholder="Vereniging of bedrijf" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            E-mail <span className="text-brand">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="naam@organisatie.nl" />
        </div>
        <div>
          <label htmlFor="telefoon" className={labelCls}>
            Telefoon
          </label>
          <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" className={field} placeholder="Optioneel" />
        </div>
        <div>
          <label htmlFor="rol" className={labelCls}>
            Jouw rol
          </label>
          <input id="rol" name="rol" type="text" className={field} placeholder="Bijv. directeur, manager" />
        </div>
        <div>
          <label htmlFor="sector" className={labelCls}>
            Sector
          </label>
          <select id="sector" name="sector" defaultValue="" className={cn(field, "appearance-none bg-white")}>
            <option value="">Kies een sector…</option>
            {sectors.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Anders">Anders</option>
          </select>
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className={labelCls}>Waar gaat het over?</legend>
        <input type="hidden" name="onderwerp" value={onderwerp} />
        <div className="grid grid-cols-3 gap-2">
          {onderwerpen.map((o) => (
            <button
              key={o.value}
              type="button"
              onClick={() => setOnderwerp(o.value)}
              aria-pressed={onderwerp === o.value}
              className={cn(
                "rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors",
                onderwerp === o.value
                  ? "border-brand bg-brand-50 text-brand-700"
                  : "border-ink/12 bg-white text-ink/60 hover:border-ink/25",
              )}
            >
              {o.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="bericht" className={labelCls}>
          Bericht <span className="text-brand">*</span>
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          className={cn(field, "resize-y")}
          placeholder="Vertel kort over jullie situatie: hoeveel gebruikers of locaties, welke systemen je nu gebruikt, en wat je zoekt."
        />
      </div>

      {status === "error" ? (
        <div
          role="alert"
          aria-live="assertive"
          className="mt-5 flex items-start gap-2.5 rounded-xl border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-700"
        >
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          icon={status === "submitting" ? "loader" : "send"}
          className={status === "submitting" ? "[&_svg]:animate-spin" : ""}
        >
          {status === "submitting" ? "Versturen…" : "Verstuur bericht"}
        </Button>
        <p className="text-xs leading-relaxed text-ink/45">
          Je gegevens worden alleen gebruikt om te reageren. Geen nieuwsbrief,
          geen doorverkoop.
        </p>
      </div>
    </form>
  );
}
