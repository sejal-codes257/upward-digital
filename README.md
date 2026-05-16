# Upward Digital — Website

**Luxury custom-coded website agency** | Founded by Sejal Kanwar

> Cinematic. Custom-coded. Uncompromising.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| TailwindCSS | Utility styling |
| Framer Motion | Animations & transitions |
| GSAP | Advanced scroll animations |
| Three.js / R3F | 3D elements (opt-in) |
| Lenis | Smooth scroll |
| React Router v6 | Client-side routing |
| Lucide Icons | Icon system |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

---

## Project Structure

```
upward-digital/
├── public/
│   ├── assets/
│   │   └── images/          ← All site images go here
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── animations/
│   │   ├── ParticleField.jsx  ← Canvas particle background
│   │   └── Reveal.jsx         ← Reusable reveal animations
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── FounderSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── IndustriesTicker.jsx
│   │   │   ├── ProcessSection.jsx
│   │   │   ├── PortfolioSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   └── CTASection.jsx
│   │   └── ui/
│   │       ├── CustomCursor.jsx
│   │       └── Loader.jsx
│   │
│   ├── data/
│   │   └── siteData.js        ← ALL content lives here
│   │
│   ├── hooks/
│   │   ├── useSmoothScroll.js
│   │   └── useParallax.js
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── PortfolioPage.jsx
│   │   ├── CaseStudiesPage.jsx
│   │   ├── TestimonialsPage.jsx
│   │   ├── PricingPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── InquiryPage.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── NotFoundPage.jsx
│   │
│   ├── utils/
│   │   ├── images.js          ← Centralised image paths
│   │   └── helpers.js         ← Utility functions
│   │
│   ├── App.jsx                ← Routing + layout
│   ├── main.jsx               ← Entry point
│   └── index.css              ← Global styles + design tokens
│
├── index.html                 ← SEO meta tags
├── vite.config.js
├── tailwind.config.js
├── netlify.toml               ← Netlify deploy config
└── README.md
```

---

## Editing Content

**All site content is in one file:**

```
src/data/siteData.js
```

### Change services:
Edit the `services` array in `siteData.js`. Each service has:
- `id`, `title`, `description`, `icon`, `category`

### Add a portfolio project:
1. Add image to `/public/assets/images/`
2. Add entry to `portfolioProjects` array in `siteData.js`:
```js
{
  id: 7,
  title: 'New Project Name',
  category: 'Hotels',         // Must match portfolioCategories
  description: 'Short description.',
  image: '/assets/images/your-image.jpg',
  tags: ['Hotel', 'Luxury'],
  year: '2025',
  featured: false,
}
```

### Add a testimonial:
Add entry to `testimonials` array in `siteData.js`.

### Add a blog post:
Add entry to `blogPosts` array in `siteData.js`.

### Update pricing:
Edit the `pricingPlans` array in `siteData.js`.

### Change colors:
Edit `tailwind.config.js` — color tokens are defined there. Also update CSS variables in `src/index.css`.

### Change fonts:
1. Update the Google Fonts link in `index.html`
2. Update `fontFamily` in `tailwind.config.js`
3. Update `@import` in `src/index.css`

---

## Adding Images

Drop images into `/public/assets/images/` then reference them by path:

```js
image: '/assets/images/your-image.jpg'
```

See `/public/assets/images/README.md` for the full list of expected filenames and recommended sizes.

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/portfolio` | Portfolio |
| `/case-studies` | Case Studies |
| `/testimonials` | Testimonials |
| `/pricing` | Pricing |
| `/blog` | Blog |
| `/contact` | Contact |
| `/inquiry` | Project Inquiry Form |
| `/admin` | Admin Dashboard |
| `/*` | 404 Page |

---

## Admin Dashboard

Visit `/admin` in the browser.

The dashboard is **frontend-only** (demo mode using local data). It includes:
- Overview with traffic chart
- Portfolio management (add/edit/delete)
- Testimonials management
- Inquiry tracking with status updates
- Blog post management
- Site settings editor (name, tagline, copy)

To make it production-ready, connect a backend (Supabase, Firebase, or a headless CMS like Sanity).

---

## Deploy to Netlify

### Option A — Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option B — Netlify Dashboard (recommended)
1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New Site from Git
3. Select your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy**

The `netlify.toml` already handles:
- SPA routing redirects
- Security headers
- Asset caching

### Custom Domain
In Netlify: Site Settings → Domain Management → Add Custom Domain

---

## SEO Checklist

- [x] Title + meta description in `index.html`
- [x] Open Graph tags (`og:title`, `og:description`, `og:image`)
- [x] Twitter card tags
- [x] Schema.org JSON-LD (ProfessionalService)
- [x] Canonical URL
- [x] `robots.txt`
- [x] `sitemap.xml`
- [x] Semantic HTML (`<main>`, `<section>`, `<h1>`–`<h3>`)
- [ ] Add real `og-image.jpg` to `/public/assets/images/`
- [ ] Update canonical URL in `index.html` to your live domain
- [ ] Update `sitemap.xml` URLs to your live domain
- [ ] Submit sitemap to Google Search Console

---

## Performance Tips

- All animations use GPU-optimised transforms (`opacity`, `transform`)
- Images lazy-load by default in modern browsers
- Particles are canvas-based (not DOM elements)
- Lenis smooth scroll is hardware-accelerated
- Fonts are preconnected in `index.html`

For production, also:
- Compress images (use [Squoosh](https://squoosh.app) or WebP)
- Enable Netlify's asset optimization in Site Settings

---

## Brand Tokens (Quick Reference)

```
Black:        #080808  (obsidian)
Void:         #050505  (void — deepest bg)
Deep Blue:    #0a1628  (deep-blue)
Royal Blue:   #1a3a6b  (royal-blue)
Electric Blue:#2563eb  (electric-blue — primary accent)
Ice Blue:     #93c5fd  (ice-blue — light accent)
Silk:         #f5f0e8  (silk — primary text)
Gold:         #c9a96e  (gold — warm accent)
Silver:       #a8b4c4  (silver — secondary text)
```

---

## License

All rights reserved. © Upward Digital. Built by Sejal Kanwar.
