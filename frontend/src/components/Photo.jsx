/* Unsplash photo with graceful fallback to CSS scene */
export default function Photo({ id, alt, scene = 'scene-sea', style = {}, className = '' }) {
  return (
    <div className={`${scene} w-full h-full`} style={style}>
      <img
        src={`https://images.unsplash.com/${id}?w=1400&auto=format&fit=crop&q=80`}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
        onError={e => { e.target.style.display = 'none' }}
      />
    </div>
  )
}
