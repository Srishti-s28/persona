import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function Playground() {
  const gardenRef = useRef<HTMLDivElement>(null)

  const [flowers, setFlowers] = useState<
    { x: number; y: number; id: number }[]
  >([])

  const [jarvisAwake, setJarvisAwake] =
    useState(false)

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      if (!gardenRef.current) return

      const rect = gardenRef.current.getBoundingClientRect()

      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      ) {
        return
      }

      const x =
        ((event.clientX - rect.left) / rect.width) * 100

      const y =
        ((event.clientY - rect.top) / rect.height) * 100

      setFlowers((current) => [
        ...current.slice(-10),
        {
          x,
          y,
          id: Date.now() + Math.random(),
        },
      ])
    }

    window.addEventListener('mousemove', handleMove)

    return () =>
      window.removeEventListener(
        'mousemove',
        handleMove,
      )
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
              <small>move around</small>
            </div>

            <div className="playground-ground">
              <div className="playground-sun" />

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
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                >
                  <i />
                  <i />
                  <i />
                  <i />
                  <b />
                </motion.span>
              ))}

              <div className="playground-hill" />
              <div className="playground-hill playground-hill-two" />

              <div className="playground-flower-stem">
                <span />
                <b />
              </div>
            </div>
          </div>

          <div className="playground-jarvis">
            <div className="playground-jarvis-header">
              <span>JARVIS</span>
              <small>local intelligence</small>
            </div>

            <div className="jarvis-playground-core">
              <motion.div
                className="jarvis-playground-orbit"
                animate={{
                  rotate: jarvisAwake ? 360 : 0,
                }}
                transition={{
                  duration: 8,
                  repeat: jarvisAwake
                    ? Infinity
                    : 0,
                  ease: 'linear',
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
                whileTap={{ scale: 0.92 }}
              >
                <span />
              </motion.button>

              <span className="jarvis-playground-status">
                {jarvisAwake
                  ? 'AWAKE'
                  : 'WAKE ME'}
              </span>
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