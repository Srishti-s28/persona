import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'LANGUAGES',
    number: '01',
    skills: [
      'Python',
      'Java',
      'JavaScript',
      'TypeScript',
      'SQL',
      'C/C++',
    ],
  },
  {
    label: 'ENGINEERING',
    number: '02',
    skills: [
      'OOP',
      'DSA',
      'REST APIs',
      'System Design',
      'Unit Testing',
      'Integration Testing',
      'Debugging',
      'Agile',
    ],
  },
  {
    label: 'FRONTEND / BACKEND',
    number: '03',
    skills: [
      'React',
      'Spring Boot',
      'Node.js',
      'FastAPI',
      'Vite',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    label: 'AI / MACHINE LEARNING',
    number: '04',
    skills: [
      'LangChain',
      'FAISS',
      'RAG',
      'Sentence Transformers',
      'Hugging Face',
      'Ollama',
      'LLMs',
      'TensorFlow',
      'PyTorch',
      'NLP',
      'Conversational AI',
    ],
  },
  {
    label: 'COMPUTER VISION',
    number: '05',
    skills: [
      'MediaPipe',
      'Hand Landmark Detection',
      'Canvas',
      'Webcam Interaction',
    ],
  },
  {
    label: 'DATA / INFRASTRUCTURE',
    number: '06',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Pandas',
      'NumPy',
      'Docker',
      'CI/CD',
      'Netlify',
    ],
  },
  {
    label: 'TOOLS',
    number: '07',
    skills: [
      'Git',
      'Jira',
      'Confluence',
      'Selenium',
      'Playwright',
    ],
  },
]

function Stack() {
  return (
    <section id="stack" className="section stack-section">
      <div className="stack-grid-background" />

      <div className="section-container">
        <div className="section-label">
          <span className="section-number">04</span>
          <span className="section-line" />
          <span>Stack</span>
          <i>how I build</i>
        </div>

        <div className="stack-heading">
          <div>
            <span className="stack-kicker">THE TOOLBOX</span>

            <h2>
              How I
              <br />
              <i>build.</i>
            </h2>
          </div>

          <p>
            A constantly changing collection of languages, systems,
            frameworks and ideas I use to turn problems into things.
          </p>
        </div>

        <div className="stack-map">
          <div className="stack-map-center">
            <span>SRISHTI</span>
            <strong>BUILD</strong>
            <small>ENGINEERING · AI · EXPERIMENTATION</small>
          </div>

          {skillGroups.map((group, groupIndex) => (
            <motion.div
              className={`skill-cluster skill-cluster-${groupIndex + 1}`}
              key={group.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: groupIndex * 0.08,
              }}
            >
              <div className="skill-cluster-heading">
                <span>{group.number}</span>
                <strong>{group.label}</strong>
              </div>

              <div className="skill-cloud">
                {group.skills.map((skill, index) => (
                  <span
                    key={skill}
                    style={{
                      '--skill-delay': `${index * 80}ms`,
                    } as React.CSSProperties}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="stack-connection connection-one" />
          <div className="stack-connection connection-two" />
          <div className="stack-connection connection-three" />
          <div className="stack-connection connection-four" />
        </div>

        <div className="stack-bottom">
          <span>
            {skillGroups.reduce(
              (total, group) => total + group.skills.length,
              0,
            )}{' '}
            SKILLS / TOOLS
          </span>

          <span>LEARNING NEVER STAYS STATIC</span>
        </div>
      </div>
    </section>
  )
}

export default Stack