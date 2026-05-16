import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-void border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px]"
        style={{ background: 'radial-gradient(ellipse, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 border border-electric-blue/50 rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-electric-blue rounded-full" />
              </div>
              <span className="font-display text-xl font-light tracking-widest text-silk uppercase">
                Upward<span className="text-electric-blue">.</span>
              </span>
            </Link>
            <p className="text-silver/50 text-sm leading-relaxed max-w-xs font-sans font-light">
              Luxury custom-coded websites for elite brands, hotels, clinics, and beyond. Founded by {siteConfig.founder}.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer"
                className="text-silver/40 hover:text-ice-blue transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-silver/40 hover:text-ice-blue transition-colors duration-300">
                <Linkedin size={16} />
              </a>
              <a href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer"
                className="text-silver/40 hover:text-ice-blue transition-colors duration-300">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-sans tracking-megawide uppercase text-silver/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Blog', href: '/blog' },
              ].map(item => (
                <li key={item.href}>
                  <Link to={item.href}
                    className="text-sm text-silver/50 hover:text-silk transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-4 h-px bg-electric-blue/0 group-hover:bg-electric-blue/60 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-sans tracking-megawide uppercase text-silver/40 mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${siteConfig.email}`}
                  className="text-sm text-silver/50 hover:text-silk transition-colors duration-300 flex items-center gap-1">
                  {siteConfig.email}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100" />
                </a>
              </li>
              <li className="text-sm text-silver/50">{siteConfig.phone}</li>
              <li className="text-sm text-silver/50">{siteConfig.location}</li>
            </ul>
            <Link to="/contact" className="mt-8 btn-outline text-xs py-3 px-6 inline-flex">
              Work With Us
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-silver/25 font-sans">
            © {year} Upward Digital. Founded by {siteConfig.founder}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-silver/25 hover:text-silver/50 transition-colors duration-300">Privacy</Link>
            <Link to="/terms" className="text-xs text-silver/25 hover:text-silver/50 transition-colors duration-300">Terms</Link>
            <Link to="/admin" className="text-xs text-silver/25 hover:text-silver/50 transition-colors duration-300">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
