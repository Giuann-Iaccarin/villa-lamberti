import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import { sendContact } from '../lib/api'

const contactInfo = [
  {
    icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z',
    label: 'Telefono', val: '+39 333 123 4567', href: 'tel:+393331234567',
  },
  {
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
    label: 'Email', val: 'info@villalamberti.it', href: 'mailto:info@villalamberti.it',
  },
  {
    icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0',
    label: 'Indirizzo', val: 'Via Panoramica, Monte di Procida (NA)', href: null,
  },
  {
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    label: 'Check-in', val: '14:00 – 20:00', href: null,
  },
  {
    icon: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9',
    label: 'Check-out', val: 'entro le 11:00', href: null,
  },
  {
    icon: 'M12 20h9 M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z',
    label: 'Risposta', val: 'Entro 4 ore', href: null,
  },
]

export default function Contatti() {
  useRevealAll()
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
  const [status, setStatus] = useState(null)

  const onSubmit = async (data) => {
    setStatus(null)
    try { await sendContact(data); setStatus('ok'); reset() }
    catch { setStatus('err') }
  }

  return (
    <>
      <PageHero
        label="Contatti"
        title="Parliamoci"
        subtitle="Risponderemo entro poche ore. Oppure scrivici subito su WhatsApp."
        photoId="photo-1534445538923-ab8e5d5b1c34"
        scene="scene-sea"
      />

      <section className="section section--bg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Form */}
            <div className="reveal card" style={{ padding: '40px 40px' }}>
              <h2 className="display-md" style={{ color: 'var(--c-text)', marginBottom: 6 }}>
                Inviaci un messaggio
              </h2>
              <p className="body-sm" style={{ marginBottom: 28 }}>Risponderemo entro 4 ore, solitamente molto prima.</p>

              {status === 'ok' && (
                <div style={{ marginBottom: 20, padding: '14px 18px', borderRadius: 'var(--r-md)', background: '#f0faf4', border: '1px solid #6fcf97', color: '#1a6b3a', fontSize: '0.85rem', fontWeight: 600 }}>
                  Messaggio inviato — ti risponderemo presto.
                </div>
              )}
              {status === 'err' && (
                <div style={{ marginBottom: 20, padding: '14px 18px', borderRadius: 'var(--r-md)', background: '#fff5f5', border: '1px solid #fc8181', color: '#9b2335', fontSize: '0.85rem', fontWeight: 600 }}>
                  Errore nell'invio. Prova su WhatsApp.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 18 }} noValidate>
                <div className="field">
                  <label>Nome *</label>
                  <input {...register('name', { required: 'Obbligatorio' })} placeholder="Mario Rossi" />
                  {errors.name && <span className="field-error">{errors.name.message}</span>}
                </div>
                <div className="field">
                  <label>Email *</label>
                  <input type="email" {...register('email', { required: 'Obbligatorio', pattern: { value: /^\S+@\S+$/, message: 'Non valida' } })} placeholder="mario@email.com" />
                  {errors.email && <span className="field-error">{errors.email.message}</span>}
                </div>
                <div className="grid-2-col">
                  <div className="field">
                    <label>Check-in</label>
                    <input type="date" {...register('checkIn')} />
                  </div>
                  <div className="field">
                    <label>Check-out</label>
                    <input type="date" {...register('checkOut')} />
                  </div>
                </div>
                <div className="field">
                  <label>Messaggio *</label>
                  <textarea rows={4}
                    {...register('message', { required: 'Obbligatorio', minLength: { value: 10, message: 'Almeno 10 caratteri' } })}
                    placeholder="Ciao, vorrei informazioni su…"
                  />
                  {errors.message && <span className="field-error">{errors.message.message}</span>}
                </div>
                <button type="submit" disabled={isSubmitting} className="btn btn--ocean"
                  style={{ opacity: isSubmitting ? 0.6 : 1, justifyContent: 'center' }}>
                  {isSubmitting ? 'Invio in corso…' : 'Invia messaggio'}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="reveal d2 flex flex-col gap-8">

              {/* Contatti diretti */}
              <div className="card" style={{ padding: '32px 32px' }}>
                <h2 className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 20 }}>Contattaci direttamente</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {contactInfo.map(({ icon, label, val, href }, i) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderBottom: i < contactInfo.length - 1 ? '1px solid var(--c-border)' : 'none' }}>
                      <div style={{ width: 36, height: 36, borderRadius: 'var(--r-sm)', background: 'var(--c-ocean-l)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--c-ocean)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d={icon}/>
                        </svg>
                      </div>
                      <div style={{ flex: 1 }}>
                        <p className="label label--muted" style={{ marginBottom: 1 }}>{label}</p>
                        {href
                          ? <a href={href} style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--c-text)' }}>{val}</a>
                          : <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--c-text)', margin: 0 }}>{val}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prenotazione diretta */}
              <div className="card" style={{ padding: '28px 32px', background: 'var(--c-ocean)', border: 'none' }}>
                <p className="label label--gold" style={{ marginBottom: 8 }}>Prenotazione diretta</p>
                <h3 className="display-sm" style={{ color: '#fff', marginBottom: 10 }}>Prenota senza commissioni</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, marginBottom: 20 }}>
                  Usa il nostro sistema di prenotazione interno: nessuna piattaforma, nessuna commissione, risposta in poche ore.
                </p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <Link to="/prenota" className="btn btn--white" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>
                    Prenota ora
                  </Link>
                  <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer" className="btn btn--wa" style={{ fontSize: '0.78rem', padding: '10px 20px' }}>
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
