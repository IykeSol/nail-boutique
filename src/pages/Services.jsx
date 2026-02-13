import React, { useState } from 'react';
import { Info } from 'lucide-react';

// Data for all service categories
const servicesData = {
  "Manicures": [
    { name: "Basic Manicure", price: "₦12,500.00" },
    { name: "Luxury Paraffin Manicure", price: "₦13,500.00" },
    { name: "Luxury Manicure Plus", price: "₦14,500.00", desc: "with paraffin wax and additional sugar scrub" },
    { name: "Cleopatra Milk & Honey Manicure", price: "₦14,500.00", desc: "with milk & honey soak, scrub, massage cream & paraffin wax" },
    { name: "BH Signature Manicure", price: "₦14,000.00", desc: "Includes milk and honey soak, scrub and massage cream" },
  ],
  "Pedicures": [
    { name: "Classic Pedicure", price: "₦15,000.00" },
    { name: "Luxury Jelly Pedicure", price: "₦18,500.00", desc: "Therapeutic jelly soak for tired feet" },
    { name: "Callus Peel Pedicure", price: "₦20,000.00", desc: "Intensive treatment for hard skin removal" },
    { name: "Hot Stone Pedicure", price: "₦22,000.00", desc: "Relaxing massage with heated volcanic stones" },
  ],
  "Mani/Pedi Combos": [
    { name: "Classic Combo", price: "₦25,000.00" },
    { name: "Luxury Combo", price: "₦30,000.00", desc: "Complete pampering for hands and feet" },
    { name: "Express Combo", price: "₦20,000.00", desc: "Quick polish change and shaping for both" },
  ],
  "Nail Dip": [
    { name: "Dip Powder on Natural Nails", price: "₦10,000.00" },
    { name: "Dip Powder with Tips", price: "₦12,500.00" },
    { name: "Ombre Dip Powder", price: "₦15,000.00" },
  ],
  "Builder In A Bottle (BIAB)": [
    { name: "BIAB Overlay", price: "₦12,000.00", desc: "Strengthening gel layer for natural nails" },
    { name: "BIAB Extensions", price: "₦16,000.00" },
    { name: "BIAB Refill", price: "₦10,000.00" },
  ],
  "Natural Nail Wraps": [
    { name: "Silk Wrap Repair", price: "₦2,000.00", desc: "Per nail repair for splits" },
    { name: "Full Set Wraps", price: "₦15,000.00" },
  ],
  "Nail Extras": [
    { name: "Nail Art (Per Nail)", price: "₦1,000.00" },
    { name: "Chrome Finish", price: "₦3,000.00" },
    { name: "French Tips", price: "₦2,500.00" },
    { name: "Soak Off", price: "₦3,000.00" },
  ],
  "Kids Menu (ages 6-12)": [
    { name: "Princess Manicure", price: "₦6,000.00" },
    { name: "Princess Pedicure", price: "₦8,000.00" },
    { name: "Little Duo Combo", price: "₦12,000.00" },
  ],
  "Acrylic & Gel Systems": [
    { name: "Full Set Acrylic", price: "₦18,000.00" },
    { name: "Acrylic Refill", price: "₦12,000.00" },
    { name: "Hard Gel Extensions", price: "₦20,000.00" },
    { name: "Gel Polish Overlay", price: "₦8,000.00" },
  ]
};

const categories = Object.keys(servicesData);

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("Manicures");

  return (
    <div className="bg-[#FCF1E0] min-h-screen">
      
      {/* 1. Header Image Section (Restored like Original) */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop" 
          alt="Nail Services" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Text Content */}
        <div className="relative z-10 text-center text-white mt-16">
          <h1 className="text-5xl md:text-6xl font-heading mb-4">Our services</h1>
          <p className="text-sm md:text-base font-medium tracking-wide uppercase opacity-90">
            PLEASE NOTE THAT ALL SERVICES LISTED ARE EXCLUSIVE OF 7.5% VAT
          </p>
        </div>
      </div>

      {/* 2. Categories Menu (Clean, No Scrollbar) */}
      <div className="sticky top-20 z-30 bg-[#FCF1E0] pt-8 pb-4 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs md:text-sm uppercase tracking-wider transition-colors pb-1
                  ${activeCategory === cat 
                    ? 'text-[#EEA824] font-bold border-b-2 border-[#EEA824]' 
                    : 'text-[#1F1C17] hover:text-[#EEA824]'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Warning Box */}
      <div className="max-w-4xl mx-auto px-4 mt-12 mb-12">
        <div className="border border-[#EEA824]/50 p-4 flex items-start gap-3 text-[#1F1C17] text-sm">
          <Info size={18} className="text-[#EEA824] mt-0.5 flex-shrink-0" />
          <p>Performed on natural nails. Prices quoted include regular polish. Gel polish attracts an extra ₦10,500.</p>
        </div>
      </div>

      {/* 4. Dynamic Services List */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-20 min-h-[400px]">
        {servicesData[activeCategory].map((service, index) => (
          <div key={index} className="flex flex-col w-full animate-fadeIn">
            <div className="flex items-end justify-between w-full">
              <span className="text-[#1F1C17] font-bold text-lg relative z-10 bg-[#FCF1E0] pr-2">
                {service.name}
              </span>
              
              {/* Dotted Line */}
              <div className="flex-grow border-b-2 border-dotted border-gray-300 mb-1.5 mx-2"></div>
              
              <span className="text-[#1F1C17] font-bold relative z-10 bg-[#FCF1E0] pl-2">
                {service.price}
              </span>
            </div>
            {service.desc && (
              <p className="text-gray-500 text-xs mt-1 max-w-[80%]">
                {service.desc}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* 5. Bottom Call to Action */}
      <div className="relative w-full h-[500px]">
        <img 
          src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=2070" 
          alt="Salon Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white font-heading text-4xl md:text-5xl mb-8">
            Come get #NailedAtTheBoutique
          </h2>
          <button className="bg-[#EEA824] hover:bg-[#C58917] text-black font-medium px-8 py-3 rounded-sm transition-colors uppercase tracking-wide">
            Book an appointment
          </button>
        </div>
      </div>

    </div>
  );
};

export default Services;