// Image Optimization Script mit Sharp
// Läuft mit: npm run optimize-images

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');

const imagesToOptimize = [
  {
    input: 'marcel.webp',
    outputs: [
      { name: 'marcel-optimized.webp', width: 400, quality: 85 },
      { name: 'marcel-thumb.webp', width: 200, quality: 80 }
    ]
  },
  {
    input: 'michael.webp',
    outputs: [
      { name: 'michael-optimized.webp', width: 400, quality: 85 },
      { name: 'michael-thumb.webp', width: 200, quality: 80 }
    ]
  },
  {
    input: 'logo.png',
    outputs: [
      { name: 'logo-optimized.webp', width: 300, quality: 90 },
      { name: 'logo.webp', width: 150, quality: 90 }
    ]
  }
];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  for (const image of imagesToOptimize) {
    const inputPath = path.join(publicDir, image.input);

    if (!fs.existsSync(inputPath)) {
      console.warn(`⚠️  Warning: ${image.input} not found, skipping...`);
      continue;
    }

    for (const output of image.outputs) {
      const outputPath = path.join(publicDir, output.name);

      try {
        await sharp(inputPath)
          .resize(output.width, null, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: output.quality })
          .toFile(outputPath);

        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

        console.log(`✅ ${output.name}`);
        console.log(`   ${(inputStats.size / 1024).toFixed(1)}KB → ${(outputStats.size / 1024).toFixed(1)}KB`);
        console.log(`   ${reduction}% reduction\n`);
      } catch (error) {
        console.error(`❌ Error optimizing ${image.input}:`, error.message);
      }
    }
  }

  console.log('✨ Image optimization complete!');
}

optimizeImages().catch(console.error);
