import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import SectionLabel from '../components/ui/SectionLabel';
import { blogPosts } from '../data';
import { ArrowUpRight } from 'lucide-react';

export default function Blog() {
  return (
    <Layout>
      <section className="section-padding pt-40 pb-32 bg-deep-black">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <SectionLabel className="mb-10">Insights</SectionLabel>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-none mb-20">
              The<br /><em className="text-beige">Journal</em>
            </h1>
          </motion.div>
          <div className="space-y-px">
            {blogPosts.map((post, i) => (
              <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group grid grid-cols-12 gap-8 py-12 border-b border-white/5 hover:border-beige/20 transition-all duration-500 cursor-pointer"
              >
                <div className="col-span-12 md:col-span-2">
                  <span className="label-text text-white/20">{post.date}</span>
                  <span className="label-text text-beige/40 block mt-1">{post.category}</span>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-4 group-hover:text-beige transition-colors duration-400 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-white/40 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="col-span-12 md:col-span-3 flex md:justify-end items-start gap-4">
                  <span className="label-text text-white/20">{post.readTime} read</span>
                  <ArrowUpRight size={16} className="text-beige/0 group-hover:text-beige transition-all duration-400 mt-0.5" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
