import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-noise" />
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />

      <div className="hero-inner">
        <motion.div
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span />
          SOFTWARE ENGINEER
        </motion.div>

        <div className="hero-name-wrap">
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 70, skewY: 4 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{
              duration: 1.15,
              delay: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            SRISHTI
          </motion.h1>

          <motion.div
            className="hero-name-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          />
        </div>

        <motion.div
          className="hero-identity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="hero-word-cloud">
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              software
            </motion.span>

            <b>/</b>

            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.4,
              }}
            >
              systems
            </motion.span>

            <b>/</b>

            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.8,
              }}
            >
              little experiments
            </motion.span>
          </div>

          <div className="hero-micro-copy">
            <span>PYTHON</span>
            <span>JAVA</span>
            <span>AI</span>
            <span>WEB</span>
            <span>+</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25 }}
        >
          <div className="hero-description">
            <span className="hero-description-label">
              A LITTLE ABOUT THE WORK
            </span>

            <p>
              Building things between{' '}
              <em>engineering</em>,{' '}
              <em>AI</em> and{' '}
              <em>experimentation.</em>
            </p>
          </div>

          <a href="#identity" className="hero-enter">
            <span>ENTER PERSONA</span>
            <i>
              <span />
            </i>
          </a>
        </motion.div>
      </div>

      <div className="hero-side-note">
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>
    </section>
  )
}

export default Hero