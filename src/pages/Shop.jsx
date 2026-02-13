import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext'; // <--- 1. Import the hook

const Shop = () => {
  const { addToCart } = useCart(); // <--- 2. Get the addToCart function

  const products = [
    {
      id: 1,
      name: 'Luxury Hand Cream',
      price: 7000,
      image: 'https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?q=80&w=800',
    },
    {
      id: 2,
      name: 'Nail Strengthener',
      price: 14500,
      image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800',
    },
    {
      id: 3,
      name: 'Cuccio Hand & Body Butter',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800',
    },
    {
      id: 4,
      name: 'Botanical Cuticle Oil',
      price: 6500,
      image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?q=80&w=800',
    },
    {
      id: 5,
      name: 'Gentle Polish Remover',
      price: 5000,
      image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?q=80&w=800',
    },
    {
      id: 6,
      name: 'Nail Boutique Gift Set',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800',
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="pt-20 bg-[#FCF1E0] min-h-screen">
      {/* Hero Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-heading mb-4 italic text-[#111111]">Shop our products</h1>
          <p className="text-gray-500 uppercase tracking-widest text-sm">Professional care for your nails at home</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col">
                {/* Product Image */}
                <div className="aspect-[4/5] overflow-hidden bg-white relative shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-white text-black px-8 py-3 font-bold text-xs uppercase tracking-tighter shadow-xl"
                    >
                      Quick Add +
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="pt-6 text-left">
                  <h3 className="text-2xl font-heading text-[#111111] mb-1">{product.name}</h3>
                  <p className="text-lg font-bold text-[#EEA824] mb-4">{formatPrice(product.price)}</p>
                  
                  <button 
                    onClick={() => addToCart(product)} // <--- 3. Trigger the function
                    className="w-full border border-black hover:bg-black hover:text-white py-3 font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;