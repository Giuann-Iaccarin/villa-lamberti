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
        <div className="container--narrow reveal">
          <p className="label label--gold mb-5">Il nostro approccio</p>
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
      </section>

      {/* Products */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="s-header reveal">
            <p className="label mb-2">I prodotti</p>
            <h2 className="display-lg" style={{ color: 'var(--c-text)' }}>Cosa trovi a tavola</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(({ photoId, scene, title, desc }, i) => (
              <div key={title} className={`reveal d${(i % 3) + 1} card group overflow-hidden`}>
                <div className="photo overflow-hidden" style={{ height: 200 }}>
                  <Photo id={photoId} alt={title} scene={scene} />
                </div>
                <div className="p-6">
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
          <h2 className="display-lg" style={{ color: '#fff', marginBottom: 12 }}>
            Dalle 8:00 alle 10:30
          </h2>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.72)' }}>
            In terrazza, con vista sul Golfo di Napoli. Ogni mattina.
          </p>
          <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer"
            className="btn btn--white mt-10 inline-flex">
            Prenota il soggiorno
          </a>
        </div>
      </section>
    </>
  )
}
