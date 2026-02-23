/**
 * Optimizes PNG/JPG images in public/ and public/resume/:
 * - Resizes large images (max 1200px width for project images, 200px for resume logos)
 * - Compresses and optionally outputs WebP alongside originals
 *
 * Run: npm run optimize-images
 * Requires: npm install sharp --save-dev
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const MAX_WIDTH_PROJECT = 1200;
const MAX_WIDTH_RESUME = 200;
const WEBP_QUALITY = 85;
const JPEG_QUALITY = 85;

async function optimize() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.warn("Install sharp to run: npm install sharp --save-dev");
    process.exit(1);
  }

  const dirs = [
    { dir: publicDir, maxWidth: MAX_WIDTH_PROJECT },
    { dir: path.join(publicDir, "resume"), maxWidth: MAX_WIDTH_RESUME },
  ];

  for (const { dir, maxWidth } of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter((f) => /\.(png|jpe?g)$/i.test(f));
    for (const file of files) {
      const inputPath = path.join(dir, file);
      const ext = path.extname(file).toLowerCase();
      try {
        const img = sharp(inputPath);
        const meta = await img.metadata();
        const width = meta.width || 0;
        const needResize = width > maxWidth;

        if (ext === ".png") {
          if (needResize) {
            await img
              .resize(maxWidth, null, { withoutEnlargement: true })
              .png({ compressionLevel: 9 })
              .toFile(inputPath.replace(".png", "-opt.png"));
            console.log(`Optimized (resized): ${path.relative(publicDir, inputPath)}`);
          }
          await sharp(inputPath)
            .webp({ quality: WEBP_QUALITY })
            .toFile(inputPath.replace(/\.(png|jpe?g)$/i, ".webp"));
          console.log(`WebP: ${path.relative(publicDir, inputPath)} → .webp`);
        } else {
          if (needResize) {
            await img
              .resize(maxWidth, null, { withoutEnlargement: true })
              .jpeg({ quality: JPEG_QUALITY })
              .toFile(inputPath.replace(/\.(jpe?g)$/i, "-opt.jpg"));
            console.log(`Optimized (resized): ${path.relative(publicDir, inputPath)}`);
          }
        }
      } catch (err) {
        console.error(`Error ${inputPath}:`, err.message);
      }
    }
  }
  console.log("Done. Replace originals with -opt versions if desired, or use .webp in config.");
}

optimize();
