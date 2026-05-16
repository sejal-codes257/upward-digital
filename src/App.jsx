import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CustomCursor from './components/ui/CustomCursor'
import Loader from './components/ui/Loader'
import { useSmoothScroll } from './hooks/useSmoothScroll'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import TestimonialsPage from './pages/TestimonialsPage'
import PricingPage from './pages/PricingPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import InquiryPage from './pages/InquiryPage'
import AdminDashboard from './pages/AdminDashboard'
import NotFoundPage from './pages/NotFoundPage'

// Page transition wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Scroll to top on route change
function ScrollReset() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return null
}

// Layout wrapper (excludes admin and inquiry from standard layout)
function SiteLayout({ children }) {
  const location = useLocation()
  const isAdmin = location.pathname.startsWith('/admin')
  const isInquiry = location.pathname === '/inquiry'

  if (isAdmin || isInquiry) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <div className="pt-0">{children}</div>
      <Footer />
    </>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <SiteLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><ServicesPage /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><PortfolioPage /></PageWrapper>} />
          <Route path="/case-studies" element={<PageWrapper><CaseStudiesPage /></PageWrapper>} />
          <Route path="/testimonials" element={<PageWrapper><TestimonialsPage /></PageWrapper>} />
          <Route path="/pricing" element={<PageWrapper><PricingPage /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          <Route path="/inquiry" element={<PageWrapper><InquiryPage /></PageWrapper>} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<PageWrapper><NotFoundPage /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </SiteLayout>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useSmoothScroll()

  return (
    <BrowserRouter>
      <CustomCursor />
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
