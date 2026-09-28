import { useState } from 'react'
import { Plus } from 'lucide-react'

type Project = {
  number: string
  title: string
  status?: string
  category: string
  question: string
  description: string
  stack: string
  visual: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'JARVIS',
    status: 'IN PROGRESS',
    category: 'PERSONAL AI ASSISTANT',
    question: 'What if software could actually work with you?',
    description:
      'A personal AI assistant built around local models, conversational interaction, voice input, memory, task scheduling and system automation. The project is evolving toward computer control and everyday desktop assistance.',
    stack: 'Python · Ollama · LLMs · Automation',
    visual: 'jarvis',
  },
  {
    number: '02',
    title: 'BloomTrace',
    category: 'INTERACTIVE COMPUTER VISION',
    question: 'What happens when movement becomes an interface?',
    description:
      'An interactive computer vision experiment where webcam hand tracking turns fingertip movement into a growing visual system of flowers. Built as a playful exploration of real-time interaction in the browser.',
    stack: 'React · TypeScript · MediaPipe · Canvas',
    visual: 'bloom',
  },
  {
    number: '03',
    title: 'SentinelPulse',
    category: 'DISTRIBUTED MONITORING',
    question: 'How do you observe a system while it is running?',
    description:
      'A distributed monitoring system designed around service probing, monitoring data, a dashboard and automated notifications. The architecture separates monitoring responsibilities into independent components.',
    stack: 'FastAPI · React · PostgreSQL · Docker · Kubernetes',
    visual: 'sentinel',
  },
  {
    number: '04',
    title: 'FinGuard AI',
    category: 'FINTECH / MACHINE LEARNING',
    question: 'Can financial data become something people can understand?',
    description:
      'An interactive financial analysis platform that combines machine learning with a dashboard interface to explore financial health, transaction risk and credit suitability.',
    stack: 'FastAPI · Streamlit · Docker · ML',
    visual: 'finance',
  },
  {
    number: '05',
    title: 'Codebase AI Assistant',
    category: 'RAG / DEVELOPER TOOLING',
    question: 'What if you could talk to a codebase?',
    description:
      'A retrieval-augmented developer assistant that indexes a codebase and uses semantic search to retrieve relevant context before generating answers about the project.',
    stack: 'LangChain · FAISS · Sentence Transformers · Ollama',
    visual: 'code',
  },
  {
    number: '06',
    title: "Mum's Little Garden",
    category: 'INTERACTIVE PERSONAL WEBSITE',
    question: 'Can a website feel like a little place?',
    description:
      'A small interactive web experience built as a personal digital garden. The project focuses on atmosphere, responsive interaction, animation and creating something more personal than a conventional website.',
    stack: 'React · TypeScript · Tailwind CSS · Vite · Netlify',
    visual: 'garden',
  },
  {
    number: '07',
    title: 'AI Sentiment Detection Chatbot',
    category: 'NLP / CONVERSATIONAL AI',
    question: 'Can a machine understand the tone behind words?',
    description:
      'An NLP chatbot experiment combining sentiment classification with conversational responses, exploring how language models and emotion-aware systems can interact.',
    stack: 'Python · TensorFlow · PyTorch · NLP',
    visual: 'sentiment',
  },
]

function ProjectVisual({ type }: { type: string }) {
  if (type === 'bloom') {
    return (
      <div className="project-visual visual-bloom">
        <div className="bloom-flower">
          <span />
          <span />
          <span />
          <span />
          <span />
          <b />
        </div>

        <div className="bloom-stem" />

        <div className="bloom-leaf bloom-leaf-one" />
        <div className="bloom-leaf bloom-leaf-two" />
      </div>
    )
  }

  if (type === 'jarvis') {
    return (
      <div className="project-visual visual-jarvis">
        <div className="jarvis-top">
          <span>JARVIS / LOCAL</span>
          <span>ACTIVE</span>
        </div>

        <div className="jarvis-orb">
          <span />
          <span />
          <span />
          <b>AI</b>
        </div>

        <div className="jarvis-wave">
          {[18, 30, 45, 24, 58, 35, 48, 25, 40, 20, 32].map(
            (height, index) => (
              <i
                key={index}
                style={{ height: `${height}px` }}
              />
            ),
          )}
        </div>
      </div>
    )
  }

  if (type === 'sentinel') {
    return (
      <div className="project-visual visual-sentinel">
        <div className="sentinel-status">
          <span />
          MONITORING
          <b>ONLINE</b>
        </div>

        <div className="sentinel-grid">
          {Array.from({ length: 15 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>

        <div className="sentinel-line">
          <svg
            viewBox="0 0 400 70"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polyline
              fill="none"
              points="0,55 35,48 65,52 95,30 125,38 155,20 185,34 215,16 245,25 275,12 305,30 340,18 370,23 400,8"
            />
          </svg>
        </div>
      </div>
    )
  }

  if (type === 'finance') {
    return (
      <div className="project-visual visual-finance">
        <div className="finance-header">
          <span>FINANCIAL SIGNAL</span>
          <b>84</b>
        </div>

        <div className="finance-bars">
          {[35, 60, 48, 82, 55, 95, 72, 108, 87, 125].map(
            (height, index) => (
              <span
                key={index}
                style={{ height: `${height}px` }}
              />
            ),
          )}
        </div>

        <div className="finance-line" />
      </div>
    )
  }

  if (type === 'code') {
    return (
      <div className="project-visual visual-code">
        <div className="code-window">
          <div className="code-header">
            <span />
            <span />
            <span />
            <b>assistant.py</b>
          </div>

          <div className="code-content">
            <p>
              <em>01</em>
              <span>def</span> retrieve_context():
            </p>

            <p>
              <em>02</em>
              &nbsp;&nbsp;documents = vector_store
            </p>

            <p>
              <em>03</em>
              &nbsp;&nbsp;<strong>return</strong> documents
            </p>

            <p>
              <em>04</em>
            </p>

            <p>
              <em>05</em>
              <span>answer</span> = model.generate()
            </p>

            <p>
              <em>06</em>
              <strong>print</strong>(answer)
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'garden') {
    return (
      <div className="project-visual visual-garden">
        <div className="garden-moon" />

        <div className="garden-ground">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="garden-flower flower-one">
          <i />
          <i />
          <i />
          <i />
          <b />
        </div>

        <div className="garden-flower flower-two">
          <i />
          <i />
          <i />
          <i />
          <b />
        </div>

        <div className="garden-flower flower-three">
          <i />
          <i />
          <i />
          <i />
          <b />
        </div>
      </div>
    )
  }

  return (
    <div className="project-visual visual-sentiment">
      <div className="emotion emotion-happy">☺</div>
      <div className="emotion emotion-neutral">•</div>
      <div className="emotion emotion-sad">☾</div>

      <div className="sentiment-core">
        <span>sentiment</span>
        <b>+</b>
        <span>response</span>
      </div>
    </div>
  )
}

function Built() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const toggleProject = (index: number) => {
    setActiveProject((current) =>
      current === index ? null : index,
    )
  }

  return (
    <section
      className="section built-section"
      id="built"
    >
      <div className="section-container">
        <div className="section-label">
          <span className="section-number">03</span>
          <span className="section-line" />
          Built
          <i>things that exist</i>
        </div>

        <div className="built-heading">
          <h2>
            Things I
            <br />
            <i>built.</i>
          </h2>

          <div className="built-count">
            <span>{projects.length}</span>
            experiments
          </div>
        </div>

        <div className="project-list">
          {projects.map((project, index) => {
            const isOpen = activeProject === index

            return (
              <article
                className="project"
                key={project.title}
              >
                <button
                  type="button"
                  className="project-trigger"
                  onClick={() => toggleProject(index)}
                  aria-expanded={isOpen}
                >
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-main">
                    <span className="project-title-row">
                      <strong>{project.title}</strong>

                      {project.status && (
                        <span className="project-status">
                          {project.status}
                        </span>
                      )}
                    </span>

                    <span className="project-category">
                      {project.category}
                    </span>
                  </span>

                  <span className="project-question">
                    {project.question}
                  </span>

                  <span
                    className={`project-plus ${
                      isOpen
                        ? 'project-plus-active'
                        : ''
                    }`}
                  >
                    <Plus
                      size={17}
                      strokeWidth={1.6}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="project-expanded">
                    <ProjectVisual
                      type={project.visual}
                    />

                    <div className="project-detail">
                      <span className="detail-label">
                        About the project
                      </span>

                      <p>{project.description}</p>

                      <div className="detail-bottom">
                        <div>
                          <span className="detail-label">
                            Built with
                          </span>

                          <strong>
                            {project.stack}
                          </strong>
                        </div>

                        <div>
                          <span className="detail-label">
                            Type
                          </span>

                          <strong>
                            {project.category}
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <div className="built-footer">
          <span>SELECT A PROJECT TO EXPLORE</span>
          <span>NO LINKS · JUST THE WORK</span>
        </div>
      </div>
    </section>
  )
}

export default Built