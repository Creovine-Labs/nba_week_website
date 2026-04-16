import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { ScrollReveal } from '../ui/ScrollReveal'
import { sponsors } from '../../data/sponsors'

const tierConfig: Record<string, { size: string; opacity: string }> = {
  platinum: { size: 'h-16 sm:h-20', opacity: 'opacity-60 hover:opacity-100' },
  gold: { size: 'h-12 sm:h-14', opacity: 'opacity-40 hover:opacity-100' },
  media: { size: 'h-10 sm:h-12', opacity: 'opacity-30 hover:opacity-80' },
}

export function Sponsors() {
  const tiers = ['platinum', 'gold', 'media'] as const

  return (
    <section id="sponsors" className="py-24 sm:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Partners"
          title="Sponsors & Partners"
          subtitle="Backed by the world's leading blockchain and technology companies"
        />

        {tiers.map((tier) => {
          const tierSponsors = sponsors.filter(s => s.tier === tier)
          if (tierSponsors.length === 0) return null
          const config = tierConfig[tier]

          return (
            <div key={tier} className="mt-12">
              <p className="text-center text-[#9999AD] text-sm uppercase tracking-widest mb-8 capitalize">
                {tier} Partners
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                {tierSponsors.map((sponsor, i) => (
                  <ScrollReveal key={sponsor.name} direction="up" delay={i * 0.08}>
                    <motion.a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block transition-all duration-300 ${config.opacity} grayscale hover:grayscale-0`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className={`${config.size} flex items-center justify-center px-6 py-3 glass-card rounded-xl`}>
                        <span className="text-[#1A1A2E] font-[family-name:var(--font-heading)] font-bold text-lg">
                          {sponsor.name}
                        </span>
                      </div>
                    </motion.a>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )
        })}

        <div className="mt-16 text-center">
          <p className="text-[#6B6B80] text-sm mb-4">Interested in sponsoring?</p>
          <a
            href="mailto:sponsors@nigeriablockchainweek.com"
            className="text-[#6C5CE7] hover:text-[#5A4BD6] text-sm font-medium transition-colors underline underline-offset-4"
          >
            Become a Sponsor →
          </a>
        </div>
      </div>
    </section>
  )
}
