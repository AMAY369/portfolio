# 🚀 Deploy Your Portfolio NOW!

## Total Cost: **$11/year** ($0.92/month)

Follow these simple steps to go live in **30 minutes**.

---

## ✅ What You'll Get

- Custom domain (e.g., `abhaygupta.dev`)
- Professional hosting (99.99% uptime)
- Working contact form
- Analytics tracking
- Automatic HTTPS
- Global CDN
- Unlimited deployments

**All for less than $1/month!**

---

## 📋 30-Minute Deployment Plan

### Step 1: Deploy to Vercel (10 minutes)

```bash
# 1. Push code to GitHub
git init
git add .
git commit -m "Ready for deployment"

# Create repo on GitHub (github.com/new), then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

**Then:**
1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign up with GitHub
3. Import your `portfolio` repository
4. Click Deploy
5. ✅ Live at: `https://portfolio-username.vercel.app`

---

### Step 2: Buy Domain on Porkbun (5 minutes)

1. Go to [porkbun.com](https://porkbun.com)
2. Search for your domain (e.g., `yourname.dev`)
3. Add to cart
4. Create account
5. Checkout: **Pay $11-12**
6. ✅ Domain purchased!

**Recommended domains:**
- `yourname.dev` - $12/year (developer focused)
- `yourname.com` - $11/year (classic choice)
- `yourname.me` - $20/year (avoid, too expensive)

---

### Step 3: Connect Domain to Vercel (10 minutes)

**In Vercel Dashboard:**
1. Go to Settings → Domains
2. Enter your domain: `yourname.dev`
3. Click Add

**Vercel will show DNS records. In Porkbun:**
1. Go to Domain Management → Your domain
2. Click DNS Records
3. Add A record:
   ```
   Type: A
   Host: (leave empty)
   Answer: 76.76.21.21
   TTL: 600
   ```
4. Add CNAME record:
   ```
   Type: CNAME
   Host: www
   Answer: cname.vercel-dns.com
   TTL: 600
   ```
5. Save

**Wait 5-30 minutes for DNS propagation**

6. ✅ Visit `https://yourname.dev` - Your site is live!

---

### Step 4: Setup Services (5 minutes)

#### A. Email Service (Resend)

1. Go to [resend.com](https://resend.com)
2. Sign up (FREE)
3. Create API key
4. Copy: `re_xxxxxxxxxxxxx`

#### B. Analytics (Google)

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account → Property → Web stream
3. Copy Measurement ID: `G-XXXXXXXXXX`

#### C. Add to Vercel

In Vercel → Settings → Environment Variables, add:

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ANALYTICS_PROVIDER=google
```

Click Save → Redeploy your site

✅ **All features now working!**

---

## 🎯 Quick Commands

```bash
# Deploy to Vercel (first time)
npx vercel

# Deploy to production
npx vercel --prod

# Check deployment status
npx vercel ls

# View logs
npx vercel logs
```

---

## 💰 Cost Breakdown

```
Domain (Porkbun):        $11/year
Hosting (Vercel):        FREE
Email (Resend):          FREE
Analytics (Google):      FREE
SSL Certificate:         FREE
CDN:                     FREE
────────────────────────────────
TOTAL:                   $11/year

That's $0.92/month! 🎊
```

---

## ✅ Post-Deployment Checklist

### Immediately After Deployment
- [ ] Visit your site
- [ ] Test on mobile
- [ ] Fill out contact form
- [ ] Check email arrives
- [ ] View in different browsers

### Within 24 Hours
- [ ] Add site to Google Search Console
- [ ] Submit sitemap
- [ ] Share on LinkedIn
- [ ] Share on Twitter
- [ ] Add to resume

### Within 1 Week
- [ ] Monitor analytics
- [ ] Check for errors
- [ ] Get feedback from friends
- [ ] Make any needed tweaks

---

## 🆘 Need Help?

### Vercel Support
- Docs: [vercel.com/docs](https://vercel.com/docs)
- Community: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

### Porkbun Support
- Email: support@porkbun.com
- Usually responds within 24 hours

### Your Portfolio Issues
- Check `portfolio/` documentation files
- All guides are comprehensive

---

## 🎉 You're Ready!

Everything is prepared:
- ✅ Code is production-ready
- ✅ All features complete
- ✅ Assets generated
- ✅ Documentation written
- ✅ Budget plan created

**Just follow the 4 steps above and you'll be live in 30 minutes!**

---

## 🔗 Quick Links

- **Vercel Signup:** [vercel.com/signup](https://vercel.com/signup)
- **Porkbun:** [porkbun.com](https://porkbun.com)
- **Resend:** [resend.com](https://resend.com)
- **Google Analytics:** [analytics.google.com](https://analytics.google.com)
- **Search Console:** [search.google.com/search-console](https://search.google.com/search-console)

---

**Ready? Let's deploy! 🚀**

Open terminal and run:
```bash
git init
git add .
git commit -m "Portfolio ready for deployment 🚀"
```

Then create a GitHub repo and push. You're on your way!
