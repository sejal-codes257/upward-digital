// ============================================================
// SITE DATA — Edit all content here
// ============================================================

export const siteConfig = {
  name: 'Upward Digital',
  tagline: 'Where Vision Ascends',
  founder: 'Sejal Kanwar',
  email: 'hello@upwarddigital.com',
  phone: '+91 98765 43210',
  location: 'India · Global',
  socials: {
    instagram: 'https://instagram.com/upwarddigital',
    linkedin: 'https://linkedin.com/company/upwarddigital',
    twitter: 'https://twitter.com/upwarddigital',
  },
}

// ─── SERVICES ────────────────────────────────────────────────
export const services = [
  {
    id: 'custom-coded',
    title: 'Custom Coded Websites',
    description: 'Hand-crafted, pixel-perfect websites built from scratch — no templates, no compromise.',
    icon: 'Code2',
    category: 'development',
  },
  {
    id: 'luxury-brand',
    title: 'Luxury Brand Websites',
    description: 'Cinematic digital experiences that position your brand at the apex of its industry.',
    icon: 'Diamond',
    category: 'design',
  },
  {
    id: 'hotel-resort',
    title: 'Hotel & Resort Websites',
    description: 'Immersive hospitality platforms that convert browsers into bookings.',
    icon: 'Building',
    category: 'hospitality',
  },
  {
    id: 'doctor-clinic',
    title: 'Doctor & Clinic Websites',
    description: 'Premium medical websites that instill trust and drive patient appointments.',
    icon: 'Stethoscope',
    category: 'healthcare',
  },
  {
    id: 'restaurant',
    title: 'Restaurant Websites',
    description: 'Sensory digital dining experiences that fill tables before guests arrive.',
    icon: 'UtensilsCrossed',
    category: 'food',
  },
  {
    id: 'architect',
    title: 'Architect & Interior Design',
    description: 'Portfolio websites as refined as the spaces you design.',
    icon: 'Compass',
    category: 'design',
  },
  {
    id: 'boutique-salon',
    title: 'Boutique & Salon Websites',
    description: 'Elevated digital storefronts for fashion and beauty brands.',
    icon: 'Sparkles',
    category: 'retail',
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'Thoughtfully designed interfaces that guide, delight, and convert.',
    icon: 'Layers',
    category: 'design',
  },
  {
    id: 'seo',
    title: 'SEO Optimized Websites',
    description: 'Beautiful sites that rank. We engineer visibility alongside aesthetics.',
    icon: 'TrendingUp',
    category: 'marketing',
  },
]

// ─── PORTFOLIO ───────────────────────────────────────────────
// Add images to /public/assets/images/ then reference here
export const portfolioProjects = [
  {
    id: 1,
    title: 'Aurelia Boutique Hotel',
    category: 'Hotels',
    description: 'A cinematic booking experience for a 5-star Parisian property.',
    image: '/assets/images/project-hotel-1.jpg',
    tags: ['Hotel', 'Luxury', 'Animated'],
    year: '2024',
    featured: true,
  },
  {
    id: 2,
    title: 'Solis Restaurant',
    category: 'Restaurants',
    description: 'A sensory digital identity for a Michelin-starred dining concept.',
    image: '/assets/images/project-restaurant-1.jpg',
    tags: ['Restaurant', 'Editorial', 'Motion'],
    year: '2024',
    featured: true,
  },
  {
    id: 3,
    title: 'Dr. Aryan Wellness Clinic',
    category: 'Doctors',
    description: 'A premium healthcare website with integrated booking system.',
    image: '/assets/images/project-doctor-1.jpg',
    tags: ['Healthcare', 'Clean', 'Conversion'],
    year: '2024',
    featured: false,
  },
  {
    id: 4,
    title: 'Meridian Architecture',
    category: 'Architects',
    description: 'A dark, immersive portfolio for an award-winning architecture studio.',
    image: '/assets/images/project-arch-1.jpg',
    tags: ['Architecture', 'Portfolio', '3D'],
    year: '2024',
    featured: true,
  },
  {
    id: 5,
    title: 'Velour Fashion Boutique',
    category: 'Boutiques',
    description: 'A luxury e-commerce experience for a curated women\'s fashion label.',
    image: '/assets/images/project-boutique-1.jpg',
    tags: ['Fashion', 'E-Commerce', 'Luxury'],
    year: '2024',
    featured: false,
  },
  {
    id: 6,
    title: 'Serenova Resort & Spa',
    category: 'Resorts',
    description: 'An immersive resort website with parallax storytelling and room booking.',
    image: '/assets/images/project-resort-1.jpg',
    tags: ['Resort', 'Spa', 'Immersive'],
    year: '2024',
    featured: true,
  },
]

export const portfolioCategories = ['All', 'Hotels', 'Restaurants', 'Doctors', 'Architects', 'Boutiques', 'Resorts']

// ─── TESTIMONIALS ────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: 'Marco Bellini',
    role: 'Owner',
    company: 'Aurelia Boutique Hotel, Milan',
    quote: 'Upward Digital didn\'t just build us a website — they built our brand\'s digital soul. The result exceeded every expectation.',
    avatar: '/assets/images/avatar-1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    role: 'Founder',
    company: 'Sharma Wellness Institute, Mumbai',
    quote: 'Our patient enquiries tripled within 60 days. The site is breathtaking and Sejal\'s attention to detail is unmatched.',
    avatar: '/assets/images/avatar-2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'James Whitfield',
    role: 'Creative Director',
    company: 'Meridian Architecture, London',
    quote: 'Finally a developer who truly understands luxury aesthetics. The website is as refined as our architecture.',
    avatar: '/assets/images/avatar-3.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'Camille Fontaine',
    role: 'Owner',
    company: 'Velour Boutique, Paris',
    quote: 'Working with Upward Digital was a revelation. Every pixel was crafted with intention.',
    avatar: '/assets/images/avatar-4.jpg',
    rating: 5,
  },
]

// ─── PRICING ─────────────────────────────────────────────────
export const pricingPlans = [
  {
    id: 'essential',
    name: 'Essential',
    price: '₹45,000',
    priceUSD: '$549',
    tagline: 'Designed to impress',
    description: 'A polished, custom-coded website for emerging premium businesses.',
    features: [
      '5 custom pages',
      'Mobile responsive design',
      'Contact form integration',
      'Google Analytics setup',
      'Basic SEO optimization',
      'Local business profile setup',
      '30 days post-launch support',
    ],
    cta: 'Start Essential',
    featured: false,
  },
  {
    id: 'signature',
    name: 'Signature',
    price: '₹95,000',
    priceUSD: '$1,149',
    tagline: 'The flagship experience',
    description: 'Full cinematic website experience with animations and advanced features.',
    features: [
      '10 custom pages',
      'Cinematic scroll animations',
      'Custom UI components',
      'Advanced SEO + Schema',
      'CMS integration',
      'Booking/inquiry system',
      'Performance optimization',
      '3 months priority support',
    ],
    cta: 'Start Signature',
    featured: true,
  },
  {
    id: 'prestige',
    name: 'Prestige',
    price: '₹1,75,000',
    priceUSD: '$2,099',
    tagline: 'No limits. Pure luxury.',
    description: 'Bespoke digital ecosystem for established luxury brands and enterprises.',
    features: [
      'Unlimited pages',
      'Custom 3D / WebGL elements',
      'Full branding system',
      'Admin dashboard',
      'Multi-language support',
      'Custom integrations',
      'Dedicated project manager',
      '6 months retainer support',
    ],
    cta: 'Start Prestige',
    featured: false,
  },
]

// ─── PROCESS STEPS ───────────────────────────────────────────
export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin with a deep consultation to understand your brand vision, goals, and target audience.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'We map a digital strategy: user flows, content architecture, and conversion pathways.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Every screen is designed with cinematic intentionality — no templates, only craft.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'Hand-coded with performance-first architecture. Clean, scalable, and lightning fast.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Full deployment, SEO setup, analytics integration, and a flawless launch.',
  },
  {
    number: '06',
    title: 'Elevate',
    description: 'Ongoing support, optimization, and strategy to keep your brand ascendant.',
  },
]

// ─── INDUSTRIES TICKER ───────────────────────────────────────
export const industriesTicker = [
  'Hotels & Resorts', 'Fine Dining', 'Healthcare', 'Architecture', 'Interior Design',
  'Luxury Boutiques', 'Salons & Spas', 'Law Firms', 'Private Equity', 'Jewelry Brands',
  'Wellness Centers', 'Art Galleries', 'Fashion Labels', 'Golf Clubs', 'Yacht Charters',
]

// ─── BLOG POSTS ──────────────────────────────────────────────
export const blogPosts = [
  {
    id: 1,
    title: 'Why Your Luxury Brand Deserves a Custom-Coded Website',
    slug: 'luxury-brand-custom-coded-website',
    excerpt: 'Template websites signal mediocrity. Here\'s why elite brands invest in bespoke digital experiences.',
    image: '/assets/images/blog-1.jpg',
    category: 'Web Design',
    date: '2024-11-15',
    readTime: '5 min',
    featured: true,
  },
  {
    id: 2,
    title: 'The Hotel Website Psychology: Converting Browsers to Bookers',
    slug: 'hotel-website-conversion-psychology',
    excerpt: 'How the right visual hierarchy, speed, and emotional cues turn visitors into confirmed guests.',
    image: '/assets/images/blog-2.jpg',
    category: 'Hospitality',
    date: '2024-10-28',
    readTime: '7 min',
    featured: false,
  },
  {
    id: 3,
    title: 'SEO for Premium Businesses: Visibility Without Compromising Aesthetics',
    slug: 'seo-premium-businesses',
    excerpt: 'You don\'t have to choose between beautiful design and ranking on Google. Here\'s how we do both.',
    image: '/assets/images/blog-3.jpg',
    category: 'SEO',
    date: '2024-10-10',
    readTime: '6 min',
    featured: false,
  },
  {
    id: 4,
    title: 'Motion Design in Web: When Animation Elevates vs Overwhelms',
    slug: 'motion-design-web-animation',
    excerpt: 'A refined guide to using animation as a luxury signal, not a distraction.',
    image: '/assets/images/blog-4.jpg',
    category: 'Design',
    date: '2024-09-22',
    readTime: '4 min',
    featured: true,
  },
]

// ─── CASE STUDIES ────────────────────────────────────────────
export const caseStudies = [
  {
    id: 1,
    client: 'Aurelia Boutique Hotel',
    category: 'Hospitality',
    challenge: 'An established boutique hotel with low online visibility and a dated website losing bookings to competitors.',
    solution: 'Full cinematic redesign with immersive room previews, integrated booking flow, and local SEO strategy.',
    results: [
      { metric: '+312%', label: 'Direct Bookings' },
      { metric: '+180%', label: 'Organic Traffic' },
      { metric: '2.1s', label: 'Load Time' },
    ],
    image: '/assets/images/case-hotel-1.jpg',
    slug: 'aurelia-boutique-hotel',
  },
  {
    id: 2,
    client: 'Dr. Aryan Wellness',
    category: 'Healthcare',
    challenge: 'A premium clinic struggling to attract the right patient demographics online.',
    solution: 'Trust-forward design system, clear service architecture, and an SEO-optimised booking funnel.',
    results: [
      { metric: '+240%', label: 'Patient Enquiries' },
      { metric: '#1', label: 'Google Ranking' },
      { metric: '4.9★', label: 'Patient Rating' },
    ],
    image: '/assets/images/case-doctor-1.jpg',
    slug: 'dr-aryan-wellness',
  },
]

// ─── STATS ───────────────────────────────────────────────────
export const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '18+', label: 'Industries Served' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '3×', label: 'Avg. Enquiry Growth' },
]
