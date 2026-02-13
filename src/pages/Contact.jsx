import React, { useState } from 'react';

const Contact = () => {
  // 1. Data for Locations and Maps
  const locations = [
    { 
      id: 'ikoyi', 
      label: 'Ikoyi', 
      address: '7 - 12 Rumens Rd', 
      mapUrl: "https://maps.google.com/maps?q=7-12%20Rumens%20Road,%20Ikoyi,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed" 
    },
    { 
      id: 'lekki', 
      label: 'Lekki', 
      address: '6 Akanni Bashorun St', 
      mapUrl: "https://maps.google.com/maps?q=6%20Akanni%20Bashorun%20Street,%20Lekki,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed" 
    },
    { 
      id: 'beauty-hut', 
      label: 'Inside Beauty Hut', 
      address: 'Plot 10 Gabby Adeosun St', 
      mapUrl: "https://maps.google.com/maps?q=Plot%2010%20Gabby%20Adeosun%20Street,%20Lekki,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed" 
    }
  ];

  const [activeLoc, setActiveLoc] = useState(locations[0]);

  return (
    <div className="pt-20 bg-[#FCF1E0] min-h-screen">
      
      {/* SECTION 1: FIND US HERE & MAPS */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-heading mb-12 text-gray-900">Find us here</h1>
          
          {/* Dynamic Map Container */}
          <div className="w-full h-[500px] bg-gray-200 mb-8 shadow-inner overflow-hidden border border-gray-100">
            <iframe 
              src={activeLoc.mapUrl}
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>

          {/* Location Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveLoc(loc)}
                className={`px-8 py-3 border transition-all duration-300 text-sm font-medium tracking-wide
                  ${activeLoc.id === loc.id 
                    ? 'bg-black text-white border-black' 
                    : 'bg-transparent text-black border-black hover:bg-black/5'
                  }`}
              >
                <span className="font-bold">{loc.label}</span> 
                {activeLoc.id === loc.id && <span className="ml-2 opacity-80">{loc.address}</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: EMAILS & PHONES (BLACK BACKGROUND) */}
      <section className="bg-[#111111] text-white py-24 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Emails Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-start border-b border-gray-800 pb-16 mb-16">
            <h2 className="text-4xl md:text-5xl font-heading">Emails</h2>
            <div className="space-y-2">
              <h4 className="font-bold text-lg">Enquiries</h4>
              <a href="mailto:customerservice@thenailprof.com" className="text-gray-400 hover:text-[#EEA824] transition-colors">
                customerservice@thenailprof.com
              </a>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-lg">Partnerships</h4>
              <a href="mailto:info@thenailprof.com" className="text-gray-400 hover:text-[#EEA824] transition-colors">
                info@thenailprof.com
              </a>
            </div>
          </div>

          {/* Phones Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <h2 className="text-4xl md:text-5xl font-heading">Phones</h2>
            <div className="space-y-2">
              <h4 className="font-bold text-lg">Calls only</h4>
              <p className="text-gray-400">+234 123 456 7890</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-lg">Whatsapp Chat only</h4>
              <p className="text-gray-400">+234 123 456 7890</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: WORKING HOURS (FROSTED GLASS ON IMAGE) */}
      <section className="relative h-[80vh] w-full flex items-center justify-center">
        {/* Background Salon Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Salon Interior" 
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Glassmorphism Working Hours Box */}
        <div className="relative z-10 bg-black/40 backdrop-blur-md p-12 md:p-20 text-white text-center w-full max-w-xl">
          <h2 className="text-4xl md:text-5xl font-heading mb-10">Working hours</h2>
          
          <div className="space-y-6 text-lg tracking-wide">
            <div>
              <p className="font-bold text-[#EEA824] uppercase text-sm tracking-widest mb-1">Mon</p>
              <p>Closed</p>
            </div>
            <div>
              <p className="font-bold text-[#EEA824] uppercase text-sm tracking-widest mb-1">Tue - Fri</p>
              <p>10:00AM - 7:00PM</p>
            </div>
            <div>
              <p className="font-bold text-[#EEA824] uppercase text-sm tracking-widest mb-1">Sat</p>
              <p>9:00AM - 7:00PM</p>
            </div>
            <div>
              <p className="font-bold text-[#EEA824] uppercase text-sm tracking-widest mb-1">Sun</p>
              <p>12:00PM - 6:00PM</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;