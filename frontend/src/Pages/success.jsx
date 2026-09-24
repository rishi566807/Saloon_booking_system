import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight, HiCheckCircle } from 'react-icons/hi';

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // Set up a timer to count down every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      navigate('/'); // Redirect to home page after countdown
    }

    // Clear interval on unmount or tick
    return () => clearInterval(timer);
  }, [countdown, navigate]);

  return (
    <section className="min-h-screen bg-[#0a0a0c] text-[#e0dfdf] flex items-center justify-center p-6 relative font-sans overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff5500] opacity-10 blur-[160px] pointer-events-none rounded-full" />

      {/* Success Modal Card */}
      <div className="max-w-md w-full bg-[#121113] border border-[#262120] rounded-3xl p-8 md:p-10 shadow-2xl relative z-10 text-center flex flex-col items-center">
        
        {/* Animated Checkmark Badge */}
        <div className="w-20 h-20 rounded-full bg-[#231510] border border-[#3d2015] flex items-center justify-center text-[#ff5500] mb-6 shadow-lg shadow-[#ff5500]/20">
          <HiCheckCircle className="text-5xl animate-bounce" />
        </div>

        {/* Status Header */}
 

        <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-3">
          Appointment Booked{' '}
          <span className="bg-gradient-to-r from-[#ff6b2b] via-[#ff5500] to-[#d93800] bg-clip-text text-transparent">
            Successfully!
          </span>
        </h1>

        <p className="text-[#8e8c8e] text-sm leading-relaxed mb-6">
          Thank you for choosing Studio Luxe. Your salon reservation has been locked in. We look forward to seeing you!
        </p>

        {/* Countdown Pill */}
        <div className="bg-[#181619] border border-[#2e2a2e] px-4 py-2.5 rounded-xl text-xs text-[#8e8c8e] mb-8 w-full">
          Redirecting to homepage in <span className="text-white font-bold text-sm mx-1">{countdown}</span> seconds...
        </div>

        {/* Home Redirect Button */}
        <Link 
          to="/"
          className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ff6b2b] to-[#cc3700] hover:from-[#ff7b3d] hover:to-[#e63e00] text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#ff5500]/20 transition-all flex items-center justify-center gap-2 group"
        >
          <span>Go to Home Page</span>
          <HiOutlineArrowNarrowRight className="text-base group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Project Tag */}
        <p className="text-[11px] text-[#555255] mt-6">
          Studio Luxe Platform • Developed by <span className="text-[#ff7733]">Rishi</span>
        </p>

      </div>
    </section>
  );
};

export default Success;