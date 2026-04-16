import { motion, type HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
}

export function Button({ variant = 'primary', size = 'md', children, href, className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer font-[family-name:var(--font-heading)]'

  const variants = {
    primary: 'bg-[#6C5CE7] text-white hover:bg-[#5A4BD6] hover:shadow-lg hover:shadow-[#6C5CE7]/25',
    secondary: 'border border-[#E8E6F0] text-[#1A1A2E] bg-white hover:bg-[#F8F7FC] hover:border-[#6C5CE7]/30',
    ghost: 'text-[#6C5CE7] hover:text-[#5A4BD6] hover:bg-[#F3F1FA]',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
