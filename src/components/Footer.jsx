import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Logo & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          {/* Logo */}
          <div className="flex flex-col">
            <span className="text-xs text-[#EEA824] uppercase tracking-[0.2em]">THE</span>
            <span className="text-3xl font-heading text-[#EEA824] font-bold leading-none">NAIL</span>
            <span className="text-3xl font-heading text-[#EEA824] font-bold leading-none">PROFESSOR<span className="text-xs align-top">TM</span></span>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto">
            <h3 className="text-white text-lg font-heading mb-4">Subscribe to our newsletter</h3>
            <div className="flex w-full md:w-96">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-[#1A1A1A] text-white px-4 py-3 outline-none border border-[#333] focus:border-[#EEA824] transition-colors"
              />
              <button className="bg-[#EEA824] hover:bg-[#C58917] text-black px-6 flex items-center justify-center transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#222] pb-16">
          {/* Column 1: Explore */}
          <div>
            <h4 className="text-white font-heading text-xl mb-6">Explore</h4>
            <ul className="space-y-4 text-[#888888] text-sm">
              <li><Link to="/gallery" className="hover:text-[#EEA824] transition-colors">Gallery</Link></li>
              <li><Link to="/policies" className="hover:text-[#EEA824] transition-colors">Policies</Link></li>
              <li><Link to="/blog" className="hover:text-[#EEA824] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 2: Phone */}
          <div>
            <h4 className="text-white font-heading text-xl mb-6">Phone</h4>
            <ul className="space-y-4 text-[#888888] text-sm">
              <li className="flex flex-col">
                <span>+234 123 456 7890</span>
                <span className="text-xs text-gray-500">(Calls only)</span>
              </li>
              <li className="flex flex-col">
                <span>+234 123 456 7890</span>
                <span className="text-xs text-gray-500">(Whatsapp chat only)</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Emails */}
          <div>
            <h4 className="text-white font-heading text-xl mb-6">Emails</h4>
            <ul className="space-y-4 text-[#888888] text-sm">
              <li><a href="mailto:customerservice@thenailprof.com" className="hover:text-[#EEA824]">customerservice@thenailprof.com</a></li>
              <li><a href="mailto:info@thenailprof.com" className="hover:text-[#EEA824]">info@thenailprof.com (Partnerships)</a></li>
            </ul>
          </div>

          {/* Column 4: Find us */}
          <div>
            <h4 className="text-white font-heading text-xl mb-6">Find us</h4>
            <ul className="space-y-4 text-[#888888] text-sm">
              <li>7-12 Rumens Road, Ikoyi, Lagos</li>
              <li>6 Akanni Bashorun Street, Off Grace Anjous Drive, Lekki Phase 1, Lagos</li>
              <li>Plot 10 Gabby Adeosun Street Lekki Phase 1, Lagos</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-[#888888]">
          <p>&copy; {new Date().getFullYear()}. All rights reserved</p>
          
          {/* Social Icons Restored Here */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#EEA824] transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#EEA824] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#EEA824] transition-colors">
              <Twitter size={20} /> {/* Using Twitter icon for Threads/X context usually */}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#EEA824] transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;