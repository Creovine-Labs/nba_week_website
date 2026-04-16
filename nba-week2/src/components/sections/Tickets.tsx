import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Button } from '../ui/Button'
import { tickets, whyAttendItems } from '../../data/tickets'
import { en } from '../../data/i18n/en'

export function Tickets() {
  return (
    <section id="tickets" className="py-24 sm:py-32 relative bg-[#F8F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Attend */}
        <SectionHeader
          label={en.whyAttend.label}
          title={en.whyAttend.title}
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyAttendItems.map((item, i) => (
            <ScrollReveal key={item.title} direction="up" delay={i * 0.1}>
              <motion.div
                className={`glass-card p-6 ${item.size === 'large' ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                whileHover={{ y: -4 }}
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-[#1A1A2E] font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[#6B6B80] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Ticket Tiers */}
        <div className="mt-24">
          <SectionHeader
            label={en.tickets.label}
            subtitle={en.tickets.subtitle}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tickets.map((tier, i) => (
              <ScrollReveal key={tier.name} direction="up" delay={i * 0.15}>
                <motion.div
                  className={`relative rounded-2xl overflow-hidden ${
                    tier.popular
                      ? 'bg-white border-2 border-[#6C5CE7] shadow-xl shadow-[#6C5CE7]/10'
                      : 'glass-card'
                  } p-6 sm:p-8 flex flex-col`}
                  whileHover={{ y: -4 }}
                >
                  {tier.popular && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-[#6C5CE7]" />
                  )}

                  {tier.popular && (
                    <span className="inline-block self-start px-3 py-1 text-xs font-semibold rounded-full bg-[#6C5CE7]/10 text-[#6C5CE7] border border-[#6C5CE7]/20 mb-4">
                      Most Popular
                    </span>
                  )}

                  <h3 className="text-[#1A1A2E] font-[family-name:var(--font-heading)] text-xl font-bold">
                    {tier.name}
                  </h3>

                  <div className="mt-6 mb-6">
                    <span className="font-[family-name:var(--font-heading)] text-3xl font-bold text-[#1A1A2E]">
                      {tier.price}
                    </span>
                    {tier.priceUsd && (
                      <span className="ml-2 text-[#6B6B80] text-sm">{tier.priceUsd}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[#6B6B80]">
                        <Check size={16} className="text-[#6C5CE7] shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={tier.popular ? 'primary' : 'secondary'}
                    size="md"
                    href="#register"
                    className="w-full justify-center"
                  >
                    {tier.cta}
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
