import { motion } from 'framer-motion'

const identities = [
  {
    number: '01',
    title: 'ENGINEER',
    text: 'I like understanding how things work, then making them work better.',
    detail: 'systems · APIs · software',
  },
  {
    number: '02',
    title: 'BUILDER',
    text: 'Ideas become interfaces, tools, experiments and things you can actually use.',
    detail: 'products · interfaces · automation',
  },
  {
    number: '03',
    title: 'EXPERIMENTER',
    text: 'I build to learn. Some things become projects. Some things become better ideas.',
    detail: 'AI · interaction · curiosity',
  },
]

function Identity() {
  return (
    <section id="identity" className="section identity-section">
      <div className="identity-background-word">IDENTITY</div>

      <div className="section-container">
        <div className="section-label">
          <span className="section-number">01</span>
          <span className="section-line" />
          <span>Identity</span>
          <i>the person behind the code</i>
        </div>

        <div className="identity-intro">
          <motion.div
            className="identity-intro-copy"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <span>NOT JUST A JOB TITLE.</span>

            <h2>
              I build things
              <br />
              <i>between disciplines.</i>
            </h2>
          </motion.div>

          <motion.div
            className="identity-coordinate"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span>51°30′ N</span>
            <span>0°07′ W</span>
            <small>LONDON · UK</small>
          </motion.div>
        </div>

        <div className="identity-system">
          <div className="identity-system-center">
            <div className="identity-pulse" />
            <strong>SRISHTI</strong>
            <span>SOFTWARE ENGINEER</span>
          </div>

          <div className="identity-ring identity-ring-one" />
          <div className="identity-ring identity-ring-two" />

          {identities.map((item, index) => (
            <motion.div
              key={item.title}
              className={`identity-node identity-node-${index + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
            </motion.div>
          ))}
        </div>

        <div className="identity-cards">
          {identities.map((item, index) => (
            <motion.article
              key={item.title}
              className="identity-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <div className="identity-card-top">
                <span>{item.number}</span>
                <i>{item.detail}</i>
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <div className="identity-card-line">
                <span />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Identity