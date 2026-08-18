// components/ui/ParticlesBackground.tsx - Puntos estáticos
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="w-full h-full opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, #C9A96E22 1px, transparent 1px),
              radial-gradient(circle at 30% 70%, #C9A96E22 1px, transparent 1px),
              radial-gradient(circle at 50% 30%, #C9A96E22 1px, transparent 1px),
              radial-gradient(circle at 70% 80%, #C9A96E22 1px, transparent 1px),
              radial-gradient(circle at 90% 40%, #C9A96E22 1px, transparent 1px)
            `,
            backgroundSize: '200px 200px',
          }}
        />
      </div>
    </div>
  )
}

export default ParticlesBackground