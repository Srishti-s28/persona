import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const navItems = [
  { label: 'About', id: 'identity' },
  { label: 'Experience', id: 'systems' },
  { label: 'Work', id: 'built' },
  { label: 'Stack', id: 'stack' },
  { label: 'Playground', id: 'playground' },
  { label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [lightMode, setLightMode] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('persona-theme')

    if (savedTheme === 'dark') {
      setLightMode(false)
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = !lightMode

    setLightMode(nextTheme)

    if (nextTheme) {
      document.documentElement.classList.remove('dark-mode')
      localStorage.setItem('persona-theme', 'light')
    } else {
      document.documentElement.classList.add('dark-mode')
      localStorage.setItem('persona-theme', 'dark')
    }
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-inner">
        <a
          href="#top"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            <span />
            <span />
            <span />
          </span>

          <span className="brand-name">
            SRISHTI
          </span>
        </a>

        <div className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              lightMode
                ? 'Switch to dark mode'
                : 'Switch to light mode'
            }
          >
            {lightMode ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu ${
          open ? 'mobile-menu-open' : ''
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}

        <button
          type="button"
          className="mobile-theme-toggle"
          onClick={toggleTheme}
        >
          {lightMode ? 'Switch to dark' : 'Switch to light'}

          {lightMode ? (
            <Moon size={17} />
          ) : (
            <Sun size={17} />
          )}
        </button>
      </div>
    </header>
  )
}

export default Navbar