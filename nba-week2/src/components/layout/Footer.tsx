import { Mail, MapPin, Phone } from 'lucide-react'

const socialLinks = [
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
]

const footerLinks = [
  {
    title: 'Event',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Speakers', href: '#speakers' },
      { label: 'Agenda', href: '#agenda' },
      { label: 'Venue', href: '#venue' },
    ],
  },
  {
    title: 'Participate',
    links: [
      { label: 'Register', href: '#tickets' },
      { label: 'Sponsor', href: 'mailto:sponsors@nigeriablockchainweek.com' },
      { label: 'Volunteer', href: '#' },
      { label: 'Speak', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Code of Conduct', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-[#E8E6F0] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="font-[family-name:var(--font-heading)] font-bold text-2xl">
              <span className="gradient-text">NBA</span>
              <span className="text-[#1A1A2E]"> WEEK</span>
            </a>
            <p className="text-[#6B6B80] text-sm mt-4 max-w-xs leading-relaxed">
              Africa's premier blockchain and AI conference. Connecting builders, innovators, and policymakers.
            </p>

            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-[#F8F7FC] border border-[#E8E6F0] flex items-center justify-center text-[#6B6B80] hover:text-[#6C5CE7] hover:border-[#6C5CE7]/50 transition-all text-xs font-bold"
                >
                  {label.slice(0, 2)}
                </a>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-sm text-[#6B6B80]">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#6C5CE7]" />
                <a href="mailto:info@nigeriablockchainweek.com" className="hover:text-[#1A1A2E] transition-colors">
                  info@nigeriablockchainweek.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#6C5CE7]" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#6C5CE7]" />
                <span>+234 800 NBA WEEK</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map(group => (
            <div key={group.title}>
              <h4 className="text-[#1A1A2E] font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#6B6B80] hover:text-[#6C5CE7] text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#E8E6F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9999AD] text-xs">
            © {new Date().getFullYear()} Nigeria Blockchain & AI Week. All rights reserved.
          </p>
          <p className="text-[#9999AD]/50 text-xs">
            Built with 🧡 for Africa's tech community
          </p>
        </div>
      </div>
    </footer>
  )
}
