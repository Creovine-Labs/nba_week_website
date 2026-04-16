export function GlobeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Pastel gradient blobs */}
      <div className="absolute -top-1/4 -right-1/4 w-[80%] h-[80%] rounded-full bg-gradient-to-br from-[#C8B4FF]/40 via-[#B4DCFF]/30 to-transparent blur-3xl" />
      <div className="absolute top-1/3 -left-1/4 w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-[#FFD6E0]/30 via-[#C8B4FF]/20 to-transparent blur-3xl" />
      <div className="absolute -bottom-1/4 right-1/4 w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#B4DCFF]/30 via-[#C8F0FF]/20 to-transparent blur-3xl" />
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #6C5CE7 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  )
}
