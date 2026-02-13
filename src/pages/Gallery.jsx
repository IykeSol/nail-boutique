import React from 'react'; // <--- Add this!
import { Link } from 'react-router-dom';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800',
    'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800',
    'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
    'https://images.unsplash.com/photo-1583001809325-9ebfd61b4b76?w=800',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800',
    'https://images.unsplash.com/photo-1599948128020-9a44d4345b8a?w=800',
    'https://images.unsplash.com/photo-1604902396830-aca29e19b067?w=800',
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading mb-4">Gallery</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded hover:opacity-90 transition-opacity">
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
