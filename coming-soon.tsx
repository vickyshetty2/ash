export default function ComingSoon() {
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SAMPLE_LAYERED_TEE-QXhP38sfpVtaVOTfUCL9wcLiQmLRAz.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px) brightness(0.3)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 
          className="text-4xl md:text-6xl font-bold text-white"
          style={{
            textShadow: `
              0 0 10px #fff,
              0 0 20px #fff,
              0 0 30px #fff,
              0 0 40px #ffffff,
              0 0 70px #ffffff
            `
          }}
        >
          Coming Soon
        </h1>
      </div>
    </div>
  )
}

