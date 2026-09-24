import React from 'react'

const Services = () => {
  const salonServices = [
    {
      title: 'Haircut & Custom Styling',
      description: 'Precision scissor and fade techniques completed with scalp washing and styling.',
      tag: 'Hair Care',
      image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Beard Sculpting & Hot Towel',
      description: 'Razor alignment, beard oil treatments, and warm towel facial preparation.',
      tag: 'Beard Care',
      image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Facial Therapy & Skin Care',
      description: 'Exfoliating cleansing designed to rejuvenate skin and remove impurities.',
      tag: 'Skin Care',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    },
    {
      title: 'Executive Full Package',
      description: 'Combination of Haircut, Beard Trim, Facial treatment, and scalp massage.',
      tag: 'Complete Care',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
    },
  ]

  return (
    <section id="services" className="min-h-screen bg-[#0a0a0c] text-[#e0dfdf] flex items-center justify-center p-6 md:p-12 relative font-sans overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff5500] opacity-5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl w-full relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#231510] border border-[#3d2015] text-[#ff7733] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff5500]" />
            Salon Menu • Designed by Rishi
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Service Menu &{' '}
            <span className="bg-gradient-to-r from-[#ff6b2b] via-[#ff5500] to-[#d93800] bg-clip-text text-transparent">
              Treatments.
            </span>
          </h2>
          <p className="text-[#8e8c8e] text-sm md:text-base">
            Explore our professional range of hair, beard, and skin treatments.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {salonServices.map((service, index) => (
            <div
              key={index}
              className="bg-[#121113] border border-[#262120] rounded-3xl overflow-hidden flex flex-col sm:flex-row transition-all hover:border-[#ff5500]/50 group shadow-lg"
            >
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="sm:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#1b191c] border border-[#2e2a2e] text-[#ff7733] text-[11px] font-semibold">
                    {service.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white mt-3 mb-2 group-hover:text-[#ff7733] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#8e8c8e] text-xs leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <a 
                  href="#book"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#ff7733] hover:text-white transition-colors"
                >
                  Book This Service &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services