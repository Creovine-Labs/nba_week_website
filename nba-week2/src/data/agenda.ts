export interface AgendaSession {
  time: string
  title: string
  speaker?: string
  room: string
  tags: string[]
  description: string
}

export interface AgendaDay {
  label: string
  date: string
  sessions: AgendaSession[]
}

export const agenda: AgendaDay[] = [
  {
    label: 'Day 1',
    date: 'October 1, 2026',
    sessions: [
      {
        time: '09:00 AM',
        title: 'Opening Keynote: The State of Blockchain in Africa',
        speaker: 'Adaeze Okafor',
        room: 'Main Stage',
        tags: ['Blockchain', 'AI'],
        description: 'A comprehensive overview of blockchain adoption across the African continent, emerging trends, and the role of policy in shaping the next decade.',
      },
      {
        time: '10:30 AM',
        title: 'Panel: DeFi Opportunities in Emerging Markets',
        speaker: 'Oluwaseun Adeyemi & Panel',
        room: 'Room A',
        tags: ['DeFi'],
        description: 'Industry leaders discuss how decentralized finance is creating new economic pathways in Nigeria and across West Africa.',
      },
      {
        time: '10:30 AM',
        title: 'Workshop: Building AI Agents for Real-World Use Cases',
        speaker: 'Fatima Al-Hassan',
        room: 'Room B',
        tags: ['AI'],
        description: 'Hands-on workshop covering the fundamentals of building and deploying AI agents for enterprise and consumer applications.',
      },
      {
        time: '12:00 PM',
        title: 'Lunch & Networking Break',
        room: 'Expo Hall',
        tags: [],
        description: 'Connect with fellow attendees, visit sponsor booths, and explore the startup expo.',
      },
      {
        time: '02:00 PM',
        title: 'Fireside Chat: Crypto Regulation — What Nigeria Gets Right',
        speaker: 'Ngozi Chukwu',
        room: 'Main Stage',
        tags: ['Policy', 'Blockchain'],
        description: 'An honest conversation about the regulatory landscape for crypto in Nigeria and what other African nations can learn.',
      },
      {
        time: '04:00 PM',
        title: 'Startup Pitch Competition — Round 1',
        room: 'Main Stage',
        tags: ['Blockchain', 'AI', 'DeFi'],
        description: 'Ten shortlisted startups pitch their blockchain and AI solutions to a panel of investors and industry experts.',
      },
    ],
  },
  {
    label: 'Day 2',
    date: 'October 2, 2026',
    sessions: [
      {
        time: '09:00 AM',
        title: 'Keynote: AI-Powered Financial Inclusion',
        speaker: 'Ibrahim Bello',
        room: 'Main Stage',
        tags: ['AI', 'DeFi'],
        description: 'How artificial intelligence is breaking down barriers to financial access across Africa.',
      },
      {
        time: '10:30 AM',
        title: 'Panel: Tokenization of Real-World Assets in Africa',
        room: 'Room A',
        tags: ['Blockchain', 'DeFi'],
        description: 'Exploring how tokenization can unlock value in real estate, agriculture, and commodities across the continent.',
      },
      {
        time: '10:30 AM',
        title: 'Workshop: Smart Contract Security Best Practices',
        room: 'Room B',
        tags: ['Blockchain'],
        description: 'Deep-dive into common vulnerabilities, auditing techniques, and secure development patterns.',
      },
      {
        time: '12:00 PM',
        title: 'Lunch & Expo',
        room: 'Expo Hall',
        tags: [],
        description: 'Networking lunch with curated matchmaking sessions for investors and startups.',
      },
      {
        time: '02:00 PM',
        title: 'Policy Roundtable: CBN, SEC & NITDA on Digital Assets',
        room: 'Main Stage',
        tags: ['Policy'],
        description: 'Direct dialogue with regulators on the future of digital asset policy in Nigeria.',
      },
      {
        time: '04:00 PM',
        title: 'Startup Pitch Competition — Finals',
        room: 'Main Stage',
        tags: ['Blockchain', 'AI'],
        description: 'The top five startups from Day 1 compete for the NBA Week Grand Prize.',
      },
    ],
  },
  {
    label: 'Day 3',
    date: 'October 3, 2026',
    sessions: [
      {
        time: '09:00 AM',
        title: 'Keynote: Web3 and the Future of African Identity',
        speaker: 'Chioma Eze',
        room: 'Main Stage',
        tags: ['Blockchain'],
        description: 'How decentralized identity solutions are empowering millions of Africans without formal documentation.',
      },
      {
        time: '10:30 AM',
        title: 'Panel: AI Ethics & Governance for Africa',
        room: 'Room A',
        tags: ['AI', 'Policy'],
        description: 'Addressing bias, fairness, and governance frameworks for AI deployment in African contexts.',
      },
      {
        time: '12:00 PM',
        title: 'Closing Ceremony & Awards',
        room: 'Main Stage',
        tags: [],
        description: 'Pitch competition winners announced, awards ceremony, and closing remarks from organizers.',
      },
      {
        time: '02:00 PM',
        title: 'VIP Speaker Dinner & After-Party',
        room: 'VIP Lounge',
        tags: [],
        description: 'Exclusive networking dinner for VIP ticket holders with speakers and sponsors.',
      },
    ],
  },
]
