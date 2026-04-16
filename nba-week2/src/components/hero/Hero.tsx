import { motion } from 'framer-motion'
import { Play, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../ui/Button'
import { Countdown } from './Countdown'
import { GlobeBackground } from './GlobeBackground'
import { en } from '../../data/i18n/en'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Pastel gradient background */}
      <GlobeBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Left: Text content */}
          <div>
            <motion.h1
              variants={fadeUp}
              className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#1A1A2E] mb-6"
            >
              The leading{' '}
              <span className="gradient-text">blockchain & AI</span>{' '}
              conference of the year
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[#6B6B80] max-w-lg mb-10 leading-relaxed"
            >
              Join us for {en.hero.title1} {en.hero.title2} {en.hero.title3}: Virtual Sessions on October 2026
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-8">
              <Button variant="primary" size="lg" href="#tickets">
                Register
              </Button>
              <a href="#agenda" className="inline-flex items-center gap-2 text-[#1A1A2E] font-semibold hover:text-[#6C5CE7] transition-colors">
                <Play size={16} className="text-[#6C5CE7]" />
                Watch Video
              </a>
            </motion.div>
          </div>

          {/* Right: Image collage */}
          <motion.div variants={fadeUp} className="relative hidden lg:block">
            {/* Large watermark text */}
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 font-[family-name:var(--font-heading)] text-[120px] font-bold text-[#6C5CE7]/[0.06] whitespace-nowrap select-none pointer-events-none leading-none tracking-tight">
              NBA 2026
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#C8B4FF]/40 to-[#B4DCFF]/40 border border-[#E8E6F0]">
                  <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop" alt="Conference hall" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-[#FFD6E0]/40 to-[#C8B4FF]/40 border border-[#E8E6F0]">
                  <img src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=400&fit=crop" alt="Speaker" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-[#B4DCFF]/40 to-[#C8B4FF]/40 border border-[#E8E6F0]">
                  <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=400&fit=crop" alt="Audience" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[#C8B4FF]/40 to-[#FFD6E0]/40 border border-[#E8E6F0]">
                  <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop" alt="Workshop" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-16 flex justify-center"
        >
          <Countdown />
        </motion.div>

        {/* Contact info bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#E8E6F0] bg-white/60 backdrop-blur-sm">
            <Mail size={18} className="text-[#6C5CE7] shrink-0" />
            <span className="text-[#6B6B80] text-sm">info@nigeriablockchainweek.com</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#E8E6F0] bg-white/60 backdrop-blur-sm">
            <MapPin size={18} className="text-[#6C5CE7] shrink-0" />
            <span className="text-[#6B6B80] text-sm">Landmark Centre, Victoria Island, Lagos</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-[#E8E6F0] bg-white/60 backdrop-blur-sm">
            <Phone size={18} className="text-[#6C5CE7] shrink-0" />
            <span className="text-[#6B6B80] text-sm">+234 800 NBA WEEK</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom wavy divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
