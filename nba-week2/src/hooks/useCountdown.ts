import { useState, useEffect } from 'react'

interface CountdownValues {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function useCountdown(targetDate: Date): CountdownValues {
  const [countdown, setCountdown] = useState<CountdownValues>(() => calculate(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculate(targetDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  return countdown
}

function calculate(target: Date): CountdownValues {
  const now = new Date().getTime()
  const diff = Math.max(0, target.getTime() - now)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}
