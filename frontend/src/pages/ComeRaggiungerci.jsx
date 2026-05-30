import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'

const methods = [
  {
    n: '01', title: 'In Auto',
    icon: 'M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2 M7 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0 M17 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0',
    steps: [
      { t: 'Da Napoli', d: 'Tangenziale dir. Pozzuoli → uscita Monterusciello → SS7 quater verso Monte di Procida' },
      { t: 'Da Roma / Nord', d: 'A1 fino a Napoli, poi tangenziale come sopra' },
      { t: 'GPS', d: 'Via Panoramica, 80070 Monte di Procida (NA)' },
      { t: 'Parcheggio', d: 'Privato e gratuito disponibile in struttura' },
    ],
  },
  {
    n: '02', title: 'In Treno',
    icon: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7',
    steps: [
      { t: 'Arrivo', d: 'Treno fino a Napoli Centrale o Napoli Campi Flegrei' },
      { t: 'Cumana', d: 'Da Montesanto fino a Torregaveta — 30 min, partenza ogni 20 min' },
      { t: 'Ultimo tratto', d: 'Taxi o autobus locale fino a Monte di Procida — 10 min' },
    ],
  },
  {
    n: '03', title: 'In Traghetto',
    icon: 'M2 20l4-8h12l4 8H2z M6 12V6l3-3h6l3 3v6 M2 20s2 2 10 2 10-2 10-2',
    steps: [
      { t: 'Da Napoli', d: 'Mergellina o Molo Beverello → traghetto per Pozzuoli' },
      { t: 'Da Pozzuoli', d: 'Auto o taxi fino a Monte di Procida — 15 min' },
      { t: 'Da Procida / Ischia', d: 'Traghetto fino a Torregaveta, poi auto — 10 min' },
    ],
  },
]

const infoItems = [
  { icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0', label: 'Indirizzo', value: 'Via Panoramica\nMonte di Procida (NA)' },
  { icon: 'M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2 M7 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0 M17 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0', label: 'Parcheggio', value: 'Privato e gratuito\nin struttura' },
  { icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z', label: 'Telefono', value: '+39 333 123 4567' },
  { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6', label: 'Email', value: 'info@villalamberti.it' },
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

          {/* Parcheggio highlight */}
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 24px', borderRadius: 'var(--r-lg)', background: 'var(--c-ocean-l)', border: '1px solid rgba(30,91,122,0.12)', marginBottom: 56 }}>
            <div className="icon-box" style={{ flexShrink: 0 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--c-text)', marginBottom: 2 }}>Parcheggio privato gratuito</p>
              <p className="body-sm">Posti auto disponibili direttamente in struttura. Nessun problema di sosta.</p>
            </div>
          </div>

          {/* Transport cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-16 reveal">
            {methods.map(({ n, title, icon, steps }) => (
              <div key={n} className="card card--accent" style={{ padding: '28px 28px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                  <div className="icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d={icon}/>
                    </svg>
                  </div>
                  <span style={{ fontFamily: 'var(--ff-body)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--c-muted)' }}>{n}</span>
                </div>
                <h3 className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 20 }}>{title}</h3>
                <ul className="flex flex-col gap-4">
                  {steps.map(({ t, d }) => (
                    <li key={t} style={{ display: 'flex', gap: 10 }}>
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--c-gold)', flexShrink: 0, marginTop: 7 }} />
                      <div>
                        <p style={{ fontWeight: 700, fontSize: '0.78rem', color: 'var(--c-text)', marginBottom: 2 }}>{t}</p>
                        <p className="body-sm">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="reveal rounded-2xl overflow-hidden mb-14" style={{ height: 480, boxShadow: 'var(--shadow-lg)' }}>
            <iframe
              title="Mappa Villa Lamberti"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12199.27!2d14.0567!3d40.7889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b09ee1e7a2f43%3A0x1d9cf3f0f3e5e8e2!2sMonte%20di%20Procida%2C%20NA!5e0!3m2!1sit!2sit!4v1"
              className="w-full h-full border-0"
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="reveal grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {infoItems.map(({ icon, label, value }) => (
              <div key={label} className="card" style={{ padding: '22px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div className="icon-box" style={{ flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon}/>
                  </svg>
                </div>
                <div>
                  <p className="label label--muted" style={{ marginBottom: 4 }}>{label}</p>
                  <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--c-text)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm section--bg">
        <div className="container--narrow text-center reveal">
          <p className="label mb-4">Hai trovato tutto?</p>
          <h2 className="display-lg" style={{ color: 'var(--c-text)', marginBottom: 12 }}>Prenota il tuo soggiorno</h2>
          <p className="body-lg mb-8">Siamo a meno di un'ora da Napoli. Vieni a scoprire il Golfo da qui.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/prenota" className="btn btn--ocean">Prenota ora</Link>
            <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer" className="btn btn--wa">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
