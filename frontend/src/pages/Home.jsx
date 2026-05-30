import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Photo from '../components/Photo'
import { useRevealAll } from '../hooks/useReveal'

/* Unsplash IDs — Mediterranean / Italy */
const PHOTOS = {
  hero      : 'photo-1505118380757-91f5f5632de0', // sea panoramic
  about     : 'photo-1560185893-a55cbc8c57e8',    // Italian terrace
  aboutSmall: 'photo-1571770095004-6b61b1cf308a', // breakfast detail
  room1     : 'photo-1551882547-ff40c63fe5fa',    // room sea view
  room2     : 'photo-1566073771259-6a8506099945', // room interior
  room3     : 'photo-1520250497591-112f2f40a3f4', // suite
  cta       : 'photo-1552832230-c0197dd311b5',    // Procida island
}

export default function Home() {
  useRevealAll()

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative flex items-center overflow-hidden" style={{ height: '100svh', minHeight: 600 }}>
        {/* Full-bleed photo */}
        <div className="absolute inset-0">
          <Photo id={PHOTOS.hero} alt="Golfo di Napoli visto da Monte di Procida" scene="scene-sea" />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(14,29,40,0.3) 0%, rgba(14,29,40,0.55) 100%)' }} />
        </div>

        {/* Content — left aligned, breathing room */}
        <div className="container relative z-10 pt-20">
          <p className="label label--gold mb-6 reveal">Monte di Procida · Golfo di Napoli</p>

          <h1 className="display-hero reveal d1" style={{ color: '#fff', maxWidth: 820 }}>
            Il Golfo di Napoli<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.8)' }}>
              da una prospettiva autentica
            </em>
          </h1>

          <p className="body-lg reveal d2" style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 440, marginTop: 24, marginBottom: 44 }}>
            B&B rustico a Monte di Procida — tranquillità, mare e sapori del Sud.
          </p>

          <div className="flex flex-wrap gap-4 reveal d3">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer"
              className="btn btn--ocean">
              Controlla disponibilità
            </a>
            <Link to="/camere" className="btn btn--ghost">
              Scopri le camere
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div style={{ width: 1, height: 56, background: 'rgba(255,255,255,0.3)' }} />
            <p style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
              Scorri
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INTRO NUMBERS
      ══════════════════════════════════════ */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { num: '15+',    label: 'Anni di ospitalità' },
              { num: '3',      label: 'Camere con vista' },
              { num: '4.9 ★', label: 'Media recensioni' },
              { num: '10 min', label: 'Dal porto di Pozzuoli' },
            ].map(({ num, label }, i) => (
              <div key={label} className="reveal text-center" style={{
                padding: '52px 32px',
                borderRight: i < 3 ? '1px solid var(--c-border)' : 'none',
              }}>
                <p className="display-lg" style={{ color: 'var(--c-ocean)', marginBottom: 6 }}>{num}</p>
                <p className="label label--muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT
      ══════════════════════════════════════ */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photos composition */}
            <div className="reveal relative about-photo-panel">
              <div className="photo absolute rounded-lg overflow-hidden"
                style={{ inset: '0 60px 60px 0', boxShadow: 'var(--shadow-lg)' }}>
                <Photo id={PHOTOS.about} alt="Terrazza di Villa Lamberti" scene="scene-interior" />
              </div>
              <div className="photo absolute rounded-lg overflow-hidden border-4 border-white about-small-photo"
                style={{ width: 200, height: 200, bottom: 0, right: 0, boxShadow: 'var(--shadow-md)' }}>
                <Photo id={PHOTOS.aboutSmall} alt="Colazione artigianale" scene="scene-golden" />
              </div>
              {/* Year badge */}
              <div className="absolute rounded-lg flex flex-col items-center justify-center text-center about-year-badge"
                style={{ top: 24, left: -16, width: 90, height: 90, background: 'var(--c-gold)', boxShadow: '0 8px 24px rgba(184,148,74,0.35)' }}>
                <span style={{ fontFamily: 'var(--ff-display)', fontSize: '1.7rem', fontWeight: 500, color: '#fff', lineHeight: 1 }}>
                  2008
                </span>
                <span style={{ fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginTop: 3 }}>
                  da allora
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="reveal d2">
              <p className="label mb-4">Chi siamo</p>
              <h2 className="display-xl" style={{ color: 'var(--c-text)', marginBottom: 8 }}>
                Una famiglia,
              </h2>
              <h2 className="display-xl italic" style={{ color: 'var(--c-ocean)', marginBottom: 24 }}>
                una vista sul Golfo
              </h2>
              <span className="rule" />

              <p className="body-lg mt-6 mb-4">
                Villa Lamberti è la nostra casa. Da oltre quindici anni accogliamo ospiti da tutta Europa in questa piccola perla affacciata sul Golfo, tra Procida e i Campi Flegrei.
              </p>
              <p className="body-lg mb-10">
                Non troverai hall impersonali. Troverai noi: una famiglia campana, qualche ricetta di nonna, il profumo del caffè alle sette e mezza e consigli che non trovi su TripAdvisor.
              </p>

              <Link to="/contatti" className="btn-link">
                Scrivici
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FULL-BLEED PHOTO BREAK
      ══════════════════════════════════════ */}
      <div className="reveal" style={{ height: '55vh', minHeight: 320, overflow: 'hidden' }}>
        <Photo id={PHOTOS.cta} alt="Isola di Procida vista dal mare" scene="scene-sea" className="transition-transform duration-[8s] hover:scale-105" />
      </div>

      {/* ══════════════════════════════════════
          FEATURES
      ══════════════════════════════════════ */}
      <section className="section--sm section--bg">
        <div className="container">
          <div className="s-header s-header--center reveal">
            <p className="label">Perché Villa Lamberti</p>
            <h2 className="display-lg mt-2" style={{ color: 'var(--c-text)' }}>
              L'ospitalità che non dimentichi
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                n: '01',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 10 Q5 7 8 10 Q11 13 14 10 Q17 7 20 10 Q21.5 8.5 22 10"/>
                    <path d="M2 16 Q5 13 8 16 Q11 19 14 16 Q17 13 20 16 Q21.5 14.5 22 16"/>
                  </svg>
                ),
                title: 'Tranquillità vera',
                body: 'Lontano dal turismo di massa. Silenzio, aria di mare, notti stellate sul Golfo.',
              },
              {
                n: '02',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                title: 'Posizione strategica',
                body: 'Procida a 15 min, Ischia a 20, Napoli a 30 min. Al centro di tutto.',
              },
              {
                n: '03',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
                    <line x1="6" y1="1" x2="6" y2="4"/>
                    <line x1="10" y1="1" x2="10" y2="4"/>
                    <line x1="14" y1="1" x2="14" y2="4"/>
                  </svg>
                ),
                title: 'Colazione artigianale',
                body: 'Prodotti locali, dolci fatti in casa. Servita in terrazza con vista sul mare.',
              },
              {
                n: '04',
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                ),
                title: 'Ospitalità autentica',
                body: 'Consigli veri, non brochure. Ti trattiamo come ospiti di casa nostra.',
              },
            ].map(({ n, icon, title, body }, i) => (
              <div key={n} className={`reveal d${i + 1} card card--accent`} style={{ padding: '28px 28px 32px' }}>
                <div className="flex items-start justify-between" style={{ marginBottom: 24 }}>
                  <div className="icon-box">{icon}</div>
                  <span className="label label--muted">{n}</span>
                </div>
                <h3 className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 8 }}>{title}</h3>
                <p className="body-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ROOMS PREVIEW
      ══════════════════════════════════════ */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <p className="label mb-2">Le nostre camere</p>
              <h2 className="display-lg" style={{ color: 'var(--c-text)' }}>Dove riposare</h2>
            </div>
            <Link to="/camere" className="btn-link hidden md:inline-flex">
              Tutte le camere
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { photo: PHOTOS.room1, scene: 'scene-sea',      title: 'Camera Panoramica',   badge: 'Vista Golfo',     desc: 'Terrazzino privato con vista diretta sul mare.' },
              { photo: PHOTOS.room2, scene: 'scene-interior', title: 'Camera del Giardino', badge: 'Tranquilla',      desc: 'Affacciata sul giardino fiorito. Silenziosa e raccolta.' },
              { photo: PHOTOS.room3, scene: 'scene-interior', title: 'Suite Familiare',      badge: 'Fino a 4 ospiti', desc: 'Zona living separata, ideale per famiglie.' },
            ].map(({ photo, scene, title, badge, desc }, i) => (
              <div key={title} className={`reveal d${i + 1} card card--photo group overflow-hidden`}>
                <div className="photo overflow-hidden relative" style={{ height: 280 }}>
                  <Photo id={photo} alt={title} scene={scene} />
                  <div className="photo-gradient" />
                  <span className="pill absolute bottom-4 left-4" style={{
                    background: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(10px)',
                    color: 'var(--c-ocean)',
                    fontWeight: 600,
                    fontSize: '0.72rem',
                    letterSpacing: '0.06em',
                  }}>{badge}</span>
                </div>
                <div style={{ padding: '20px 24px 28px' }}>
                  <h3 className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 6 }}>{title}</h3>
                  <p className="body-sm" style={{ marginBottom: 20 }}>{desc}</p>
                  <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer"
                    className="btn-link text-sm">
                    Prenota
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7.5 2.5L12 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          QUOTE
      ══════════════════════════════════════ */}
      <section className="section--sm section--gold">
        <div className="container--narrow text-center reveal">
          <span className="rule rule--center rule--gold" />
          <blockquote style={{ fontFamily: 'var(--ff-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', lineHeight: 1.45, color: 'var(--c-text)', margin: '28px 0' }}>
            "Non è solo un posto dove dormire. È il luogo da cui si capisce perché il Sud italiano è il posto più bello del mondo."
          </blockquote>
          <span className="rule rule--center rule--gold" />
          <p className="label label--muted mt-5">Marco R. — Milano · Booking.com</p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DISTANCES
      ══════════════════════════════════════ */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="label mb-4">Dove siamo</p>
              <h2 className="display-lg" style={{ color: 'var(--c-text)', marginBottom: 8 }}>
                Al centro di tutto,
              </h2>
              <h2 className="display-lg italic" style={{ color: 'var(--c-ocean)', marginBottom: 24 }}>
                fuori dal caos
              </h2>
              <span className="rule" />

              <p className="body-lg mt-6 mb-8">
                Monte di Procida è il punto di partenza ideale per esplorare il Golfo. Isole, vulcani, storia e pesce fresco — tutto a portata di traghetto o auto.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {[
                  { dest: 'Procida',  time: '15 min', via: 'traghetto' },
                  { dest: 'Ischia',   time: '20 min', via: 'traghetto' },
                  { dest: 'Napoli',   time: '30 min', via: 'auto · treno' },
                  { dest: 'Pozzuoli', time: '10 min', via: 'auto' },
                ].map(({ dest, time, via }) => (
                  <div key={dest} className="card" style={{ background: 'var(--c-ocean-l)', border: '1px solid rgba(30,91,122,0.12)', padding: '18px 20px 20px' }}>
                    <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
                      <p style={{ fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.04em', color: 'var(--c-text)' }}>{dest}</p>
                      <span className="label label--muted">{via}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--ff-display)', fontSize: '1.9rem', fontWeight: 400, color: 'var(--c-ocean)', lineHeight: 1 }}>{time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal d2 rounded-lg overflow-hidden" style={{ height: 440, boxShadow: 'var(--shadow-lg)' }}>
              <iframe
                title="Mappa Villa Lamberti"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12199.27!2d14.0567!3d40.7889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09ee1e7a2f43%3A0x1d9cf3f0f3e5e8e2!2sMonte%20di%20Procida%2C%20NA!5e0!3m2!1sit!2sit!4v1"
                className="w-full h-full border-0"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          REVIEWS
      ══════════════════════════════════════ */}
      <section className="section--sm section--bg">
        <div className="container">
          <div className="s-header s-header--center reveal">
            <p className="label">Recensioni</p>
            <h2 className="display-lg mt-2" style={{ color: 'var(--c-text)' }}>Cosa dicono gli ospiti</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: 'Posto incantevole. La vista sul Golfo dalla terrazza al mattino è qualcosa che non dimenticheremo. Colazione fantastica con prodotti genuini.', name: 'Marco R.', from: 'Milano · Booking.com' },
              { text: 'Accoglienza calorosa, camera pulitissima. I proprietari ci hanno dato consigli preziosi per visitare Procida — come avere un amico del posto.', name: 'Sophie & Luca', from: 'Parigi · Airbnb' },
              { text: 'Il B&B perfetto per scoprire il Golfo lontano dalla confusione. Ci sentiamo già di casa. Torneremo sicuramente.', name: 'Anna T.', from: 'Roma · Google' },
            ].map(({ text, name, from }, i) => (
              <div key={name} className={`reveal d${i + 1} card card--review`} style={{ padding: '32px 28px 28px' }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="var(--c-gold)">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p style={{
                  fontFamily: 'var(--ff-display)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '1.08rem',
                  lineHeight: 1.8,
                  color: 'var(--c-text)',
                  marginBottom: 24,
                }}>
                  "{text}"
                </p>
                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'var(--c-ocean-l)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--ff-display)', fontSize: '1rem', fontWeight: 500, color: 'var(--c-ocean)',
                    flexShrink: 0,
                  }}>
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--c-text)', lineHeight: 1.3 }}>{name}</p>
                    <p className="body-sm" style={{ fontSize: '0.78rem' }}>{from}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="relative section--sm section--dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Photo id={PHOTOS.hero} alt="" scene="scene-sea" />
        </div>
        <div className="container--narrow text-center relative z-10 reveal">
          <p className="label label--gold mb-4">Inizia il tuo soggiorno</p>
          <h2 className="display-xl" style={{ color: '#fff', marginBottom: 16 }}>
            Pronto a vivere il Golfo?
          </h2>
          <p className="body-lg mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Controlla la disponibilità o scrivici su WhatsApp — rispondiamo entro poche ore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer"
              className="btn btn--white">
              Controlla disponibilità
            </a>
            <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer"
              className="btn btn--wa">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
