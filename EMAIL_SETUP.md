# Email Service Setup Guide

This guide will help you set up email functionality for your portfolio contact form. You have two options:

## Option 1: Resend (Recommended) ✅

Resend is a modern email API that's developer-friendly and has a generous free tier.

### Benefits:
- ✅ Free tier: 3,000 emails/month
- ✅ No credit card required to start
- ✅ Great developer experience
- ✅ Beautiful email templates
- ✅ Easy setup with Next.js

### Setup Steps:

#### 1. Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

#### 2. Get Your API Key
1. After logging in, go to [API Keys](https://resend.com/api-keys)
2. Click **"Create API Key"**
3. Give it a name (e.g., "Portfolio Contact Form")
4. Select permissions: **"Sending access"** only
5. Copy the generated API key (starts with `re_`)

#### 3. Add API Key to Your Project
1. Open `.env.local` in your project root
2. Add your Resend API key:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   CONTACT_EMAIL=your.email@example.com
   ```
3. Replace `your.email@example.com` with the email where you want to receive contact form submissions

#### 4. Verify Domain (Production Only - Optional)
For production use with a custom "from" address:
1. Go to [Domains](https://resend.com/domains) in Resend dashboard
2. Click **"Add Domain"**
3. Enter your domain (e.g., `abhaygupta.dev`)
4. Add the DNS records provided by Resend to your domain provider
5. Wait for verification (usually takes a few minutes)
6. Update the API route (`app/api/contact/route.ts`) line 31:
   ```typescript
   from: 'Portfolio <noreply@abhaygupta.dev>', // Use your verified domain
   ```

#### 5. Test the Form
1. Start your development server:
   ```bash
   npm run dev
   ```
2. Navigate to `http://localhost:3000#contact`
3. Fill out the contact form and submit
4. Check your email inbox for the message
5. Check the browser console and terminal for any errors

### Troubleshooting:
- **"Email service not configured"**: Make sure `RESEND_API_KEY` is set in `.env.local`
- **"Failed to send email"**: Check that your API key is valid and hasn't expired
- **Not receiving emails**: Check spam folder, verify `CONTACT_EMAIL` is correct
- **Rate limit errors**: Free tier has 100 emails per day

---

## Option 2: Formspree (No Backend Alternative)

If you prefer not to use Resend or want a simpler setup without API keys:

### Benefits:
- ✅ No backend code needed
- ✅ No API keys to manage
- ✅ Free tier: 50 submissions/month
- ✅ Instant setup (2 minutes)

### Setup Steps:

#### 1. Create Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for free account
3. Create a new form

#### 2. Get Your Form Endpoint
1. After creating a form, you'll get an endpoint like:
   ```
   https://formspree.io/f/YOUR_FORM_ID
   ```
2. Copy this URL

#### 3. Update Contact Component
Open `components/sections/Contact.tsx` and replace the `handleSubmit` function:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);
  setErrors({});

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  } catch (error) {
    setIsSubmitting(false);
    setErrors({
      submit: 'Failed to send message. Please try again or email directly.',
    });
  }
};
```

#### 4. Test the Form
1. Submit a test message through your contact form
2. Check your email for the notification from Formspree
3. You can also view submissions in your Formspree dashboard

---

## Option 3: SendGrid (Alternative)

If you prefer SendGrid over Resend:

### Setup Steps:

#### 1. Install SendGrid Package
```bash
npm install @sendgrid/mail
```

#### 2. Get SendGrid API Key
1. Sign up at [https://sendgrid.com](https://sendgrid.com)
2. Create an API key with "Mail Send" permissions
3. Add to `.env.local`:
   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key
   CONTACT_EMAIL=your.email@example.com
   ```

#### 3. Update API Route
Replace `app/api/contact/route.ts` with SendGrid implementation:

```typescript
import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const msg = {
      to: process.env.CONTACT_EMAIL || 'contact@abhaygupta.dev',
      from: 'noreply@abhaygupta.dev', // Must be verified in SendGrid
      subject: `Portfolio Contact: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
      replyTo: email,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
```

---

## Deployment Notes

### Vercel/Netlify
1. Add environment variables in your hosting platform's dashboard
2. Go to **Settings** → **Environment Variables**
3. Add `RESEND_API_KEY` and `CONTACT_EMAIL`
4. Redeploy your application

### Important Security Notes
- ✅ `.env.local` is already in `.gitignore` - never commit API keys
- ✅ API keys should only be set in environment variables
- ✅ Never expose API keys in client-side code
- ✅ The contact form API route runs server-side only

---

## Testing Checklist

Before going to production, test:
- [ ] Form validation works (try submitting empty fields)
- [ ] Email is received with correct formatting
- [ ] Reply-to address is set correctly (test by replying to the email)
- [ ] Error messages display properly when something fails
- [ ] Success message appears after submission
- [ ] Form clears after successful submission
- [ ] Works on mobile devices
- [ ] Spam folder check (emails might go there initially)

---

## Support

- **Resend Issues**: [Resend Documentation](https://resend.com/docs)
- **Formspree Issues**: [Formspree Help](https://help.formspree.io)
- **General Questions**: Check the API route logs in your deployment platform

---

**Current Setup**: Your portfolio is configured with Resend (Option 1). Just add your API key to `.env.local` to activate email sending!
