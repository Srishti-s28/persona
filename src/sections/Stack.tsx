import { useState } from 'react'
import { motion } from 'framer-motion'

const technologies = [
  {
    name: 'Python',
    category: 'language',
    x: '46%',
    y: '20%',
    related: ['FastAPI', 'AI', 'TensorFlow'],
  },
  {
    name: 'Java',
    category: 'language',
    x: '69%',
    y: '27%',
    related: ['Spring Boot', 'OOP'],
  },
  {
    name: 'React',
    category: 'frontend',
    x: '25%',
    y: '39%',
    related: ['TypeScript', 'Vite', 'Web'],
  },
  {
    name: 'AI',
    category: 'focus',
    x: '52%',
    y: '45%',
    related: ['Python', 'NLP', 'RAG'],
  },
  {
    name: 'Spring Boot',
    category: 'backend',
    x: '76%',
    y: '48%',
    related: ['Java', 'REST APIs'],
  },
  {
    name: 'TypeScript',
    category: 'language',
    x: '25%',
    y: '64%',
    related: ['React', 'Vite'],
  },
  {
    name: 'SQL',
    category: 'data',
    x: '54%',
    y: '68%',
    related: ['PostgreSQL', 'MySQL'],
  },
  {
    name: 'FastAPI',
    category: 'backend',
    x: '76%',
    y: '70%',
    related: ['Python', 'REST APIs'],
  },
  {
    name: 'Docker',
    category: 'devops',
    x: '38%',
    y: '83%',
    related: ['FastAPI', 'Deployment'],
  },
]

function Stack() {
  const [active, setActive] = useState<string | null>(null)
  const [cursor, setCursor] = useState({
    x: 50,
    y: 50,
  })

  const activeTechnology = technologies.find(
    (technology) => technology.name === active,
  )

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType !== 'mouse') return

    const rect = event.currentTarget.getBoundingClientRect()

    setCursor({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    })
  }

  const getAttraction = (
    technologyX: string,
    technologyY: string,
  ) => {
    const nodeX = parseFloat(technologyX)
    const nodeY = parseFloat(technologyY)

    const dx = cursor.x - nodeX
    const dy = cursor.y - nodeY

    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > 35) {
      return {
        x: 0,
        y: 0,
      }
    }

    const strength = Math.max(0, 1 - distance / 35)

    return {
      x: Math.max(-10, Math.min(10, dx * strength * 0.35)),
      y: Math.max(-10, Math.min(10, dy * strength * 0.35)),
    }
  }

  return (
    <section id="stack" className="section stack-section">
      <div className="stack-decoration">
        <span />
        <span />
        <span />
      </div>

      <div className="section-container">
        <div className="section-eyebrow">
          WHAT I WORK WITH
        </div>

        <div className="stack-heading">
          <h2>
            A little bit
            <br />
            <i>of everything.</i>
          </h2>

          <p>
            I like understanding how the pieces fit
            together, not just learning the names.
          </p>
        </div>

        <div
          className="stack-constellation"
          onPointerMove={handlePointerMove}
        >
          <svg
            className="stack-lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path d="M46 20 C48 32 50 36 52 45" />
            <path d="M69 27 C65 36 58 40 52 45" />
            <path d="M25 39 C35 40 43 42 52 45" />
            <path d="M52 45 C60 46 69 48 76 48" />
            <path d="M25 64 C30 55 32 47 25 39" />
            <path d="M52 45 C53 55 54 62 54 68" />
            <path d="M54 68 C61 70 69 70 76 70" />
            <path d="M38 83 C43 77 49 72 54 68" />
          </svg>

          {technologies.map((technology) => {
            const isActive = active === technology.name

            const isRelated =
              activeTechnology?.related.includes(
                technology.name,
              ) ?? false

            const attraction = getAttraction(
              technology.x,
              technology.y,
            )

            return (
              <motion.button
                key={technology.name}
                type="button"
                className={`stack-node ${
                  isActive ? 'stack-node-active' : ''
                } ${
                  isRelated ? 'stack-node-related' : ''
                }`}
                style={{
                  left: technology.x,
                  top: technology.y,
                  x: attraction.x,
                  y: attraction.y,
                }}
                animate={{
                  x: attraction.x,
                  y: attraction.y,
                  scale: isActive ? 1.08 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 18,
                  mass: 0.35,
                }}
                onMouseEnter={() =>
                  setActive(technology.name)
                }
                onMouseLeave={() => setActive(null)}
                onFocus={() =>
                  setActive(technology.name)
                }
                onBlur={() => setActive(null)}
              >
                <span className="stack-node-dot" />
                {technology.name}
              </motion.button>
            )
          })}

          <div className="stack-centre">
            <span>BUILD</span>
            <strong>+</strong>
            <span>EXPERIMENT</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stack