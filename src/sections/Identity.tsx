import { motion } from 'framer-motion'

function Identity() {
  return (
    <section
      id="identity"
      className="section identity-section"
    >
      <div className="section-container">
        <div className="section-eyebrow">
          A LITTLE ABOUT ME
        </div>

        <div className="identity-layout">
          <motion.div
            className="identity-heading"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              Hi,
              <br />
              <i>I'm Srishti.</i>
            </h2>
          </motion.div>

          <motion.div
            className="identity-copy"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="identity-lead">
              Junior Software Engineer with a First
              Class degree in Computer Science (AI).
            </p>

            <p>
              I like building things that sit somewhere
              between software engineering, artificial
              intelligence and experimentation.
            </p>

            <p>
              Sometimes that means an API or a full-stack
              application. Sometimes it means teaching a
              computer to see a hand, talk back, or grow
              flowers on a screen.
            </p>
          </motion.div>
        </div>

        <div className="identity-object">
          <div className="identity-orbit identity-orbit-one" />
          <div className="identity-orbit identity-orbit-two" />

          <div className="identity-card">
            <span className="identity-card-label">
              CURRENTLY BUILDING
            </span>

            <strong>software + AI</strong>

            <div className="identity-card-tags">
              <span>engineering</span>
              <span>systems</span>
              <span>experiments</span>
            </div>
          </div>

          <div className="identity-leaf identity-leaf-one" />
          <div className="identity-leaf identity-leaf-two" />
        </div>
      </div>
    </section>
  )
}

export default Identity