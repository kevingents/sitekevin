// Genereert sfeer-/hero-beelden via fal.ai (flux) en zet ze in public/generated/.
// Gebruik: node scripts/generate-images.mjs [filter]
//   filter = optioneel substring op de naam (bv. "hero" of "sector")
//
// De FAL-key wordt gelezen uit .env.local (FAL_KEY=...) of uit process.env.FAL_KEY.
// De key wordt nooit gelogd.

import { readFileSync, mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "generated");

const KEY_NAMES = ["FAL_API_KEY", "FAL_KEY"];

function loadKey() {
  for (const name of KEY_NAMES) {
    if (process.env[name]) return process.env[name].trim();
  }
  const envPath = join(ROOT, ".env.local");
  if (existsSync(envPath)) {
    const lines = readFileSync(envPath, "utf8").split(/\r?\n/);
    for (const name of KEY_NAMES) {
      const line = lines.find((l) => new RegExp(`^\\s*${name}\\s*=`).test(l));
      if (line) {
        return line.replace(new RegExp(`^\\s*${name}\\s*=\\s*`), "").replace(/^["']|["']$/g, "").trim();
      }
    }
  }
  return null;
}

// Consistente brand-stijl voor cohesie.
const STYLE =
  "premium editorial commercial photography, clean and modern, muted sophisticated palette with a subtle warm orange (#EC6806) accent, soft natural light, high detail, no text, no logos, no watermark";

const IMAGES = [
  {
    name: "hero-abstract",
    size: "landscape_16_9",
    prompt:
      "Abstract premium 3D render of separate business software systems flowing and merging into one unified workspace, elegant connected nodes and lines, deep navy ink background (#0F172A) with a warm orange (#EC6806) accent glow, minimal high-end SaaS aesthetic, soft studio lighting, " +
      STYLE,
  },
  {
    name: "sector-retail",
    size: "landscape_4_3",
    prompt:
      "Interior of a modern upscale Dutch menswear fashion store, neatly arranged clothing on rails, warm inviting lighting, clean premium retail, " +
      STYLE,
  },
  {
    name: "sector-branche",
    size: "landscape_4_3",
    prompt:
      "A bright modern furniture and woodworking workshop, neatly arranged craftsman tools and wood, organized and professional, natural daylight, " +
      STYLE,
  },
  {
    name: "sector-klus",
    size: "landscape_4_3",
    prompt:
      "A skilled tradesperson working on a tidy home renovation, tools and materials neatly laid out, bright and professional, " +
      STYLE,
  },
  {
    name: "sector-horeca",
    size: "landscape_4_3",
    prompt:
      "Interior of a stylish modern restaurant, neatly set tables, warm ambient lighting, clean and inviting, " +
      STYLE,
  },
  {
    name: "sector-diensten",
    size: "landscape_4_3",
    prompt:
      "A professional facility services team in a modern bright office building, organized and trustworthy, natural light, " +
      STYLE,
  },
];

async function generate(key, item) {
  const res = await fetch("https://fal.run/fal-ai/flux/dev", {
    method: "POST",
    headers: { Authorization: `Key ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: item.prompt,
      image_size: item.size,
      num_images: 1,
      enable_safety_checker: true,
      output_format: "jpeg",
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`fal.ai ${res.status} voor ${item.name}: ${body.slice(0, 300)}`);
  }
  const data = await res.json();
  const url = data?.images?.[0]?.url;
  if (!url) throw new Error(`Geen image-url terug voor ${item.name}`);
  const img = await fetch(url);
  const buf = Buffer.from(await img.arrayBuffer());
  const file = join(OUT_DIR, `${item.name}.jpg`);
  writeFileSync(file, buf);
  return { name: item.name, bytes: buf.length, file };
}

async function main() {
  const key = loadKey();
  if (!key) {
    console.error(
      "FAL_KEY niet gevonden. Zet 'FAL_KEY=...' in .env.local of exporteer hem als env-var.",
    );
    process.exit(1);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  const filter = process.argv[2];
  const todo = IMAGES.filter((i) => !filter || i.name.includes(filter));
  console.log(`Genereren: ${todo.map((t) => t.name).join(", ")}`);
  for (const item of todo) {
    try {
      const r = await generate(key, item);
      console.log(`  OK  ${r.name} -> ${Math.round(r.bytes / 1024)} kB`);
    } catch (e) {
      console.error(`  FOUT ${item.name}: ${e.message}`);
    }
  }
  console.log("Klaar. Beelden staan in public/generated/.");
}

main();
