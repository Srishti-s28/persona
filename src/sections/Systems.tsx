import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'AWIN',
    role: 'Technical Solutions Engineer',
    period: 'June 2023 — June 2024',
    type: 'Placement Year',
    description:
      'Worked at the intersection of software, APIs and client problems, investigating technical issues across a large digital advertising ecosystem.',
    details: [
      '20+ enterprise clients',
      'REST APIs & third-party integrations',
      'Python, JavaScript & SQL automation',
      'Validation and QA automation',
    ],
    metric: '30%',
    metricLabel: 'faster ticket resolution',
    secondaryMetric: '40%',
    secondaryLabel: 'less manual data processing',
    technologies: [
      'Python',
      'JavaScript',
      'SQL',
      'REST APIs',
    ],
  },
  {
    company: 'ADVANCE AGILITY',
    role: 'Junior Software Engineer',
    period: 'July 2025 — Present',
    type: 'Part-time',
    description:
      'Developing full stack applications for client projects across backend services, frontend features, APIs and relational databases.',
    details: [
      'Java & Spring Boot',
      'React & Node.js',
      'Python & SQL',
      'OOP, SOLID & Agile Scrum',
    ],
    metric: 'FULL',
    metricLabel: 'stack development',
    secondaryMetric: 'API',
    secondaryLabel: 'backend development',
    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'Node.js',
    ],
  },
  {
    company: "SAINSBURY'S",
    role: 'Customer Service Assistant',
    period: 'September 2025 — Present',
    type: 'Part-time',
    description:
      'Working in a high-volume customer environment while balancing competing priorities and maintaining clear communication, accuracy and teamwork.',
    details: [
      'Customer service',
      'Communication',
      'Teamwork',
      'Accuracy & attention to detail',
    ],
    metric: 'NOW',
    metricLabel: 'current chapter',
    secondaryMetric: 'TEAM',
    secondaryLabel: 'collaboration',
    technologies: [
      'Communication',
      'Teamwork',
      'Accuracy',
    ],
  },
]

function Systems() {
  return (
    <section
      id="systems"
      className="section systems-section"
    >
      <div className="section-container">
        <div className="section-eyebrow">
          WHERE I'VE WORKED
        </div>

        <div className="systems-heading">
          <h2>
            Places that
            <br />
            helped me <i>grow.</i>
          </h2>

          <p>
            Different environments, different problems,
            and a lot of learning along the way.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company}
              className="experience-item"
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <div className="experience-growing-line">
                <span />
              </div>

              <div className="experience-main">
                <div className="experience-company">
                  <span>{experience.type}</span>
                  <h3>{experience.company}</h3>
                  <p>{experience.period}</p>
                </div>

                <div className="experience-content">
                  <h4>{experience.role}</h4>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <div className="experience-details">
                    {experience.details.map((detail) => (
                      <span key={detail}>
                        <i />
                        {detail}
                      </span>
                    ))}
                  </div>

                  <div className="experience-tech">
                    {experience.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="experience-metrics">
                  <div>
                    <strong>
                      {experience.metric}
                    </strong>
                    <span>
                      {experience.metricLabel}
                    </span>
                  </div>

                  <div>
                    <strong>
                      {experience.secondaryMetric}
                    </strong>
                    <span>
                      {experience.secondaryLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Systems