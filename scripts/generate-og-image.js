const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG template for OG image (1200x630px)
const svgImage = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <!-- Background gradient -->
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1e293b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0f172a;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>

    <!-- Subtle grid pattern -->
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- Decorative elements -->
  <circle cx="100" cy="100" r="150" fill="url(#accentGradient)" opacity="0.1"/>
  <circle cx="1100" cy="530" r="200" fill="url(#accentGradient)" opacity="0.1"/>

  <!-- Accent bar at top -->
  <rect x="0" y="0" width="1200" height="8" fill="url(#accentGradient)"/>

  <!-- Content container -->
  <g>
    <!-- Name -->
    <text x="100" y="220" font-family="system-ui, -apple-system, sans-serif" font-size="72" font-weight="700" fill="#ffffff">
      Abhay Gupta
    </text>

    <!-- Title with gradient -->
    <text x="100" y="290" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="500" fill="url(#accentGradient)">
      Software Engineer
    </text>

    <!-- Subtitle -->
    <text x="100" y="340" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="400" fill="#94a3b8">
      Freelance Developer
    </text>

    <!-- Divider line -->
    <rect x="100" y="370" width="300" height="3" fill="url(#accentGradient)" opacity="0.5"/>

    <!-- Skills/Tech stack -->
    <text x="100" y="440" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="400" fill="#cbd5e1">
      React • Next.js • TypeScript • Node.js
    </text>

    <!-- Website URL -->
    <text x="100" y="550" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="500" fill="#64748b">
      abhaygupta.dev
    </text>
  </g>

  <!-- Code brackets decoration (right side) -->
  <g opacity="0.15">
    <text x="950" y="300" font-family="monospace" font-size="180" font-weight="300" fill="#3b82f6">
      { }
    </text>
  </g>
</svg>
`;

async function generateOGImage() {
  try {
    const outputPath = path.join(__dirname, '../public/og-image.jpg');

    // Ensure public directory exists
    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Convert SVG to JPG using sharp
    await sharp(Buffer.from(svgImage))
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);

    console.log('✅ OG image generated successfully!');
    console.log(`📁 Location: ${outputPath}`);
    console.log('📐 Dimensions: 1200x630px');
    console.log('🎨 Format: JPEG (optimized)');

    // Also create a PNG version for higher quality
    const pngPath = path.join(__dirname, '../public/og-image.png');
    await sharp(Buffer.from(svgImage))
      .png({
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(pngPath);

    console.log('✅ PNG version also created for higher quality');
    console.log(`📁 Location: ${pngPath}`);

  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();
