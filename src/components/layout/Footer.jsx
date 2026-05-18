import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight, ExternalLink } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-deep-black border-t border-white/5">
      <div className="section-padding pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <span className="label-text block mb-6">Ready to Begin</span>
            <h2 className="font-serif text-5xl md:text-7xl text-white leading-none mb-8">
              Let's build<br /><em className="text-beige">something</em><br />extraordinary.
            </h2>
            <Link to="/contact" className="cinematic-btn inline-flex">
              <span>Start Your Project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:pt-16">
            <div>
              <p className="label-text mb-4">Navigation</p>
              <nav className="space-y-3">
                {[['Work','/portfolio'],['Services','/services'],['About','/about'],['Pricing','/pricing'],['Blog','/blog'],['Contact','/contact']].map(([label,href]) => (
                  <Link key={href} to={href} className="block text-white/50 hover:text-beige transition-colors duration-300 text-sm">{label}</Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="label-text mb-4">Services</p>
              <div className="space-y-3">
                {['Web Design','Development','SEO','Brand Identity','Case Studies'].map(s => <p key={s} className="text-white/50 text-sm">{s}</p>)}
              </div>
            </div>
          </div>
        </div>
        <div className="beige-line mb-10" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl text-white mb-1">UPWARD DIGITAL</p>
            <p className="text-white/30 text-xs tracking-widest">FOUNDED BY SEJAL KANWAR</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/40 hover:text-beige transition-colors flex items-center gap-2 text-xs label-text">
              <ExternalLink size={14} /> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/40 hover:text-beige transition-colors flex items-center gap-2 text-xs label-text">
              <ExternalLink size={14} /> LinkedIn
            </a>
            <a href="mailto:hello@upwarddigital.co" className="text-white/40 hover:text-beige transition-colors">
              <Mail size={16} />
            </a>
          </div>
          <p className="text-white/20 text-xs">© {year} Upward Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
