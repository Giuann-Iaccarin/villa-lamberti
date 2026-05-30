import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'

const methods = [
  {
    n: '01', title: 'In Auto',
    steps: [
      { t: 'Da Napoli', d: 'Tangenziale dir. Pozzuoli → uscita Monterusciello → SS7 quater verso Monte di Procida' },
      { t: 'Da Roma / Nord', d: 'A1 fino a Napoli, poi tangenziale come sopra' },
      { t: 'GPS', d: 'Via Panoramica, 80070 Monte di Procida (NA)' },
      { t: 'Parcheggio', d: 'Privato e gratuito disponibile' },
    ],
  },
  {
    n: '02', title: 'In Treno',
    steps: [
      { t: 'Arrivo', d: 'Treno fino a Napoli Centrale o Napoli Campi Flegrei' },
      { t: 'Cumana', d: 'Da Montesanto fino a Torregaveta — 30 min, partenza ogni 20 min' },
      { t: 'Ultimo tratto', d: 'Taxi o autobus locale fino a Monte di Procida — 10 min' },
    ],
  },
  {
    n: '03', title: 'In Traghetto',
    steps: [
      { t: 'Da Napoli', d: 'Mergellina o Molo Beverello → traghetto per Pozzuoli' },
      { t: 'Da Pozzuoli', d: 'Auto o taxi fino a Monte di Procida — 15 min' },
      { t: 'Da Procida / Ischia', d: 'Traghetto fino a Torregaveta, poi auto — 10 min' },
    ],
  },
]

export default function ComeRaggiungerci() {
  useRevealAll()

  return (
    <>
      <PageHero
        label="Come Raggiungerci"
        title="Trovaci facilmente"
        subtitle="A mezz'ora da Napoli, 10 minuti dal porto di Pozzuoli."
        photoId="photo-1505118380757-91f5f5632de0"
        scene="scene-sea"
      />

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          {/* Transport */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 reveal">
            {methods.map(({ n, title, steps }) => (
              <div key={n} className="card p-8">
                <span style={{ fontFamily: 'var(--ff-display)', fontSize: '3rem', fontWeight: 300, color: 'var(--c-ocean)', opacity: 0.2, lineHeight: 1, display: 'block', marginBottom: 4 }}>
                  {n}
                </span>
                <h3 className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 20 }}>{title}</h3>
                <ul className="flex flex-col gap-4">
                  {steps.map(({ t, d }) => (
                    <li key={t}>
                      <p style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--c-text)', marginBottom: 2 }}>{t}</p>
                      <p className="body-sm">{d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="reveal rounded-lg overflow-hidden mb-12" style={{ height: 460, boxShadow: 'var(--shadow-lg)' }}>
            <iframe
              title="Mappa Villa Lamberti"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12199.27!2d14.0567!3d40.7889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09ee1e7a2f43%3A0x1d9cf3f0f3e5e8e2!2sMonte%20di%20Procida%2C%20NA!5e0!3m2!1sit!2sit!4v1"
              className="w-full h-full border-0"
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="reveal grid sm:grid-cols-2 md:grid-cols-4 gap-px rounded-lg overflow-hidden"
            style={{ border: '1px solid var(--c-border)', background: 'var(--c-border)' }}>
            {[
              { label: 'Indirizzo',   value: 'Via Panoramica\nMonte di Procida (NA)' },
              { label: 'Parcheggio', value: 'Privato\ngratutio' },
              { label: 'Telefono',   value: '+39 333 123 4567' },
              { label: 'Email',      value: 'info@villalamberti.it' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center p-8" style={{ background: 'var(--c-bg)' }}>
                <p className="label label--muted mb-2">{label}</p>
                <p className="display-sm" style={{ color: 'var(--c-text)', whiteSpace: 'pre-line', fontSize: '0.95rem' }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
