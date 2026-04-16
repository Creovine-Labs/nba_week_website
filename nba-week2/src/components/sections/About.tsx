import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { ScrollReveal } from '../ui/ScrollReveal'
import { en } from '../../data/i18n/en'

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={en.about.label}
          title={en.about.title}
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-[#6B6B80] leading-relaxed text-lg">
                {en.about.p1}
              </p>
              <p className="text-[#6B6B80] leading-relaxed">
                {en.about.p2}
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="h-px flex-1 bg-gradient-to-r from-[#6C5CE7]/30 to-transparent" />
                <span className="text-[#6C5CE7] text-sm font-medium tracking-wider uppercase">Africa's Premier Tech Summit</span>
                <div className="h-px flex-1 bg-gradient-to-l from-[#6C5CE7]/30 to-transparent" />
              </div>
            </div>
          </ScrollReveal>

          {/* Stats grid */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-6">
              {en.stats.items.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6 text-center group"
                  whileHover={{ scale: 1.03 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-[#6B6B80] text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Event cards row - similar to the Eventor image */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=350&fit=crop', date: 'October 19, 2026', title: 'Virtual sessions. NBA Live' },
            { img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=350&fit=crop', date: 'October 20, 2026', title: 'Opening Ceremony' },
            { img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&h=350&fit=crop', date: 'October 21, 2026', title: 'Innovation Workshop' },
          ].map((card, i) => (
            <ScrollReveal key={card.title} direction="up" delay={i * 0.15}>
              <motion.div
                className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/70 text-xs mb-1">{card.date}</p>
                  <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                </div>
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="currentColor"><path d="M0 0v14l12-7z"/></svg>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
