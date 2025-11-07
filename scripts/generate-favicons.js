const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG icon design - Simple "AG" monogram with gradient
const createIconSVG = (size) => `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>

    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>

  <!-- Background circle with gradient -->
  <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="url(#iconGradient)"/>

  <!-- Text "AG" -->
  <text
    x="${size/2}"
    y="${size/2 + size*0.15}"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="${size*0.45}"
    font-weight="700"
    fill="#ffffff"
    text-anchor="middle"
    filter="url(#shadow)"
  >AG</text>
</svg>
`;

// Alternative design for larger icons - More detailed
const createLargeIconSVG = (size) => `
<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e293b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>

    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${size}" height="${size}" rx="${size*0.2}" fill="url(#bgGradient)"/>

  <!-- Accent border -->
  <rect
    width="${size}"
    height="${size}"
    rx="${size*0.2}"
    fill="none"
    stroke="url(#accentGradient)"
    stroke-width="${size*0.02}"
  />

  <!-- Code brackets decoration -->
  <text
    x="${size*0.5}"
    y="${size*0.55}"
    font-family="monospace"
    font-size="${size*0.35}"
    font-weight="300"
    fill="url(#accentGradient)"
    text-anchor="middle"
    opacity="0.3"
  >{ }</text>

  <!-- Main text "AG" -->
  <text
    x="${size*0.5}"
    y="${size*0.6}"
    font-family="system-ui, -apple-system, sans-serif"
    font-size="${size*0.4}"
    font-weight="700"
    fill="#ffffff"
    text-anchor="middle"
    filter="url(#glow)"
  >AG</text>
</svg>
`;

async function generateFavicons() {
  console.log('🎨 Generating favicons...\n');

  const publicDir = path.join(__dirname, '../public');

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const icons = [
    // Small icons - Simple design
    { name: 'icon-16x16.png', size: 16, useSimple: true },
    { name: 'icon-32x32.png', size: 32, useSimple: true },
    { name: 'icon-48x48.png', size: 48, useSimple: true },

    // Medium icons - Detailed design
    { name: 'apple-touch-icon.png', size: 180, useSimple: false },
    { name: 'icon-192x192.png', size: 192, useSimple: false },

    // Large icon - Detailed design
    { name: 'icon-512x512.png', size: 512, useSimple: false },
  ];

  try {
    // Generate PNG icons
    for (const icon of icons) {
      const svg = icon.useSimple ? createIconSVG(icon.size) : createLargeIconSVG(icon.size);
      const outputPath = path.join(publicDir, icon.name);

      await sharp(Buffer.from(svg))
        .png({
          compressionLevel: 9,
          adaptiveFiltering: true,
        })
        .toFile(outputPath);

      const stats = fs.statSync(outputPath);
      console.log(`✅ ${icon.name} - ${icon.size}x${icon.size}px (${Math.round(stats.size / 1024)}KB)`);
    }

    // Generate favicon.ico (multi-resolution: 16x16, 32x32, 48x48)
    console.log('\n🔧 Generating favicon.ico...');

    // Create 32x32 as the main favicon.ico
    const svg32 = createIconSVG(32);
    const icoPath = path.join(publicDir, 'favicon.ico');

    await sharp(Buffer.from(svg32))
      .resize(32, 32)
      .png()
      .toFile(icoPath);

    const icoStats = fs.statSync(icoPath);
    console.log(`✅ favicon.ico - 32x32px (${Math.round(icoStats.size / 1024)}KB)`);

    console.log('\n✨ All favicons generated successfully!\n');
    console.log('📁 Files created:');
    console.log('   • favicon.ico (32x32)');
    console.log('   • icon-16x16.png');
    console.log('   • icon-32x32.png');
    console.log('   • icon-48x48.png');
    console.log('   • apple-touch-icon.png (180x180)');
    console.log('   • icon-192x192.png');
    console.log('   • icon-512x512.png');
    console.log('\n🎯 Favicons are ready for all platforms!');

  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
