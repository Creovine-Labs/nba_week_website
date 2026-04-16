export interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  photo: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'NBA Week completely changed how I think about blockchain adoption in Nigeria. The connections I made there led directly to our seed round.',
    name: 'Ada Okonkwo',
    title: 'Founder',
    company: 'ChainPay',
    photo: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=200&h=200&fit=crop&crop=face',
  },
  {
    quote: "The most well-organized crypto event I've attended in Africa. The quality of speakers and the policy roundtables were exceptional.",
    name: 'David Olumide',
    title: 'Managing Partner',
    company: 'Sahel Ventures',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
  },
  {
    quote: "As a developer, the workshops were hands-on and practical. I shipped my first smart contract by the end of Day 2. Can't wait for 2026.",
    name: 'Kemi Adesanya',
    title: 'Blockchain Developer',
    company: 'Andela',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face',
  },
]

export const pressOutlets = [
  'TechCabal',
  'Techpoint Africa',
  'CoinDesk',
  'BusinessDay',
  'Nairametrics',
  'The Punch',
  'Guardian NG',
  'Bitcoin Magazine',
]

export const pressQuotes = [
  {
    quote: '10,000 attendees gathered in Lagos for Africa\'s largest blockchain and AI summit.',
    source: 'TechCabal',
  },
  {
    quote: 'The most important crypto policy conversation happening on the continent right now.',
    source: 'CoinDesk',
  },
]
