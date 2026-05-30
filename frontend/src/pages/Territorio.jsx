import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import { useRevealAll } from '../hooks/useReveal'

const highlights = [
  { n: '15 min', label: 'da Procida' },
  { n: '20 min', label: 'da Ischia' },
  { n: '10 min', label: 'dai Campi Flegrei' },
  { n: '30 min', label: 'da Napoli' },
]

const exp = [
  {
    n: '01', label: 'Natura',
    title: 'Le calette di Monte di Procida',
    body: 'A pochi minuti a piedi si aprono calette rocciose quasi deserte, con acque trasparenti che d\'estate non superano mai le due o tre famiglie. Portati le pinne e dimenticati il mondo.',
    tip: 'Meglio prima delle 9:00 o dopo le 18:00 — troverai il posto quasi per te.',
    photoId: 'photo-1505118380757-91f5f5632de0', scene: 'scene-sea',
  },
  {
    n: '02', label: 'Isola',
    title: 'Il traghetto per Procida',
    body: 'Capitale Italiana della Cultura 2022, Procida è a 15 minuti di traghetto. Arrivaci al mattino presto. Passeggia per Marina Corricella, mangia il coniglio all\'ischitana, torna lungo le scalinate colorate.',
    tip: 'Traghetto da Torregaveta, 15 min, 3,20 €. Partenza ogni 40 minuti.',
    photoId: 'photo-1552832230-c0197dd311b5', scene: 'scene-sea',
  },
  {
    n: '03', label: 'Gastronomia',
    title: 'Pesce fresco al porto',
    body: 'Al porto di Acquamorta i pescatori tornano all\'alba. Qualche trattoria apre a mezzogiorno con quello che hanno preso la notte. Nessun menù fisso: si mangia quello che c\'è, e quello che c\'è è sempre perfetto.',
    tip: 'Chiedi in anticipo. Non prenotare su Tripadvisor — chiedi a noi.',
    photoId: 'photo-1534445538923-ab8e5d5b1c34', scene: 'scene-sea',
  },
  {
    n: '04', label: 'Panorama',
    title: 'Il tramonto sul Golfo',
    body: 'Dal belvedere di Cappella, 10 minuti a piedi, il sole tramonta esattamente tra Ischia e Procida. In estate si vedono le luci di Napoli riflesse nel mare. Portati una bottiglia di Falanghina.',
    tip: 'Estate: tramonto tra le 20:15 e le 20:30. Arrivaci 20 minuti prima.',
    photoId: 'photo-1507525428034-b723cf961d3e', scene: 'scene-sea',
  },
  {
    n: '05', label: 'Archeologia',
    title: 'I Campi Flegrei',
    body: 'A 10 minuti in auto: Pozzuoli, Cuma, Baia sommersa. Vulcani attivi, templi romani, terme nel mare. Pochissimi turisti, storia millenaria. Uno dei luoghi più straordinari d\'Italia — quasi sconosciuto.',
    tip: 'Baia subacquea: prenota con Sub Campi Flegrei. Ne vale assolutamente la pena.',
    photoId: 'photo-1516483638261-f4dbaf036963', scene: 'scene-dark',
  },
]

export default function Territorio() {
  useRevealAll()

  return (
    <>
      <PageHero
        label="Territorio & Esperienze"
        title="Cosa fare qui attorno"
        subtitle="Consigli veri, non brochure. Come te li direbbe un amico del posto."
        photoId="photo-1552832230-c0197dd961d3e"
        scene="scene-sea"
      />

      {/* Distanze mini-grid */}
      <section style={{ background: '#fff', borderBottom: '1px solid var(--c-border)' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {highlights.map(({ n, label }, i) => (
              <div key={label} className="reveal text-center" style={{
                padding: '44px 24px',
                borderRight: i < 3 ? '1px solid var(--c-border)' : 'none',
              }}>
                <p className="display-lg" style={{ color: 'var(--c-ocean)', marginBottom: 4 }}>{n}</p>
                <p className="label label--muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Esperienze */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          {exp.map(({ n, label, title, body, tip, photoId, scene }, i) => (
            <div
              key={n}
              className={`reveal grid lg:grid-cols-2 gap-14 items-center ${i < exp.length - 1 ? 'pb-20 mb-20' : ''}`}
              style={i < exp.length - 1 ? { borderBottom: '1px solid var(--c-border)' } : {}}
            >
              <div className={`relative rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                style={{ height: 440, boxShadow: 'var(--shadow-md)' }}>
                <Photo id={photoId} alt={title} scene={scene} />
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                {/* Label + number */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span className="label">{label}</span>
                  <span style={{ width: 1, height: 12, background: 'var(--c-border)' }} />
                  <span style={{ fontFamily: 'var(--ff-body)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.18em', color: 'var(--c-muted)' }}>{n}</span>
                </div>
                <h2 className="display-md" style={{ color: 'var(--c-text)', marginBottom: 8 }}>{title}</h2>
                <span className="rule" />
                <p className="body-lg mt-5 mb-6">{body}</p>

                {/* Tip box */}
                {tip && (
                  <div style={{ display: 'flex', gap: 14, padding: '16px 18px', borderRadius: 'var(--r-md)', background: 'var(--c-gold-l)', border: '1px solid rgba(184,148,74,0.2)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    <p className="body-sm" style={{ color: 'var(--c-text)' }}>
                      <strong style={{ color: 'var(--c-gold)', fontWeight: 700 }}>Consiglio — </strong>{tip}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm section--bg">
        <div className="container--narrow text-center reveal">
          <p className="label mb-4">Pronti a esplorare?</p>
          <h2 className="display-lg" style={{ color: 'var(--c-text)', marginBottom: 12 }}>
            Il Golfo ti aspetta
          </h2>
          <p className="body-lg mb-8">Prenota una delle nostre camere e parte la vera avventura.</p>
          <Link to="/prenota" className="btn btn--ocean">Prenota ora</Link>
        </div>
      </section>
    </>
  )
}
