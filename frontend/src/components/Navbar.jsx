import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/camere',            label: 'Camere' },
  { to: '/territorio',        label: 'Territorio' },
  { to: '/colazione',         label: 'Colazione' },
  { to: '/come-raggiungerci', label: 'Come Raggiungerci' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    fn()
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none">
            <span className="nav__logo-name">Villa Lamberti</span>
            <span className="nav__logo-sub">Monte di Procida</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav__link ${pathname === to ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
            <Link to="/contatti" className="btn btn--ocean" style={{ padding: '10px 24px', fontSize: '0.75rem' }}>
              Prenota
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Apri menu"
          >
            <span className="block w-6 h-px rounded-full transition-colors duration-300"
              style={{ background: scrolled ? 'var(--c-text)' : '#fff' }} />
            <span className="block w-6 h-px rounded-full transition-colors duration-300"
              style={{ background: scrolled ? 'var(--c-text)' : '#fff' }} />
            <span className="block w-4 h-px rounded-full transition-colors duration-300"
              style={{ background: scrolled ? 'var(--c-text)' : '#fff' }} />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        className="fixed inset-0 z-[200] flex flex-col transition-all duration-500"
        style={{
          background: '#0e1d28',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
        }}
      >
        <div className="container flex items-center justify-between py-6">
          <span className="nav__logo-name" style={{ color: '#fff' }}>Villa Lamberti</span>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '1.3rem' }}
            aria-label="Chiudi"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col items-start container gap-2 mt-8">
          {[{ to: '/', label: 'Home' }, ...NAV_LINKS, { to: '/contatti', label: 'Contatti' }].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="display-lg italic py-3 transition-colors"
              style={{ color: pathname === to ? 'var(--c-gold)' : 'rgba(255,255,255,0.85)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = pathname === to ? 'var(--c-gold)' : 'rgba(255,255,255,0.85)'}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="container mt-auto mb-10">
          <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer"
            className="btn btn--wa">
            Scrivici su WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
