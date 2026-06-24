import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
        {/* accent-gloed */}
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

        {/* logo + naam */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "linear-gradient(135deg, #EC6806, #C9560A)",
              color: "white",
              fontSize: 30,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            KvW
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "white", fontSize: 30, fontWeight: 600 }}>{site.name}</span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 22 }}>Branche · Retail · Klus · Horeca · Dienstverlening</span>
          </div>
        </div>

        {/* tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "white", fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1 }}>
            Maatwerk portalen die
          </span>
          <span style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1, color: "#F9A862" }}>
            handmatig werk vervangen.
          </span>
        </div>

        {/* footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 24 }}>
            Eén portaal · AVG uit de doos · live in 8–12 weken
          </span>
          <span style={{ color: "#F9A862", fontSize: 24, fontWeight: 600 }}>
            {site.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
