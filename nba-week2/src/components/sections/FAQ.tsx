import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { ScrollReveal } from '../ui/ScrollReveal'
import { faqItems } from '../../data/faq'
import { en } from '../../data/i18n/en'

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <ScrollReveal direction="up" delay={index * 0.05}>
      <div className="glass-card overflow-hidden hover:shadow-md transition-shadow">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
          aria-expanded={open}
        >
          <span className="text-[#1A1A2E] font-medium pr-4">{question}</span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0"
          >
            <ChevronDown size={20} className="text-[#6C5CE7]" />
          </motion.div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[#6B6B80] leading-relaxed text-sm border-t border-[#E8E6F0] pt-4">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={en.faq.label}
        />

        <div className="mt-12 space-y-3">
          {faqItems.map((item, i) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
