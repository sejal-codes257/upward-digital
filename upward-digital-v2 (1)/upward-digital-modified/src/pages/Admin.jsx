import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, FolderOpen, MessageSquare, FileText, Settings, LogOut, Eye, Trash2, Plus, BarChart2, Users, TrendingUp, Globe } from 'lucide-react';

const CREDENTIALS = { username: 'admin', password: 'upward2025' };

function Login({ onLogin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const submit = e => {
    e.preventDefault();
    if (form.username === CREDENTIALS.username && form.password === CREDENTIALS.password) {
      onLogin();
    } else setError('Invalid credentials.');
  };
  return (
    <div className="min-h-screen bg-deep-black flex items-center justify-center section-padding">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="w-full max-w-md border border-white/8 p-12"
      >
        <div className="mb-10">
          <p className="font-serif text-3xl text-white mb-1">UPWARD DIGITAL</p>
          <span className="label-text text-white/30">Admin Dashboard</span>
        </div>
        <form onSubmit={submit} className="space-y-8">
          {['username','password'].map(field => (
            <div key={field}>
              <label className="label-text block mb-3">{field.charAt(0).toUpperCase()+field.slice(1)}</label>
              <input type={field === 'password' ? 'password' : 'text'} value={form[field]}
                onChange={e => setForm(p => ({...p,[field]:e.target.value}))} required
                className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-white/20 focus:outline-none focus:border-beige/50 transition-colors"
              />
            </div>
          ))}
          {error && <p className="text-red-400/70 text-sm">{error}</p>}
          <button type="submit" className="cinematic-btn w-full justify-center inline-flex"><span>Sign In</span></button>
        </form>
      </motion.div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, trend }) {
  return (
    <div className="bg-charcoal/20 border border-white/5 p-6 hover:border-beige/20 transition-colors duration-300">
      <div className="flex items-start justify-between mb-4">
        <Icon size={18} className="text-beige/60" />
        {trend && <span className="text-xs text-green-400/70">{trend}</span>}
      </div>
      <p className="font-serif text-3xl text-white mb-1">{value}</p>
      <p className="label-text text-white/30">{label}</p>
    </div>
  );
}

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      setInquiries(JSON.parse(localStorage.getItem('ud_inquiries') || '[]'));
    }
  }, [loggedIn]);

  if (!loggedIn) return <Login onLogin={() => setLoggedIn(true)} />;

  const tabs = [
    { id:'overview', label:'Overview', icon:LayoutDashboard },
    { id:'inquiries', label:'Inquiries', icon:MessageSquare },
    { id:'portfolio', label:'Portfolio', icon:FolderOpen },
    { id:'blog', label:'Blog', icon:FileText },
    { id:'settings', label:'Settings', icon:Settings },
  ];

  return (
    <div className="min-h-screen bg-deep-black flex">
      <div className="noise-overlay" />
      {/* Sidebar */}
      <aside className="w-60 border-r border-white/5 flex flex-col fixed h-full z-10">
        <div className="p-8 border-b border-white/5">
          <p className="font-serif text-lg text-white">UPWARD</p>
          <span className="label-text text-white/20" style={{fontSize:'0.55rem'}}>ADMIN PANEL</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 ${
                activeTab === tab.id ? 'bg-beige/10 text-beige border-l-2 border-beige' : 'text-white/30 hover:text-white/60 border-l-2 border-transparent'
              }`}
            >
              <tab.icon size={15} />
              <span className="text-xs tracking-wider">{tab.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/5">
          <button onClick={() => setLoggedIn(false)} className="w-full flex items-center gap-3 px-4 py-3 text-white/20 hover:text-white/50 transition-colors">
            <LogOut size={15} />
            <span className="text-xs tracking-wider">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 ml-60 p-10 min-h-screen">
        {activeTab === 'overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="font-serif text-4xl text-white mb-2">Dashboard</h1>
            <p className="text-white/30 text-sm mb-10">Welcome back, Sejal.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <StatCard icon={Users} label="Total Inquiries" value={String(inquiries.length || 0)} trend="+12%" />
              <StatCard icon={Eye} label="Projects Live" value="6" />
              <StatCard icon={TrendingUp} label="Avg. Response" value="18h" trend="↓ 4h" />
              <StatCard icon={Globe} label="Countries" value="8+" />
            </div>
            <div className="border border-white/5 p-8">
              <h2 className="font-serif text-xl text-white mb-6">Recent Activity</h2>
              {inquiries.length === 0 ? (
                <p className="text-white/20 text-sm">No inquiries yet. They'll appear here from your contact form.</p>
              ) : (
                <div className="space-y-4">
                  {inquiries.slice(-5).reverse().map(inq => (
                    <div key={inq.id} className="flex items-center justify-between py-3 border-b border-white/5">
                      <div>
                        <p className="text-white text-sm">{inq.name}</p>
                        <p className="text-white/30 text-xs">{inq.company} · {inq.budget}</p>
                      </div>
                      <span className="label-text text-white/20 text-xs">{new Date(inq.date).toLocaleDateString()}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}

        {activeTab === 'inquiries' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center justify-between mb-10">
              <h1 className="font-serif text-4xl text-white">Inquiries</h1>
              <span className="label-text text-beige">{inquiries.length} total</span>
            </div>
            {inquiries.length === 0 ? (
              <div className="border border-white/5 p-12 text-center">
                <MessageSquare size={32} className="text-white/20 mx-auto mb-4" />
                <p className="text-white/30">No inquiries yet. Share your contact page to start receiving project requests.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {[...inquiries].reverse().map(inq => (
                  <div key={inq.id} className="border border-white/5 p-6 hover:border-beige/20 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-white font-medium">{inq.name}</p>
                        <p className="text-beige/60 text-sm">{inq.email}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="label-text text-white/20">{inq.budget}</span>
                        <button onClick={() => {
                          const filtered = inquiries.filter(i => i.id !== inq.id);
                          setInquiries(filtered);
                          localStorage.setItem('ud_inquiries', JSON.stringify(filtered));
                        }} className="text-white/20 hover:text-red-400/60 transition-colors"><Trash2 size={14} /></button>
                      </div>
                    </div>
                    <p className="text-white/30 text-sm mb-2"><span className="text-beige/50">Company:</span> {inq.company || 'Not provided'}</p>
                    <p className="text-white/40 text-sm leading-relaxed">{inq.message}</p>
                    <p className="text-white/15 text-xs mt-4">{new Date(inq.date).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'portfolio' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center justify-between mb-10">
              <h1 className="font-serif text-4xl text-white">Portfolio</h1>
              <div className="border border-beige/30 px-5 py-2.5 text-beige label-text flex items-center gap-2 cursor-pointer hover:bg-beige/5 transition-colors">
                <Plus size={14} /><span>Add Project</span>
              </div>
            </div>
            <p className="text-white/30 text-sm mb-8">Manage projects by editing <code className="text-beige/60 bg-white/5 px-2 py-0.5">src/data/index.js</code> and adding images to <code className="text-beige/60 bg-white/5 px-2 py-0.5">/public/assets/images/portfolio/</code></p>
            <div className="border border-white/5 rounded-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead className="border-b border-white/5">
                  <tr>{['Title','Category','Year','Featured'].map(h => <th key={h} className="text-left px-6 py-4 label-text text-white/30">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {JSON.parse(localStorage.getItem('ud_projects') || 'null') ||
                    [{ title:'Maison Aura',category:'Hotel',year:'2024',featured:true },
                     { title:'Verd Sanctuary',category:'Resort',year:'2024',featured:true },
                     { title:'Dr. Aria Wellness',category:'Healthcare',year:'2024',featured:true }
                    ].map((p, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                      <td className="px-6 py-4 text-white">{p.title}</td>
                      <td className="px-6 py-4 text-white/40">{p.category}</td>
                      <td className="px-6 py-4 text-white/40">{p.year}</td>
                      <td className="px-6 py-4">{p.featured ? <span className="text-beige text-xs border border-beige/30 px-2 py-0.5">Featured</span> : <span className="text-white/20 text-xs">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'blog' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="font-serif text-4xl text-white mb-10">Blog</h1>
            <p className="text-white/30 text-sm mb-8">Manage blog posts by editing <code className="text-beige/60 bg-white/5 px-2 py-0.5">src/data/index.js</code> → <code className="text-beige/60 bg-white/5 px-2 py-0.5">blogPosts</code> array.</p>
            {[
              { title:'Why Luxury Hotels Are Losing Direct Bookings', date:'May 10, 2025', category:'Hotels' },
              { title:'The Anatomy of a $10K Web Project', date:'April 22, 2025', category:'Business' },
              { title:'First Impressions in Luxury', date:'March 15, 2025', category:'Design' },
            ].map((post, i) => (
              <div key={i} className="flex items-center justify-between py-5 border-b border-white/5 hover:border-beige/20 transition-colors">
                <div>
                  <p className="text-white">{post.title}</p>
                  <p className="text-white/30 text-xs mt-1">{post.date} · {post.category}</p>
                </div>
                <div className="flex items-center gap-4">
                  <Eye size={14} className="text-white/20 hover:text-beige transition-colors cursor-pointer" />
                  <Trash2 size={14} className="text-white/20 hover:text-red-400/60 transition-colors cursor-pointer" />
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {activeTab === 'settings' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className="font-serif text-4xl text-white mb-10">Settings</h1>
            <div className="space-y-8 max-w-lg">
              {[['Site Name','Upward Digital'],['Founder','Sejal Kanwar'],['Contact Email','hello@upwarddigital.co'],['Domain','upwarddigital.co']].map(([label,val]) => (
                <div key={label}>
                  <label className="label-text block mb-3">{label}</label>
                  <input defaultValue={val} className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-beige/50 transition-colors text-sm" />
                </div>
              ))}
              <button className="cinematic-btn inline-flex mt-4"><span>Save Changes</span></button>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
