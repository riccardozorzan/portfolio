import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import pngToIco from "png-to-ico";

const root = process.cwd();
const input = path.join(root, "public", "favicon.svg");
const outputDir = path.join(root, "public");

await mkdir(outputDir, { recursive: true });

const icons = [
  { size: 16, name: "icon-16.png" },
  { size: 32, name: "icon-32.png" },
  { size: 48, name: "icon-48.png" },
  { size: 96, name: "icon-96.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 192, name: "icon-192.png" },
  { size: 512, name: "icon-512.png" },

  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "favicon-32x32.png" },
  { size: 96, name: "favicon-96x96.png" },
];

for (const { size, name } of icons) {
  const output = path.join(outputDir, name);

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

  console.log(`✓ Generated ${name} (${size}x${size})`);
}

const ico16 = path.join(outputDir, "icon-16.png");
const ico32 = path.join(outputDir, "icon-32.png");
const ico48 = path.join(outputDir, "icon-48.png");

const ico = await pngToIco([
  ico16,
  ico32,
  ico48,
]);

await writeFile(
  path.join(outputDir, "favicon.ico"),
  ico
);

console.log("✓ Generated favicon.ico");
console.log("  ├─ 16x16");
console.log("  ├─ 32x32");
console.log("  └─ 48x48");

console.log("\n✓ Complete favicon package generated.");
