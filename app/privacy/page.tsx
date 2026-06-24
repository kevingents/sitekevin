import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { Icon } from "@/components/icon";
import { LegalSections, type LegalSection } from "@/components/legal-sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Hoe persoonsgegevens via deze website worden verwerkt, bewaard en beschermd.",
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    heading: "Wie verwerkt je gegevens",
    paragraphs: [
      `${site.name} (${site.kvk}, ${site.btw}) is verantwoordelijk voor de verwerking van persoonsgegevens via deze website. Vragen kun je stellen via ${site.email}.`,
    ],
  },
  {
    heading: "Welke gegevens en waarom",
    paragraphs: [
      "Als je het contactformulier invult, verwerk ik de gegevens die je zelf aanlevert — zoals naam, organisatie, e-mailadres, telefoonnummer, rol, sector en je bericht. Deze gegevens gebruik ik uitsluitend om je vraag te beantwoorden en eventueel een offerte uit te brengen.",
    ],
  },
  {
    heading: "Grondslag",
    paragraphs: [
      "De verwerking is gebaseerd op jouw toestemming en op het uitvoeren van handelingen voorafgaand aan een mogelijke overeenkomst (art. 6 lid 1 sub a en b AVG).",
    ],
  },
  {
    heading: "Bewaartermijn",
    paragraphs: [
      "Contactgegevens bewaar ik niet langer dan nodig. Vrijblijvende aanvragen worden uiterlijk 12 maanden na het laatste contact verwijderd, tenzij er een opdracht uit voortkomt. Bij een opdracht gelden de wettelijke administratie- en bewaartermijnen.",
    ],
  },
  {
    heading: "Analytics",
    paragraphs: [
      "Deze website gebruikt privacy-vriendelijke, cookieloze statistieken (zoals Plausible of Umami). Daarbij worden geen persoonsgegevens herleidbaar opgeslagen en wordt geen profiel van je opgebouwd. Er worden geen tracking-cookies van derden geplaatst.",
    ],
  },
  {
    heading: "Delen met derden",
    paragraphs: [
      "Gegevens worden alleen gedeeld met dienstverleners die nodig zijn om de site te laten werken — zoals de hostingpartij (Vercel) en de e-maildienst (Resend) voor het versturen van formulierinzendingen. Met deze partijen zijn verwerkersovereenkomsten gesloten. Gegevens worden niet verkocht.",
    ],
  },
  {
    heading: "Beveiliging",
    paragraphs: [
      "Gegevens worden via een beveiligde verbinding (HTTPS) verstuurd en zorgvuldig behandeld. Toegang is beperkt tot wat nodig is om je vraag te beantwoorden.",
    ],
  },
  {
    heading: "Jouw rechten",
    bullets: [
      "Inzage in de gegevens die ik van je heb",
      "Correctie of verwijdering van je gegevens",
      "Intrekken van je toestemming",
      "Bezwaar maken tegen de verwerking",
      "Een klacht indienen bij de Autoriteit Persoonsgegevens",
    ],
    paragraphs: [`Een verzoek doe je via ${site.email}. Ik reageer binnen de wettelijke termijn.`],
  },
  {
    heading: "Wijzigingen",
    paragraphs: [
      "Deze privacyverklaring kan worden aangepast. De meest actuele versie staat altijd op deze pagina.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy"
        eyebrowIcon="lock"
        title="Privacyverklaring"
        lead="Helder over welke gegevens via deze website worden verwerkt, waarom, en wat jouw rechten zijn."
      />
      <Section className="pt-8 sm:pt-10">
        <div className="mx-auto mb-10 flex max-w-3xl items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Conceptversie als startpunt — laat deze tekst juridisch controleren en
            vul de bedrijfsgegevens aan voordat de site live gaat.
          </span>
        </div>
        <LegalSections sections={sections} />
      </Section>
    </>
  );
}
