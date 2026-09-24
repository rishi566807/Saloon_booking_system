import React from 'react'

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[#0a0a0c] text-[#e0dfdf] flex items-center justify-center p-6 md:p-12 relative font-sans overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#ff5500] opacity-5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl w-full bg-[#121113] border border-[#262120] rounded-3xl p-8 md:p-12 shadow-2xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* About Image */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#2e2a2e] h-[380px]">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop" 
                alt="Salon Interior" 
                className="w-full h-full object-cover object-center filter brightness-95"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#231510] border border-[#3d2015] text-[#ff7733] text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
                About Studio Luxe
              </div>
              <span className="text-xs font-mono text-[#8e8c8e]">Designed by <strong className="text-white">Rishi</strong></span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Where artisan craftsmanship meets{' '}
              <span className="bg-gradient-to-r from-[#ff6b2b] via-[#ff5500] to-[#d93800] bg-clip-text text-transparent">
                effortless scheduling.
              </span>
            </h2>

            <p className="text-[#8e8c8e] text-sm md:text-base leading-relaxed mb-6">
              Studio Luxe is designed to simplify modern salon visits. Engineered by <strong>Rishi</strong>, this web application connects clients directly with real-time slot selection, eliminating wait times and scheduling friction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#181619] border border-[#2e2a2e] p-4 rounded-xl">
                <h3 className="text-white font-bold text-sm mb-1">Tailored Services</h3>
                <p className="text-[#8e8c8e] text-xs">Customized cuts, hot towel shaves, and grooming options.</p>
              </div>

              <div className="bg-[#181619] border border-[#2e2a2e] p-4 rounded-xl">
                <h3 className="text-white font-bold text-sm mb-1">Instant Express Route</h3>
                <p className="text-[#8e8c8e] text-xs">Direct API connections ensuring immediate booking status.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About