import Photo from './Photo'

export default function PageHero({ label, title, subtitle, photoId, scene = 'scene-sea' }) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ height: '56vh', minHeight: 380 }}
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Photo id={photoId} alt={title} scene={scene} />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(14,29,40,0.75) 0%, rgba(14,29,40,0.25) 60%, transparent 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 pb-14">
        {label && <p className="label label--gold mb-3">{label}</p>}
        <h1 className="display-xl" style={{ color: '#fff', maxWidth: 640 }}>{title}</h1>
        {subtitle && (
          <p className="body-lg mt-4" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520 }}>{subtitle}</p>
        )}
      </div>
    </section>
  )
}
