import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/section";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-x-0 -top-40 -z-10 h-[30rem] bg-gradient-to-b from-brand-50 via-bone to-bone"
        aria-hidden="true"
      />
      <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Deze pagina bestaat niet.
        </h1>
        <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-ink/60">
          De link is verlopen of klopt niet. Ga terug naar de homepage of plan
          direct een kennismaking.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="md" iconRight="arrow-right">
            Naar de homepage
          </ButtonLink>
          <ButtonLink href="/contact" size="md" variant="ghost">
            Plan kennismaking
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
