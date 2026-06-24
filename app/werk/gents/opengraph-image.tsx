import { renderOg, ogSize } from "@/lib/og";

export const runtime = "edge";
export const size = ogSize;
export const contentType = "image/png";
export const alt = "Case: GENTS — kassa, webshop en voorraad als één omnichannel-keten";

export default function Image() {
  return renderOg({
    eyebrow: "Case study · retail",
    titleTop: "Kassa, webshop en voorraad",
    titleAccent: "als één omnichannel-keten.",
    footer: "GENTS · omnichannel retail",
  });
}
