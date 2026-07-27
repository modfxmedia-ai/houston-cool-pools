#!/usr/bin/env node
// scripts/optimize-images.mjs
// Shrinks oversized JPG/PNG assets in public/images/ in place — filenames
// unchanged so all code references keep working.
// - Long-edge cap: 1920px (no upscaling).
// - JPEG: mozjpeg q78 progressive, 4:2:0 chroma.
// - PNG:  palette mode w/ quality 80 — huge savings on photo-PNGs.
// Safe to re-run — sidecar markers in .image-cache/ track processed files.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..", "public", "images");
const MARKER_DIR = path.resolve(__dirname, "..", ".image-cache");
const MAX_EDGE = 1920;
const SIZE_THRESHOLD = 800 * 1024;

await fs.mkdir(MARKER_DIR, { recursive: true });

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

const files = (await walk(ROOT)).filter((f) => /\.(jpe?g|png)$/i.test(f));
let totalBefore = 0;
let totalAfter = 0;
let touched = 0;

for (const abs of files) {
  const rel = path.relative(path.resolve(ROOT, ".."), abs);
  const relFromImages = path.relative(ROOT, abs).replace(/\\/g, "/");
  const marker = path.join(MARKER_DIR, rel.replace(/[\\/]/g, "__") + ".done");
  try {
    await fs.access(marker);
    continue;
  } catch {}

  const stat = await fs.stat(abs);
  if (stat.size < SIZE_THRESHOLD) {
    await fs.writeFile(marker, "");
    continue;
  }

  const ext = path.extname(abs).toLowerCase();
  const image = sharp(abs, { failOn: "none" }).rotate();
  const meta = await image.metadata();
  const needsResize =
    (meta.width ?? 0) > MAX_EDGE || (meta.height ?? 0) > MAX_EDGE;
  let pipeline = needsResize
    ? image.resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: "inside",
        withoutEnlargement: true,
      })
    : image;

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({
      quality: 78,
      mozjpeg: true,
      progressive: true,
      chromaSubsampling: "4:2:0",
    });
  } else {
    pipeline = pipeline.png({
      compressionLevel: 9,
      palette: true,
      quality: 80,
      effort: 10,
    });
  }

  const buf = await pipeline.toBuffer();
  if (buf.length >= stat.size) {
    await fs.writeFile(marker, "skipped-no-gain");
    continue;
  }
  await fs.writeFile(abs, buf);
  await fs.writeFile(marker, "");
  totalBefore += stat.size;
  totalAfter += buf.length;
  touched++;
  const kbBefore = (stat.size / 1024).toFixed(0);
  const kbAfter = (buf.length / 1024).toFixed(0);
  console.log(`${relFromImages}  ${kbBefore}KB -> ${kbAfter}KB`);
}

const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(2);
console.log(
  `\nDone. ${touched} files rewritten. Saved ${savedMB} MB.`,
);
