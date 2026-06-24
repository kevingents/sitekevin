import type { MetadataRoute } from "next";
import { site, sectors } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const routes = [
    "",
    "/sectoren",
    ...sectors.map((s) => `/sectoren/${s.slug}`),
    "/diensten",
    "/werk",
    "/werk/swv-meubel",
    "/aanpak",
    "/over",
    "/contact",
    "/avg",
    "/privacy",
    "/voorwaarden",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path.startsWith("/sectoren") || path === "/aanpak" ? 0.8 : 0.6,
  }));
}
