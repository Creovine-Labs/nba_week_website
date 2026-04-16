import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, MapPin, Tag } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { ScrollReveal } from '../ui/ScrollReveal'
import { agenda, type AgendaDay } from '../../data/agenda'
import { en } from '../../data/i18n/en'

const tagColors: Record<string, string> = {
  'Keynote': 'bg-[#6C5CE7]/10 text-[#6C5CE7] border-[#6C5CE7]/20',
  'Panel': 'bg-[#00D2FF]/10 text-[#0099BB] border-[#00D2FF]/20',
  'Workshop': 'bg-[#10B981]/10 text-[#059669] border-[#10B981]/20',
  'Networking': 'bg-[#F59E0B]/10 text-[#D97706] border-[#F59E0B]/20',
  'Demo': 'bg-[#EF4444]/10 text-[#DC2626] border-[#EF4444]/20',
  'Hackathon': 'bg-[#EC4899]/10 text-[#DB2777] border-[#EC4899]/20',
}

function DayTab({ day, active, onClick }: { day: AgendaDay; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 text-sm font-medium transition-colors rounded-full ${
        active ? 'text-white' : 'text-[#6B6B80] hover:text-[#1A1A2E]'
      }`}
    >
      {active && (
        <motion.div
          className="absolute inset-0 rounded-full bg-[#6C5CE7]"
          layoutId="agendaTab"
        />
      )}
      <span className="relative z-10">
        <span className="block font-semibold">{day.label}</span>
        <span className={`block text-xs ${active ? 'text-white/70' : 'text-[#9999AD]'}`}>{day.date}</span>
      </span>
    </button>
  )
}

export function Agenda() {
  const [activeDay, setActiveDay] = useState(0)
  const currentDay = agenda[activeDay]

  return (
    <section id="agenda" className="py-24 sm:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={en.agenda.label}
          title={en.agenda.title}
        />

        {/* Day tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 bg-[#F8F7FC] rounded-full p-1.5 w-fit mx-auto">
          {agenda.map((day, i) => (
            <DayTab
              key={day.date}
              day={day}
              active={activeDay === i}
              onClick={() => setActiveDay(i)}
            />
          ))}
        </div>

        {/* Sessions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            className="mt-10 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentDay.sessions.map((session, i) => (
              <ScrollReveal key={session.title} direction="up" delay={i * 0.05}>
                <div className="glass-card p-5 sm:p-6 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow">
                  {/* Time */}
                  <div className="sm:w-32 shrink-0 flex items-start gap-2 text-[#6C5CE7]">
                    <Clock size={14} className="mt-0.5 shrink-0" />
                    <span className="font-[family-name:var(--font-mono)] text-sm">{session.time}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-[#1A1A2E] font-semibold">{session.title}</h3>
                      {session.tags?.map(tag => (
                        <span
                          key={tag}
                          className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full border ${tagColors[tag] || 'bg-[#F8F7FC] text-[#6B6B80] border-[#E8E6F0]'}`}
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                    {session.speaker && (
                      <p className="text-[#6B6B80] text-sm">{session.speaker}</p>
                    )}
                    {session.description && (
                      <p className="text-[#9999AD] text-sm mt-2 leading-relaxed">{session.description}</p>
                    )}
                  </div>

                  {/* Room */}
                  {session.room && (
                    <div className="sm:w-28 shrink-0 flex items-start gap-1.5 text-[#6B6B80] text-sm">
                      <MapPin size={14} className="mt-0.5 shrink-0" />
                      {session.room}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
