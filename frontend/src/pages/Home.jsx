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
      <section className="section--xs" style={{ background: '#fff', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '15+',    label: 'Anni di ospitalità' },
              { num: '3',      label: 'Camere con vista' },
              { num: '4.9 ★', label: 'Media recensioni' },
              { num: '10 min', label: 'Dal porto di Pozzuoli' },
            ].map(({ num, label }) => (
              <div key={label} className="reveal">
                <p className="display-md" style={{ color: 'var(--c-ocean)', marginBottom: 4 }}>{num}</p>
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
            <div className="reveal relative" style={{ height: 560 }}>
              <div className="photo absolute rounded-lg overflow-hidden"
                style={{ inset: '0 60px 60px 0', boxShadow: 'var(--shadow-lg)' }}>
                <Photo id={PHOTOS.about} alt="Terrazza di Villa Lamberti" scene="scene-interior" />
              </div>
              <div className="photo absolute rounded-lg overflow-hidden border-4 border-white"
                style={{ width: 200, height: 200, bottom: 0, right: 0, boxShadow: 'var(--shadow-md)' }}>
                <Photo id={PHOTOS.aboutSmall} alt="Colazione artigianale" scene="scene-golden" />
              </div>
              {/* Year badge */}
              <div className="absolute rounded-lg flex flex-col items-center justify-center text-center"
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: '01',
                title: 'Tranquillità vera',
                body: 'Lontano dal turismo di massa. Silenzio, aria di mare, notti stellate sul Golfo.',
              },
              {
                n: '02',
                title: 'Posizione strategica',
                body: 'Procida a 15 min, Ischia a 20, Napoli a 30 min. Al centro di tutto.',
              },
              {
                n: '03',
                title: 'Colazione artigianale',
                body: 'Prodotti locali, dolci fatti in casa. Servita in terrazza con vista sul mare.',
              },
              {
                n: '04',
                title: 'Ospitalità autentica',
                body: 'Consigli veri, non brochure. Ti trattiamo come ospiti di casa nostra.',
              },
            ].map(({ n, title, body }, i) => (
              <div key={n} className={`reveal d${i + 1} card p-8`}>
                <span style={{ fontFamily: 'var(--ff-display)', fontSize: '3.5rem', fontWeight: 300, color: 'var(--c-ocean)', opacity: 0.25, lineHeight: 1, display: 'block', marginBottom: 16 }}>
                  {n}
                </span>
                <h3 className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 10 }}>{title}</h3>
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
              { photo: PHOTOS.room1, scene: 'scene-sea',      title: 'Camera Panoramica', badge: 'Vista Golfo',   desc: 'Terrazzino privato con vista diretta sul mare.' },
              { photo: PHOTOS.room2, scene: 'scene-interior', title: 'Camera del Giardino', badge: 'Tranquilla', desc: 'Affacciata sul giardino fiorito. Silenziosa e raccolta.' },
              { photo: PHOTOS.room3, scene: 'scene-interior', title: 'Suite Familiare',    badge: 'Fino a 4 ospiti', desc: 'Zona living separata, ideale per famiglie.' },
            ].map(({ photo, scene, title, badge, desc }, i) => (
              <div key={title} className={`reveal d${i + 1} card group overflow-hidden`}>
                <div className="photo overflow-hidden" style={{ height: 240 }}>
                  <Photo id={photo} alt={title} scene={scene} />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="display-sm" style={{ color: 'var(--c-text)' }}>{title}</h3>
                    <span className="pill" style={{ flexShrink: 0, marginLeft: 8 }}>{badge}</span>
                  </div>
                  <p className="body-sm mb-5">{desc}</p>
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { dest: 'Procida',  time: '15 min', via: 'traghetto' },
                  { dest: 'Ischia',   time: '20 min', via: 'traghetto' },
                  { dest: 'Napoli',   time: '30 min', via: 'auto · treno' },
                  { dest: 'Pozzuoli', time: '10 min', via: 'auto' },
                ].map(({ dest, time, via }) => (
                  <div key={dest} className="flex flex-col p-4 rounded-lg" style={{ background: 'var(--c-ocean-l)', gap: 2 }}>
                    <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--c-text)' }}>{dest}</p>
                    <p style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--c-ocean)', lineHeight: 1 }}>{time}</p>
                    <p className="label label--muted">{via}</p>
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
              <div key={name} className={`reveal d${i + 1} card p-8`}>
                <div style={{ color: 'var(--c-gold)', letterSpacing: 4, marginBottom: 20, fontSize: '0.9rem' }}>★★★★★</div>
                <p style={{ fontFamily: 'var(--ff-display)', fontStyle: 'italic', fontWeight: 400, fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--c-text)', marginBottom: 20 }}>
                  "{text}"
                </p>
                <div style={{ borderTop: '1px solid var(--c-border)', paddingTop: 16 }}>
                  <p style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--c-text)' }}>{name}</p>
                  <p className="body-sm">{from}</p>
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
