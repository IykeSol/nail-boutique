import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { PaystackButton } from 'react-paystack';
import { useCart } from '../context/CartContext'; // <--- IMPORT CONTEXT

const Cart = () => {
  // 1. USE THE REAL CLOUD DATA
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '' });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

 const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  const componentProps = {
    email: customerInfo.email,
    amount: cartTotal * 100, // Paystack uses Kobo
    metadata: { name: customerInfo.name, phone: customerInfo.phone },
    publicKey,
    text: 'Proceed to Payment',
    onSuccess: (ref) => {
      alert(`Success! Ref: ${ref.reference}`);
      clearCart(); // Wipes cart after payment
    },
    onClose: () => alert('Payment cancelled'),
  };

  return (
    <div className="pt-20 bg-[#FCF1E0] min-h-screen">
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-heading mb-4 italic">Shopping Cart</h1>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {cart.length === 0 ? (
            <div className="text-center py-20 bg-white shadow-sm border border-gray-100">
              <ShoppingBag size={64} className="mx-auto text-gray-200 mb-6" />
              <p className="text-2xl text-gray-400 mb-8 font-heading">Your cart is empty</p>
              <Link to="/shop" className="bg-[#EEA824] text-white px-10 py-4 font-bold uppercase tracking-widest text-sm">
                Go to Shop
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* LIST OF REAL ITEMS */}
              <div className="lg:col-span-2 space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="bg-white p-6 flex gap-6 shadow-sm items-center border border-gray-50">
                    <img src={item.image} alt={item.name} className="w-24 h-32 object-cover" />
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-[#EEA824] font-bold text-lg mb-4">{formatPrice(item.price)}</p>
                      
                      <div className="flex items-center gap-6">
                        <div className="flex items-center border border-gray-200">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-2 hover:bg-gray-50"><Minus size={16} /></button>
                          <span className="px-4 font-bold">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-2 hover:bg-gray-50"><Plus size={16} /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right hidden md:block">
                      <p className="text-xl font-bold">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CHECKOUT SIDEBAR */}
              <div className="bg-white p-8 h-fit shadow-lg border-t-4 border-[#EEA824]">
                <h2 className="text-3xl font-heading mb-8">Order Summary</h2>
                <div className="space-y-4 mb-8 border-b pb-8">
                  <div className="flex justify-between text-gray-500"><span>Subtotal</span><span>{formatPrice(cartTotal)}</span></div>
                  <div className="flex justify-between text-gray-500"><span>VAT (7.5%)</span><span>{formatPrice(cartTotal * 0.075)}</span></div>
                  <div className="flex justify-between text-xl font-bold text-gray-900 pt-4 border-t">
                    <span>Total</span><span>{formatPrice(cartTotal * 1.075)}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-bold uppercase tracking-widest text-xs text-gray-400">Delivery Information</h3>
                  <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-100 outline-none focus:border-[#EEA824]" value={customerInfo.name} onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})} />
                  <input type="email" placeholder="Email" className="w-full p-3 border border-gray-100 outline-none focus:border-[#EEA824]" value={customerInfo.email} onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})} />
                  <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-100 outline-none focus:border-[#EEA824]" value={customerInfo.phone} onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})} />
                </div>

                {customerInfo.name && customerInfo.email && customerInfo.phone ? (
                  <PaystackButton {...componentProps} className="w-full bg-[#EEA824] hover:bg-[#C58917] text-white py-4 font-bold uppercase tracking-widest transition-all" />
                ) : (
                  <button disabled className="w-full bg-gray-100 text-gray-400 py-4 font-bold uppercase tracking-widest cursor-not-allowed">Complete Form</button>
                )}
              </div>

            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;