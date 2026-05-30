import Photo from './Photo'

export default function PageHero({ label, title, subtitle, photoId, scene = 'scene-sea' }) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ height: '72vh', minHeight: 520 }}
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <Photo id={photoId} alt={title} scene={scene} />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(10,22,32,0.88) 0%, rgba(10,22,32,0.45) 50%, rgba(10,22,32,0.1) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10" style={{ paddingBottom: '72px' }}>

        {/* Label */}
        {label && (
          <p className="label label--gold" style={{ marginBottom: 20 }}>{label}</p>
        )}

        {/* Gold rule */}
        <span style={{ display: 'block', width: 36, height: 1.5, background: 'var(--c-gold)', borderRadius: 2, marginBottom: 24 }} />

        {/* Title */}
        <h1
          className="display-xl"
          style={{ color: '#fff', maxWidth: 700, lineHeight: 1.08, marginBottom: subtitle ? 28 : 0 }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="body-lg"
            style={{ color: 'rgba(255,255,255,0.68)', maxWidth: 500, lineHeight: 1.9 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
