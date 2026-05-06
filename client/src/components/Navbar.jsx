import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex flex-col leading-none">
            <span className="text-2xl font-extrabold text-green-800 tracking-tight">Shreeji</span>
            <span className="text-[10px] font-bold text-gray-500 tracking-[0.3em] uppercase -mt-1">Distributors</span>
          </div>
          <div className="hidden md:flex space-x-8 items-center h-full">
            <a href="#" className="text-gray-600 hover:text-green-700 font-semibold transition-colors h-full flex items-center">Home</a>
            <a href="#about" className="text-gray-600 hover:text-green-700 font-semibold transition-colors h-full flex items-center">About Us</a>
            <a href="#products" className="text-gray-600 hover:text-green-700 font-semibold transition-colors h-full flex items-center">Our Products</a>
            <a href="#services" className="text-gray-600 hover:text-green-700 font-semibold transition-colors h-full flex items-center">Services</a>
            <a href="#brands" className="text-gray-600 hover:text-green-700 font-semibold transition-colors h-full flex items-center">Brands</a>
            <a href="#contact" className="text-gray-600 hover:text-green-700 font-semibold transition-colors h-full flex items-center">Contact Us</a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#apply" 
              className="bg-[#0f7643] text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-[#0d6439] transition-all shadow-md"
            >
              Become a Distributor <span>&rarr;</span>
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
