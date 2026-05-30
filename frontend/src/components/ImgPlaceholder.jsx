export default function ImgPlaceholder({ label, gradient = 'from-[#B8E0EC] to-[#4AADCA]', icon = '🌊', className = '' }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3 ${className}`}>
      <span className="text-4xl opacity-60">{icon}</span>
      <span className="text-xs font-bold tracking-widest uppercase opacity-60 text-center px-4">
        {label}
      </span>
    </div>
  )
}
