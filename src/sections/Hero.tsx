import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-background">
        <div className="hero-wash hero-wash-one" />
        <div className="hero-wash hero-wash-two" />
      </div>

      <div className="hero-botanical botanical-one">
        <span />
        <span />
        <span />
        <i />
      </div>

      <div className="hero-botanical botanical-two">
        <span />
        <span />
        <i />
      </div>

      <div className="hero-dots">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero-inner">
        <motion.div
          className="hero-kicker"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          SOFTWARE ENGINEER
        </motion.div>

        <div className="hero-title-wrap">
          <motion.h1
            className="hero-title"
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            SRISHTI
          </motion.h1>

          <motion.div
            className="hero-flower"
            initial={{
              scale: 0,
              rotate: -30,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span />
            <span />
            <span />
            <span />
            <b />
          </motion.div>
        </div>

        <motion.div
          className="hero-copy"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.65,
          }}
        >
          <p>
            I build software, AI systems
            <br />
            and slightly strange things.
          </p>

          <div className="hero-skills">
            <span>Python</span>
            <span>Java</span>
            <span>AI</span>
            <span>Web</span>
          </div>
        </motion.div>

        <motion.a
          href="#identity"
          className="hero-explore"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>Explore</span>
          <i />
        </motion.a>
      </div>

      <div className="hero-code">
        <span>const</span>
        <strong> curiosity</strong>
        <em> = true</em>
      </div>

      <div className="hero-side-note">
        built with curiosity
      </div>
    </section>
  )
}

export default Hero