import { motion, useScroll } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[70] bg-[#6C5CE7] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}
