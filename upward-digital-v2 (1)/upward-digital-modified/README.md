# UPWARD DIGITAL — Official Website
### Founded by Sejal Kanwar

A luxury, cinematic, custom-coded website for a premium web agency serving hotels, resorts, restaurants, doctors, architects, boutiques, and luxury brands globally.

---

## Tech Stack
- **React** + **Vite** — Fast, modern frontend
- **Tailwind CSS** — Utility-first styling with custom luxury design tokens
- **Framer Motion** — Smooth, cinematic animations
- **React Router** — Client-side routing
- **Lucide React** — Clean icon library

---

## Project Structure

```
upward-digital/
├── public/
│   ├── assets/
│   │   └── images/
│   │       ├── portfolio/     ← Drop project images here
│   │       ├── team/          ← Founder photos here
│   │       └── blog/          ← Blog cover images here
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/            ← Navbar, Footer, Layout
│   │   ├── ui/                ← Reusable components (ProjectCard, SectionLabel)
│   │   └── sections/          ← Homepage sections
│   ├── data/
│   │   └── index.js           ← ALL site content (edit here)
│   ├── pages/                 ← All 12 pages
│   └── App.jsx                ← Routes
└── netlify.toml               ← Netlify SPA redirect config
```

---

## Adding Portfolio Images

1. Drop your image into `/public/assets/images/portfolio/`
2. Open `src/data/index.js`
3. Add one entry to the `portfolioProjects` array:

```js
{
  id: 7,
  title: "Your Project Title",
  category: "Hotel",            // Hotel, Resort, Healthcare, Restaurant, Architecture, Retail
  description: "Short description of the project and what was built.",
  image: "/assets/images/portfolio/your-image.jpg",
  tags: ["Hotel", "Booking"],
  year: "2025",
  featured: false,              // Set true to show on homepage
}
```

That's it. No other changes needed.

---

## Editing Content

All content lives in one place: **`src/data/index.js`**

| Array | What it controls |
|-------|-----------------|
| `portfolioProjects` | Portfolio page + homepage preview |
| `services` | Services section |
| `pricingTiers` | Pricing page |
| `testimonials` | Testimonials slider |
| `processSteps` | Process/how-we-work section |
| `industries` | Scrolling marquee |
| `blogPosts` | Blog page |

---

## Pages

| Route | Page |
|-------|------|
| `/` | Home (cinematic hero + all sections) |
| `/about` | About + founder story |
| `/services` | Services + pricing |
| `/portfolio` | Filterable portfolio grid |
| `/case-studies` | Deep-dive case studies |
| `/testimonials` | Full testimonials page |
| `/pricing` | Pricing tiers + FAQ |
| `/blog` | Journal / editorial blog |
| `/contact` | Contact form |
| `/admin` | Admin dashboard |
| `*` | 404 Not Found |

---

## Admin Dashboard

URL: `/admin`  
Username: `admin`  
Password: `upward2025`

**Change the password** in `src/pages/Admin.jsx` → `CREDENTIALS` object.

Features:
- Overview with stats
- Inquiry management (stores in localStorage from contact form)
- Portfolio management guide
- Blog management guide
- Settings

---

## Local Development

```bash
npm install
npm run dev
```

Open: http://localhost:5173

---

## Deploy to Netlify

### Option A — Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option B — Netlify UI (Drag & Drop)

1. Run `npm run build`
2. Go to [netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder onto the deploy area
4. Done ✓

### Option C — Git Integration (Recommended)

1. Push this repo to GitHub
2. Go to Netlify → New Site From Git
3. Connect your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy ✓

The `netlify.toml` file already handles SPA routing.

---

## Customization

### Colors
Edit `tailwind.config.js` → `theme.extend.colors`

### Fonts
Fonts are loaded from Google Fonts in `index.html`. To change:
1. Update the Google Fonts link
2. Update `tailwind.config.js` → `fontFamily`
3. Update `src/index.css` → font references

### SEO
Update meta tags in `index.html` and `public/sitemap.xml`.

---

## License
© 2025 Upward Digital — Sejal Kanwar. All rights reserved.
