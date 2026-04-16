import { Helmet } from 'react-helmet-async'
import { Navbar } from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/hero/Hero'
import { About } from './components/sections/About'
import { SocialProof } from './components/sections/SocialProof'
import { Speakers } from './components/sections/Speakers'
import { Agenda } from './components/sections/Agenda'
import { Tickets } from './components/sections/Tickets'
import { Sponsors } from './components/sections/Sponsors'
import { Venue } from './components/sections/Venue'
import { FAQ } from './components/sections/FAQ'
import { Newsletter } from './components/sections/Newsletter'

function App() {
  return (
    <>
      <Helmet>
        <title>Nigeria Blockchain & AI Week 2026 | Africa's Premier Tech Summit</title>
        <meta name="description" content="Join 3,000+ attendees at Africa's premier blockchain and AI conference. October 19-21, 2026 in Lagos, Nigeria. Keynotes, workshops, hackathons, and networking." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          "name": "Nigeria Blockchain & AI Week 2026",
          "description": "Africa's premier blockchain and AI conference bringing together builders, innovators, and policymakers.",
          "startDate": "2026-10-19",
          "endDate": "2026-10-21",
          "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
          "eventStatus": "https://schema.org/EventScheduled",
          "location": {
            "@type": "Place",
            "name": "Landmark Centre",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lagos",
              "addressCountry": "NG"
            }
          },
          "organizer": {
            "@type": "Organization",
            "name": "Nigeria Blockchain & AI Week"
          },
          "offers": [
            { "@type": "Offer", "price": "0", "priceCurrency": "NGN", "name": "Community Pass" },
            { "@type": "Offer", "price": "50000", "priceCurrency": "NGN", "name": "Pro Pass" },
            { "@type": "Offer", "price": "150000", "priceCurrency": "NGN", "name": "VIP Pass" }
          ]
        })}</script>
      </Helmet>

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <SocialProof />
        <Speakers />
        <Agenda />
        <Tickets />
        <Sponsors />
        <Venue />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}

export default App
