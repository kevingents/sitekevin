import { renderOg, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = "image/png";
export const alt = "Case: van Excel-chaos naar één portaal voor 400 BBL-studenten";

export default function Image() {
  return renderOg({
    eyebrow: "Case study · branche",
    titleTop: "Van Excel-chaos naar",
    titleAccent: "één portaal voor 400 studenten.",
    footer: "6–8 systemen vervangen · AVG ingebouwd",
  });
}
