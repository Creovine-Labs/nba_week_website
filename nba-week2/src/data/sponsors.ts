export interface Sponsor {
  name: string
  logo: string
  tier: 'platinum' | 'gold' | 'media'
  url: string
}

export const sponsors: Sponsor[] = [
  { name: 'Binance', logo: '', tier: 'platinum', url: '#' },
  { name: 'Flutterwave', logo: '', tier: 'platinum', url: '#' },
  { name: 'Google Cloud', logo: '', tier: 'gold', url: '#' },
  { name: 'Paystack', logo: '', tier: 'gold', url: '#' },
  { name: 'Quidax', logo: '', tier: 'gold', url: '#' },
  { name: 'Chainlink', logo: '', tier: 'gold', url: '#' },
  { name: 'TechCabal', logo: '', tier: 'media', url: '#' },
  { name: 'CoinDesk', logo: '', tier: 'media', url: '#' },
  { name: 'Techpoint Africa', logo: '', tier: 'media', url: '#' },
  { name: 'Bitcoin Magazine', logo: '', tier: 'media', url: '#' },
  { name: 'Nairametrics', logo: '', tier: 'media', url: '#' },
  { name: 'BusinessDay', logo: '', tier: 'media', url: '#' },
]
