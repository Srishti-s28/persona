import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BrainCircuit,
  Code2,
  Flower2,
  MessageCircle,
  Network,
  Sparkles,
  Sprout,
} from 'lucide-react'

type Project = {
  name: string
  category: string
  question: string
  description: string
  technologies: string[]
  icon: typeof BrainCircuit
  accent: string
}

const projects: Project[] = [
  {
    name: 'JARVIS',
    category: 'Personal AI Assistant',
    question:
      'What if software could actually work with you?',
    description:
      'A personal AI assistant built with Ollama that can chat, handle voice interaction, schedule tasks, store memory and evolve toward computer control.',
    technologies: [
      'Python',
      'Ollama',
      'LLMs',
      'Voice',
      'Memory',
    ],
    icon: BrainCircuit,
    accent: 'green',
  },
  {
    name: 'BloomTrace',
    category: 'Interactive Computer Vision',
    question:
      'What happens when movement becomes an interface?',
    description:
      'An interactive garden using React, TypeScript, MediaPipe and Canvas. Webcam hand tracking detects fingertip movement and makes flowers appear as the user interacts.',
    technologies: [
      'React',
      'TypeScript',
      'MediaPipe',
      'Canvas',
    ],
    icon: Flower2,
    accent: 'lavender',
  },
  {
    name: 'SentinelPulse',
    category: 'Uptime Monitoring',
    question:
      'How do you observe a system while it is running?',
    description:
      'A full stack monitoring platform with automated service probing, REST API alerts, PostgreSQL data and a live monitoring dashboard.',
    technologies: [
      'FastAPI',
      'React',
      'PostgreSQL',
      'REST APIs',
    ],
    icon: Network,
    accent: 'blue',
  },
  {
    name: 'FinGuard AI',
    category: 'Fintech / Machine Learning',
    question:
      'Can financial data become something people understand?',
    description:
      'An AI-powered fintech platform using machine learning to generate financial health scores and credit risk assessments through an interactive dashboard.',
    technologies: [
      'Python',
      'FastAPI',
      'Streamlit',
      'Machine Learning',
    ],
    icon: Sparkles,
    accent: 'peach',
  },
  {
    name: 'Codebase AI',
    category: 'RAG / Developer Tooling',
    question:
      'What if you could talk to a codebase?',
    description:
      'A code understanding assistant that indexes codebases, performs semantic search and retrieves relevant context to help answer questions about software.',
    technologies: [
      'LangChain',
      'FAISS',
      'Sentence Transformers',
      'Ollama',
    ],
    icon: Code2,
    accent: 'green',
  },
  {
    name: "Mum's Little Garden",
    category: 'Interactive Personal Website',
    question:
      'Can a website feel like a little place?',
    description:
      'A personal digital garden created as a gift, combining responsive design, animation and a warm interactive atmosphere.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
    ],
    icon: Sprout,
    accent: 'lavender',
  },
  {
    name: 'Sentiment Chatbot',
    category: 'NLP / Conversational AI',
    question:
      'Can a machine understand the tone behind words?',
    description:
      'A conversational chatbot using machine learning to classify user sentiment and generate conversational responses.',
    technologies: [
      'Python',
      'TensorFlow',
      'PyTorch',
      'NLP',
    ],
    icon: MessageCircle,
    accent: 'peach',
  },
]

function Built() {
  const [activeProject, setActiveProject] =
    useState<string | null>(null)

  return (
    <section id="built" className="section built-section">
      <div className="section-container">
        <div className="section-eyebrow">
          THINGS I'VE BUILT
        </div>

        <div className="built-heading">
          <h2>
            A collection of
            <br />
            <i>curiosity.</i>
          </h2>

          <p>
            Serious projects, strange experiments,
            and everything in between.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isOpen = activeProject === project.name

            return (
              <motion.article
                key={project.name}
                className={`project-item project-${project.accent} ${
                  isOpen ? 'project-item-open' : ''
                }`}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.04,
                }}
                layout
              >
                <motion.button
                  type="button"
                  className="project-trigger"
                  onClick={() =>
                    setActiveProject(
                      isOpen ? null : project.name,
                    )
                  }
                  whileTap={{
                    scale: 0.985,
                  }}
                >
                  <motion.div
                    className="project-icon"
                    animate={{
                      rotate: isOpen ? 8 : 0,
                      scale: isOpen ? 1.08 : 1,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 18,
                    }}
                  >
                    <Icon size={23} strokeWidth={1.5} />
                  </motion.div>

                  <div className="project-title">
                    <span>{project.category}</span>

                    <motion.h3
                      animate={{
                        x: isOpen ? 6 : 0,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 220,
                        damping: 20,
                      }}
                    >
                      {project.name}
                    </motion.h3>
                  </div>

                  <motion.span
                    className={`project-plus ${
                      isOpen ? 'project-plus-open' : ''
                    }`}
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                    }}
                  >
                    +
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="project-expanded"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.25,
                        },
                      }}
                    >
                      <motion.div
                        className="project-expanded-inner"
                        initial={{
                          y: -18,
                        }}
                        animate={{
                          y: 0,
                        }}
                        exit={{
                          y: -10,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div>
                          <p className="project-question">
                            {project.question}
                          </p>

                          <p className="project-description">
                            {project.description}
                          </p>
                        </div>

                        <motion.div
                          className="project-technologies"
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.15,
                            duration: 0.35,
                          }}
                        >
                          {project.technologies.map(
                            (technology, techIndex) => (
                              <motion.span
                                key={technology}
                                initial={{
                                  opacity: 0,
                                  y: 8,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                transition={{
                                  delay:
                                    0.12 +
                                    techIndex * 0.05,
                                  duration: 0.3,
                                }}
                              >
                                {technology}
                              </motion.span>
                            ),
                          )}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Built