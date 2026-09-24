import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#0a0a0c] text-[#e0dfdf] flex items-center justify-center p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff5500] opacity-5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#231510] border border-[#3d2015] text-[#ff7733] text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            Full-Stack Salon Platform • By Rishi
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Elevate Your Style with{' '}
            <span className="bg-gradient-to-r from-[#ff6b2b] via-[#ff5500] to-[#d93800] bg-clip-text text-transparent">
              Precision Grooming.
            </span>
          </h1>

          <p className="text-[#8e8c8e] text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            Experience tailored haircuts, beard sculpting, and revitalizing skin care in a luxury atmosphere. Check live availability and secure your slot in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#book"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff6b2b] to-[#cc3700] hover:from-[#ff7b3d] hover:to-[#e63e00] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#ff5500]/25 transition-all text-center"
            >
              Book Reservation
            </a>
            
            <a 
              href="#services"
              className="px-8 py-4 rounded-full bg-[#121113] hover:bg-[#1c1a1d] border border-[#262120] text-white font-semibold text-sm transition-all text-center"
            >
              View Services
            </a>
          </div>

          {/* Social Proof Bar */}
          <div className="mt-12 pt-8 border-t border-[#262120] flex items-center gap-8 text-xs text-[#8e8c8e]">
            <div>
              <strong className="block text-xl font-bold text-white">4.9 / 5.0</strong>
              Client Rating
            </div>
            <div className="h-8 w-[1px] bg-[#262120]" />
            <div>
              <strong className="block text-xl font-bold text-white">100%</strong>
              Guaranteed Slots
            </div>
          </div>

        </div>

        {/* Right Column: Imagery Grid */}
        <div className="lg:col-span-5 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden border border-[#262120] shadow-2xl bg-[#121113]">
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop" 
              alt="Barber crafting haircut" 
              className="w-full h-[480px] object-cover object-center filter brightness-90 hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating Glass Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#0a0a0c]/85 backdrop-blur-md border border-[#262120] p-4 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">Master Barber Station</p>
                <p className="text-[11px] text-[#8e8c8e]">Sanitized equipment & premium products</p>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero