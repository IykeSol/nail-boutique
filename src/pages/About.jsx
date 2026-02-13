import React from 'react'; // <--- Add this!
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero with Image */}
      <section 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200')"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-heading text-white">Our story</h1>
      </section>

      {/* About Content */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800"
                alt="Nail Boutique interior"
                className="w-full h-96 object-cover rounded"
              />
            </div>
            <div className="text-white">
              <p className="text-lg leading-relaxed mb-6">
                The Nail Boutique is a premium nail salon concept based in Lagos, Nigeria, built on the belief that exceptional nail care should be both accessible and thoughtfully delivered.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white order-2 md:order-1">
              <p className="text-lg leading-relaxed">
                Founded in 2017, we have focused on skilled craftsmanship, structured training and genuine customer care — investing in our team to ensure consistency and quality across every service. Today, The Nail Boutique is known for its welcoming spaces, professional standards, and beautiful results.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=600"
                  alt="Nail polish collection"
                  className="w-full h-64 object-cover rounded"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600"
                  alt="Salon seating"
                  className="w-full h-64 object-cover rounded mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
