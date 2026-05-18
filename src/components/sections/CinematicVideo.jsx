import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CinematicVideo() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Lazy load — only play when section enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        onCanPlay={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 1.2s ease',
        }}
      >
        <source src="./assets/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Fallback dark atmosphere when no video */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 40%, rgba(10, 18, 40, 0.95) 0%, transparent 60%),
            radial-gradient(ellipse at 75% 60%, rgba(5, 8, 20, 0.9) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 90%, rgba(201, 169, 110, 0.06) 0%, transparent 50%),
            #020408
          `,
        }}
      />

      {/* Cinematic overlay gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, rgba(3,3,3,0.7) 0%, transparent 25%, transparent 75%, rgba(3,3,3,0.85) 100%),
            linear-gradient(to right, rgba(3,3,3,0.3) 0%, transparent 40%, transparent 60%, rgba(3,3,3,0.3) 100%)
          `,
        }}
      />

      {/* Subtle noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">

        {/* Thin decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mb-10"
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(200,184,154,0.6), transparent)',
            transformOrigin: 'center',
          }}
        />

        {/* Studio label */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={isInView ? { opacity: 1, letterSpacing: '0.45em' } : {}}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="label-text text-beige/60 mb-8"
          style={{ fontSize: '0.6rem' }}
        >
          Luxury Digital Studio
        </motion.div>

        {/* Main brand name — cinematic reveal */}
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="display-text text-white text-center"
            style={{
              fontSize: 'clamp(3rem, 9vw, 8.5rem)',
              letterSpacing: '-0.01em',
              textShadow: '0 0 120px rgba(200,184,154,0.18), 0 0 40px rgba(200,184,154,0.08)',
            }}
          >
            UPWARD
          </motion.h2>
        </div>

        <div className="overflow-hidden mb-14">
          <motion.h2
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: '0%', opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="display-text italic text-beige text-center"
            style={{
              fontSize: 'clamp(3rem, 9vw, 8.5rem)',
              letterSpacing: '-0.01em',
              textShadow: '0 0 100px rgba(200,184,154,0.22), 0 0 200px rgba(200,184,154,0.08)',
            }}
          >
            Digital
          </motion.h2>
        </div>

        {/* Decorative horizontal rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
          className="mb-10"
          style={{
            width: '120px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(200,184,154,0.5), transparent)',
            transformOrigin: 'center',
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
          className="text-white/40 text-center"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)',
            letterSpacing: '0.05em',
            maxWidth: '520px',
            lineHeight: 1.65,
          }}
        >
          Crafting cinematic digital experiences for brands that demand attention.
        </motion.p>

        {/* Bottom label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 1.35 }}
          className="mt-16 flex items-center gap-6"
        >
          <div style={{ width: '40px', height: '1px', background: 'rgba(200,184,154,0.25)' }} />
          <span className="label-text text-white/20" style={{ fontSize: '0.55rem', letterSpacing: '0.4em' }}>
            Est. 2022
          </span>
          <div style={{ width: '40px', height: '1px', background: 'rgba(200,184,154,0.25)' }} />
        </motion.div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-10 left-10 pointer-events-none" style={{ opacity: 0.2 }}>
        <div style={{ width: '20px', height: '1px', background: '#c8b89a', marginBottom: '1px' }} />
        <div style={{ width: '1px', height: '20px', background: '#c8b89a' }} />
      </div>
      <div className="absolute top-10 right-10 pointer-events-none" style={{ opacity: 0.2 }}>
        <div style={{ width: '20px', height: '1px', background: '#c8b89a', marginBottom: '1px', marginLeft: 'auto' }} />
        <div style={{ width: '1px', height: '20px', background: '#c8b89a', marginLeft: 'auto' }} />
      </div>
      <div className="absolute bottom-10 left-10 pointer-events-none" style={{ opacity: 0.2 }}>
        <div style={{ width: '1px', height: '20px', background: '#c8b89a', marginBottom: '1px' }} />
        <div style={{ width: '20px', height: '1px', background: '#c8b89a' }} />
      </div>
      <div className="absolute bottom-10 right-10 pointer-events-none" style={{ opacity: 0.2 }}>
        <div style={{ width: '1px', height: '20px', background: '#c8b89a', marginBottom: '1px', marginLeft: 'auto' }} />
        <div style={{ width: '20px', height: '1px', background: '#c8b89a', marginLeft: 'auto' }} />
      </div>
    </section>
  );
}
