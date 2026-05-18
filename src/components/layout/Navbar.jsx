import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/', isHome: true },
  { label: 'Work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/blog' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const hero = document.getElementById('hero');
      if (hero) hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const hero = document.getElementById('hero');
        if (hero) hero.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="section-padding flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="font-serif text-xl tracking-widest text-white group-hover:text-beige transition-colors duration-500">UPWARD</span>
            <span className="label-text" style={{fontSize:'0.55rem',letterSpacing:'0.5em'}}>DIGITAL</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              link.isHome ? (
                <a
                  key={link.href}
                  href="/"
                  onClick={handleHomeClick}
                  className={`label-text hover:text-white transition-colors duration-300 cursor-pointer ${
                    location.pathname === '/' ? 'text-white' : ''
                  }`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`label-text hover:text-white transition-colors duration-300 ${
                    location.pathname === link.href ? 'text-white' : ''
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hidden md:block cinematic-btn text-xs py-3 px-6">
              <span>Begin Project</span>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-beige hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-deep-black/98 backdrop-blur-2xl flex flex-col justify-center section-padding"
          >
            <div className="space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  {link.isHome ? (
                    <a
                      href="/"
                      onClick={(e) => { handleHomeClick(e); setMenuOpen(false); }}
                      className="font-serif text-5xl text-white/80 hover:text-beige transition-colors duration-300 block cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="font-serif text-5xl text-white/80 hover:text-beige transition-colors duration-300 block"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/contact" className="cinematic-btn mt-8 inline-flex">
                  <span>Begin Project</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
