# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Project Architecture

This is a Next.js 15 marketing website built with:
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with CSS variables
- **Components**: shadcn/ui (New York style) with Lucide icons
- **Font**: Geist Sans and Geist Mono

### Directory Structure
- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
  - `/ui` - shadcn/ui components
- `/lib` - Utility functions and shared code
- `/public` - Static assets

### Path Aliases
- `@/*` - Root directory imports

## Project Overview

Build a professional marketing website to showcase an offline-first mobile inspection platform that can be white-labeled for various industries. The website should position the product as a versatile solution for any business needing offline data collection, custom forms, and field inspections - not limited to industrial equipment.

## Strategic Positioning

### Core Value Proposition
"Transform your field operations with an offline-first inspection platform that works anywhere, syncs seamlessly, and adapts to your business needs."

### Target Audiences
1. **Primary**: Mid to large enterprises with field operations (logistics, property management, vehicle rentals, agriculture, healthcare facilities)
2. **Secondary**: Software consultancies looking for white-label solutions for their clients
3. **Tertiary**: Government agencies and NGOs operating in remote areas

### Key Differentiators
- Works completely offline - no connectivity required
- Fully customizable forms and workflows
- White-label ready with complete branding options
- Enterprise-grade security and compliance
- Proven in demanding industrial environments

## Website Structure

### Hero Section
- Compelling headline focusing on "offline-first" and "works anywhere"
- Subheadline emphasizing customization and reliability
- Hero image/animation showing the app in various contexts (not just industrial)
- Clear CTA: "See It In Action" (demo request) and "Explore Use Cases"

### Key Features Section
Present features in business terms, not technical:

1. **"Never Lose Data Again"** - Offline-first architecture
2. **"Your Forms, Your Way"** - Dynamic form builder
3. **"See Everything, Everywhere"** - Real-time dashboard
4. **"Pictures Tell the Story"** - Media capture and management
5. **"Always In Sync"** - Intelligent synchronization
6. **"Your Brand, Not Ours"** - White-label capabilities

### Use Cases Section
Showcase versatility with interactive cards for different industries:

1. **Equipment Rental Companies**
   - Pre/post rental inspections
   - Damage documentation
   - Maintenance tracking

2. **Property Management**
   - Move-in/move-out inspections
   - Maintenance requests
   - Safety compliance checks

3. **Fleet Management**
   - Vehicle condition reports
   - Driver inspections
   - Incident documentation

4. **Healthcare Facilities**
   - Equipment maintenance logs
   - Safety inspections
   - Compliance audits

5. **Agriculture**
   - Crop inspections
   - Equipment checks
   - Quality assessments

6. **Construction**
   - Site safety inspections
   - Equipment condition
   - Progress documentation

### Product Showcase Section
Use a tabbed interface to show different aspects:

1. **Mobile App Tab**
   - Screenshot carousel showing:
     - Login screen (branded example)
     - Dashboard with pending inspections
     - Dynamic form filling
     - Photo capture with annotations
     - Offline indicator and sync status

2. **Admin Dashboard Tab**
   - Screenshots showing:
     - Analytics dashboard
     - Form builder interface
     - User management
     - Inspection review screen
     - Report generation

3. **Customization Tab**
   - Before/after showing white-labeling
   - Form customization examples
   - Custom workflow diagrams

### Benefits Section
Focus on business outcomes:

1. **Reduce Operational Risk**
   - "60% reduction in missed inspections"
   - "Zero data loss guarantee"

2. **Increase Efficiency**
   - "80% faster inspection completion"
   - "Instant report generation"

3. **Improve Compliance**
   - "100% audit trail"
   - "Automated compliance reporting"

4. **Scale Your Operations**
   - "Support 1000+ concurrent users"
   - "Works in 50+ countries"

### Technology Trust Signals
- Security badges (SOC 2, GDPR, encryption)
- Uptime statistics
- Technology stack icons (React Native, PostgreSQL, AWS)
- Mobile platform compatibility

### Pricing Section
Three-tier approach:

1. **Starter** - For small teams testing the waters
2. **Professional** - For growing businesses
3. **Enterprise** - Custom solutions with white-labeling

Include "Custom Pricing for White Label Partners" CTA

### Case Studies Section
2-3 detailed case studies showing:
- Challenge faced
- Solution implemented
- Measurable results
- Client testimonial

### Integration Section
Show logos of systems it integrates with:
- ERP systems
- Asset management tools
- Business intelligence platforms
- Cloud storage providers

### Call-to-Action Sections

1. **Primary CTA**: "Schedule a Demo"
   - Calendly integration
   - Personalized demo based on industry

2. **Secondary CTA**: "Try It Free"
   - 30-day trial
   - No credit card required

3. **Partner CTA**: "Become a White Label Partner"
   - Partnership benefits
   - Revenue sharing model

### Footer
- Product links
- Industry solutions
- Resources (blog, documentation, API docs)
- Company information
- Trust signals (certifications, security)

## Design Guidelines

### Visual Style
- Clean, modern, professional
- Use abstract illustrations rather than specific industry photos
- Color scheme that's neutral but confident
- Plenty of white space
- Mobile-first responsive design

### Interactive Elements
- Animated feature demonstrations
- Interactive form builder preview
- ROI calculator
- Industry selector for personalized content

### Performance Requirements
- Lighthouse score > 90
- Core Web Vitals optimized
- Progressive enhancement
- Accessible (WCAG 2.1 AA)

## Content Strategy

### Messaging Hierarchy
1. **Primary**: Works offline, syncs when connected
2. **Secondary**: Completely customizable for any industry
3. **Tertiary**: Enterprise-ready with white-label options

### Proof Points to Emphasize
- "Used by 500+ companies worldwide"
- "10 million+ inspections completed"
- "99.9% uptime for 3 years"
- "Zero data loss incidents"

### SEO Focus Keywords
- "offline inspection app"
- "field inspection software"
- "white label inspection platform"
- "custom form builder app"
- "offline data collection"
- "mobile inspection solution"

## Technical Implementation Notes

### Architecture
- Next.js 15 with App Router
- TypeScript for type safety
- Shadcn/ui for consistent components
- Static generation where possible
- Dynamic imports for performance

### Key Pages
1. **Homepage** - Main marketing page
2. **Industries** - Dedicated pages for each vertical
3. **Features** - Deep dive into capabilities
4. **Pricing** - Clear tier comparison
5. **Demo** - Interactive product tour
6. **Resources** - Blog, case studies, documentation
7. **Partners** - White label program details

### Analytics and Tracking
- Conversion tracking for demo requests
- Heatmap analysis for user behavior
- A/B testing framework
- Industry-specific landing pages

### Lead Generation
- Exit intent popups with industry-specific content
- Downloadable whitepapers
- Newsletter signup with industry insights
- Live chat integration

## Success Metrics

### Primary KPIs
- Demo request conversion rate > 5%
- Time on site > 3 minutes
- Bounce rate < 40%
- Industry page engagement rates

### Secondary KPIs
- White label partner inquiries
- Content downloads
- Newsletter signups
- Return visitor rate

## Marketing Recommendations

### Positioning Strategy
Don't lead with "industrial inspection" - instead position as "offline-first field operations platform" that happens to excel at equipment inspection among many other uses.

### Content Marketing
- Industry-specific blog posts
- ROI calculators for each vertical
- Comparison guides vs competitors
- Best practices whitepapers

### Social Proof
- Logo wall of diverse clients
- Industry-specific testimonials
- Case study videos
- Trust pilot/G2 ratings

### Partnership Opportunities
- Integration partners
- Industry consultants
- White label resellers
- Technology partners

Remember: The goal is to show versatility while maintaining credibility. Use the industrial inspection screenshots as proof of capability in demanding environments, but frame them as one of many possible applications.

## Best Practices

- Always create separate components to avoid heavy files
- Only use shadcn components, add them if needed with shadcn command, create custom components only if shadcn does not have the component you need

## Memories

- Always make the pages SEO optimized to avoid reviewing them at the end of the project
- Use SSR and Client Side redering when needed, following best practices
- Never use dirty solutions or workarounds. Always follow best coding practices based on the framework used (Next.js 15, tailwind css, shadcn...)