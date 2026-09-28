import { motion } from 'framer-motion'
import { ArrowUpRight, Flower2 } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-glow" />

      <div className="contact-flower">
        <Flower2 size={150} strokeWidth={0.5} />
      </div>

      <div className="section-container">
        <div className="section-label">
          <span className="section-number">06</span>
          <span className="section-line" />
          <span>Signal</span>
          <i>say hello</i>
        </div>

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1 }}
        >
          <span>If you're building something interesting</span>

          <h2>
            LET'S
            <br />
            <i>BUILD.</i>
          </h2>
        </motion.div>

        <div className="contact-grid">
          <div className="contact-copy">
            <p>
              Open to software engineering opportunities, interesting
              technical problems and projects worth building.
            </p>

            <a
              href="mailto:srishtimadan28@gmail.com"
              className="email-link"
            >
              <span>srishtimadan28@gmail.com</span>
              <ArrowUpRight size={18} strokeWidth={1.3} />
            </a>
          </div>

          <div className="social-links">
            <Social
              label="LinkedIn"
              href="https://www.linkedin.com/in/srishti-srishti-/"
            />

            <Social
              label="GitHub"
              href="https://github.com/Srishti-s28"
            />
          </div>
        </div>

        <footer className="site-footer">
          <span>© {new Date().getFullYear()} SRISHTI</span>

          <span>
            <i />
            SOFTWARE ENGINEER · LONDON, UK
          </span>

          <span>BUILT WITH CURIOSITY</span>
        </footer>
      </div>
    </section>
  )
}

function Social({
  label,
  href,
}: {
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
    >
      <span>{label}</span>
      <ArrowUpRight size={17} strokeWidth={1.3} />
    </a>
  )
}

export default Contact