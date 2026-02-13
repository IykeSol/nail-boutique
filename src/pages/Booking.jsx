import React, { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, MapPin, Clock, 
  Calendar, Check, User, Mail, Phone, Info, ChevronDown 
} from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [openAccordion, setOpenAccordion] = useState("MANICURES");
  
  // State for selections
  const [selection, setSelection] = useState({
    location: "The Nail Boutique - Ikoyi",
    address: "7 - 12 Rumens Road, Lagos, Ikoyi, LA, 106104",
    services: [],
    date: null, // Now dynamic
    time: null, // Now dynamic
    total: 0,
    userDetails: { firstName: "", lastName: "", email: "", phone: "" }
  });

  const locations = [
    { name: "The Nail Boutique - Ikoyi", address: "7 - 12 Rumens Road, Lagos, Ikoyi, LA, 106104", mapUrl: "https://maps.google.com/maps?q=7-12%20Rumens%20Road,%20Ikoyi,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed" },
    { name: "The Nail Boutique - Lekki", address: "6 Akanni Bashorun Street, Lekki, Eti Osa, LA, 106104", mapUrl: "https://maps.google.com/maps?q=6%20Akanni%20Bashorun%20Street,%20Lekki,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed" },
    { name: "The Nail Boutique - Beauty Hut", address: "Plot 10 Gabby Adeosun Street, Lekki, Eti Osa, LA, 106104", mapUrl: "https://maps.google.com/maps?q=Plot%2010%20Gabby%20Adeosun%20Street,%20Lekki,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed" }
  ];

  const morningTimes = ["09:00am", "10:00am", "11:00am", "11:30am"];
  const afternoonTimes = ["01:00pm", "02:00pm", "03:00pm", "04:00pm", "05:00pm", "06:00pm"];

  const serviceCategories = {
    "MANICURES": {
      info: "Performed on natural nails. Prices quoted include regular polish. Gel polish attracts an extra ₦10,500",
      items: [
        { id: 1, name: "Basic Manicure", time: "30 mins", price: 12500 },
        { id: 2, name: "Luxury Paraffin Manicure", time: "30 mins", price: 13500 },
        { id: 3, name: "Cleopatra Milk & Honey Manicure", time: "45 mins", price: 14500 }
      ]
    },
    "KIDS (ages 6-12)": {
      info: "Prices quoted include regular polish. Gel polish attracts an extra ₦6,000.",
      items: [
        { id: 4, name: "Princess Mani", time: "20 mins", price: 6000 },
        { id: 5, name: "Little Duo Combo", time: "40 mins", price: 11000 }
      ]
    },
    "PEDICURES": {
      info: "Prices quoted include regular polish. Gel polish attracts an extra ₦10,500",
      items: [
        { id: 6, name: "Dry Pedicure (waterless)", time: "30 mins", price: 19500 },
        { id: 7, name: "Basic Pedicure", time: "30 mins", price: 21000 }
      ]
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const toggleService = (service) => {
    const isSelected = selection.services.find(s => s.id === service.id);
    if (isSelected) {
      setSelection({
        ...selection,
        services: selection.services.filter(s => s.id !== service.id),
        total: selection.total - service.price
      });
    } else {
      setSelection({
        ...selection,
        services: [...selection.services, service],
        total: selection.total + service.price
      });
    }
  };

  const SummarySidebar = () => (
    <div className="hidden lg:block w-80 bg-white border border-gray-200 p-6 sticky top-24 self-start shadow-sm">
      <div className="mb-6">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Your Selection</h4>
        {selection.services.map(s => (
          <div key={s.id} className="flex items-start gap-3 mb-3">
            <Check size={16} className="text-[#EEA824] mt-1" />
            <div>
              <p className="text-sm font-bold text-gray-800">{s.name}</p>
              <p className="text-xs text-gray-500">₦{s.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
        <div className="flex items-start gap-3 border-t pt-4 mt-4">
          <MapPin size={18} className="text-gray-400 mt-1" />
          <div>
            <p className="text-sm font-bold text-gray-800">{selection.location}</p>
            <p className="text-xs text-gray-500">{selection.address}</p>
          </div>
        </div>
      </div>
      {(selection.date || selection.time) && (
        <div className="border-t pt-4 space-y-2">
           {selection.date && (
             <div className="flex items-center gap-3 text-sm text-gray-800">
               <Calendar size={18} className="text-gray-400" />
               <span>{selection.date} Feb 2025</span>
             </div>
           )}
           {selection.time && (
             <div className="flex items-center gap-3 text-sm text-gray-800">
               <Clock size={18} className="text-gray-400" />
               <span>{selection.time}</span>
             </div>
           )}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-[#f9f9f9] min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-8">
           {step > 1 && step < 5 && (
             <button onClick={prevStep} className="flex items-center text-gray-500 hover:text-black transition-colors">
               <ChevronLeft size={24} />
             </button>
           )}
           <h2 className="text-xl font-heading font-bold text-center flex-grow">
             {step === 1 && "Select a location"}
             {step === 2 && "Select services"}
             {step === 3 && "Day and time"}
             {step === 4 && "Enter your details"}
             {step === 5 && "Confirmed"}
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          
          <div className="flex-grow max-w-2xl">
            
            {/* STEP 1: LOCATION */}
            {step === 1 && (
              <div className="bg-white p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-grow space-y-6">
                  {locations.map((loc) => (
                    <label key={loc.name} className="flex items-start gap-4 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="location" 
                        checked={selection.location === loc.name}
                        onChange={() => setSelection({...selection, location: loc.name, address: loc.address})}
                        className="mt-1.5 accent-[#EEA824]"
                      />
                      <div>
                        <p className="font-bold text-gray-800 group-hover:text-[#EEA824] transition-colors">{loc.name}</p>
                        <p className="text-xs text-gray-500">{loc.address}</p>
                      </div>
                    </label>
                  ))}
                </div>
                <div className="w-full md:w-72 h-80 bg-gray-100 rounded overflow-hidden">
                  <iframe src={locations.find(l => l.name === selection.location).mapUrl} className="w-full h-full border-0"></iframe>
                </div>
              </div>
            )}

            {/* STEP 2: SERVICES */}
            {step === 2 && (
              <div className="space-y-4">
                {Object.keys(serviceCategories).map((catName) => (
                  <div key={catName} className="bg-white border border-gray-200">
                    <button onClick={() => setOpenAccordion(openAccordion === catName ? null : catName)} className="w-full flex items-center justify-between p-6">
                      <span className="font-bold text-[#EEA824]">{catName}</span>
                      <ChevronDown className={openAccordion === catName ? 'rotate-180' : ''} />
                    </button>
                    {openAccordion === catName && (
                      <div className="p-6 pt-0">
                        <p className="text-xs text-[#EEA824] italic mb-6">{serviceCategories[catName].info}</p>
                        <div className="space-y-4">
                          {serviceCategories[catName].items.map((item) => (
                            <label key={item.id} className={`flex items-center justify-between p-4 border transition-all cursor-pointer ${selection.services.some(s => s.id === item.id) ? 'border-[#EEA824] bg-orange-50/30' : 'border-gray-100'}`}>
                                <div className="flex items-center gap-4">
                                  <input type="checkbox" className="accent-[#EEA824]" checked={selection.services.some(s => s.id === item.id)} onChange={() => toggleService(item)} />
                                  <div><p className="font-bold text-sm">{item.name}</p><p className="text-xs text-gray-400">{item.time} • ₦{item.price.toLocaleString()}</p></div>
                                </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* STEP 3: DYNAMIC DAY AND TIME */}
            {step === 3 && (
              <div className="bg-white p-8 border border-gray-200">
                <div className="grid grid-cols-7 gap-2 mb-8 text-center text-xs font-bold text-gray-400">
                  <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                  {[...Array(28)].map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setSelection({...selection, date: i + 1})}
                      className={`h-10 w-10 rounded-full mx-auto flex items-center justify-center text-sm transition-all
                        ${selection.date === i + 1 ? 'bg-[#EEA824] text-white' : 'hover:bg-gray-100 text-gray-800'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t">
                  <div>
                    <h5 className="text-xs font-bold text-gray-400 uppercase mb-4">Morning</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {morningTimes.map(t => (
                        <button 
                          key={t}
                          onClick={() => setSelection({...selection, time: t})}
                          className={`py-3 border text-xs transition-all ${selection.time === t ? 'bg-[#EEA824] text-white border-[#EEA824]' : 'border-gray-100 hover:border-[#EEA824]'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-400 uppercase mb-4">Afternoon</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {afternoonTimes.map(t => (
                        <button 
                          key={t}
                          onClick={() => setSelection({...selection, time: t})}
                          className={`py-3 border text-xs transition-all ${selection.time === t ? 'bg-[#EEA824] text-white border-[#EEA824]' : 'border-gray-100 hover:border-[#EEA824]'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: DETAILS */}
            {step === 4 && (
              <div className="bg-white p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <input type="text" placeholder="First name" className="p-3 border rounded outline-none focus:border-[#EEA824]" />
                  <input type="text" placeholder="Last name" className="p-3 border rounded outline-none focus:border-[#EEA824]" />
                </div>
                <input type="email" placeholder="Email" className="w-full p-3 border rounded outline-none focus:border-[#EEA824] mb-6" />
                <div className="flex gap-4 mb-6">
                  <span className="p-3 border bg-gray-50 text-gray-500 rounded">+234</span>
                  <input type="text" placeholder="Mobile phone" className="flex-grow p-3 border rounded outline-none focus:border-[#EEA824]" />
                </div>
                <div className="bg-gray-50 p-4 h-40 overflow-y-auto text-xs text-gray-500 mb-6 border">
                  <h6 className="font-bold text-gray-800 mb-2 uppercase">Cancellation policy</h6>
                  <p className="mb-4">Cancellations are allowed up to 24 hours in advance.</p>
                  <h6 className="font-bold text-gray-800 mb-2 uppercase">Arrival policy</h6>
                  <p>Please arrive 10 mins early. No cash payments.</p>
                </div>
                <label className="flex items-center gap-3 text-sm cursor-pointer"><input type="checkbox" className="accent-[#EEA824]" /><span>I agree to the terms</span></label>
              </div>
            )}

            {/* STEP 5: CONFIRMATION */}
            {step === 5 && (
              <div className="bg-white p-12 border text-center">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"><Check size={32} /></div>
                <h3 className="text-3xl font-heading font-bold mb-2">See you soon!</h3>
                <p className="text-gray-500 mb-10">Your appointment for {selection.date} Feb at {selection.time} is confirmed.</p>
                <button onClick={() => setStep(1)} className="w-full py-3 bg-[#EEA824] text-white font-bold rounded">Return to website</button>
              </div>
            )}

            {step < 5 && (
              <button 
                onClick={nextStep}
                disabled={(step === 2 && selection.services.length === 0) || (step === 3 && (!selection.date || !selection.time))}
                className={`w-full mt-8 py-4 bg-[#EEA824] text-white font-bold uppercase tracking-widest transition-all
                  ${((step === 2 && selection.services.length === 0) || (step === 3 && (!selection.date || !selection.time))) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#C58917]'}
                `}
              >
                {step === 4 ? "Book" : "Continue"}
              </button>
            )}

          </div>

          {step < 5 && <SummarySidebar />}

        </div>
      </div>
    </div>
  );
};

export default Booking;