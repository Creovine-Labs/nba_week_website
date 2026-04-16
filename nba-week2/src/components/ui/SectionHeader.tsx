import { motion } from 'framer-motion'

interface SectionHeaderProps {
  label: string
  title?: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ label, title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <motion.div
      className={`max-w-3xl mb-12 md:mb-16 ${alignment}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-4" style={{ justifyContent: align === 'center' ? 'center' : 'flex-start' }}>
        <span className="badge-pill">
          {label}
        </span>
      </div>
      {title && (
        <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] text-[#1A1A2E] leading-tight">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-[#6B6B80] text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
