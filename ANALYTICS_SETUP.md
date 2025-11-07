# Analytics Setup Guide

This portfolio supports two analytics providers: **Google Analytics 4** and **Plausible Analytics**. Choose the one that best fits your needs.

## Quick Comparison

| Feature | Google Analytics 4 | Plausible Analytics |
|---------|-------------------|---------------------|
| **Cost** | Free | Paid ($9/month for 10k pageviews) |
| **Privacy** | Requires cookie consent in EU | GDPR compliant, no cookies |
| **Performance** | ~45KB script | ~1KB script (45x lighter) |
| **Features** | Extensive (demographics, events, funnels) | Simple (pageviews, sources, goals) |
| **Data Ownership** | Google owns data | You own your data |
| **Setup Complexity** | Medium | Easy |

## Option 1: Google Analytics 4 (Recommended for most users)

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create an account name (e.g., "Portfolio Analytics")
4. Create a property name (e.g., "Abhay Gupta Portfolio")
5. Select your timezone and currency
6. Click "Next" and accept terms

### Step 2: Set Up Data Stream

1. Choose "Web" as platform
2. Enter your website URL: `https://abhaygupta.dev`
3. Enter stream name: "Portfolio Website"
4. Click "Create stream"
5. **Copy your Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 3: Configure Environment Variables

1. Open `.env.local` file
2. Set the analytics provider and your GA4 Measurement ID:

```env
NEXT_PUBLIC_ANALYTICS_PROVIDER=google
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

### Step 4: Deploy and Verify

1. Deploy your site to production (Vercel, Netlify, etc.)
2. Visit your live site
3. Go back to Google Analytics
4. Navigate to Reports → Realtime
5. You should see yourself as an active user within 30 seconds

### Step 5: Set Up Enhanced Measurement (Optional)

Google Analytics 4 automatically tracks:
- Page views
- Scrolls
- Outbound clicks
- Site search
- Video engagement
- File downloads

To customize:
1. Go to Admin → Data Streams → Your stream
2. Click "Enhanced measurement"
3. Toggle features on/off as needed

## Option 2: Plausible Analytics (Privacy-focused)

### Step 1: Create Plausible Account

1. Go to [Plausible.io](https://plausible.io/)
2. Start free 30-day trial (no credit card required)
3. After trial: $9/month for up to 10k monthly pageviews

### Step 2: Add Your Website

1. Click "Add a website"
2. Enter your domain: `abhaygupta.dev`
3. Select timezone
4. Click "Add snippet"

### Step 3: Configure Environment Variables

1. Open `.env.local` file
2. Set the analytics provider and your domain:

```env
NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=abhaygupta.dev
```

### Step 4: Deploy and Verify

1. Deploy your site to production
2. Visit your live site
3. Go back to Plausible dashboard
4. You should see real-time visitor data within 30 seconds

### Step 5: Set Up Goals (Optional)

Track specific actions:
1. Go to Settings → Goals
2. Click "Add goal"
3. Examples:
   - Custom event: `Contact Form Submit`
   - Page view: `/thank-you`
   - Outbound link: `github.com`

To trigger custom events in your code:
```typescript
// In Contact.tsx after successful form submission
if (window.plausible) {
  window.plausible('Contact Form Submit');
}
```

## Switching Between Providers

Simply change the `NEXT_PUBLIC_ANALYTICS_PROVIDER` value in `.env.local`:

```env
# Use Google Analytics
NEXT_PUBLIC_ANALYTICS_PROVIDER=google

# OR use Plausible
NEXT_PUBLIC_ANALYTICS_PROVIDER=plausible
```

The app will automatically load the correct tracking script.

## Disabling Analytics

To completely disable analytics (e.g., during development):

```env
# Leave NEXT_PUBLIC_GA_ID empty
NEXT_PUBLIC_GA_ID=

# Or comment out the provider
# NEXT_PUBLIC_ANALYTICS_PROVIDER=google
```

## Privacy Considerations

### Google Analytics 4

**Cookie Consent Required:**
- EU/UK: Yes (GDPR)
- California: Recommended (CCPA)
- Other regions: Check local laws

**Recommendation:** Add a cookie consent banner if targeting EU users.

Popular options:
- [CookieYes](https://www.cookieyes.com/)
- [Cookiebot](https://www.cookiebot.com/)
- [OneTrust](https://www.onetrust.com/)

### Plausible Analytics

**Cookie Consent Required:** No

Plausible is:
- GDPR compliant
- CCPA compliant
- PECR compliant
- No cookies used
- No personal data collected
- Data hosted in EU

## Testing in Development

Analytics scripts only load in production by default. To test locally:

1. Build production version:
```bash
npm run build
npm start
```

2. Visit `http://localhost:3000`
3. Check your analytics dashboard

## Performance Impact

### Google Analytics 4
- Script size: ~45KB (gzipped)
- Loaded asynchronously
- Minimal impact on Lighthouse score (1-2 points)
- Uses Next.js optimized loading via `@next/third-parties`

### Plausible Analytics
- Script size: ~1KB (gzipped)
- Loaded with `defer` attribute
- No measurable impact on Lighthouse score
- One of the lightest analytics solutions available

## Troubleshooting

### Google Analytics Not Tracking

1. **Check Measurement ID:**
   - Ensure format is correct: `G-XXXXXXXXXX`
   - No spaces or quotes in `.env.local`

2. **Check Browser Console:**
   - Open DevTools → Network tab
   - Filter for "google-analytics"
   - Should see `analytics.js` and `collect` requests

3. **Ad Blocker Interference:**
   - Disable ad blockers
   - Google Analytics is commonly blocked

4. **Wait 24-48 Hours:**
   - Some reports take time to populate
   - Realtime reports should work immediately

### Plausible Not Tracking

1. **Check Domain:**
   - Must match exactly what you entered in Plausible
   - No `https://` or `www.` prefix

2. **Check Browser Console:**
   - Look for `plausible.io/js/script.js` in Network tab
   - Should return 200 status

3. **Verify Script Loading:**
   - View page source
   - Look for `<script src="https://plausible.io/js/script.js"`

4. **Check Plausible Status:**
   - Visit [status.plausible.io](https://status.plausible.io/)

## Advanced Configuration

### Custom Events (Google Analytics)

Track button clicks, form submissions, etc.:

```typescript
// In your component
'use client'

const handleContactSubmit = () => {
  // Send custom event to GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact_form_submit', {
      form_name: 'Contact Form',
      form_destination: formData.email,
    });
  }
}
```

### Custom Events (Plausible)

```typescript
// In your component
'use client'

const handleContactSubmit = () => {
  if (typeof window !== 'undefined' && window.plausible) {
    window.plausible('Contact Form Submit', {
      props: {
        email: formData.email
      }
    });
  }
}
```

### Self-Hosting Plausible (Advanced)

For maximum privacy and control:

1. Follow [Plausible Self-Hosting Guide](https://plausible.io/docs/self-hosting)
2. Update script source in `components/Analytics.tsx`:
```typescript
src="https://your-plausible-instance.com/js/script.js"
```

## Recommended Analytics Setup

For most portfolios:

1. **Small personal portfolio:** Plausible (privacy-focused, simple)
2. **Professional portfolio seeking clients:** Google Analytics (more data, free)
3. **High-traffic portfolio (100k+ views/month):** Google Analytics (Plausible gets expensive)
4. **Privacy-conscious audience:** Plausible (no cookies, GDPR compliant)

## Next Steps

1. Choose your analytics provider
2. Create an account and get your tracking ID/domain
3. Update `.env.local` with your credentials
4. Deploy to production
5. Verify tracking is working
6. Set up custom goals/events (optional)
7. Monitor your traffic and user behavior

## Support

- **Google Analytics:** [GA4 Documentation](https://support.google.com/analytics/answer/9304153)
- **Plausible:** [Plausible Documentation](https://plausible.io/docs)

## File Structure

```
portfolio/
├── components/
│   └── Analytics.tsx          # Analytics component (auto-configured)
├── app/
│   └── layout.tsx             # Analytics included in root layout
├── .env.local                 # Your private configuration
└── .env.example               # Template for configuration
```

---

**Current Status:** Analytics component is installed and ready. Just add your tracking ID to `.env.local` and deploy!
