import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollRef = useRef(null);

  // High-quality, reliable, BRIGHT nail art images
  const galleryImages = [
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800',
    'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800',
    'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800',
    'https://images.unsplash.com/photo-1607006344380-b6775a0824a7?q=80&w=800', // Brighter red
    'https://images.unsplash.com/photo-1600007183804-8731d7a4b1b9?q=80&w=800', // Luxury white/gold
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800',
    'https://images.unsplash.com/photo-1583001809325-9ebfd61b4b76?q=80&w=800'
  ];

  const testimonials = [
    {
      name: 'Tope Bello',
      image: 'https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?q=80&w=400',
      text: 'Very easy booking process - the service was excellent. Clean salon and friendly staff. I will definitely be returning!',
    },
    {
      name: 'Nneka Okoro',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400',
      text: 'My previous acrylics were horrible, but the tech here was so patient. I love my new set! Amazing job.',
    },
    {
      name: 'Timi Cole',
      image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=400',
      text: 'Best pedicures we\'ve ever had! Highly recommend this boutique to anyone visiting Lagos.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Function to handle gallery scrolling
  const scrollGallery = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FCF1E0] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Manicure" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative z-10 bg-black/50 backdrop-blur-md p-10 md:p-20 w-full md:w-[55%]">
          <h1 className="text-white text-5xl md:text-7xl font-heading font-medium leading-[1.1] mb-8">
            More than a nail service, <br />
            <span className="italic">it's an experience</span>
          </h1>
          <Link to="/booking" className="inline-block bg-[#EEA824] hover:bg-[#C58917] text-white px-10 py-4 font-bold uppercase tracking-widest text-sm transition-all shadow-lg">
            Book an appointment
          </Link>
        </div>
      </section>

      {/* 2. CARE, COMFORT, & CRAFT */}
      <section className="py-24 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading mb-8">Care, Comfort, and Craft in Every Visit</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">Expert nail care, thoughtful service, and a welcoming environment — all designed to make every visit feel effortless.</p>
              <Link to="/about" className="w-14 h-14 rounded-full border border-[#EEA824] flex items-center justify-center group hover:bg-[#EEA824] transition-all">
                <ArrowRight className="text-[#EEA824] group-hover:text-black transition-colors" />
              </Link>
            </div>
            <div>
               <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" className="w-full h-[450px] object-cover rounded-sm shadow-2xl" alt="salon" />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800" className="w-full h-80 object-cover" alt="staff" />
            <img src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800" className="w-full h-80 object-cover" alt="service" />
          </div>
        </div>
      </section>

      {/* 3. EXPLORE OUR WORK (NO SCROLLBAR + FUNCTIONAL BUTTONS) */}
      <section className="bg-black py-24">
        <h2 className="text-4xl md:text-5xl font-heading text-white text-center mb-16">Explore our work</h2>
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar scroll-smooth"
        >
           {galleryImages.map((img, i) => (
             <div key={i} className="min-w-[300px] h-[350px] transition-transform duration-500 hover:scale-105">
               <img src={img} className="w-full h-full object-cover rounded shadow-lg" alt="gallery" />
             </div>
           ))}
        </div>
        
        {/* Functional Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-12">
           <button 
             onClick={() => scrollGallery('left')}
             className="w-12 h-12 rounded-full border border-[#EEA824] flex items-center justify-center cursor-pointer hover:bg-[#EEA824] group transition-all"
           >
              <ChevronLeft className="text-[#EEA824] group-hover:text-black" />
           </button>
           <button 
             onClick={() => scrollGallery('right')}
             className="w-12 h-12 rounded-full border border-[#EEA824] flex items-center justify-center cursor-pointer hover:bg-[#EEA824] group transition-all"
           >
              <ChevronRight className="text-[#EEA824] group-hover:text-black" />
           </button>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-16">Here’s what our customers are saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#FCF1E0] p-10 rounded-sm shadow-sm flex flex-col items-center text-center">
                <img src={t.image} className="w-24 h-24 rounded-full object-cover mb-6 border-2 border-[#EEA824]" alt={t.name} />
                <div className="flex gap-1 mb-4">
                   {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#EEA824] text-[#EEA824]" />)}
                </div>
                <p className="text-gray-700 italic mb-8">"{t.text}"</p>
                <h4 className="text-[#EEA824] font-bold uppercase tracking-widest text-sm">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SHOP OUR PRODUCTS (FIXED BROKEN IMAGE) */}
      <section className="py-24 bg-[#FCF1E0]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-heading mb-16 italic text-gray-900">Shop our products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: 1, name: "Luxury Hand Cream", price: "₦7,000.00", img: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=800" },
              { id: 2, name: "Nail Strengthener", price: "₦14,500.00", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800" },
              { id: 3, name: "Body Butter", price: "₦18,000.00", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800" }
            ].map((p) => (
              <Link to="/shop" key={p.id} className="group block text-left">
                <div className="aspect-[4/5] bg-gray-200 mb-6 overflow-hidden relative">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.name} />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-2 font-bold text-xs uppercase flex items-center gap-2">
                       <ShoppingBag size={16} /> Buy Now
                    </span>
                  </div>
                </div>
                <h4 className="font-heading text-2xl mb-1 text-gray-900">{p.name}</h4>
                <p className="text-[#EEA824] font-bold">{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;