# ProFieldWork Setup Guide

This guide will help you set up all required services for hosting on Vercel with the domain profieldwork.com.

## Prerequisites
- Domain: profieldwork.com (already purchased)
- Vercel account
- Git repository

## Step-by-Step Setup

### 1. Google Analytics (5 minutes)
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **"Start measuring"**
3. Create account:
   - Account name: ProFieldWork
   - Accept data sharing settings
4. Create property:
   - Property name: ProFieldWork
   - Time zone: Your timezone
   - Currency: Your currency
5. Choose platform: **Web**
6. Set up web stream:
   - Website URL: https://www.profieldwork.com
   - Stream name: ProFieldWork Main
7. Copy the **Measurement ID** (format: G-XXXXXXXXXX)
8. Add to `.env.local`: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

### 2. Google Search Console (5 minutes)
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click **"Add property"**
3. Choose **"Domain"** property type
4. Enter: `profieldwork.com`
5. Verify ownership via DNS:
   - Add the TXT record to your domain DNS settings
   - Wait for verification (can take up to 48 hours)
6. Alternative: Use HTML tag method:
   - Choose **"HTML tag"** verification
   - Copy the content value from the meta tag
   - Add to `.env.local`: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-content-value`

### 3. Resend Email Service (10 minutes)
1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email address
3. Add and verify your domain:
   - Click **"Add Domain"**
   - Enter: `profieldwork.com`
   - Add the DNS records to your domain:
     - SPF record (TXT)
     - DKIM records (3 CNAME records)
   - Click **"Verify DNS Records"** (may take a few minutes)
4. Create API Key:
   - Go to **"API Keys"**
   - Click **"Create API Key"**
   - Name: `ProFieldWork Production`
   - Permission: `Full Access`
   - Copy the API key (starts with `re_`)
5. Add to `.env.local`: `RESEND_API_KEY=re_your_api_key_here`
6. Update email addresses in `.env.local`:
   ```
   EMAIL_FROM=hello@profieldwork.com
   EMAIL_TO=contact@profieldwork.com
   ```

### 4. Calendly Integration (5 minutes)
1. Go to [calendly.com](https://calendly.com) and sign up
2. Set up your availability
3. Create an event type:
   - Name: "ProFieldWork Demo"
   - Duration: 30 minutes
   - Description: "See ProFieldWork in action"
4. Customize your scheduling page:
   - Add your logo
   - Set brand colors
   - Add screening questions if needed
5. Copy your scheduling link (format: https://calendly.com/your-username/profieldwork-demo)
6. Add to `.env.local`: `NEXT_PUBLIC_CALENDLY_LINK=https://calendly.com/your-username/profieldwork-demo`

### 5. Deploy to Vercel (10 minutes)
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your repository
5. Configure project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
6. Add Environment Variables:
   - Click **"Environment Variables"**
   - Add each variable from your `.env.local`:
     ```
     NEXT_PUBLIC_GA_MEASUREMENT_ID=G-your-id
     NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification
     NEXT_PUBLIC_CALENDLY_LINK=your-calendly-link
     RESEND_API_KEY=re_your_api_key
     EMAIL_FROM=hello@profieldwork.com
     EMAIL_TO=contact@profieldwork.com
     ```
7. Click **"Deploy"**

### 6. Connect Your Domain (5 minutes)
1. In Vercel, go to your project settings
2. Navigate to **"Domains"**
3. Add domain: `profieldwork.com`
4. Add domain: `www.profieldwork.com`
5. Update DNS records at your domain registrar:
   - A record: @ → 76.76.21.21
   - CNAME record: www → cname.vercel-dns.com
6. Wait for DNS propagation (5-30 minutes)
7. Vercel will automatically provision SSL certificates

## Testing Checklist

### ✅ Google Analytics
- Visit your site
- Check Real-time reports in Google Analytics
- Verify page views are being tracked

### ✅ Contact Form
- Submit a test form on your live site
- Check if email arrives at `contact@profieldwork.com`
- Verify sender shows as `hello@profieldwork.com`

### ✅ Calendly
- Click "Schedule Call" button
- Verify it opens your Calendly page
- Test booking a demo slot

### ✅ SEO
- Google your site after 24-48 hours
- Check Google Search Console for indexing status
- Verify site appears in search results

## Troubleshooting

### Email not sending?
1. Check Resend dashboard for failed emails
2. Verify domain is verified in Resend
3. Check API key is correct
4. Look at Vercel function logs

### Analytics not working?
1. Use Google Analytics Debugger Chrome extension
2. Check browser console for errors
3. Verify measurement ID is correct
4. Ensure cookie consent is accepted

### Domain not working?
1. Check DNS propagation: [dnschecker.org](https://dnschecker.org)
2. Verify DNS records are correct
3. Wait up to 48 hours for full propagation

## Next Steps
1. Set up email forwarding for contact@profieldwork.com
2. Create Google My Business listing
3. Submit sitemap to Google Search Console
4. Set up monitoring alerts in Vercel
5. Configure Resend email templates for better formatting

## Support
- Vercel: [vercel.com/support](https://vercel.com/support)
- Resend: [resend.com/docs](https://resend.com/docs)
- Google Analytics: [support.google.com/analytics](https://support.google.com/analytics)