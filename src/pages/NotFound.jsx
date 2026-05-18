import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <Layout>
      <section className="section-padding min-h-screen flex items-center justify-center bg-deep-black">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center">
          <p className="font-serif text-[20rem] text-white/5 leading-none select-none absolute inset-0 flex items-center justify-center">404</p>
          <div className="relative z-10">
            <span className="label-text block mb-6">Page Not Found</span>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-none mb-8">
              Lost in the<br /><em className="text-beige">dark.</em>
            </h1>
            <p className="text-white/40 mb-12 max-w-sm mx-auto">This page doesn't exist, but your perfect website can. Let's build something remarkable together.</p>
            <Link to="/" className="cinematic-btn inline-flex">
              <span>Return Home</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
