import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import { useRevealAll } from '../hooks/useReveal'

const rooms = [
  {
    photoId: 'photo-1551882547-ff40c63fe5fa',
    scene: 'scene-sea',
    badge: 'Vista Golfo',
    name: 'Camera Panoramica',
    desc: 'La nostra camera più richiesta. Affacciata direttamente sul Golfo, con terrazzino privato dove godersi il tramonto su Procida e Ischia.',
    detail: 'Ogni mattina apri le persiane e hai il mare davanti. La luce entra obliqua, azzurra, come non capita in nessun posto al mondo.',
    amenities: ['Vista Golfo', 'Terrazzino privato', 'Bagno privato', 'Aria condizionata', 'Wi-Fi', 'Angolo caffè'],
  },
  {
    photoId: 'photo-1566073771259-6a8506099945',
    scene: 'scene-interior',
    badge: 'Tranquilla',
    name: 'Camera del Giardino',
    desc: 'Affacciata sul giardino fiorito con limoni e bouganville. Fresca d\'estate, silenziosa e raccolta. Profuma di gelsomino.',
    detail: 'Per chi cerca riposo vero. Il silenzio qui è qualcosa di fisico: lo senti sulla pelle.',
    amenities: ['Vista giardino', 'Accesso giardino', 'Bagno privato', 'Aria condizionata', 'Wi-Fi'],
  },
  {
    photoId: 'photo-1520250497591-112f2f40a3f4',
    scene: 'scene-interior',
    badge: 'Fino a 4 ospiti',
    name: 'Suite Familiare',
    desc: 'Ampia suite con zona living separata. Ideale per famiglie con bambini o coppie che vogliono spazio. Luce e comfort senza compromessi.',
    detail: 'Due ambienti distinti, un bagno grande, tutto quello che serve per stare bene anche senza uscire.',
    amenities: ['Zona living', 'Angolo cottura', 'Bagno grande', 'Smart TV', 'Aria condizionata', 'Wi-Fi'],
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

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          {rooms.map(({ photoId, scene, badge, name, desc, detail, amenities }, i) => (
            <div
              key={name}
              className={`reveal grid lg:grid-cols-2 gap-14 items-center ${i < rooms.length - 1 ? 'pb-20 mb-20' : ''}`}
              style={i < rooms.length - 1 ? { borderBottom: '1px solid var(--c-border)' } : {}}
            >
              {/* Photo — alternates side */}
              <div
                className={`photo rounded-lg overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                style={{ height: 460, boxShadow: 'var(--shadow-lg)' }}
              >
                <Photo id={photoId} alt={name} scene={scene} />
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="pill mb-5 inline-flex">{badge}</span>
                <h2 className="display-lg" style={{ color: 'var(--c-text)', marginBottom: 8 }}>{name}</h2>
                <span className="rule" />
                <p className="body-lg mt-5">{desc}</p>
                <p className="body-md mt-3 mb-8" style={{ fontFamily: 'var(--ff-display)', fontStyle: 'italic', color: 'var(--c-ocean)', fontSize: '1.1rem' }}>
                  {detail}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {amenities.map(a => <span key={a} className="pill">{a}</span>)}
                </div>

                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer"
                  className="btn btn--ocean">
                  Prenota questa camera
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info strip */}
      <section className="section--xs section--bg">
        <div className="container--narrow">
          <div className="grid sm:grid-cols-3 gap-px" style={{ background: 'var(--c-border)', border: '1px solid var(--c-border)', borderRadius: 'var(--r-md)', overflow: 'hidden' }}>
            {[
              { label: 'Check-in',  value: '14:00 – 20:00' },
              { label: 'Check-out', value: 'entro le 11:00' },
              { label: 'Colazione', value: '8:00 – 10:30' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center p-8" style={{ background: '#fff' }}>
                <p className="label label--muted mb-2">{label}</p>
                <p className="display-sm" style={{ color: 'var(--c-text)' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
