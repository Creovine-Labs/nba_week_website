import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { ScrollReveal } from '../ui/ScrollReveal'
import { speakers, type Speaker } from '../../data/speakers'
import { en } from '../../data/i18n/en'

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <ScrollReveal direction="up" delay={index * 0.08}>
      <motion.div
        className="glass-card overflow-hidden group cursor-pointer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -8 }}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={speaker.photo}
            alt={speaker.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-transparent to-transparent" />

          {/* Keynote badge */}
          {speaker.keynote && (
            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-[#6C5CE7] text-white">
              Keynote
            </span>
          )}

          {/* Social overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                className="absolute bottom-0 inset-x-0 flex justify-center gap-3 pb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                {speaker.social?.twitter && (
                  <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-[#1A1A2E] hover:text-[#6C5CE7] transition-colors">
                    <Globe size={14} />
                  </a>
                )}
                {speaker.social?.linkedin && (
                  <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-[#1A1A2E] hover:text-[#6C5CE7] transition-colors">
                    <Globe size={14} />
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-[#1A1A2E] font-semibold">{speaker.name}</h3>
          <p className="text-[#6C5CE7] text-sm">{speaker.title}</p>
          <p className="text-[#6B6B80] text-xs mt-1">{speaker.company}</p>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export function Speakers() {
  const [showAll, setShowAll] = useState(false)
  const keynote = speakers.filter(s => s.keynote)
  const regular = speakers.filter(s => !s.keynote)
  const displayed = showAll ? regular : regular.slice(0, 4)

  return (
    <section id="speakers" className="py-24 sm:py-32 relative bg-[#F8F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={en.speakers.label}
          title={en.speakers.title}
        />

        {/* Keynote speakers */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keynote.map((speaker, i) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
          ))}
        </div>

        {/* Regular speakers */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayed.map((speaker, i) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
          ))}
        </div>

        {regular.length > 4 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[#6C5CE7] hover:text-[#5A4BD6] text-sm font-medium transition-colors underline underline-offset-4"
            >
              {showAll ? 'Show Less' : `View All ${speakers.length} Speakers`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
