import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const navItems = [
  { label: 'Identity', id: 'identity' },
  { label: 'Systems', id: 'systems' },
  { label: 'Built', id: 'built' },
  { label: 'Stack', id: 'stack' },
  { label: 'Playground', id: 'playground' },
  { label: 'Signal', id: 'contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [lightMode, setLightMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('persona-theme')

    if (savedTheme === 'light') {
      setLightMode(true)
      document.documentElement.classList.add('light-mode')
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
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
      document.documentElement.classList.add('light-mode')
      localStorage.setItem('persona-theme', 'light')
    } else {
      document.documentElement.classList.remove('light-mode')
      localStorage.setItem('persona-theme', 'dark')
    }
  }

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-inner">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-dot" />
          SRISHTI
        </a>

        <div className="desktop-nav">
          {navItems.map((item, index) => (
            <a key={item.id} href={`#${item.id}`}>
              <span>0{index + 1}</span>
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
            title={
              lightMode
                ? 'Switch to dark mode'
                : 'Switch to light mode'
            }
          >
            {lightMode ? (
              <Sun size={19} strokeWidth={2.1} />
            ) : (
              <Moon size={19} strokeWidth={2.1} />
            )}
          </button>

          <div className="nav-signature">
            <span>software</span>
            <i>+</i>
            <span>curiosity</span>
          </div>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
        {navItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={closeMenu}
          >
            <span>{item.label}</span>
            <small>0{index + 1}</small>
          </a>
        ))}

        <button
          type="button"
          className="mobile-theme-toggle"
          onClick={toggleTheme}
        >
          <span>
            {lightMode ? 'SWITCH TO DARK' : 'SWITCH TO LIGHT'}
          </span>

          {lightMode ? (
            <Sun size={18} strokeWidth={2} />
          ) : (
            <Moon size={18} strokeWidth={2} />
          )}
        </button>

        <div className="mobile-menu-footer">
          <span className="status-dot" />
          Software Engineer · London
        </div>
      </div>
    </header>
  )
}

export default Navbar