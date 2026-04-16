import { motion } from 'framer-motion'
import { en } from '../../data/i18n/en'
import { useCountdown } from '../../hooks/useCountdown'

const EVENT_DATE = '2026-10-19T09:00:00+01:00'

function FlipUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center gap-2">
      <motion.span
        key={display}
        className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl font-bold gradient-text"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {display}
      </motion.span>
      <span className="text-[#6B6B80] text-sm font-medium">{label}</span>
    </div>
  )
}

export function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(new Date(EVENT_DATE))

  return (
    <div className="flex gap-8 sm:gap-12 md:gap-16 px-8 py-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-[#E8E6F0] shadow-lg shadow-[#6C5CE7]/5">
      <FlipUnit value={days} label={en.hero.countdown.days} />
      <FlipUnit value={hours} label={en.hero.countdown.hours} />
      <FlipUnit value={minutes} label={en.hero.countdown.mins} />
      <FlipUnit value={seconds} label={en.hero.countdown.secs} />
    </div>
  )
}
