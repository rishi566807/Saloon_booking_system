import React from 'react'

const Nav = () => {
  return (
    <nav className="w-full bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#262120] sticky top-0 z-50 px-6 py-4 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#ff3800] to-[#ff6b2b] flex items-center justify-center shadow-lg shadow-[#ff5500]/20 group-hover:scale-105 transition-transform">
            <span className="text-black font-extrabold text-sm">S</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-white leading-none">
              STUDIO LUXE
            </span>
            <span className="text-[10px] text-[#ff7733] font-medium tracking-widest uppercase mt-0.5">
              By Rishi
            </span>
          </div>
        </a>

        {/* Navigation Links with Hash Routing */}
        <div className="hidden md:flex items-center gap-1 bg-[#121113] border border-[#262120] px-3 py-1.5 rounded-full">
          <a href="#home" className="px-4 py-1.5 text-xs font-semibold text-white hover:text-[#ff7733] transition-colors">
            Home
          </a>
          <a href="#about" className="px-4 py-1.5 text-xs font-semibold text-[#8e8c8e] hover:text-white transition-colors">
            About
          </a>
          <a href="#services" className="px-4 py-1.5 text-xs font-semibold text-[#8e8c8e] hover:text-white transition-colors">
            Services
          </a>
          <a href="#book" className="px-4 py-1.5 text-xs font-semibold text-[#8e8c8e] hover:text-white transition-colors">
            Book Appointment
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a 
            href="#book"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b2b] to-[#cc3700] hover:from-[#ff7b3d] hover:to-[#e63e00] text-white font-bold text-xs tracking-wider shadow-md shadow-[#ff5500]/20 transition-all transform hover:-translate-y-0.5"
          >
            BOOK NOW
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Nav