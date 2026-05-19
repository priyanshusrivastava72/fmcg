import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Package, Handshake, Award, ArrowRight } from 'lucide-react';

import brand1 from '../assets/Companies/5.webp';
import brand2 from '../assets/Companies/6.webp';
import brand3 from '../assets/Companies/7.webp';
import brand4 from '../assets/Companies/8.webp';
import brand5 from '../assets/Companies/Untitled design (2).webp';

const commitment = [
  { 
    title: 'Quality Assurance', 
    desc: 'Every product goes through strict quality checks before reaching you.',
    icon: ShieldCheck
  },
  { 
    title: 'Timely Delivery', 
    desc: 'Our robust supply chain ensures your orders reach you on time, every time.',
    icon: Package
  },
  { 
    title: 'Wide Network', 
    desc: 'Connecting brands to the deepest corners of the market efficiently.',
    icon: Award
  },
  { 
    title: 'Strong Partnership', 
    desc: 'We believe in growing together with our brands and retail partners.',
    icon: Handshake
  },
];

const brands = [
  { name: 'Brand 1', logo: brand1 },
  { name: 'Brand 2', logo: brand2 },
  { name: 'Brand 3', logo: brand3 },
  { name: 'Brand 4', logo: brand4 },
  { name: 'Brand 5', logo: brand5 },
  { name: 'Brand 1', logo: brand1 },
  { name: 'Brand 2', logo: brand2 },
  { name: 'Brand 3', logo: brand3 },
  { name: 'Brand 4', logo: brand4 },
  { name: 'Brand 5', logo: brand5 },
];

const Brands = () => {
  return (
    <section id="brands" className="py-10 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-50/50 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[11px] font-black text-green-700 tracking-[0.2em] uppercase">Trusted Partners</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-[1.1]"
          >
            Powering Growth with <br />
            <span className="text-green-600">India's Leading Brands</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 font-bold leading-relaxed"
          >
            We take pride in our robust distribution network that connects <br className="hidden md:block" />
            world-class brands with millions of happy households across the nation.
          </motion.p>
        </div>

        {/* Logo Marquee */}
        <div className="relative mb-12 md:mb-20 overflow-hidden">
          {/* Edge Gradients for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex w-max">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 60, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-8 md:gap-24 py-6 px-4"
            >
              {/* Double the brands to create the infinite loop effect */}
              {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                <div 
                  key={i} 
                  className="w-36 sm:w-40 md:w-48 h-20 sm:h-24 md:h-28 hover:scale-105 transition-transform duration-300 cursor-pointer flex-shrink-0 flex items-center justify-center"
                >
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-w-full max-h-full object-contain drop-shadow-sm"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto border-t border-gray-100 pt-10 md:pt-16">
          {commitment.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-lg hover:border-transparent hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                <item.icon size={22} strokeWidth={2.5} />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-black text-gray-900 tracking-tight">{item.title}</h4>
                <p className="text-sm text-gray-600 font-bold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Brands;

