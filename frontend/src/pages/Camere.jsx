import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import { useRevealAll } from '../hooks/useReveal'

const rooms = [
  {
    slug: 'panoramica',
    photoId: 'photo-1551882547-ff40c63fe5fa',
    scene: 'scene-sea',
    badge: 'Vista Golfo',
    name: 'Camera Panoramica',
    price: 'Da €90/notte',
    desc: 'La nostra camera più richiesta. Affacciata direttamente sul Golfo, con terrazzino privato dove godersi il tramonto su Procida e Ischia.',
    detail: 'Ogni mattina apri le persiane e hai il mare davanti. La luce entra obliqua, azzurra, come non capita in nessun posto al mondo.',
    amenities: [
      { icon: 'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0', label: 'Vista Golfo' },
      { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10', label: 'Terrazzino privato' },
      { icon: 'M5 12H3l9-9 9 9h-2v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7z M9 21V9h6v12', label: 'Bagno privato' },
      { icon: 'M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z', label: 'Aria condizionata' },
      { icon: 'M5 12.55a11 11 0 0 1 14.08 0 M1.42 9a16 16 0 0 1 21.16 0 M8.53 16.11a6 6 0 0 1 6.95 0 M12 20h.01', label: 'Wi-Fi' },
      { icon: 'M18 8h1a4 4 0 0 1 0 8h-1 M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z M6 1v3 M10 1v3 M14 1v3', label: 'Angolo caffè' },
    ],
  },
  {
    slug: 'giardino',
    photoId: 'photo-1566073771259-6a8506099945',
    scene: 'scene-interior',
    badge: 'Tranquilla',
    name: 'Camera del Giardino',
    price: 'Da €75/notte',
    desc: 'Affacciata sul giardino fiorito con limoni e bouganville. Fresca d\'estate, silenziosa e raccolta. Profuma di gelsomino.',
    detail: 'Per chi cerca riposo vero. Il silenzio qui è qualcosa di fisico: lo senti sulla pelle.',
    amenities: [
      { icon: 'M12 2C8.5 2 5.5 4.5 5.5 8.5c0 5 6.5 12 6.5 12s6.5-7 6.5-12C18.5 4.5 15.5 2 12 2z', label: 'Vista giardino' },
      { icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10', label: 'Accesso giardino' },
      { icon: 'M5 12H3l9-9 9 9h-2v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7z', label: 'Bagno privato' },
      { icon: 'M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z', label: 'Aria condizionata' },
      { icon: 'M5 12.55a11 11 0 0 1 14.08 0 M1.42 9a16 16 0 0 1 21.16 0 M8.53 16.11a6 6 0 0 1 6.95 0 M12 20h.01', label: 'Wi-Fi' },
    ],
  },
  {
    slug: 'suite',
    photoId: 'photo-1520250497591-112f2f40a3f4',
    scene: 'scene-interior',
    badge: 'Fino a 4 ospiti',
    name: 'Suite Familiare',
    price: 'Da €130/notte',
    desc: 'Ampia suite con zona living separata. Ideale per famiglie con bambini o coppie che vogliono spazio. Luce e comfort senza compromessi.',
    detail: 'Due ambienti distinti, un bagno grande, tutto quello che serve per stare bene anche senza uscire.',
    amenities: [
      { icon: 'M3 3h18v18H3z M3 9h18 M9 21V9', label: 'Zona living' },
      { icon: 'M18 8h1a4 4 0 0 1 0 8h-1 M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z', label: 'Angolo cottura' },
      { icon: 'M5 12H3l9-9 9 9h-2v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7z', label: 'Bagno grande' },
      { icon: 'M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01', label: 'Smart TV' },
      { icon: 'M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z', label: 'Aria condizionata' },
      { icon: 'M5 12.55a11 11 0 0 1 14.08 0 M1.42 9a16 16 0 0 1 21.16 0 M8.53 16.11a6 6 0 0 1 6.95 0 M12 20h.01', label: 'Wi-Fi' },
    ],
  },
]

export default function Camere() {
  useRevealAll()

  return (
    <>
      <PageHero
        label="Le nostre camere"
        title="Tre camere, una sola promessa"
        subtitle="Ogni camera ha la sua personalità. Tutte condividono la stessa cura."
        photoId="photo-1551882547-ff40c63fe5fa"
        scene="scene-sea"
      />

      {rooms.map(({ slug, photoId, scene, badge, name, price, desc, detail, amenities }, i) => (
        <section key={name} className="section" style={{ background: i % 2 === 0 ? '#fff' : 'var(--c-bg)' }}>
          <div className="container">
            <div className={`reveal grid lg:grid-cols-2 gap-14 items-center`}>
              {/* Photo */}
              <div className={`relative rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                style={{ height: 500, boxShadow: 'var(--shadow-lg)' }}>
                <Photo id={photoId} alt={name} scene={scene} />
                <span className="pill absolute top-5 left-5" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', color: 'var(--c-ocean)', fontWeight: 600 }}>
                  {badge}
                </span>
                <div style={{ position: 'absolute', bottom: 20, right: 20, background: 'rgba(14,29,40,0.82)', backdropFilter: 'blur(8px)', borderRadius: 'var(--r-md)', padding: '8px 16px' }}>
                  <p style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', fontWeight: 400, color: '#fff', lineHeight: 1 }}>{price}</p>
                </div>
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="label mb-3">{badge}</p>
                <h2 className="display-lg" style={{ color: 'var(--c-text)', marginBottom: 4 }}>{name}</h2>
                <span className="rule" />
                <p className="body-lg mt-5">{desc}</p>
                <p className="mt-3 mb-8" style={{ fontFamily: 'var(--ff-display)', fontStyle: 'italic', color: 'var(--c-ocean)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  {detail}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', marginBottom: 32 }}>
                  {amenities.map(({ icon, label }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 'var(--r-sm)', background: 'var(--c-ocean-l)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--c-ocean)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d={icon} />
                        </svg>
                      </div>
                      <span style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--c-text)' }}>{label}</span>
                    </div>
                  ))}
                </div>

                <Link to={`/prenota?camera=${slug}`} className="btn btn--ocean">
                  Prenota questa camera
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Info strip */}
      <section className="section--xs section--bg">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'Check-in', value: '14:00 – 20:00', note: 'Flessibile su richiesta' },
              { icon: 'M17 8h1a4 4 0 0 1 0 8h-1 M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z M6 1v3 M10 1v3 M14 1v3', label: 'Colazione', value: '8:00 – 10:30', note: 'In terrazza con vista' },
              { icon: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9', label: 'Check-out', value: 'entro le 11:00', note: 'Late check-out su richiesta' },
            ].map(({ icon, label, value, note }) => (
              <div key={label} className="card" style={{ padding: '28px 24px', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div className="icon-box" style={{ flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon}/>
                  </svg>
                </div>
                <div>
                  <p className="label label--muted" style={{ marginBottom: 4 }}>{label}</p>
                  <p className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 3 }}>{value}</p>
                  <p className="body-sm">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm" style={{ background: 'var(--c-ocean)' }}>
        <div className="container--narrow text-center reveal">
          <p className="label label--gold mb-4">Prenotazione diretta</p>
          <h2 className="display-lg" style={{ color: '#fff', marginBottom: 12 }}>Hai scelto la tua camera?</h2>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 36 }}>
            Prenota direttamente con noi — nessuna commissione, risposta in poche ore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/prenota" className="btn btn--white">Prenota ora</Link>
            <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer" className="btn btn--wa">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
