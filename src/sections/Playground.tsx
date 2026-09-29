import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Flower = {
  x: number
  y: number
  id: number
  size: number
  rotation: number
}

type Particle = {
  x: number
  y: number
  id: number
}

function Playground() {
  const gardenRef = useRef<HTMLDivElement>(null)

  const [flowers, setFlowers] = useState<Flower[]>([])
  const [particles, setParticles] = useState<Particle[]>([])

  const [gardenCursor, setGardenCursor] = useState({
    x: 50,
    y: 50,
    visible: false,
  })

  const [jarvisAwake, setJarvisAwake] =
    useState(false)

  const lastSpawn = useRef(0)

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!gardenRef.current) return

      const rect =
        gardenRef.current.getBoundingClientRect()

      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        setGardenCursor((current) => ({
          ...current,
          visible: false,
        }))

        return
      }

      const x =
        ((event.clientX - rect.left) / rect.width) * 100

      const y =
        ((event.clientY - rect.top) / rect.height) * 100

      setGardenCursor({
        x,
        y,
        visible: true,
      })

      const now = Date.now()

      if (now - lastSpawn.current > 180) {
        lastSpawn.current = now

        setFlowers((current) => [
          ...current.slice(-9),
          {
            x,
            y,
            id: now + Math.random(),
            size: 0.7 + Math.random() * 0.7,
            rotation: -20 + Math.random() * 40,
          },
        ])

        setParticles((current) => [
          ...current.slice(-14),
          {
            x: x + (Math.random() - 0.5) * 5,
            y: y + (Math.random() - 0.5) * 5,
            id: now + Math.random(),
          },
        ])
      }
    }

    const handleLeave = () => {
      setGardenCursor((current) => ({
        ...current,
        visible: false,
      }))
    }

    window.addEventListener('mousemove', handleMove)
    gardenRef.current?.addEventListener(
      'mouseleave',
      handleLeave,
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMove,
      )

      gardenRef.current?.removeEventListener(
        'mouseleave',
        handleLeave,
      )
    }
  }, [])

  return (
    <section
      id="playground"
      className="section playground-section"
    >
      <div className="section-container">
        <div className="section-eyebrow">
          THE PLAYGROUND
        </div>

        <div className="playground-heading">
          <h2>
            Just because
            <br />
            <i>I could.</i>
          </h2>

          <p>
            Small experiments built because sometimes
            the best reason to build something is simply
            wanting to see what happens.
          </p>
        </div>

        <div className="playground-grid">
          <div
            ref={gardenRef}
            className="playground-garden"
          >
            <div className="playground-garden-header">
              <span>BloomTrace</span>
              <small>
                move around
              </small>
            </div>

            <div className="playground-ground">
              <div
                className="playground-cursor-glow"
                style={{
                  left: `${gardenCursor.x}%`,
                  top: `${gardenCursor.y}%`,
                  opacity:
                    gardenCursor.visible ? 1 : 0,
                }}
              />

              <div className="playground-sun" />

              {particles.map((particle) => (
                <motion.span
                  key={particle.id}
                  className="garden-particle"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                  }}
                  initial={{
                    scale: 0,
                    opacity: 0.8,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 0,
                    y: -18,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {flowers.map((flower) => (
                <motion.span
                  key={flower.id}
                  className="cursor-flower"
                  style={{
                    left: `${flower.x}%`,
                    top: `${flower.y}%`,
                  }}
                  initial={{
                    scale: 0,
                    opacity: 0,
                    rotate: flower.rotation,
                  }}
                  animate={{
                    scale: flower.size,
                    opacity: 1,
                    rotate: flower.rotation,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <i />
                  <i />
                  <i />
                  <i />
                  <b />
                </motion.span>
              ))}

              <motion.div
                className="playground-flower-stem"
                animate={{
                  x: gardenCursor.visible
                    ? (gardenCursor.x - 50) * 0.08
                    : 0,
                  rotate: gardenCursor.visible
                    ? (gardenCursor.x - 50) * 0.04
                    : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 15,
                }}
              >
                <span />
                <b />
              </motion.div>

              <div className="playground-hill" />

              <div className="playground-hill playground-hill-two" />
            </div>
          </div>

          <div className="playground-jarvis">
            <div className="playground-jarvis-header">
              <span>JARVIS</span>

              <small>
                local intelligence
              </small>
            </div>

            <div className="jarvis-playground-core">
              <motion.div
                className="jarvis-playground-orbit"
                animate={{
                  rotate: jarvisAwake ? 360 : 0,
                  scale: jarvisAwake ? 1.12 : 1,
                }}
                transition={{
                  rotate: {
                    duration: 8,
                    repeat: jarvisAwake
                      ? Infinity
                      : 0,
                    ease: 'linear',
                  },
                  scale: {
                    duration: 0.5,
                  },
                }}
              />

              <motion.button
                type="button"
                className={`jarvis-playground-button ${
                  jarvisAwake
                    ? 'jarvis-awake'
                    : ''
                }`}
                onClick={() =>
                  setJarvisAwake(!jarvisAwake)
                }
                whileTap={{
                  scale: 0.92,
                }}
                whileHover={{
                  scale: 1.06,
                }}
              >
                <span />
              </motion.button>

              <motion.span
                className="jarvis-playground-status"
                animate={{
                  opacity: jarvisAwake ? 1 : 0.55,
                }}
              >
                {jarvisAwake
                  ? 'AWAKE'
                  : 'WAKE ME'}
              </motion.span>
            </div>

            <div className="jarvis-playground-bars">
              {[1, 2, 3, 4, 5, 6, 7].map(
                (bar) => (
                  <span
                    key={bar}
                    style={{
                      animationDelay: `${
                        bar * 0.08
                      }s`,
                    }}
                  />
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Playground