import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };

/** Herbruikbare, tekst-gebaseerde OG-image in de merkstijl (ink + oranje). */
export function renderOg({
  eyebrow,
  titleTop,
  titleAccent,
  footer,
}: {
  eyebrow: string;
  titleTop: string;
  titleAccent: string;
  footer?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0F172A",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(236, 104, 6, 0.35)",
            filter: "blur(40px)",
            display: "flex",
          }}
        />

        {/* merk */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #EC6806, #C9560A)",
              color: "white",
              fontSize: 30,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            W
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontSize: 26, fontWeight: 600 }}>{site.name}</span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 19, textTransform: "uppercase", letterSpacing: 2 }}>
              {eyebrow}
            </span>
          </div>
        </div>

        {/* titel */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "white", fontSize: 60, fontWeight: 700, lineHeight: 1.07, letterSpacing: -1 }}>
            {titleTop}
          </span>
          <span style={{ color: "#F9A862", fontSize: 60, fontWeight: 700, lineHeight: 1.07, letterSpacing: -1 }}>
            {titleAccent}
          </span>
        </div>

        {/* footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 22 }}>
            {footer ?? "Maatwerk software die handmatig werk vervangt"}
          </span>
          <span style={{ color: "#F9A862", fontSize: 22, fontWeight: 600 }}>
            {site.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
