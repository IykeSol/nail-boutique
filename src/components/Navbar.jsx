import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext'; // <--- 1. Import the cart hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart(); // <--- 2. Get the current cart count

  return (
    <nav className="bg-black text-white fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-xs text-[#EEA824] uppercase tracking-wider">THE</span>
            <span className="text-2xl font-heading text-[#EEA824] font-bold leading-none">NAIL</span>
            <span className="text-2xl font-heading text-[#EEA824] font-bold leading-none">PROFESSOR</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-white hover:text-[#EEA824] transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-[#EEA824] transition-colors">
              Services
            </Link>
            <Link to="/shop" className="text-white hover:text-[#EEA824] transition-colors">
              Shop
            </Link>
            
            {/* Desktop Cart Link with Badge */}
            <Link to="/cart" className="relative text-white hover:text-[#EEA824] transition-colors flex items-center gap-2">
              <ShoppingCart size={20} />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#EEA824] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link 
              to="/contact" 
              className="bg-[#EEA824] hover:bg-[#C58917] text-black px-6 py-2 rounded transition-colors font-medium"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link 
              to="/about" 
              className="block text-white hover:text-[#EEA824] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block text-white hover:text-[#EEA824] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/shop" 
              className="block text-white hover:text-[#EEA824] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            
            {/* Mobile Cart Link with Badge */}
            <Link 
              to="/cart" 
              className="relative text-white hover:text-[#EEA824] transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="absolute top-0 left-4 bg-[#EEA824] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link 
              to="/contact" 
              className="block bg-[#EEA824] hover:bg-[#C58917] text-black px-6 py-2 rounded transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;