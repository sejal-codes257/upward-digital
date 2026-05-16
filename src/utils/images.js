/**
 * IMAGE UTILITY
 * ─────────────────────────────────────────────────────────────
 * All images live in /public/assets/images/
 *
 * To add a new image:
 *   1. Drop the file into /public/assets/images/
 *   2. Add one line to the relevant array below
 *   3. Reference it via getImage() or directly in siteData.js
 *
 * ─────────────────────────────────────────────────────────────
 */

const BASE = '/assets/images'

export const getImage = (filename) => `${BASE}/${filename}`

// ─── Portfolio images ─────────────────────────────────────────
// Add more by appending to this array
export const portfolioImages = [
  `${BASE}/project-hotel-1.jpg`,
  `${BASE}/project-restaurant-1.jpg`,
  `${BASE}/project-doctor-1.jpg`,
  `${BASE}/project-arch-1.jpg`,
  `${BASE}/project-boutique-1.jpg`,
  `${BASE}/project-resort-1.jpg`,
]

// ─── Team / founder ───────────────────────────────────────────
export const founderImage = `${BASE}/founder.jpg`

// ─── Blog images ──────────────────────────────────────────────
export const blogImages = [
  `${BASE}/blog-1.jpg`,
  `${BASE}/blog-2.jpg`,
  `${BASE}/blog-3.jpg`,
  `${BASE}/blog-4.jpg`,
]

// ─── Case study images ────────────────────────────────────────
export const caseStudyImages = [
  `${BASE}/case-hotel-1.jpg`,
  `${BASE}/case-doctor-1.jpg`,
]

// ─── Testimonial avatars ──────────────────────────────────────
export const avatarImages = [
  `${BASE}/avatar-1.jpg`,
  `${BASE}/avatar-2.jpg`,
  `${BASE}/avatar-3.jpg`,
  `${BASE}/avatar-4.jpg`,
]

// ─── OG / Social sharing ──────────────────────────────────────
export const ogImage = `${BASE}/og-image.jpg`
