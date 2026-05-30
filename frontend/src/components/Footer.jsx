import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#0e1d28', color: 'rgba(255,255,255,0.55)' }}>
      <div className="container">
        {/* Main grid */}
        <div
          className="grid gap-12 py-16"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
        >
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1" style={{ gridColumn: 'span 2' }}>
            <Link to="/">
              <p className="nav__logo-name" style={{ color: '#fff', fontFamily: 'var(--ff-display)', fontSize: '1.5rem' }}>
                Villa Lamberti
              </p>
              <p style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-gold)', marginTop: 2 }}>
                B&B · Monte di Procida
              </p>
            </Link>
            <p className="body-sm mt-5" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 260, lineHeight: 1.8 }}>
              La luce e il silenzio del Golfo di Napoli.
              Un B&B di famiglia, genuino come il caffè del mattino.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { label: 'Instagram', href: 'https://instagram.com' },
                { label: 'Facebook',  href: 'https://facebook.com' },
                { label: 'WhatsApp',  href: 'https://wa.me/393331234567' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold transition-colors px-3 py-1.5 rounded"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--c-gold)'; e.currentTarget.style.color = 'var(--c-gold)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="label mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>Pagine</p>
            <ul className="flex flex-col gap-3">
              {[
                { to: '/camere',            label: 'Camere' },
                { to: '/territorio',        label: 'Territorio' },
                { to: '/colazione',         label: 'Colazione' },
                { to: '/come-raggiungerci', label: 'Come Raggiungerci' },
                { to: '/contatti',          label: 'Contatti' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="body-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>Contatti</p>
            <ul className="flex flex-col gap-3 body-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <li>Via Panoramica<br />Monte di Procida (NA)</li>
              <li>
                <a href="tel:+393331234567"
                  onMouseEnter={e => e.currentTarget.style.color='#fff'}
                  onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.45)'}>
                  +39 333 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@villalamberti.it"
                  onMouseEnter={e => e.currentTarget.style.color='#fff'}
                  onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.45)'}>
                  info@villalamberti.it
                </a>
              </li>
            </ul>
          </div>

          {/* Book */}
          <div>
            <p className="label mb-5" style={{ color: 'rgba(255,255,255,0.25)' }}>Prenota</p>
            <ul className="flex flex-col gap-3 body-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
              <li>
                <Link to="/prenota"
                  onMouseEnter={e => e.currentTarget.style.color='var(--c-gold)'}
                  onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.45)'}>
                  Prenota direttamente →
                </Link>
              </li>
              <li>
                <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer"
                  onMouseEnter={e => e.currentTarget.style.color='var(--c-gold)'}
                  onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.45)'}>
                  WhatsApp →
                </a>
              </li>
              <li>
                <a href="https://www.airbnb.it" target="_blank" rel="noopener noreferrer"
                  onMouseEnter={e => e.currentTarget.style.color='var(--c-gold)'}
                  onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.45)'}>
                  Airbnb →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-6">
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Villa Lamberti. Tutti i diritti riservati.
          </p>
          <div className="flex gap-5">
            {['Privacy', 'Cookie'].map(t => (
              <a key={t} href="#"
                style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}
                onMouseEnter={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.3)'}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
