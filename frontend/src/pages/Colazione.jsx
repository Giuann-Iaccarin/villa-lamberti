import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Photo from '../components/Photo'
import { useRevealAll } from '../hooks/useReveal'

const items = [
  { photoId: 'photo-1495474472287-4d71bcdd2085', scene: 'scene-golden', title: 'Caffè napoletano', desc: 'Miscela artigianale, macchinetta napoletana. Niente capsule.' },
  { photoId: 'photo-1571770095004-6b61b1cf308a', scene: 'scene-golden', title: 'Dolci fatti in casa', desc: 'Sfogliatelle, babà, ciambelle al limone. Preparati la sera prima.' },
  { photoId: 'photo-1553361371-9b22f78e8b1d', scene: 'scene-golden', title: 'Limoni di Procida', desc: 'Succo fresco, marmellata, limoncello artigianale dall\'isola.' },
  { photoId: 'photo-1576866209830-589e1bfbaa4d', scene: 'scene-golden', title: 'Mozzarella fresca', desc: 'Dal caseificio a 5 km. Ricotta di bufala, formaggi campani.' },
  { photoId: 'photo-1546069901-ba9599a7e63c', scene: 'scene-golden', title: 'Frutta di stagione', desc: 'Fichi, albicocche, pesche. Sempre locale, sempre di stagione.' },
  { photoId: 'photo-1484723091739-30990a9f4b6e', scene: 'scene-golden', title: 'Pane e pomodoro', desc: 'Bruschetta con pomodorini del Vesuvio DOP e origano selvatico.' },
]

const timeline = [
  { time: '7:30', label: 'Il caffè è pronto', icon: 'M18 8h1a4 4 0 0 1 0 8h-1 M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z M6 1v3 M10 1v3 M14 1v3' },
  { time: '8:00', label: 'La terrazza apre', icon: 'M12 2C8.5 2 5.5 4.5 5.5 8.5c0 5 6.5 12 6.5 12s6.5-7 6.5-12C18.5 4.5 15.5 2 12 2z' },
  { time: '8:30', label: 'Dolci freschi in tavola', icon: 'M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z' },
  { time: '10:30', label: 'Ultimo caffè', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
]

export default function Colazione() {
  useRevealAll()

  return (
    <>
      <PageHero
        label="Colazione"
        title="Ogni mattina inizia con il meglio del Sud"
        subtitle="Prodotti locali, dolci fatti in casa, caffè come si deve. In terrazza dalle 8:00 alle 10:30."
        photoId="photo-1571770095004-6b61b1cf308a"
        scene="scene-golden"
      />

      {/* Intro editorial */}
      <section className="section--sm section--gold">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="label label--gold mb-4">Il nostro approccio</p>
              <h2 className="display-lg" style={{ color: 'var(--c-text)', marginBottom: 8 }}>
                La colazione è un rito,
              </h2>
              <h2 className="display-lg italic" style={{ color: 'var(--c-ocean)', marginBottom: 24 }}>
                non un servizio
              </h2>
              <span className="rule rule--gold" />
              <p className="body-lg mt-6">
                Niente buffet industriale. Niente cornetti surgelati. Ogni mattina prepariamo una tavola con quello che di meglio offre questa terra: dai limoni di Procida alla mozzarella fresca, dai dolci della cuoca di famiglia al caffè fatto in cuccuma napoletana.
              </p>
              <p className="body-lg mt-4">
                La serviamo in terrazza, con vista sul Golfo. Il tempo scorre diversamente, a quell'ora.
              </p>
            </div>

            {/* Timeline mattina */}
            <div className="reveal d2">
              <p className="label mb-6">La tua mattina</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {timeline.map(({ time, label, icon }, i) => (
                  <div key={time} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    {/* Linea verticale + dot */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: i === 1 ? 'var(--c-gold)' : 'var(--c-white)', border: `1.5px solid ${i === 1 ? 'var(--c-gold)' : 'var(--c-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={i === 1 ? '#fff' : 'var(--c-ocean)'} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d={icon}/>
                        </svg>
                      </div>
                      {i < timeline.length - 1 && <div style={{ width: 1, height: 32, background: 'var(--c-border)', margin: '4px 0' }} />}
                    </div>
                    {/* Content */}
                    <div style={{ paddingBottom: i < timeline.length - 1 ? 0 : 0, paddingTop: 8 }}>
                      <p style={{ fontFamily: 'var(--ff-display)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--c-ocean)', lineHeight: 1, marginBottom: 2 }}>{time}</p>
                      <p style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--c-text)', marginBottom: 28 }}>{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="s-header reveal">
            <p className="label mb-2">I prodotti</p>
            <h2 className="display-lg" style={{ color: 'var(--c-text)' }}>Cosa trovi a tavola</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map(({ photoId, scene, title, desc }, i) => (
              <div key={title} className={`reveal d${(i % 3) + 1} card card--photo group overflow-hidden`}>
                <div className="photo overflow-hidden relative" style={{ height: 240 }}>
                  <Photo id={photoId} alt={title} scene={scene} />
                  <div className="photo-gradient" />
                </div>
                <div style={{ padding: '18px 22px 24px' }}>
                  <h3 className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 6 }}>{title}</h3>
                  <p className="body-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section--sm" style={{ background: 'var(--c-ocean)' }}>
        <div className="container--narrow text-center reveal">
          <p className="label label--gold mb-4">In terrazza, ogni mattina</p>
          <h2 className="display-lg" style={{ color: '#fff', marginBottom: 12 }}>
            Dalle 8:00 alle 10:30
          </h2>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 32 }}>
            Con vista sul Golfo di Napoli. Il modo migliore per iniziare la giornata.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/prenota" className="btn btn--white">Prenota il soggiorno</Link>
            <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer" className="btn btn--wa">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
