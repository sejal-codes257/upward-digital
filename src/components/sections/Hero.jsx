import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.003;

      const orbs = [
        { x: canvas.width * 0.15, y: canvas.height * 0.4, r: canvas.width * 0.4, color: 'rgba(7,13,26,0.6)' },
        { x: canvas.width * (0.7 + Math.sin(t * 0.5) * 0.05), y: canvas.height * (0.3 + Math.cos(t * 0.3) * 0.05), r: canvas.width * 0.3, color: 'rgba(10,15,30,0.5)' },
        { x: canvas.width * (0.5 + Math.cos(t * 0.4) * 0.08), y: canvas.height * (0.8 + Math.sin(t * 0.6) * 0.04), r: canvas.width * 0.25, color: 'rgba(201,169,110,0.04)' },
      ];

      orbs.forEach(orb => {
        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        g.addColorStop(0, orb.color);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      const streakY = canvas.height * 0.5;
      const streakG = ctx.createLinearGradient(0, streakY - 1, canvas.width, streakY + 1);
      streakG.addColorStop(0, 'transparent');
      streakG.addColorStop(0.3, 'rgba(200,184,154,0.03)');
      streakG.addColorStop(0.5, `rgba(200,184,154,${0.04 + Math.sin(t) * 0.02})`);
      streakG.addColorStop(0.7, 'rgba(200,184,154,0.03)');
      streakG.addColorStop(1, 'transparent');
      ctx.fillStyle = streakG;
      ctx.fillRect(0, streakY - 80, canvas.width, 160);

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } };
  const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg">
      {/* Canvas atmosphere */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{mixBlendMode:'screen'}} />

      {/* Centered hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">

          {/* Top label */}
          <motion.div variants={item} className="flex items-center gap-4 mb-16">
            <div className="w-8 h-px bg-beige" />
            <span className="label-text">Luxury Digital Studio — Est. 2022</span>
            <div className="w-8 h-px bg-beige" />
          </motion.div>

          {/* Main headline */}
          <motion.div variants={item} className="mb-8">
            <h1 className="display-text text-white" style={{fontSize:'clamp(3.5rem, 10vw, 9rem)'}}>
              Websites that<br />
              <span className="italic text-beige">command</span><br />
              premium.
            </h1>
          </motion.div>

          {/* Sub text */}
          <motion.div variants={item} className="max-w-md mb-14">
            <p className="text-white/50 text-sm leading-relaxed">
              Custom-coded digital experiences for hotels, resorts, restaurants, architects, doctors, and luxury brands worldwide. Founded by Sejal Kanwar.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/portfolio" className="cinematic-btn">
              <span>View Our Work</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link to="/contact" className="flex items-center gap-3 text-white/40 hover:text-beige transition-colors duration-500 text-xs tracking-widest uppercase group">
              <span>Start a Project</span>
              <span className="w-6 h-px bg-white/20 group-hover:bg-beige group-hover:w-10 transition-all duration-500" />
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div variants={item} className="mt-24 flex flex-col items-center gap-3">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} className="text-beige/40" />
            </motion.div>
            <span className="label-text text-white/20" style={{fontSize:'0.55rem',writingMode:'vertical-rl'}}>SCROLL</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Right-side vertical text */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
        <span className="label-text text-white/20" style={{writingMode:'vertical-rl',fontSize:'0.6rem',letterSpacing:'0.3em'}}>UPWARD DIGITAL 2025</span>
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-beige/20" />
      </div>
    </section>
  );
}
