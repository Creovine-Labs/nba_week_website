import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '../ui/Button'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { en } from '../../data/i18n/en'

const navItems = [
  { id: 'about', label: en.nav.about },
  { id: 'speakers', label: en.nav.speakers },
  { id: 'agenda', label: en.nav.agenda },
  { id: 'sponsors', label: en.nav.sponsors },
  { id: 'venue', label: en.nav.venue },
  { id: 'faq', label: en.nav.faq },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useScrollSpy(navItems.map(i => i.id))

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-[#E8E6F0]' : 'bg-white/70 backdrop-blur-md'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-[family-name:var(--font-heading)] font-bold text-xl md:text-2xl">
            <span className="gradient-text">NBA</span>
            <span className="text-[#1A1A2E]"> WEEK</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  active === item.id ? 'text-[#6C5CE7]' : 'text-[#6B6B80] hover:text-[#1A1A2E]'
                }`}
              >
                {item.label}
                {active === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#6C5CE7]"
                    layoutId="navIndicator"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+2348001234567" className="w-10 h-10 rounded-full border border-[#E8E6F0] flex items-center justify-center text-[#6B6B80] hover:text-[#6C5CE7] hover:border-[#6C5CE7] transition-all">
              <Phone size={16} />
            </a>
            <Button variant="primary" size="sm" href="#tickets">
              Buy Tickets
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#1A1A2E] p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-white/98 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-5 right-5 text-[#1A1A2E] p-2"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={28} />
            </button>
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-2xl font-[family-name:var(--font-heading)] font-semibold text-[#1A1A2E] hover:text-[#6C5CE7] transition-colors"
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
              >
                <Button variant="primary" size="lg" href="#tickets" onClick={() => setMobileOpen(false)}>
                  Buy Tickets
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
