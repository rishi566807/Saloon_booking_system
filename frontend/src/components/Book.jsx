import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Book = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const { data } = await axios.post(
        'http://localhost:5000/api/v1/appointment/send', 
        { firstName, lastName, phoneNumber, service, date, time },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      ); 
      
      toast.success(data.message || 'Appointment booked successfully!');

      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setService('');
      setDate('');
      setTime('');

      navigate('/success');
    } catch (error) {
      console.log("Submit Error:", error.response?.data);
      toast.error(error.response?.data?.message || 'Failed to submit booking.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book" className="min-h-screen bg-[#0a0a0c] text-[#e0dfdf] flex items-center justify-center p-6 md:p-12 relative font-sans overflow-hidden">
      
      <div className="max-w-3xl w-full bg-[#121113] border border-[#262120] rounded-3xl p-8 md:p-12 shadow-2xl relative z-10">
        
        <div className="text-center max-w-lg mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#231510] border border-[#3d2015] text-[#ff7733] text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse" />
            Instant Reservation
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
            Book an{' '}
            <span className="bg-gradient-to-r from-[#ff6b2b] via-[#ff5500] to-[#d93800] bg-clip-text text-transparent">
              Appointment
            </span>
          </h2>

          <p className="text-[#8e8c8e] text-sm">
            Select your service and date below. Built & managed by <strong className="text-white">Rishi</strong>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-wider text-[#8e8c8e]">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full bg-[#181619] border border-[#2e2a2e] focus:border-[#ff5500] text-white text-sm rounded-xl px-4 py-3.5 outline-none transition-colors placeholder:text-[#555255]"
              />  
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-wider text-[#8e8c8e]">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full bg-[#181619] border border-[#2e2a2e] focus:border-[#ff5500] text-white text-sm rounded-xl px-4 py-3.5 outline-none transition-colors placeholder:text-[#555255]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber" className="text-xs font-semibold uppercase tracking-wider text-[#8e8c8e]">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="w-full bg-[#181619] border border-[#2e2a2e] focus:border-[#ff5500] text-white text-sm rounded-xl px-4 py-3.5 outline-none transition-colors placeholder:text-[#555255]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-[#8e8c8e]">
                Select Service
              </label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="w-full bg-[#181619] border border-[#2e2a2e] focus:border-[#ff5500] text-white text-sm rounded-xl px-4 py-3.5 outline-none transition-colors cursor-pointer"
              >
                <option value="" disabled className="bg-[#121113] text-[#8e8c8e]">Select Service</option>
                <option value="Haircut" className="bg-[#121113] text-white">Haircut & Styling</option>
                <option value="Shaving" className="bg-[#121113] text-white">Shaving</option>
                <option value="Facial" className="bg-[#121113] text-white">Facial Treatment</option>
                <option value="Hair Coloring" className="bg-[#121113] text-white">Hair Coloring</option>
                <option value="Beard Trim" className="bg-[#121113] text-white">Beard Trim & Sculpt</option>
                <option value="Massage" className="bg-[#121113] text-white">Scalp Massage</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="text-xs font-semibold uppercase tracking-wider text-[#8e8c8e]">
                Date
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-[#181619] border border-[#2e2a2e] focus:border-[#ff5500] text-white text-sm rounded-xl px-4 py-3.5 outline-none transition-colors color-scheme-dark"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="time" className="text-xs font-semibold uppercase tracking-wider text-[#8e8c8e]">
                Time
              </label>
              <input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full bg-[#181619] border border-[#2e2a2e] focus:border-[#ff5500] text-white text-sm rounded-xl px-4 py-3.5 outline-none transition-colors color-scheme-dark"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#ff6b2b] to-[#cc3700] hover:from-[#ff7b3d] hover:to-[#e63e00] text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-[#ff5500]/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{loading ? 'Submitting...' : 'Confirm Appointment'}</span>
              {!loading && (
                <HiOutlineArrowNarrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>

        </form>

      </div>
    </section>
  )
}

export default Book;