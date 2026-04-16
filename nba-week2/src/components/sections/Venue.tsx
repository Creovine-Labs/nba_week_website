import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { ScrollReveal } from '../ui/ScrollReveal'
import { en } from '../../data/i18n/en'

export function Venue() {
  return (
    <section id="venue" className="py-24 sm:py-32 relative bg-[#F8F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label={en.venue.label}
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map / Image */}
          <ScrollReveal direction="left">
            <div className="aspect-video rounded-2xl overflow-hidden bg-white border border-[#E8E6F0] shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286!2d3.4226!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue location map"
              />
            </div>
          </ScrollReveal>

          {/* Venue info */}
          <ScrollReveal direction="right">
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-[#1A1A2E] font-[family-name:var(--font-heading)] text-2xl font-bold">
                {en.venue.name}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#6C5CE7] shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1A1A2E] font-medium">{en.venue.address}</p>
                    <p className="text-[#6B6B80] text-sm mt-1">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar size={18} className="text-[#6C5CE7] shrink-0 mt-1" />
                  <div>
                    <p className="text-[#1A1A2E] font-medium">{en.hero.date}</p>
                    <p className="text-[#6B6B80] text-sm mt-1">3 Days of Innovation</p>
                  </div>
                </div>
              </div>

              <p className="text-[#6B6B80] leading-relaxed">
                Located on Victoria Island, the Landmark Event Centre is one of Lagos' premier event venues,
                offering world-class facilities and easy access from major hotels.
              </p>

              <a
                href="https://maps.google.com/?q=Landmark+Centre+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#6C5CE7] hover:text-[#5A4BD6] text-sm font-medium transition-colors"
              >
                <ExternalLink size={14} />
                Get Directions
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
