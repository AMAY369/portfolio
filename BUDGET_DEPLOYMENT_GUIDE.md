# Budget-Friendly Domain & Hosting Guide

## 💰 Total Cost: **$8-11/year** (Yes, really!)

Your portfolio can be deployed for **less than $1/month** with professional hosting and a custom domain.

---

## 🎯 Recommended Setup (Cheapest)

### ✅ Option 1: Ultra Budget ($8/year total)

```
Hosting:  Vercel (FREE forever)         $0/month
Domain:   Cloudflare Registrar           $8.03/year (.com)
Email:    Resend (FREE tier)             $0/month
Analytics: Google Analytics (FREE)       $0/month
─────────────────────────────────────────────────
TOTAL:                                   $0.67/month
```

### ✅ Option 2: Best Value ($11/year total)

```
Hosting:  Vercel (FREE forever)         $0/month
Domain:   Porkbun                        $11.06/year (.com)
Email:    Resend (FREE tier)             $0/month
Analytics: Google Analytics (FREE)       $0/month
─────────────────────────────────────────────────
TOTAL:                                   $0.92/month
```

**Why Porkbun over Cloudflare?**
- More TLDs available
- Free WHOIS privacy
- Free SSL certificate
- Free email forwarding
- Better support
- Easier setup for beginners

---

## 📊 Detailed Cost Comparison

### Domain Registrars

| Registrar | .com First Year | .com Renewal | .dev Domain | Free WHOIS | Notes |
|-----------|----------------|--------------|-------------|------------|-------|
| **Cloudflare** | $8.03 | $8.03 | $11.95 | ✅ | Wholesale pricing, no markup |
| **Porkbun** | $11.06 | $11.06 | $12.16 | ✅ | **Recommended** - Best overall value |
| Namecheap | $5.98 | $14.98 | $3.88 then $17.98 | ✅ | Cheap first year, expensive renewal |
| GoDaddy | $9.99 | $19.99 | $2.99 then $24.99 | ❌ ($9.99/yr) | Not recommended |
| Google Domains | Sold to Squarespace | - | - | - | No longer available |

### Hosting Platforms (Next.js)

| Platform | Free Tier | Bandwidth | Build Minutes | Best For |
|----------|-----------|-----------|---------------|----------|
| **Vercel** | ✅ | 100 GB/mo | 6,000 min/mo | **Recommended** - Made for Next.js |
| Netlify | ✅ | 100 GB/mo | 300 min/mo | Static sites, less Next.js features |
| Railway | $5 credit | Pay as you go | Unlimited | Docker apps, databases |
| Render | ✅ Limited | 100 GB/mo | 500 min/mo | Full-stack apps |
| Fly.io | $5 credit | Pay as you go | Unlimited | Edge deployment |

**Winner:** Vercel (created by Next.js team, best integration, most generous free tier)

---

## 🏆 My Recommendation: Porkbun + Vercel

### Total Cost Breakdown

```
Year 1:
  Domain (Porkbun .com):        $11.06
  Hosting (Vercel Free):        $0.00
  Email (Resend Free):          $0.00
  Analytics (Google Free):      $0.00
  SSL Certificate:              $0.00 (included)
  ───────────────────────────────────
  TOTAL YEAR 1:                 $11.06

Year 2+:
  Domain Renewal:               $11.06/year
  Everything else:              $0.00
  ───────────────────────────────────
  TOTAL PER YEAR:               $11.06/year

Monthly Cost:                   $0.92/month
```

**Why This Setup?**
- ✅ Simplest to set up
- ✅ No renewal price hikes
- ✅ All features included
- ✅ Excellent support
- ✅ Best for beginners
- ✅ Professional appearance

---

## 🚀 Step-by-Step Deployment Guide

### Part 1: Get Free Hosting (Vercel)

#### Step 1: Create Vercel Account (2 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
   - Or use email/Google
4. Authorize Vercel to access your GitHub

**Cost:** FREE forever for hobby projects

#### Step 2: Push Code to GitHub (3 minutes)

```bash
# If you haven't already, initialize git
cd portfolio
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio ready for deployment"

# Create GitHub repository (go to github.com/new)
# Then connect and push:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

#### Step 3: Deploy to Vercel (5 minutes)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your `portfolio` repository
4. Configure project:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./`
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)

5. **Add Environment Variables:**
   Click "Environment Variables" and add:

   ```
   RESEND_API_KEY=your_resend_key_here
   CONTACT_EMAIL=your@email.com
   NEXT_PUBLIC_ANALYTICS_PROVIDER=google
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

6. Click **"Deploy"**

7. Wait 1-2 minutes ⏳

8. ✅ **Your site is live!**
   - You'll get a URL like: `https://portfolio-username.vercel.app`

---

### Part 2: Get Your Custom Domain

### Option A: Porkbun (Recommended for Beginners)

#### Step 1: Buy Domain (5 minutes)

1. Go to [porkbun.com](https://porkbun.com)
2. Search for your desired domain
   - Try: `yourname.dev` ($12.16/year)
   - Or: `yourname.com` ($11.06/year)
3. Add to cart
4. Create account
5. Checkout - **Total: ~$11-12**

**Included FREE:**
- WHOIS privacy
- SSL certificate
- Email forwarding
- DNS management
- Cloudflare-powered DNS

#### Step 2: Connect Domain to Vercel (5 minutes)

**In Vercel:**
1. Go to your project dashboard
2. Click **"Settings"** → **"Domains"**
3. Enter your domain: `abhaygupta.dev`
4. Click **"Add"**

**Vercel will show you DNS records to add:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**In Porkbun:**
1. Go to **"Domain Management"**
2. Click your domain
3. Go to **"DNS Records"**
4. Click **"Add"** and enter:
   - Type: `A`
   - Host: `` (leave empty for @)
   - Answer: `76.76.21.21`
   - TTL: `600`

5. Add another record:
   - Type: `CNAME`
   - Host: `www`
   - Answer: `cname.vercel-dns.com`
   - TTL: `600`

6. **Save changes**

7. Wait 5-60 minutes for DNS propagation ⏳

8. ✅ **Your custom domain is live!**
   - Visit: `https://yourdomain.dev`
   - Vercel auto-provisions SSL certificate

---

### Option B: Cloudflare Registrar (Absolute Cheapest)

**Pros:**
- Cheapest pricing (.com at $8.03/year)
- At-cost pricing (no markup)
- Best for long-term ownership

**Cons:**
- Need to already have a Cloudflare account
- Slightly more complex setup
- Fewer TLD options

#### Step 1: Transfer Domain to Cloudflare

1. **Buy domain elsewhere first** (Namecheap, Porkbun)
2. Wait 60 days (ICANN transfer lock)
3. Transfer to Cloudflare Registrar
4. Pay only renewal cost ($8.03/year for .com)

**Not recommended for beginners** - Use Porkbun instead

---

## 📧 Setting Up Email (FREE)

### Resend Email Service (100 emails/day FREE)

#### Step 1: Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Click **"Sign Up"**
3. Verify your email
4. **Cost:** FREE (100 emails/day limit)

#### Step 2: Get API Key

1. Go to **"API Keys"**
2. Click **"Create API Key"**
3. Name: `Portfolio Contact Form`
4. Copy the key: `re_xxxxxxxxxxxxx`

#### Step 3: Add to Vercel

1. Go to Vercel Dashboard
2. Your project → **Settings** → **Environment Variables**
3. Add:
   ```
   Name: RESEND_API_KEY
   Value: re_xxxxxxxxxxxxx
   Environment: Production
   ```
4. Click **"Save"**
5. **Redeploy** your site

✅ Contact form now sends real emails!

---

## 📊 Setting Up Analytics (FREE)

### Google Analytics 4 (FREE Forever)

#### Step 1: Create Account

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **"Start measuring"**
3. Create account name: `Portfolio`
4. Create property name: `My Portfolio`
5. Select timezone and currency

#### Step 2: Create Web Stream

1. Choose **"Web"** platform
2. Enter website URL: `https://yourdomain.dev`
3. Stream name: `Portfolio Website`
4. Click **"Create stream"**

#### Step 3: Copy Measurement ID

You'll see: `G-XXXXXXXXXX`

Copy this ID

#### Step 4: Add to Vercel

1. Vercel Dashboard → Settings → Environment Variables
2. Add:
   ```
   Name: NEXT_PUBLIC_GA_ID
   Value: G-XXXXXXXXXX
   Environment: Production
   ```
3. Save and **redeploy**

✅ Analytics tracking live!

---

## 🔍 Google Search Console (FREE)

### Step 1: Add Property

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **"Add Property"**
3. Choose **"URL prefix"**
4. Enter: `https://yourdomain.dev`

### Step 2: Verify Ownership

1. Choose **"HTML tag"** method
2. Copy verification code: `AbCdEfGhIj...`
3. Add to Vercel environment variables:
   ```
   Name: NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
   Value: AbCdEfGhIj...
   ```
4. **Redeploy**
5. Click **"Verify"** in Search Console

### Step 3: Submit Sitemap

1. Go to **"Sitemaps"** in Search Console
2. Enter: `https://yourdomain.dev/sitemap.xml`
3. Click **"Submit"**

✅ Google will start indexing your site!

---

## 🎨 Optional: Professional Email (Paid)

If you want `contact@yourdomain.dev` email:

### Option 1: Zoho Mail (FREE for 1 user)

```
Cost: $0/month for 1 mailbox
Storage: 5 GB
Features: Webmail, IMAP, POP3, mobile apps
```

1. Go to [zoho.com/mail](https://www.zoho.com/mail/)
2. Sign up for free plan
3. Add your domain
4. Configure DNS records (MX records)
5. Create mailbox: `contact@yourdomain.dev`

### Option 2: Cloudflare Email Routing (FREE)

```
Cost: $0/month
Features: Email forwarding only (no sending)
Forwards: Unlimited
```

1. Add domain to Cloudflare
2. Enable Email Routing
3. Forward `contact@yourdomain.dev` → your Gmail
4. Free and simple

### Option 3: Google Workspace (Paid)

```
Cost: $6/month per user
Features: Full Gmail, Drive, Docs, etc.
Professional: Best for business
```

**Recommendation:** Start with Zoho Free or Cloudflare forwarding

---

## 💳 Cost Comparison Summary

### Year 1 Total Costs

| Setup | Domain | Hosting | Email | Analytics | Total/Year | Per Month |
|-------|--------|---------|-------|-----------|------------|-----------|
| **Ultra Budget** | Cloudflare $8 | Vercel FREE | Resend FREE | GA FREE | **$8** | **$0.67** |
| **Recommended** | Porkbun $11 | Vercel FREE | Resend FREE | GA FREE | **$11** | **$0.92** |
| With Pro Email | Porkbun $11 | Vercel FREE | Zoho FREE | GA FREE | **$11** | **$0.92** |
| Full Business | Porkbun $11 | Vercel FREE | Workspace $72 | GA FREE | **$83** | **$6.92** |

### Years 2-5 Costs

| Provider | Year 2 | Year 3 | Year 4 | Year 5 | 5-Year Total |
|----------|--------|--------|--------|--------|--------------|
| **Porkbun** | $11 | $11 | $11 | $11 | **$55** |
| Cloudflare | $8 | $8 | $8 | $8 | **$40** |
| Namecheap | $15 | $15 | $15 | $15 | **$75** (worse) |

**Winner:** Porkbun (best value) or Cloudflare (absolute cheapest)

---

## 🚀 Complete Deployment Checklist

### Pre-Deployment (Local)
- [x] All features complete
- [x] Production build successful
- [x] All assets generated (OG image, favicons)
- [x] Documentation complete

### Hosting Setup (10 minutes)
- [ ] Create Vercel account
- [ ] Push code to GitHub
- [ ] Import repository to Vercel
- [ ] Add environment variables
- [ ] Deploy to Vercel
- [ ] Test at vercel.app subdomain

### Domain Setup (10 minutes)
- [ ] Buy domain (Porkbun recommended)
- [ ] Add domain to Vercel
- [ ] Configure DNS records
- [ ] Wait for DNS propagation (5-60 min)
- [ ] Verify HTTPS working

### Services Setup (15 minutes)
- [ ] Get Resend API key
- [ ] Get Google Analytics ID
- [ ] Add to Vercel environment variables
- [ ] Redeploy site
- [ ] Test contact form
- [ ] Verify analytics tracking

### SEO Setup (10 minutes)
- [ ] Add site to Google Search Console
- [ ] Get verification code
- [ ] Add to environment variables
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Test OG image on social media

### Final Testing (15 minutes)
- [ ] Test all pages on mobile
- [ ] Test contact form submission
- [ ] Check email arrives
- [ ] Verify analytics dashboard
- [ ] Test on multiple browsers
- [ ] Share on social media

**Total Time:** ~1 hour
**Total Cost:** $11/year

---

## 📈 When to Upgrade

Your free tiers will handle:
- ✅ 100 GB bandwidth/month (Vercel)
- ✅ ~30,000-50,000 visitors/month
- ✅ 100 emails/day (Resend)
- ✅ Unlimited analytics (Google)

**When to upgrade:**
- Traffic > 100 GB/month → Vercel Pro ($20/month)
- Emails > 100/day → Resend Pro ($20/month for 50k emails)
- Need team features → Workspace ($6/user/month)
- Want privacy analytics → Plausible ($9/month)

**Reality:** Most portfolios never need to upgrade!

---

## 🎯 Alternative Options

### If You Want Absolute Free (No Domain)

```
Hosting: Vercel                    FREE
Subdomain: portfolio.vercel.app    FREE
Email: Resend                      FREE
Analytics: Google Analytics        FREE
───────────────────────────────────────
TOTAL:                             $0/month
```

**Pros:** Completely free
**Cons:** Less professional, no custom domain

### If Budget is Zero for Now

**Deploy now on Vercel free subdomain:**
1. Deploy to `portfolio-username.vercel.app`
2. Get everything working
3. Buy domain later when you can afford it
4. Add domain to Vercel (5 minutes)
5. Zero downtime transition!

---

## 💡 Money-Saving Tips

### 1. Use .dev Instead of .com
```
.com: $11/year
.dev: $12/year
.me:  $20/year (avoid)
.io:  $35/year (avoid)
```

### 2. Register for Multiple Years
```
Porkbun 1 year:   $11.06/year
Porkbun 5 years:  $11.06/year (same price, lock it in!)
```

### 3. Skip Premium Email Initially
```
Use Gmail:             FREE
Use Cloudflare forwarding: FREE
Get real email later when needed
```

### 4. Use Coupon Codes
```
Porkbun: Search for "Porkbun coupon" (often 10-15% off)
Namecheap: First-time buyer discounts common
```

---

## 🎓 Student Discounts

### GitHub Student Developer Pack

If you're a student, get:
- **FREE .me domain** for 1 year (Namecheap)
- **$200 DigitalOcean credit**
- **50% off Canva Pro**
- **More...**

**Get it:** [education.github.com/pack](https://education.github.com/pack)

---

## ⚡ Quick Start (Fastest Path)

**Want to go live in 30 minutes?**

1. **Deploy to Vercel (10 min)**
   - Push to GitHub
   - Import to Vercel
   - Add env variables
   - Deploy

2. **Buy Porkbun domain (5 min)**
   - Search domain
   - Buy for $11
   - Done

3. **Connect domain (10 min)**
   - Add to Vercel
   - Update DNS
   - Wait 5 min

4. **Setup services (5 min)**
   - Get Resend key
   - Get GA ID
   - Add to Vercel
   - Redeploy

**Total: 30 minutes, $11 spent**

✅ Your portfolio is LIVE!

---

## 🎉 Summary

### Best Setup for You:

```
✅ Domain:    Porkbun.com          $11.06/year
✅ Hosting:   Vercel Free          $0/month
✅ Email:     Resend Free          $0/month
✅ Analytics: Google Analytics     $0/month
✅ SSL:       Included FREE        $0/month
✅ CDN:       Included FREE        $0/month
────────────────────────────────────────────
   TOTAL:                          $11/year

   That's less than $1/month! 🎊
```

### What You Get:

- ✅ Professional custom domain
- ✅ Lightning-fast global hosting
- ✅ Automatic HTTPS/SSL
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Working contact form
- ✅ Email notifications
- ✅ Analytics tracking
- ✅ SEO optimization
- ✅ Deploy previews
- ✅ Automatic scaling
- ✅ 99.99% uptime

### Next Steps:

1. Read through this guide
2. Create Vercel account
3. Deploy your portfolio
4. Buy domain on Porkbun
5. Connect domain
6. Setup services
7. Share your portfolio!

**You're ready to go live! 🚀**

---

*This guide is current as of 2025. Prices may vary. Always check official websites for latest pricing.*
