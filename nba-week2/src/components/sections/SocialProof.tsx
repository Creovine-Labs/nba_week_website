import { motion } from 'framer-motion'
import { Quote, ExternalLink } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { ScrollReveal } from '../ui/ScrollReveal'
import { testimonials, pressOutlets, pressQuotes } from '../../data/testimonials'

export function SocialProof() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#F8F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Social Proof"
          title="Trusted by Industry Leaders"
          subtitle="Hear from past attendees and see who's talking about us"
        />

        {/* Testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} direction="up" delay={i * 0.15}>
              <div className="glass-card p-6 h-full flex flex-col">
                <Quote size={20} className="text-[#6C5CE7] mb-4 shrink-0" />
                <p className="text-[#6B6B80] leading-relaxed flex-1 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#E8E6F0]">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-[#1A1A2E] text-sm font-medium">{t.name}</p>
                    <p className="text-[#9999AD] text-xs">{t.title}, {t.company}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Press quotes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pressQuotes.map((pq, i) => (
            <ScrollReveal key={pq.source} direction="up" delay={i * 0.1}>
              <div className="glass-card p-6 flex gap-4 items-start">
                <ExternalLink size={18} className="text-[#6C5CE7] shrink-0 mt-1" />
                <div>
                  <p className="text-[#6B6B80] italic leading-relaxed">"{pq.quote}"</p>
                  <p className="text-[#1A1A2E] text-sm font-medium mt-3">— {pq.source}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Press logos marquee */}
        <div className="mt-16">
          <p className="text-center text-[#9999AD] text-sm uppercase tracking-widest mb-8">As Featured In</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F8F7FC] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F8F7FC] to-transparent z-10" />
            <motion.div
              className="flex gap-12 items-center whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {[...pressOutlets, ...pressOutlets].map((outlet, i) => (
                <span
                  key={`${outlet}-${i}`}
                  className="text-[#9999AD]/60 text-lg font-[family-name:var(--font-heading)] font-semibold px-4"
                >
                  {outlet}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
