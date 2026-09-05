import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import pngToIco from "png-to-ico";

const root = process.cwd();
const input = path.join(root, "public", "favicon.svg");
const outputDir = path.join(root, "public");

const icons = [
  { size: 16, name: "icon-16.png" },
  { size: 32, name: "icon-32.png" },
  { size: 96, name: "icon-96.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 180, name: "icon-180.png" },
  { size: 192, name: "icon-192.png" },
  { size: 512, name: "icon-512.png" },
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "favicon-32x32.png" },
  { size: 96, name: "favicon-96x96.png" },
];

await mkdir(outputDir, { recursive: true });

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

  console.log(`✓ Generated ${output}`);
}

console.log("✓ All PNG icons generated");

const ico = await pngToIco([
  path.join(outputDir, "favicon-16x16.png"),
  path.join(outputDir, "favicon-32x32.png"),
  path.join(outputDir, "favicon-96x96.png"),
]);

await import("node:fs/promises").then(({ writeFile }) =>
  writeFile(path.join(outputDir, "favicon.ico"), ico)
);

console.log("✓ Generated favicon.ico");