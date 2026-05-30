import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import { useRevealAll } from '../hooks/useReveal'

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
        photoId="photo-1552832230-c0197dd311b5"
        scene="scene-sea"
      />

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          {exp.map(({ n, label, title, body, tip, photoId, scene }, i) => (
            <div
              key={n}
              className={`reveal grid lg:grid-cols-2 gap-14 items-center ${i < exp.length - 1 ? 'pb-20 mb-20' : ''}`}
              style={i < exp.length - 1 ? { borderBottom: '1px solid var(--c-border)' } : {}}
            >
              <div className={`photo rounded-lg overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                style={{ height: 420, boxShadow: 'var(--shadow-md)' }}>
                <Photo id={photoId} alt={title} scene={scene} />
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span style={{ fontFamily: 'var(--ff-display)', fontSize: '4.5rem', fontWeight: 300, color: 'var(--c-ocean)', opacity: 0.2, lineHeight: 1, display: 'block', marginBottom: 4 }}>
                  {n}
                </span>
                <p className="label mb-3">{label}</p>
                <h2 className="display-md" style={{ color: 'var(--c-text)', marginBottom: 8 }}>{title}</h2>
                <span className="rule" />
                <p className="body-lg mt-5 mb-5">{body}</p>
                {tip && (
                  <div className="body-sm p-4 rounded-lg"
                    style={{ background: 'var(--c-ocean-l)', borderLeft: '2px solid var(--c-ocean)' }}>
                    <strong style={{ color: 'var(--c-ocean)', fontWeight: 600 }}>Consiglio:</strong>{' '}{tip}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
