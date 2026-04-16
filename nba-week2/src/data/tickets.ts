export interface TicketTier {
  name: string
  price: string
  priceUsd: string
  popular: boolean
  features: string[]
  cta: string
}

export const tickets: TicketTier[] = [
  {
    name: 'General',
    price: 'Free',
    priceUsd: '',
    popular: false,
    features: [
      'Main stage access',
      'Expo floor access',
      'Basic swag bag',
      'Networking breaks',
    ],
    cta: 'Register Free',
  },
  {
    name: 'Professional',
    price: '₦50,000',
    priceUsd: '~$32 USD',
    popular: true,
    features: [
      'All sessions & workshops',
      'Networking events',
      'Lunch & premium swag',
      'On-demand recordings',
      'Priority seating',
    ],
    cta: 'Get Ticket',
  },
  {
    name: 'VIP',
    price: '₦150,000',
    priceUsd: '~$95 USD',
    popular: false,
    features: [
      'All Professional benefits',
      'Exclusive VIP lounge',
      'Speaker dinner invite',
      '1-on-1 meeting scheduling',
      'Airport pickup service',
      'Certificate of attendance',
    ],
    cta: 'Get VIP Access',
  },
]

export const whyAttendItems = [
  {
    icon: '🔗',
    title: 'Network with 10,000+',
    subtitle: 'Blockchain & AI Professionals',
    description: 'Connect directly with founders, VCs, regulators, and developers building the future of African tech.',
    size: 'large' as const,
  },
  {
    icon: '🧠',
    title: '30+ Expert-Led Sessions',
    subtitle: 'AI, DeFi, Web3 & Policy',
    description: 'Cutting-edge insights from builders who are shipping product, not just talking about it.',
    size: 'large' as const,
  },
  {
    icon: '🚀',
    title: 'Startup Pitch Stage',
    subtitle: 'Showcase Your Innovation',
    description: 'Pitch to investors, win prizes, and get the exposure your startup needs to scale.',
    size: 'small' as const,
  },
  {
    icon: '💰',
    title: 'Meet 200+ Investors',
    subtitle: 'Active in African Tech',
    description: 'Curated matchmaking sessions connect you with VCs and angels actively deploying capital.',
    size: 'small' as const,
  },
  {
    icon: '📺',
    title: 'Media & Global Exposure',
    subtitle: "Africa's Top Tech Outlets",
    description: "Get featured across Africa's leading crypto and tech media outlets with 10+ media partners.",
    size: 'small' as const,
  },
  {
    icon: '🏛️',
    title: 'Policy & Regulation Roundtables',
    subtitle: 'Direct Dialogue with CBN, SEC, NITDA',
    description: 'Engage directly with the regulators shaping the future of digital assets in Nigeria.',
    size: 'full' as const,
  },
]
