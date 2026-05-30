import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Photo from '../components/Photo'
import { sendBooking, checkAvailability } from '../lib/api'

const ROOMS = [
  {
    slug: 'panoramica',
    name: 'Camera Panoramica',
    badge: 'Vista Golfo',
    photo: 'photo-1551882547-ff40c63fe5fa',
    scene: 'scene-sea',
    maxGuests: 2,
    price: 'Da €90/notte',
    amenities: ['Vista Golfo', 'Terrazzino privato', 'Bagno privato', 'A/C', 'Wi-Fi'],
  },
  {
    slug: 'giardino',
    name: 'Camera del Giardino',
    badge: 'Tranquilla',
    photo: 'photo-1566073771259-6a8506099945',
    scene: 'scene-interior',
    maxGuests: 2,
    price: 'Da €75/notte',
    amenities: ['Vista giardino', 'Accesso giardino', 'Bagno privato', 'A/C', 'Wi-Fi'],
  },
  {
    slug: 'suite',
    name: 'Suite Familiare',
    badge: 'Fino a 4 ospiti',
    photo: 'photo-1520250497591-112f2f40a3f4',
    scene: 'scene-interior',
    maxGuests: 4,
    price: 'Da €130/notte',
    amenities: ['Zona living', 'Angolo cottura', 'Bagno grande', 'Smart TV', 'A/C', 'Wi-Fi'],
  },
]

const STEP_LABELS = ['Camera', 'Date & Ospiti', 'I tuoi dati']

const today = new Date().toISOString().split('T')[0]

function tomorrow(dateStr) {
  const d = new Date(dateStr)
  d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}

function formatDate(str) {
  if (!str) return '—'
  const [y, m, d] = str.split('-')
  const months = ['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic']
  return `${parseInt(d)} ${months[parseInt(m) - 1]} ${y}`
}

function nights(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0
  return Math.max(0, Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000))
}

export default function Prenota() {
  const [searchParams] = useSearchParams()
  const [step, setStep] = useState(0)
  const [submitting, setSubmitting] = useState(false)
  const [checking, setChecking] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState(null)
  const [availabilityError, setAvailabilityError] = useState(null)

  const [form, setForm] = useState({
    roomSlug: '',
    checkIn: today,
    checkOut: tomorrow(today),
    guests: '2',
    name: '',
    email: '',
    phone: '',
    notes: '',
  })

  useEffect(() => {
    const cam = searchParams.get('camera')
    if (cam) {
      const found = ROOMS.find(r => r.slug === cam)
      if (found) setForm(f => ({ ...f, roomSlug: found.slug }))
    }
  }, [searchParams])

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const selectedRoom = ROOMS.find(r => r.slug === form.roomSlug)

  const canNext = () => {
    if (step === 0) return !!form.roomSlug
    if (step === 1) return form.checkIn && form.checkOut && form.checkOut > form.checkIn
    if (step === 2) return form.name.trim() && form.email.trim()
    return false
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    setError(null)
    try {
      await sendBooking({
        roomName: selectedRoom.name,
        roomSlug: form.roomSlug,
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        guests: form.guests,
        name: form.name,
        email: form.email,
        phone: form.phone,
        notes: form.notes,
      })
      setDone(true)
    } catch {
      setError('Errore nell\'invio. Prova su WhatsApp o riprova.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) return <SuccessScreen form={form} room={selectedRoom} />

  return (
    <div style={{ minHeight: '100svh', background: 'var(--c-bg)', paddingTop: 96 }}>
      <div className="container--narrow" style={{ paddingTop: 48, paddingBottom: 80 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="label" style={{ marginBottom: 8 }}>Prenotazione diretta</p>
          <h1 className="display-lg" style={{ color: 'var(--c-text)' }}>Scegli il tuo soggiorno</h1>
        </div>

        {/* Step indicator */}
        <div className="step-indicator">
          {STEP_LABELS.map((label, i) => (
            <div key={i} className="step-item">
              <div className={`step-dot ${i < step ? 'step-dot--done' : i === step ? 'step-dot--active' : ''}`}>
                {i < step
                  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  : <span>{i + 1}</span>
                }
              </div>
              <span className={`step-label ${i === step ? 'step-label--active' : ''}`}>{label}</span>
              {i < STEP_LABELS.length - 1 && <div className={`step-line ${i < step ? 'step-line--done' : ''}`} />}
            </div>
          ))}
        </div>

        {/* Card contenuto */}
        <div className="card prenota-card" style={{ background: '#fff', padding: '40px 48px', marginTop: 40 }}>

          {/* ── Step 0: Camera ── */}
          {step === 0 && (
            <div>
              <h2 className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 6 }}>Quale camera preferisci?</h2>
              <p className="body-sm" style={{ marginBottom: 28 }}>Seleziona la camera per il tuo soggiorno.</p>
              <div className="flex flex-col gap-4">
                {ROOMS.map(room => (
                  <button
                    key={room.slug}
                    type="button"
                    onClick={() => set('roomSlug', room.slug)}
                    className={`booking-card ${form.roomSlug === room.slug ? 'booking-card--selected' : ''}`}
                  >
                    <div className="booking-card__photo">
                      <Photo id={room.photo} alt={room.name} scene={room.scene} />
                    </div>
                    <div className="booking-card__body">
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 6 }}>
                        <h3 className="display-sm" style={{ color: 'var(--c-text)' }}>{room.name}</h3>
                        <span className="pill" style={{ flexShrink: 0, fontSize: '0.7rem' }}>{room.badge}</span>
                      </div>
                      <p className="body-sm" style={{ marginBottom: 12 }}>Fino a {room.maxGuests} ospiti · {room.price}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {room.amenities.slice(0, 4).map(a => (
                          <span key={a} className="pill" style={{ fontSize: '0.68rem', padding: '3px 10px' }}>{a}</span>
                        ))}
                      </div>
                    </div>
                    <div className="booking-card__check">
                      {form.roomSlug === room.slug
                        ? <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--c-ocean)"><circle cx="12" cy="12" r="12"/><path d="M7 12l3.5 3.5L17 8.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
                        : <div style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid var(--c-border)' }} />
                      }
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 1: Date & ospiti ── */}
          {step === 1 && (
            <div>
              <h2 className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 6 }}>Quando vorresti venire?</h2>
              <p className="body-sm" style={{ marginBottom: 32 }}>Seleziona le date e il numero di ospiti.</p>

              {/* Riepilogo camera */}
              {selectedRoom && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', borderRadius: 'var(--r-md)', background: 'var(--c-ocean-l)', border: '1px solid rgba(30,91,122,0.12)', marginBottom: 32 }}>
                  <div style={{ width: 64, height: 48, borderRadius: 'var(--r-sm)', overflow: 'hidden', flexShrink: 0 }}>
                    <Photo id={selectedRoom.photo} alt={selectedRoom.name} scene={selectedRoom.scene} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--c-text)' }}>{selectedRoom.name}</p>
                    <p className="body-sm">{selectedRoom.price}</p>
                  </div>
                  <button type="button" onClick={() => setStep(0)} style={{ marginLeft: 'auto', fontSize: '0.72rem', fontWeight: 600, color: 'var(--c-ocean)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Cambia
                  </button>
                </div>
              )}

              <div className="grid-2-col" style={{ marginBottom: 24 }}>
                <div className="field">
                  <label>Check-in *</label>
                  <input type="date" min={today} value={form.checkIn}
                    onChange={e => { set('checkIn', e.target.value); if (form.checkOut <= e.target.value) set('checkOut', tomorrow(e.target.value)) }} />
                </div>
                <div className="field">
                  <label>Check-out *</label>
                  <input type="date" min={tomorrow(form.checkIn)} value={form.checkOut}
                    onChange={e => set('checkOut', e.target.value)} />
                </div>
              </div>

              <div className="field" style={{ maxWidth: 200 }}>
                <label>Numero ospiti *</label>
                <select value={form.guests} onChange={e => set('guests', e.target.value)}>
                  {Array.from({ length: selectedRoom?.maxGuests ?? 4 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'ospite' : 'ospiti'}</option>
                  ))}
                </select>
              </div>

              {nights(form.checkIn, form.checkOut) > 0 && (
                <div style={{ marginTop: 24, padding: '14px 20px', borderRadius: 'var(--r-md)', background: 'var(--c-gold-l)', border: '1px solid rgba(184,148,74,0.2)' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--c-text)', fontWeight: 500 }}>
                    {nights(form.checkIn, form.checkOut)} {nights(form.checkIn, form.checkOut) === 1 ? 'notte' : 'notti'} · {formatDate(form.checkIn)} → {formatDate(form.checkOut)} · {form.guests} {parseInt(form.guests) === 1 ? 'ospite' : 'ospiti'}
                  </p>
                </div>
              )}

              {availabilityError && (
                <div style={{ marginTop: 20, padding: '14px 18px', borderRadius: 'var(--r-md)', background: '#fff5f5', border: '1px solid #fc8181', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <svg style={{ flexShrink: 0, marginTop: 1 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e53e3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  <p style={{ fontSize: '0.85rem', color: '#9b2335', fontWeight: 500, margin: 0 }}>{availabilityError}</p>
                </div>
              )}
            </div>
          )}

          {/* ── Step 2: Dati personali ── */}
          {step === 2 && (
            <div>
              <h2 className="display-sm" style={{ color: 'var(--c-text)', marginBottom: 6 }}>I tuoi dati</h2>
              <p className="body-sm" style={{ marginBottom: 32 }}>Ti risponderemo entro poche ore per confermare la disponibilità.</p>

              {/* Riepilogo */}
              <div style={{ padding: '16px 20px', borderRadius: 'var(--r-md)', background: 'var(--c-bg)', border: '1px solid var(--c-border)', marginBottom: 32 }}>
                <p className="label label--muted" style={{ marginBottom: 10 }}>Riepilogo</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 20px' }}>
                  {[
                    ['Camera', selectedRoom?.name],
                    ['Ospiti', `${form.guests} ${parseInt(form.guests) === 1 ? 'ospite' : 'ospiti'}`],
                    ['Check-in', formatDate(form.checkIn)],
                    ['Check-out', formatDate(form.checkOut)],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span className="label label--muted" style={{ minWidth: 68 }}>{k}</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--c-text)' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info pagamento */}
              <div style={{ marginBottom: 28, padding: '16px 20px', borderRadius: 'var(--r-md)', background: 'var(--c-ocean-l)', border: '1px solid rgba(30,91,122,0.15)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <svg style={{ flexShrink: 0, marginTop: 2 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-ocean)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <p style={{ fontSize: '0.82rem', color: 'var(--c-ocean)', lineHeight: 1.6, margin: 0 }}>
                  <strong>Nessun pagamento ora.</strong> Se la richiesta è valida, ti contatteremo entro poche ore via email o telefono con le istruzioni per il pagamento. <strong>La prenotazione sarà confermata solo dopo il pagamento.</strong>
                </p>
              </div>

              {error && (
                <div style={{ marginBottom: 20, padding: '12px 16px', borderRadius: 'var(--r-md)', background: '#fff5f5', border: '1px solid #fc8181', color: '#9b2335', fontSize: '0.85rem', fontWeight: 500 }}>
                  {error}
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div className="field">
                  <label>Nome e cognome *</label>
                  <input value={form.name} onChange={e => set('name', e.target.value)} placeholder="Mario Rossi" />
                </div>
                <div className="field">
                  <label>Email *</label>
                  <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="mario@email.com" />
                </div>
                <div className="field">
                  <label>Telefono</label>
                  <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+39 333 000 0000" />
                </div>
                <div className="field">
                  <label>Note aggiuntive</label>
                  <textarea rows={3} value={form.notes} onChange={e => set('notes', e.target.value)}
                    placeholder="Allergie, esigenze particolari, orario di arrivo previsto…" />
                </div>
              </div>
            </div>
          )}

          {/* ── Navigazione ── */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--c-border)' }}>
            {step > 0
              ? <button type="button" onClick={() => { setStep(s => s - 1); setAvailabilityError(null) }} className="btn btn--outline">
                  ← Indietro
                </button>
              : <Link to="/camere" className="btn btn--outline">← Torna alle camere</Link>
            }
            {step < 2
              ? <button type="button" disabled={!canNext() || checking} className="btn btn--ocean"
                  style={{ opacity: canNext() && !checking ? 1 : 0.4 }}
                  onClick={async () => {
                    if (step === 1) {
                      setChecking(true)
                      setAvailabilityError(null)
                      try {
                        const res = await checkAvailability(form.roomSlug, form.checkIn, form.checkOut)
                        if (!res.data?.data?.available) {
                          setAvailabilityError('La camera non è disponibile per le date selezionate. Prova con date diverse.')
                          return
                        }
                      } catch {
                        setAvailabilityError('Impossibile verificare la disponibilità. Riprova o contattaci via WhatsApp.')
                        return
                      } finally {
                        setChecking(false)
                      }
                    }
                    setStep(s => s + 1)
                  }}>
                  {checking ? 'Verifica…' : 'Avanti →'}
                </button>
              : <button type="button" onClick={handleSubmit} disabled={!canNext() || submitting} className="btn btn--ocean"
                  style={{ opacity: canNext() && !submitting ? 1 : 0.5 }}>
                  {submitting ? 'Invio in corso…' : 'Invia richiesta'}
                </button>
            }
          </div>
        </div>

        {/* Note legali */}
        <p className="body-sm" style={{ textAlign: 'center', marginTop: 20, color: 'var(--c-muted)' }}>
          Nessun pagamento adesso — ti contatteremo per confermare e concordare le modalità.
        </p>
      </div>
    </div>
  )
}

function SuccessScreen({ form, room }) {
  return (
    <div style={{ minHeight: '100svh', background: 'var(--c-bg)', display: 'flex', alignItems: 'center', paddingTop: 96 }}>
      <div className="container--narrow" style={{ paddingTop: 48, paddingBottom: 80 }}>
        <div className="card" style={{ background: '#fff', padding: '56px 48px', textAlign: 'center' }}>
          {/* Check icon */}
          <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'var(--c-ocean-l)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--c-ocean)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <p className="label label--gold" style={{ marginBottom: 12 }}>Richiesta inviata</p>
          <h2 className="display-lg" style={{ color: 'var(--c-text)', marginBottom: 12 }}>Grazie, {form.name.split(' ')[0]}!</h2>
          <p className="body-lg" style={{ marginBottom: 24 }}>
            Abbiamo ricevuto la tua richiesta per la <strong style={{ color: 'var(--c-text)' }}>{room?.name}</strong>.<br/>
            Ti risponderemo a <strong style={{ color: 'var(--c-text)' }}>{form.email}</strong> entro poche ore.
          </p>

          {/* Messaggio pagamento */}
          <div style={{ marginBottom: 36, padding: '16px 20px', borderRadius: 'var(--r-md)', background: 'var(--c-ocean-l)', border: '1px solid rgba(30,91,122,0.15)', textAlign: 'left', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <svg style={{ flexShrink: 0, marginTop: 2 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-ocean)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            <p style={{ fontSize: '0.84rem', color: 'var(--c-ocean)', lineHeight: 1.65, margin: 0 }}>
              Se la richiesta può essere gestita, ti contatteremo con le istruzioni per il pagamento. <strong>La prenotazione sarà confermata solo dopo il pagamento.</strong>
            </p>
          </div>

          {/* Riepilogo */}
          <div style={{ display: 'inline-grid', gridTemplateColumns: '1fr 1fr', gap: '10px 32px', padding: '20px 28px', borderRadius: 'var(--r-md)', background: 'var(--c-ocean-l)', marginBottom: 36, textAlign: 'left' }}>
            {[
              ['Camera', room?.name],
              ['Ospiti', form.guests],
              ['Check-in', formatDate(form.checkIn)],
              ['Check-out', formatDate(form.checkOut)],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="label label--muted" style={{ marginBottom: 2 }}>{k}</p>
                <p style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--c-text)' }}>{v}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--outline">Torna alla home</Link>
            <a href="https://wa.me/393331234567" target="_blank" rel="noopener noreferrer" className="btn btn--wa">
              Scrivi su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
