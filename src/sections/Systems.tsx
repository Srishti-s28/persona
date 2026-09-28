import { motion } from 'framer-motion'

const experiences = [
  {
    number: '01',
    period: 'JUN 2023 — JUN 2024',
    company: 'AWIN',
    role: 'Technical Solutions Engineer',
    type: 'PLACEMENT YEAR',
    description:
      'Worked across APIs, tracking systems and third-party integrations for enterprise clients in a fast-moving technical environment.',
    details: [
      'Supported 20+ enterprise clients',
      'Investigated REST API, tracking and conversion issues',
      'Built Python, JavaScript and SQL automations',
      'Worked across Shopify, Salesforce, WooCommerce and GTM',
    ],
    metric: '30%',
    metricLabel: 'faster ticket resolution',
    tech: 'Python · JavaScript · SQL · REST APIs',
  },
  {
    number: '02',
    period: 'JUL 2025 — DEC 2025',
    company: 'ADVANCE AGILITY',
    role: 'Junior Software Engineer',
    type: 'SOFTWARE ENGINEERING',
    description:
      'Built software for different client projects, working across application development, internal tools and reporting systems.',
    details: [
      'Developed Java-based internal applications and tools',
      'Worked across React, JavaScript and SQL',
      'Contributed to client-facing software projects',
      'Worked with Git, GitLab, Jira and Confluence',
    ],
    metric: '02',
    metricLabel: 'client projects explored',
    tech: 'Java · React · JavaScript · SQL',
  },
  {
    number: '03',
    period: '2026 — NOW',
    company: 'SAINSBURY’S',
    role: 'CURRENT CHAPTER',
    type: 'CURRENT',
    description:
      'Currently building experience in a large-scale technology and customer environment while continuing to develop software projects independently.',
    details: [
      'Current professional chapter',
      'Continuing to build software outside work',
      'Exploring AI, systems and developer tooling',
      'Growing toward software engineering roles',
    ],
    metric: 'NOW',
    metricLabel: 'still building',
    tech: 'Engineering · Systems · AI · Curiosity',
  },
]

function Systems() {
  return (
    <section
      className="section systems-section"
      id="systems"
    >
      <div className="systems-bg-word">
        EXPERIENCE
      </div>

      <div className="section-container">
        <div className="section-label">
          <span className="section-number">02</span>
          <span className="section-line" />
          <span>Systems</span>
          <i>how I got here</i>
        </div>

        <motion.div
          className="systems-intro"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="systems-kicker">
            <span />
            EXPERIENCE / 03
          </div>

          <h2>
            A few places
            <br />
            <i>along the way.</i>
          </h2>

          <p>
            Different environments, different problems, same obsession:
            figuring out how things work and making them better.
          </p>
        </motion.div>

        <div className="experience-system">
          {experiences.map((experience, index) => (
            <motion.article
              className={`experience-card experience-card-${index + 1}`}
              key={experience.company}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
            >
              <div className="experience-card-top">
                <span className="experience-index">
                  {experience.number}
                </span>

                <span className="experience-period">
                  {experience.period}
                </span>

                <span className="experience-type">
                  {experience.type}
                </span>
              </div>

              <div className="experience-card-main">
                <div className="experience-company-block">
                  <span className="experience-role">
                    {experience.role}
                  </span>

                  <h3>{experience.company}</h3>
                </div>

                <div className="experience-description">
                  <p>{experience.description}</p>

                  <div className="experience-details">
                    {experience.details.map((detail) => (
                      <span key={detail}>
                        <i />
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="experience-card-bottom">
                <div className="experience-tech">
                  <span>WORKED WITH</span>
                  <strong>{experience.tech}</strong>
                </div>

                <div className="experience-metric">
                  <strong>{experience.metric}</strong>
                  <span>{experience.metricLabel}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="systems-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>
            <i />
            EACH PLACE CHANGED THE SYSTEM
          </span>

          <span>
            NEXT: THINGS I BUILT ↓
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Systems