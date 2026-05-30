import { Link } from 'react-router-dom'

const NAV = [
  { to: '/',                  label: 'Home' },
  { to: '/camere',            label: 'Camere' },
  { to: '/territorio',        label: 'Territorio' },
  { to: '/colazione',         label: 'Colazione' },
  { to: '/come-raggiungerci', label: 'Come Raggiungerci' },
  { to: '/contatti',          label: 'Contatti' },
]

const CONTACTS = [
  {
    icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0',
    text: 'Via Panoramica\nMonte di Procida (NA)',
    href: null,
  },
  {
    icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z',
    text: '+39 333 123 4567',
    href: 'tel:+393331234567',
  },
  {
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
    text: 'info@villalamberti.it',
    href: 'mailto:info@villalamberti.it',
  },
]

const SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2z',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/393331234567',
    icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
  },
]

const FT_MUTED  = 'rgba(255,255,255,0.38)'
const FT_LABEL  = 'rgba(255,255,255,0.18)'
const FT_BORDER = 'rgba(255,255,255,0.08)'

function FooterLabel({ children }) {
  return (
    <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: FT_LABEL, marginBottom: 22 }}>
      {children}
    </p>
  )
}

export default function Footer() {
  return (
    <footer style={{ background: '#091520' }}>

      {/* Gold gradient rule */}
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent 0%, var(--c-gold) 40%, var(--c-gold) 60%, transparent 100%)' }} />

      {/* ── Main body ── */}
      <div className="container" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <div className="footer-grid">

          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: 20 }}>
              <p style={{ fontFamily: 'var(--ff-display)', fontSize: '2.1rem', fontWeight: 400, color: '#fff', lineHeight: 1 }}>
                Villa Lamberti
              </p>
              <p style={{ fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--c-gold)', marginTop: 6 }}>
                B&B · Monte di Procida · Golfo di Napoli
              </p>
            </Link>

            <div style={{ width: 36, height: 1, background: 'var(--c-gold)', marginBottom: 20 }} />

            <p style={{ fontFamily: 'var(--ff-display)', fontStyle: 'italic', fontSize: '1.05rem', color: FT_MUTED, lineHeight: 1.9, maxWidth: 300 }}>
              La luce e il silenzio del Golfo di Napoli.
              Un B&B di famiglia, genuino come il caffè del mattino.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10, marginTop: 32 }}>
              {SOCIAL.map(({ label, href, icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  style={{ width: 40, height: 40, borderRadius: 'var(--r-sm)', border: `1px solid ${FT_BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: FT_MUTED, transition: 'all 0.25s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--c-gold)'; e.currentTarget.style.color = 'var(--c-gold)'; e.currentTarget.style.background = 'rgba(184,148,74,0.08)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = FT_BORDER; e.currentTarget.style.color = FT_MUTED; e.currentTarget.style.background = 'transparent' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Pagine */}
          <div>
            <FooterLabel>Pagine</FooterLabel>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to}
                    style={{ fontSize: '0.85rem', color: FT_MUTED, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = FT_MUTED}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <FooterLabel>Contatti</FooterLabel>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {CONTACTS.map(({ icon, text, href }) => (
                <li key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 'var(--r-sm)', background: 'rgba(255,255,255,0.05)', border: `1px solid ${FT_BORDER}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={icon} />
                    </svg>
                  </div>
                  {href
                    ? <a href={href} style={{ fontSize: '0.82rem', color: FT_MUTED, lineHeight: 1.65, transition: 'color 0.2s', whiteSpace: 'pre-line' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={e => e.currentTarget.style.color = FT_MUTED}>{text}</a>
                    : <span style={{ fontSize: '0.82rem', color: FT_MUTED, lineHeight: 1.65, whiteSpace: 'pre-line' }}>{text}</span>
                  }
                </li>
              ))}
            </ul>
          </div>

          {/* Prenota card */}
          <div style={{ background: 'rgba(30,91,122,0.18)', border: '1px solid rgba(30,91,122,0.35)', borderRadius: 'var(--r-lg)', padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--c-gold)', marginBottom: 14 }}>
              Prenotazione diretta
            </p>
            <p style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', color: '#fff', lineHeight: 1.25, marginBottom: 10 }}>
              Senza commissioni.<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.65)' }}>Risposta in poche ore.</em>
            </p>
            <p style={{ fontSize: '0.78rem', color: FT_MUTED, lineHeight: 1.7, marginBottom: 28 }}>
              Prenota direttamente con noi e risparmia le commissioni delle piattaforme.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto' }}>
              <Link to="/prenota" className="btn btn--ocean" style={{ justifyContent: 'center', fontSize: '0.75rem', padding: '13px 20px' }}>
                Prenota ora
              </Link>
              <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer"
                className="btn btn--wa" style={{ justifyContent: 'center', fontSize: '0.75rem', padding: '13px 20px' }}>
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: `1px solid ${FT_BORDER}` }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, padding: '20px var(--sp-6)' }}>
          <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.22)' }}>
            © {new Date().getFullYear()} Villa Lamberti · B&B Monte di Procida. Tutti i diritti riservati.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Cookie Policy'].map(t => (
              <a key={t} href="#"
                style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.22)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.22)'}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
