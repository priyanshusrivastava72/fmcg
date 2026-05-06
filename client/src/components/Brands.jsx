import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Package, Handshake, Award, ArrowRight } from 'lucide-react';

import brand1 from '../assets/Companies/5.webp';
import brand2 from '../assets/Companies/6.webp';
import brand3 from '../assets/Companies/7.webp';
import brand4 from '../assets/Companies/8.webp';
import brand5 from '../assets/Companies/Untitled design (2).webp';

const stats = [
  { icon: ShieldCheck, text: '50+', subtext: 'Trusted Brands' },
  { icon: Package, text: '1000+', subtext: 'Products' },
  { icon: Handshake, text: '30+ Years', subtext: 'Strong Relationships' },
  { icon: Award, text: '100%', subtext: 'Genuine Products' },
];

const brands = [
  { name: 'Brand 1', logo: brand1 },
  { name: 'Brand 2', logo: brand2 },
  { name: 'Brand 3', logo: brand3 },
  { name: 'Brand 4', logo: brand4 },
  { name: 'Brand 5', logo: brand5 },
];

const Brands = () => {
  return (
    <section id="brands" className="py-24 bg-[#fcfdfc]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-8 bg-green-200"></div>
            <span className="bg-green-50 text-green-700 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">
              Our Partners
            </span>
            <div className="h-[2px] w-8 bg-green-200"></div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter">
            Brands <span className="text-green-600">We Deal With</span>
          </h2>
          
          <p className="text-lg text-gray-500 max-w-3xl mx-auto font-semibold leading-relaxed opacity-80">
            We are proud to be associated with India's most trusted FMCG brands. <br />
            Delivering quality products that millions of families rely on every day.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 justify-center">
              <div className="text-green-600">
                <stat.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <div className="text-xl font-black text-gray-900 leading-none">{stat.text}</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{stat.subtext}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Grid Container */}
        <div className="bg-white rounded-[40px] border border-gray-100 shadow-2xl p-12 lg:p-16 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-16 items-center">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center transition-all duration-500 group"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-28 w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Brands;

