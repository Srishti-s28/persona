import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'

function Contact() {
  return (
    <section
      id="contact"
      className="section contact-section"
    >
      <div className="contact-flower">
        <span />
        <span />
        <span />
        <span />
        <b />
      </div>

      <div className="section-container">
        <div className="section-eyebrow">
          SAY HELLO
        </div>

        <motion.div
          className="contact-heading"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Let's build
            <br />
            <i>something.</i>
          </h2>

          <p>
            Have something interesting in mind?
            <br />
            I'd love to hear about it.
          </p>
        </motion.div>

        <div className="contact-content">
          <a
            className="contact-email"
            href="mailto:srishtimadan28@gmail.com"
          >
            <Mail size={20} strokeWidth={1.5} />

            <span>
              srishtimadan28@gmail.com
            </span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
            />
          </a>

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/srishti-srishti-/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-badge">in</span>
              LinkedIn
              <ArrowUpRight size={16} />
            </a>

            <a
              href="https://github.com/Srishti-s28"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-badge">GH</span>
              GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <footer className="site-footer">
          <span>SRISHTI</span>
          <span>BUILT WITH CURIOSITY</span>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </section>
  )
}

export default Contact