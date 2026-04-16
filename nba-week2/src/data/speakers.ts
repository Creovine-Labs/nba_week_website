export interface Speaker {
  name: string
  title: string
  company: string
  photo: string
  keynote: boolean
  social?: { twitter?: string; linkedin?: string }
}

export const speakers: Speaker[] = [
  {
    name: 'Adaeze Okafor',
    title: 'CEO & Co-Founder',
    company: 'ChainBridge Africa',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    keynote: true,
    social: { twitter: '#', linkedin: '#' },
  },
  {
    name: 'Emeka Nwosu',
    title: 'Head of Blockchain',
    company: 'First Bank Nigeria',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    keynote: true,
    social: { linkedin: '#' },
  },
  {
    name: 'Fatima Al-Hassan',
    title: 'AI Research Lead',
    company: 'Google DeepMind Africa',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    keynote: true,
    social: { twitter: '#', linkedin: '#' },
  },
  {
    name: 'Oluwaseun Adeyemi',
    title: 'Founder',
    company: 'DeFi Lagos',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    keynote: true,
    social: { twitter: '#' },
  },
  {
    name: 'Ngozi Chukwu',
    title: 'Director, Digital Innovation',
    company: 'Central Bank of Nigeria',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face',
    keynote: false,
    social: { linkedin: '#' },
  },
  {
    name: 'Ibrahim Bello',
    title: 'VP, Engineering',
    company: 'Flutterwave',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    keynote: false,
    social: { twitter: '#', linkedin: '#' },
  },
  {
    name: 'Chioma Eze',
    title: 'Partner',
    company: 'Ventures Platform',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    keynote: false,
    social: { linkedin: '#' },
  },
  {
    name: 'Tunde Bakare',
    title: 'CTO',
    company: 'Quidax',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    keynote: false,
    social: { twitter: '#' },
  },
  {
    name: 'Amina Yusuf',
    title: 'Web3 Lead',
    company: 'Binance Africa',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    keynote: false,
    social: { twitter: '#', linkedin: '#' },
  },
]
