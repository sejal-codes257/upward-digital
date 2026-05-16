import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, FolderOpen, MessageSquare, Users, TrendingUp,
  Settings, FileText, LogOut, Bell, Search, Plus, Edit2, Trash2,
  Eye, CheckCircle, Clock, XCircle, ArrowUpRight, BarChart3,
  Image, Briefcase, Star
} from 'lucide-react'
import { portfolioProjects, testimonials, blogPosts } from '../data/siteData'

// ─── Sidebar nav items ────────────────────────────────────────
const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'portfolio', label: 'Portfolio', icon: FolderOpen },
  { id: 'testimonials', label: 'Testimonials', icon: Star },
  { id: 'inquiries', label: 'Inquiries', icon: MessageSquare },
  { id: 'blog', label: 'Blog', icon: FileText },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
]

// ─── Mock inquiry data ────────────────────────────────────────
const mockInquiries = [
  { id: 1, name: 'Arjun Mehta', email: 'arjun@company.com', service: 'Hotel Website', budget: '₹1,00,000+', status: 'new', date: '2024-11-20', message: 'We need a full redesign for our 5-star property.' },
  { id: 2, name: 'Priya Rajan', email: 'priya@clinic.in', service: 'Doctor Website', budget: '₹50,000-₹1L', status: 'replied', date: '2024-11-18', message: 'Looking for a premium clinic website with booking.' },
  { id: 3, name: 'James O\'Brien', email: 'james@studio.co', service: 'Architecture Portfolio', budget: '₹1L-₹2L', status: 'closed', date: '2024-11-15', message: 'Award-winning architecture firm, need portfolio site.' },
  { id: 4, name: 'Nisha Kapoor', email: 'nisha@boutique.com', service: 'Boutique Website', budget: 'Under ₹50K', status: 'new', date: '2024-11-22', message: 'Small luxury boutique, need a stunning site.' },
]

// ─── Analytics data ───────────────────────────────────────────
const monthlyStats = [
  { month: 'Jun', visits: 1200, inquiries: 8 },
  { month: 'Jul', visits: 1800, inquiries: 12 },
  { month: 'Aug', visits: 2200, inquiries: 18 },
  { month: 'Sep', visits: 2800, inquiries: 22 },
  { month: 'Oct', visits: 3600, inquiries: 31 },
  { month: 'Nov', visits: 4200, inquiries: 38 },
]

// ─── Sub-components ───────────────────────────────────────────
function StatCard({ label, value, change, icon: Icon, color }) {
  return (
    <div className="glass p-6 border border-white/5 hover:border-white/10 transition-colors duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 border flex items-center justify-center ${color}`}>
          <Icon size={18} className="text-current opacity-70" />
        </div>
        <span className={`font-mono text-xs ${change > 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change > 0 ? '+' : ''}{change}%
        </span>
      </div>
      <div className="font-display text-3xl font-light text-silk mb-1">{value}</div>
      <div className="font-mono text-xs tracking-widest uppercase text-silver/30">{label}</div>
    </div>
  )
}

function StatusBadge({ status }) {
  const styles = {
    new: 'bg-electric-blue/20 text-ice-blue border-electric-blue/30',
    replied: 'bg-green-500/15 text-green-400 border-green-500/30',
    closed: 'bg-white/5 text-silver/40 border-white/10',
  }
  return (
    <span className={`font-mono text-xs px-2 py-1 border tracking-widest uppercase ${styles[status]}`}>
      {status}
    </span>
  )
}

// ─── Panel components ─────────────────────────────────────────
function OverviewPanel() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-3xl font-light text-silk">Dashboard Overview</h2>
        <span className="font-mono text-xs text-silver/30">Last updated: just now</span>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Visits" value="14.2K" change={18} icon={TrendingUp} color="border-electric-blue/30 text-electric-blue" />
        <StatCard label="Inquiries" value="89" change={24} icon={MessageSquare} color="border-gold/30 text-gold" />
        <StatCard label="Projects" value="6" change={20} icon={FolderOpen} color="border-ice-blue/30 text-ice-blue" />
        <StatCard label="Satisfaction" value="100%" change={0} icon={Star} color="border-green-500/30 text-green-400" />
      </div>

      {/* Mini bar chart */}
      <div className="glass p-6 border border-white/5">
        <h3 className="font-display text-xl font-light text-silk mb-6">Monthly Traffic & Inquiries</h3>
        <div className="flex items-end gap-3 h-32">
          {monthlyStats.map((m, i) => (
            <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex flex-col items-center gap-1">
                <div
                  className="w-full bg-electric-blue/20 hover:bg-electric-blue/40 transition-colors duration-300 relative group"
                  style={{ height: `${(m.visits / 4200) * 100}px` }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-electric-blue/60"
                    style={{ height: `${(m.inquiries / 38) * 100}%` }}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-deep-blue border border-electric-blue/20 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    <span className="font-mono text-xs text-ice-blue">{m.visits.toLocaleString()} visits</span>
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs text-silver/30">{m.month}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6 mt-4">
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-electric-blue/20" /><span className="font-mono text-xs text-silver/40">Visits</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-electric-blue/60" /><span className="font-mono text-xs text-silver/40">Inquiries</span></div>
        </div>
      </div>

      {/* Recent inquiries mini */}
      <div className="glass p-6 border border-white/5">
        <h3 className="font-display text-xl font-light text-silk mb-4">Recent Inquiries</h3>
        <div className="space-y-3">
          {mockInquiries.slice(0, 3).map(inq => (
            <div key={inq.id} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
              <div>
                <p className="text-sm text-silk font-sans">{inq.name}</p>
                <p className="text-xs text-silver/40 font-mono">{inq.service} · {inq.date}</p>
              </div>
              <StatusBadge status={inq.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PortfolioPanel() {
  const [projects, setProjects] = useState(portfolioProjects)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-3xl font-light text-silk">Portfolio Projects</h2>
        <button className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-2">
          <Plus size={14} /> Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(p => (
          <div key={p.id} className="glass p-5 border border-white/5 group hover:border-white/10 transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="font-mono text-xs text-electric-blue/60 tracking-widest uppercase block mb-1">{p.category}</span>
                <h4 className="font-display text-lg font-light text-silk">{p.title}</h4>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-7 h-7 border border-white/10 flex items-center justify-center hover:border-electric-blue/40 text-silver/40 hover:text-ice-blue transition-all duration-200">
                  <Edit2 size={12} />
                </button>
                <button className="w-7 h-7 border border-white/10 flex items-center justify-center hover:border-red-500/40 text-silver/40 hover:text-red-400 transition-all duration-200">
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
            <p className="text-xs text-silver/40 font-sans mb-3 leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="font-mono text-xs border border-white/8 px-2 py-0.5 text-silver/30">{t}</span>
              ))}
              {p.featured && <span className="font-mono text-xs border border-gold/20 text-gold/60 px-2 py-0.5">Featured</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InquiriesPanel() {
  const [inquiries, setInquiries] = useState(mockInquiries)
  const [selected, setSelected] = useState(null)

  const updateStatus = (id, status) => {
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-3xl font-light text-silk">Inquiries</h2>
        <div className="flex gap-2">
          {['all', 'new', 'replied', 'closed'].map(s => (
            <span key={s} className="font-mono text-xs border border-white/10 text-silver/40 px-3 py-1 uppercase tracking-widest">
              {s} ({s === 'all' ? inquiries.length : inquiries.filter(i => i.status === s).length})
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {inquiries.map(inq => (
          <div key={inq.id}
            className={`glass p-5 border transition-all duration-300 cursor-pointer ${
              selected === inq.id ? 'border-electric-blue/30' : 'border-white/5 hover:border-white/10'
            }`}
            onClick={() => setSelected(selected === inq.id ? null : inq.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 border border-electric-blue/20 flex items-center justify-center">
                  <span className="font-display text-sm text-silk/40">{inq.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm text-silk font-sans font-medium">{inq.name}</p>
                  <p className="text-xs text-silver/40 font-mono">{inq.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-silver/30 font-mono hidden sm:block">{inq.service}</span>
                <span className="text-xs text-silver/30 font-mono hidden md:block">{inq.date}</span>
                <StatusBadge status={inq.status} />
              </div>
            </div>

            <AnimatePresence>
              {selected === inq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-4 border-t border-white/5">
                    <p className="text-sm text-silver/50 font-sans font-light leading-relaxed mb-4">{inq.message}</p>
                    <div className="flex gap-2">
                      <span className="font-mono text-xs text-silver/40 mr-2">Update:</span>
                      {['new', 'replied', 'closed'].map(s => (
                        <button key={s} onClick={(e) => { e.stopPropagation(); updateStatus(inq.id, s) }}
                          className={`font-mono text-xs px-3 py-1 border transition-all duration-200 uppercase tracking-widest ${
                            inq.status === s
                              ? 'border-electric-blue/40 text-ice-blue bg-electric-blue/10'
                              : 'border-white/10 text-silver/30 hover:border-white/20'
                          }`}>
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

function TestimonialsPanel() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-3xl font-light text-silk">Testimonials</h2>
        <button className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-2">
          <Plus size={14} /> Add Testimonial
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map(t => (
          <div key={t.id} className="glass p-6 border border-white/5 group hover:border-white/10 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-gold text-sm">★</span>
                ))}
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-7 h-7 border border-white/10 flex items-center justify-center hover:border-electric-blue/40 text-silver/40 hover:text-ice-blue transition-all duration-200">
                  <Edit2 size={12} />
                </button>
                <button className="w-7 h-7 border border-white/10 flex items-center justify-center hover:border-red-500/40 text-silver/40 hover:text-red-400 transition-all duration-200">
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
            <p className="text-sm text-silver/60 font-sans italic leading-relaxed mb-4">"{t.quote}"</p>
            <div>
              <p className="text-sm text-silk font-sans font-medium">{t.name}</p>
              <p className="text-xs text-silver/40 font-mono">{t.role}, {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BlogPanel() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-3xl font-light text-silk">Blog Posts</h2>
        <button className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-2">
          <Plus size={14} /> New Post
        </button>
      </div>
      <div className="space-y-3">
        {blogPosts.map(post => (
          <div key={post.id} className="glass p-5 border border-white/5 hover:border-white/10 transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0 mr-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-xs text-electric-blue/60 uppercase tracking-widest">{post.category}</span>
                  <span className="font-mono text-xs text-silver/30">{post.date}</span>
                  {post.featured && <span className="font-mono text-xs border border-gold/20 text-gold/60 px-2 py-0.5">Featured</span>}
                </div>
                <h4 className="font-display text-lg font-light text-silk truncate">{post.title}</h4>
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                <button className="w-7 h-7 border border-white/10 flex items-center justify-center hover:border-electric-blue/40 text-silver/40 hover:text-ice-blue">
                  <Eye size={12} />
                </button>
                <button className="w-7 h-7 border border-white/10 flex items-center justify-center hover:border-electric-blue/40 text-silver/40 hover:text-ice-blue">
                  <Edit2 size={12} />
                </button>
                <button className="w-7 h-7 border border-white/10 flex items-center justify-center hover:border-red-500/40 text-silver/40 hover:text-red-400">
                  <Trash2 size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SettingsPanel() {
  const [settings, setSettings] = useState({
    siteName: 'Upward Digital',
    tagline: 'Where Vision Ascends',
    founderName: 'Sejal Kanwar',
    email: 'hello@upwarddigital.com',
    phone: '+91 98765 43210',
    heroHeadline: 'Where Vision Ascends.',
    heroCopy: 'Cinematic, custom-coded websites for elite hotels, clinics, restaurants, and brands that refuse to be ordinary.',
  })

  return (
    <div className="space-y-8">
      <h2 className="font-display text-3xl font-light text-silk">Site Settings</h2>

      <div className="glass p-8 border border-white/5 space-y-6">
        <h3 className="font-display text-xl font-light text-silk border-b border-white/5 pb-4">Brand Info</h3>
        {[
          { key: 'siteName', label: 'Site Name' },
          { key: 'tagline', label: 'Tagline' },
          { key: 'founderName', label: 'Founder Name' },
          { key: 'email', label: 'Contact Email' },
          { key: 'phone', label: 'Phone Number' },
        ].map(({ key, label }) => (
          <div key={key}>
            <label className="font-mono text-xs tracking-widest uppercase text-silver/30 block mb-2">{label}</label>
            <input
              type="text"
              value={settings[key]}
              onChange={e => setSettings(s => ({ ...s, [key]: e.target.value }))}
              className="w-full bg-void border border-white/8 focus:border-electric-blue/40 text-silk font-sans text-sm px-4 py-3 outline-none transition-colors duration-300"
            />
          </div>
        ))}
      </div>

      <div className="glass p-8 border border-white/5 space-y-6">
        <h3 className="font-display text-xl font-light text-silk border-b border-white/5 pb-4">Homepage Copy</h3>
        {[
          { key: 'heroHeadline', label: 'Hero Headline' },
          { key: 'heroCopy', label: 'Hero Sub-copy' },
        ].map(({ key, label }) => (
          <div key={key}>
            <label className="font-mono text-xs tracking-widest uppercase text-silver/30 block mb-2">{label}</label>
            <textarea
              value={settings[key]}
              onChange={e => setSettings(s => ({ ...s, [key]: e.target.value }))}
              rows={3}
              className="w-full bg-void border border-white/8 focus:border-electric-blue/40 text-silk font-sans text-sm px-4 py-3 outline-none transition-colors duration-300 resize-none"
            />
          </div>
        ))}
      </div>

      <button className="btn-primary">Save Changes</button>
    </div>
  )
}

// ─── MAIN DASHBOARD ───────────────────────────────────────────
export default function AdminDashboard() {
  const [active, setActive] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const panels = {
    overview: <OverviewPanel />,
    portfolio: <PortfolioPanel />,
    testimonials: <TestimonialsPanel />,
    inquiries: <InquiriesPanel />,
    blog: <BlogPanel />,
    settings: <SettingsPanel />,
    services: <div className="text-silver/40 font-sans">Services editor coming soon.</div>,
    analytics: <div className="text-silver/40 font-sans">Analytics panel coming soon.</div>,
  }

  return (
    <div className="min-h-screen bg-void flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-60' : 'w-16'} transition-all duration-300 bg-ink border-r border-white/5 flex flex-col shrink-0`}>
        {/* Logo */}
        <div className="p-5 border-b border-white/5 flex items-center gap-3">
          <div className="relative w-7 h-7 flex-shrink-0">
            <div className="absolute inset-0 border border-electric-blue/50 rotate-45" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-electric-blue rounded-full" />
          </div>
          {sidebarOpen && <span className="font-display text-sm tracking-widest text-silk uppercase">Admin</span>}
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map(item => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 transition-all duration-200 group ${
                  active === item.id
                    ? 'bg-electric-blue/15 text-ice-blue border border-electric-blue/20'
                    : 'text-silver/40 hover:text-silk hover:bg-white/5 border border-transparent'
                }`}
              >
                <Icon size={16} className="flex-shrink-0" />
                {sidebarOpen && <span className="font-sans text-sm">{item.label}</span>}
              </button>
            )
          })}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-electric-blue/20 border border-electric-blue/30 flex items-center justify-center flex-shrink-0">
              <span className="font-display text-xs text-electric-blue">S</span>
            </div>
            {sidebarOpen && (
              <div className="min-w-0">
                <p className="text-xs font-sans text-silk truncate">Sejal Kanwar</p>
                <p className="text-xs font-mono text-silver/30 truncate">Founder</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 bg-ink border-b border-white/5 flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-silver/40 hover:text-silk transition-colors duration-200">
              <LayoutDashboard size={18} />
            </button>
            <div className="relative hidden sm:block">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-silver/25" />
              <input placeholder="Search..." className="bg-void border border-white/8 text-silk placeholder:text-silver/20 font-sans text-xs pl-8 pr-4 py-2 outline-none focus:border-electric-blue/30 transition-colors w-48" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 border border-white/8 flex items-center justify-center hover:border-white/20 text-silver/40 hover:text-silk transition-all duration-200 relative">
              <Bell size={14} />
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-electric-blue rounded-full" />
            </button>
            <a href="/" target="_blank" className="w-8 h-8 border border-white/8 flex items-center justify-center hover:border-electric-blue/30 text-silver/40 hover:text-ice-blue transition-all duration-200">
              <ArrowUpRight size={14} />
            </a>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {panels[active]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
