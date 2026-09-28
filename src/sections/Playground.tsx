import { motion } from 'framer-motion'

function Playground() {
  return (
    <section id="playground" className="section playground-section">
      <div className="playground-atmosphere" />

      <div className="section-container">
        <div className="section-label">
          <span className="section-number">05</span>
          <span className="section-line" />
          <span>Playground</span>
          <i>where curiosity ends</i>
        </div>

        <motion.div
          className="playground-intro"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div>
            <span>NOT EVERYTHING NEEDS A REASON.</span>

            <h2>
              Where curiosity
              <br />
              <i>gets weird.</i>
            </h2>
          </div>

          <p>
            Small experiments, personal projects and ideas that
            started with “what if?”
          </p>
        </motion.div>

        <div className="playground-experiments">
          <motion.article
            className="experiment experiment-bloom"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="experiment-visual">
              <div className="bloom-orbit bloom-orbit-one" />
              <div className="bloom-orbit bloom-orbit-two" />

              <div className="playground-flower">
                <span />
                <span />
                <span />
                <span />
                <b />
              </div>

              <div className="bloom-cursor">
                <span />
              </div>
            </div>

            <div className="experiment-info">
              <div>
                <span>01 · COMPUTER VISION</span>
                <h3>BloomTrace</h3>
              </div>

              <p>
                Move your hand. Leave a trail. Watch flowers grow
                from the movement of your fingertips.
              </p>

              <small>
                React · TypeScript · MediaPipe · Canvas
              </small>
            </div>
          </motion.article>

          <motion.article
            className="experiment experiment-jarvis"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <div className="experiment-visual">
              <div className="jarvis-rings">
                <span />
                <span />
                <span />
              </div>

              <div className="jarvis-core">
                <strong>J</strong>
                <small>LISTENING</small>
              </div>

              <div className="jarvis-bars">
                {Array.from({ length: 13 }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>

              <div className="jarvis-status">
                <span />
                LOCAL · OLLAMA
              </div>
            </div>

            <div className="experiment-info">
              <div>
                <span>02 · PERSONAL AI</span>
                <h3>JARVIS</h3>
              </div>

              <p>
                A local AI assistant exploring conversation, voice,
                memory, scheduling and eventually computer control.
              </p>

              <small>
                Python · Ollama · LLMs · Automation
              </small>
            </div>
          </motion.article>

          <motion.article
            className="experiment experiment-garden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            <div className="experiment-visual">
              <div className="garden-sky-moon" />

              <div className="garden-stars">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="playground-garden-flower garden-one">
                <i />
                <i />
                <i />
                <i />
                <b />
              </div>

              <div className="playground-garden-flower garden-two">
                <i />
                <i />
                <i />
                <i />
                <b />
              </div>

              <div className="garden-horizon" />
            </div>

            <div className="experiment-info">
              <div>
                <span>03 · PERSONAL WEB</span>
                <h3>Mum's Little Garden</h3>
              </div>

              <p>
                A little digital garden built as something personal,
                playful and deliberately different from a normal
                website.
              </p>

              <small>
                React · TypeScript · Tailwind · Vite · Netlify
              </small>
            </div>
          </motion.article>
        </div>

        <div className="playground-bottom">
          <span>THREE SMALL WORLDS</span>
          <span>BUILT FOR THE SAKE OF BUILDING</span>
        </div>
      </div>
    </section>
  )
}

export default Playground