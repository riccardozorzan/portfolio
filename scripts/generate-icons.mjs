import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const input = path.join(root, "public", "favicon.svg");
const outputDir = path.join(root, "public");

const sizes = [
  16,
  32,
  96,
  180,
  192,
  512,
];

await mkdir(outputDir, { recursive: true });

for (const size of sizes) {
  const output = path.join(outputDir, `icon-${size}.png`);

  await sharp(input)
    .resize(size, size, {
      fit: "contain",
      background: {
        r: 2,
        g: 4,
        b: 10,
        alpha: 1,
      },
    })
    .png()
    .toFile(output);

  console.log(`✓ Generated ${output}`);
}

// Browser favicon names
await sharp(input)
  .resize(16, 16)
  .png()
  .toFile(path.join(outputDir, "favicon-16x16.png"));

await sharp(input)
  .resize(32, 32)
  .png()
  .toFile(path.join(outputDir, "favicon-32x32.png"));

await sharp(input)
  .resize(96, 96)
  .png()
  .toFile(path.join(outputDir, "favicon-96x96.png"));

console.log("✓ All PNG icons generated");
