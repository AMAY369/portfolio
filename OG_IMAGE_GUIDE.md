# Open Graph Image Guide

## ✅ Current Status: Complete

Professional Open Graph (OG) image has been successfully generated and is ready for social media sharing.

---

## 📸 Generated Images

### 1. JPEG Version (Primary)
- **File:** `public/og-image.jpg`
- **Dimensions:** 1200x630px
- **Format:** JPEG (optimized, 90% quality)
- **Size:** 41 KB
- **Use:** Primary OG image for social media

### 2. PNG Version (High Quality)
- **File:** `public/og-image.png`
- **Dimensions:** 1200x630px
- **Format:** PNG (compressed)
- **Size:** 84 KB
- **Use:** Higher quality alternative

---

## 🎨 Design Features

### Visual Elements
- **Background:** Dark gradient (slate-900 to slate-800)
- **Accent:** Blue to purple gradient
- **Pattern:** Subtle grid overlay for texture
- **Decorative:** Soft circular gradients and code brackets

### Content Layout
```
┌────────────────────────────────────────────┐
│ [Accent Bar]                                │
│                                             │
│  Abhay Gupta                    { }        │
│  Software Engineer              code        │
│  Freelance Developer            brackets    │
│  ─────────────                             │
│  React • Next.js • TypeScript • Node.js    │
│                                             │
│  abhaygupta.dev                            │
└────────────────────────────────────────────┘
```

### Typography
- **Name:** 72px, bold, white
- **Title:** 36px, medium, gradient (blue to purple)
- **Subtitle:** 32px, regular, slate-400
- **Tech Stack:** 24px, regular, slate-300
- **URL:** 28px, medium, slate-500

### Color Scheme
- Primary Background: `#0f172a` (slate-900)
- Secondary Background: `#1e293b` (slate-800)
- Accent Gradient: `#3b82f6` to `#8b5cf6` (blue to purple)
- Text: White and slate variants

---

## 🔧 How It Works

### Generation Script
**File:** `scripts/generate-og-image.js`

Uses Sharp (image processing library) to convert SVG to optimized images:

```javascript
const sharp = require('sharp');

// SVG template → JPEG/PNG conversion
await sharp(Buffer.from(svgImage))
  .jpeg({ quality: 90, progressive: true })
  .toFile('public/og-image.jpg');
```

### Running the Script
```bash
# Generate OG images
node scripts/generate-og-image.js

# Or add to package.json scripts
npm run generate-og-image
```

---

## 📋 Social Media Platform Requirements

### Facebook & LinkedIn
- ✅ **Dimensions:** 1200x630px (perfect)
- ✅ **Aspect Ratio:** 1.91:1 (ideal)
- ✅ **Min Size:** 600x315px (exceeds)
- ✅ **Max Size:** 8MB (41 KB)
- ✅ **Format:** JPEG/PNG (both available)

### Twitter/X
- ✅ **Dimensions:** 1200x630px (summary_large_image)
- ✅ **Aspect Ratio:** 2:1 (close to ideal)
- ✅ **Max Size:** 5MB (41 KB)
- ✅ **Format:** JPEG/PNG (both available)

### Discord
- ✅ **Dimensions:** 1200x630px (recommended)
- ✅ **Format:** JPEG/PNG (both available)

### WhatsApp
- ✅ **Dimensions:** 1200x630px (works well)
- ✅ **Format:** JPEG (available)

**Result:** Image works perfectly across all major platforms! ✅

---

## 🌐 Integration Status

### Already Configured in Layout
**File:** `app/layout.tsx`

```typescript
// Open Graph
openGraph: {
  images: [{
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Abhay Gupta - Software Engineer & Freelance Developer",
  }],
}

// Twitter Card
twitter: {
  card: "summary_large_image",
  images: ["/og-image.jpg"],
}
```

When someone shares your portfolio:
- Facebook → Shows og-image.jpg
- LinkedIn → Shows og-image.jpg
- Twitter/X → Shows og-image.jpg
- Discord → Shows og-image.jpg
- WhatsApp → Shows og-image.jpg

---

## 🧪 Testing Your OG Image

### 1. Facebook Sharing Debugger
URL: https://developers.facebook.com/tools/debug/

1. Enter your URL: `https://abhaygupta.dev`
2. Click "Debug"
3. See preview of how it appears on Facebook
4. Click "Scrape Again" to refresh cache

### 2. Twitter Card Validator
URL: https://cards-dev.twitter.com/validator

1. Enter your URL: `https://abhaygupta.dev`
2. Click "Preview card"
3. See how your card appears on Twitter/X

### 3. LinkedIn Post Inspector
URL: https://www.linkedin.com/post-inspector/

1. Enter your URL: `https://abhaygupta.dev`
2. Click "Inspect"
3. See LinkedIn preview

### 4. Open Graph Check
URL: https://www.opengraph.xyz/

1. Enter your URL: `https://abhaygupta.dev`
2. See multi-platform preview

### 5. Local Testing

Before deployment, view the image:
```bash
# View in file explorer
start public/og-image.jpg

# Or open in browser
open http://localhost:3000/og-image.jpg
```

---

## 🎯 Customization Guide

### Updating the Image

To modify the OG image design, edit `scripts/generate-og-image.js`:

**Change Name:**
```javascript
<text x="100" y="220" ...>
  Your Name Here
</text>
```

**Change Title:**
```javascript
<text x="100" y="290" ...>
  Your Title
</text>
```

**Change Tech Stack:**
```javascript
<text x="100" y="440" ...>
  Your • Tech • Stack • Here
</text>
```

**Change URL:**
```javascript
<text x="100" y="550" ...>
  yourdomain.com
</text>
```

**Change Colors:**
```javascript
// Background gradient
<stop offset="0%" style="stop-color:#0f172a" />  // Dark blue
<stop offset="50%" style="stop-color:#1e293b" /> // Medium blue
<stop offset="100%" style="stop-color:#0f172a" />

// Accent gradient
<stop offset="0%" style="stop-color:#3b82f6" />  // Blue
<stop offset="100%" style="stop-color:#8b5cf6" /> // Purple
```

After editing, regenerate:
```bash
node scripts/generate-og-image.js
```

---

## 📱 Multiple OG Images (Advanced)

For different pages, you can create multiple OG images:

### 1. Create Page-Specific Images
```bash
# In scripts/generate-og-image.js
- public/og-image.jpg           # Homepage
- public/og-image-projects.jpg  # Projects section
- public/og-image-contact.jpg   # Contact section
```

### 2. Use Dynamic OG Images
Create an API route for dynamic generation:

```typescript
// app/api/og/route.tsx
import { ImageResponse } from 'next/og'

export async function GET() {
  return new ImageResponse(
    (
      <div style={{ /* Your design */ }}>
        {/* Dynamic content */}
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
```

---

## 🚀 Deployment Checklist

After deploying your site:

- [x] OG image generated (og-image.jpg)
- [x] Image placed in public folder
- [x] Metadata configured in layout.tsx
- [ ] Deploy to production
- [ ] Test URL in Facebook Debugger
- [ ] Test URL in Twitter Card Validator
- [ ] Test URL in LinkedIn Post Inspector
- [ ] Share on social media to verify

---

## 🔍 Troubleshooting

### Image Not Showing on Social Media

**1. Cache Issue:**
- Social platforms cache OG images
- Use platform debugging tools to refresh
- Facebook: Click "Scrape Again"
- Twitter: Re-validate the card

**2. Wrong Path:**
- Ensure image is in `public/` folder
- Check metadata path is `/og-image.jpg` (no `public/`)
- Verify file exists: `ls public/og-image.jpg`

**3. Incorrect Dimensions:**
- Must be exactly 1200x630px
- Verify: Our script generates correct dimensions ✅

**4. File Too Large:**
- Facebook limit: 8MB
- Twitter limit: 5MB
- Our file: 41 KB ✅

**5. HTTPS Required:**
- Most platforms require HTTPS
- Test with production URL, not localhost

### Regenerating the Image

If you need to regenerate:
```bash
# Delete existing
rm public/og-image.jpg public/og-image.png

# Regenerate
node scripts/generate-og-image.js

# Verify
ls -lh public/og-image.*
```

---

## 📊 Performance Impact

### Image Loading
- **Not loaded on page load** - Only used by social media crawlers
- **No impact on Lighthouse score**
- **No impact on page speed**
- **No impact on user experience**

### File Size Optimization
- JPEG: 41 KB (excellent)
- Compressed and progressive
- Optimized quality (90%)
- Fast download for social crawlers

---

## 🎨 Design Best Practices

### What Makes a Good OG Image

✅ **Clear branding** - Name prominently displayed
✅ **Readable text** - Large, high-contrast fonts
✅ **Professional design** - Clean, modern aesthetic
✅ **Correct dimensions** - 1200x630px
✅ **Optimized file size** - Under 1MB
✅ **Visual hierarchy** - Most important info first
✅ **Brand colors** - Consistent with site design

### Common Mistakes to Avoid

❌ Text too small (minimum 24px)
❌ Too much information (keep it simple)
❌ Low contrast (hard to read)
❌ Wrong dimensions (gets cropped)
❌ Large file size (slow to load)
❌ Generic stock photos (not branded)
❌ Missing call-to-action (what's the site about?)

---

## 📚 Additional Resources

### Tools
- [Sharp](https://sharp.pixelplumbing.com/) - Image processing library
- [Canva](https://canva.com) - Design OG images manually
- [Figma](https://figma.com) - Professional design tool
- [OG Image Playground](https://og-playground.vercel.app/) - Test OG image code

### Validators
- [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Inspector](https://www.linkedin.com/post-inspector/)
- [OpenGraph.xyz](https://www.opengraph.xyz/)

### Documentation
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Next.js Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

---

## ✅ Summary

| Item | Status | Details |
|------|--------|---------|
| OG Image Created | ✅ | `public/og-image.jpg` (41 KB) |
| PNG Version | ✅ | `public/og-image.png` (84 KB) |
| Correct Dimensions | ✅ | 1200x630px |
| Optimized Size | ✅ | Well under limits |
| Metadata Configured | ✅ | `app/layout.tsx` |
| Script Available | ✅ | `scripts/generate-og-image.js` |
| Multi-Platform Support | ✅ | Facebook, Twitter, LinkedIn, Discord |
| Professional Design | ✅ | Modern gradient with tech branding |

**Your OG image is production-ready!** 🚀

When you share your portfolio on social media, this beautiful card will appear with your name, title, and tech stack prominently displayed.
