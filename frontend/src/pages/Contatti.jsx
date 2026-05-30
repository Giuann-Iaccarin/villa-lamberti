import { useState } from 'react'
import { useForm } from 'react-hook-form'
import PageHero from '../components/PageHero'
import { useRevealAll } from '../hooks/useReveal'
import { sendContact } from '../lib/api'

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
        label="Contatti & Prenotazione"
        title="Scrivici"
        subtitle="Risponderemo entro poche ore. Oppure scrivici subito su WhatsApp."
        photoId="photo-1534445538923-ab8e5d5b1c34"
        scene="scene-sea"
      />

      <section className="section section--bg">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Form */}
            <div className="reveal card p-10">
              <h2 className="display-md" style={{ color: 'var(--c-text)', marginBottom: 6 }}>
                Inviaci un messaggio
              </h2>
              <p className="body-sm mb-8">Risponderemo entro 4 ore, solitamente molto prima.</p>

              {status === 'ok' && (
                <div className="mb-6 p-4 rounded-lg body-sm"
                  style={{ background: '#f0faf4', border: '1px solid #6fcf97', color: '#1a6b3a', fontWeight: 600 }}>
                  Messaggio inviato. Ti risponderemo presto.
                </div>
              )}
              {status === 'err' && (
                <div className="mb-6 p-4 rounded-lg body-sm"
                  style={{ background: '#fff5f5', border: '1px solid #fc8181', color: '#9b2335', fontWeight: 600 }}>
                  Errore nell'invio. Prova su WhatsApp.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
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

                <div className="grid grid-cols-2 gap-4">
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
                    placeholder="Ciao, vorrei informazioni su..."
                  />
                  {errors.message && <span className="field-error">{errors.message.message}</span>}
                </div>

                <button type="submit" disabled={isSubmitting} className="btn btn--ocean w-full justify-center"
                  style={{ opacity: isSubmitting ? 0.6 : 1 }}>
                  {isSubmitting ? 'Invio in corso…' : 'Invia messaggio'}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="reveal d2 flex flex-col gap-8">
              <div>
                <h2 className="display-md" style={{ color: 'var(--c-text)', marginBottom: 20 }}>Contattaci direttamente</h2>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Telefono',   val: '+39 333 123 4567', href: 'tel:+393331234567' },
                    { label: 'Email',      val: 'info@villalamberti.it', href: 'mailto:info@villalamberti.it' },
                    { label: 'Indirizzo',  val: 'Via Panoramica, Monte di Procida (NA)', href: null },
                    { label: 'Check-in',   val: '14:00 – 20:00', href: null },
                    { label: 'Check-out',  val: 'entro le 11:00', href: null },
                  ].map(({ label, val, href }) => (
                    <div key={label} className="flex items-center gap-4 py-3"
                      style={{ borderBottom: '1px solid var(--c-border)' }}>
                      <span className="label label--muted" style={{ minWidth: 90, flexShrink: 0 }}>{label}</span>
                      {href
                        ? <a href={href} className="body-sm" style={{ color: 'var(--c-text)', fontWeight: 500 }}>{val}</a>
                        : <p className="body-sm" style={{ color: 'var(--c-text)', fontWeight: 500, margin: 0 }}>{val}</p>
                      }
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 14 }}>Prenota su</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'WhatsApp',    href: 'https://wa.me/393331234567', bg: '#25D366' },
                    { label: 'Booking.com', href: 'https://www.booking.com',   bg: '#003580' },
                    { label: 'Airbnb',      href: 'https://www.airbnb.it',     bg: '#FF5A5F' },
                  ].map(({ label, href, bg }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between px-5 py-4 rounded-lg font-semibold text-sm text-white transition-all hover:opacity-90 hover:translate-x-1"
                      style={{ background: bg }}>
                      {label}
                      <span style={{ opacity: 0.7 }}>→</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
