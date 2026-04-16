import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-24 sm:py-32 relative bg-[#F8F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6C5CE7]/10 via-white to-[#00D2FF]/10" />
            <div className="absolute inset-0 adinkra-bg opacity-30" />

            <div className="relative z-10 px-6 sm:px-12 py-16 sm:py-20 text-center">
              <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-[#1A1A2E] mb-4">
                Stay in the <span className="gradient-text">Loop</span>
              </h2>
              <p className="text-[#6B6B80] max-w-lg mx-auto mb-10">
                Get early-bird ticket access, speaker announcements, and exclusive updates delivered to your inbox.
              </p>

              {submitted ? (
                <motion.div
                  className="flex items-center justify-center gap-2 text-[#10B981]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={20} />
                  <span className="font-medium">You're on the list! Check your inbox.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-full bg-white border border-[#E8E6F0] text-[#1A1A2E] placeholder:text-[#9999AD] focus:outline-none focus:border-[#6C5CE7] transition-colors shadow-sm"
                  />
                  <motion.button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#6C5CE7] text-white font-semibold text-sm hover:bg-[#5A4BD6] transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send size={16} />
                    Subscribe
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
