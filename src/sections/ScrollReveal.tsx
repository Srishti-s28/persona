import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
}

function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const hiddenPosition = {
    up: { y: 70, x: 0 },
    left: { y: 0, x: -70 },
    right: { y: 0, x: 70 },
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: hiddenPosition[direction].x,
        y: hiddenPosition[direction].y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal