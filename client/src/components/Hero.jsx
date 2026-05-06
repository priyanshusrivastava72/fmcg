import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Shield, Users, ShoppingCart, Globe, Truck, Award, TrendingUp } from 'lucide-react';
import indiaMap from '../assets/india-map.png';

const Hero = () => {
  const stats = [
    { id: 1, value: "30+", title: "Years Experience", icon: Award },
    { id: 2, value: "500+", title: "Distributors Pan India", icon: Users },
    { id: 3, value: "1000+", title: "Retailers Served", icon: ShoppingCart },
    { id: 4, value: "7", title: "States Covered", icon: Globe },
  ];



  const activePoints = [
    { name: 'Haryana', top: 32.6, left: 29.7 },
    { name: 'Rajasthan', top: 43.4, left: 18.6 },
    { name: 'Uttar Pradesh', top: 37.3, left: 39.5 },
    { name: 'Madhya Pradesh', top: 54.0, left: 34.5 },
    { name: 'Bihar', top: 43.9, left: 59.8 },
    { name: 'West Bengal', top: 53.9, left: 67.5 },
    { name: 'Assam', top: 38.2, left: 87.0 },
  ];

  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-white">
      {/* Background Dot Pattern */}
      <div className="absolute top-24 right-12 opacity-[0.05] z-0 pointer-events-none">
         <div className="grid grid-cols-12 gap-6">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
            ))}
         </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Content */}
          <div className="lg:w-1/2 mt-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <Shield size={18} className="text-green-600 fill-green-600/10" />
              <span className="text-[11px] font-black text-green-700 tracking-[0.2em] uppercase">30+ Years of Trust & Excellence</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-[1000] text-gray-900 leading-[1.1] mb-8 tracking-tighter"
            >
              Delivering FMCG <br className="hidden md:block" />
              Excellence Across <br className="hidden md:block" />
              <span className="text-green-600">Different States</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed font-semibold opacity-80"
            >
              We are committed to supplying top quality FMCG products across multiple states with a strong distribution network.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-20"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#apply" 
                className="bg-[#0f7643] text-white px-8 py-4 rounded-xl font-extrabold flex items-center gap-3 shadow-xl shadow-green-900/20 transition-all text-base"
              >
                Apply as Distributor <span>&rarr;</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="border-[3px] border-gray-100 text-gray-600 px-8 py-4 rounded-xl font-extrabold hover:border-green-600 hover:text-green-700 hover:bg-green-50 transition-all text-base"
              >
                Contact Sales Team
              </motion.a>
            </motion.div>

            {/* Integrated Stats Card Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white border border-gray-50 p-6 rounded-[24px] shadow-sm flex flex-col items-start"
                >
                  <div className="text-green-500 mb-4"><stat.icon size={22} /></div>
                  <h3 className="text-3xl font-black text-gray-900 mb-1 tracking-tighter leading-none">{stat.value}</h3>
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-tight">{stat.title}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: India Map Image */}
          <div className="lg:w-1/2 relative h-[700px] w-full flex items-center justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="relative w-full max-w-[800px] h-full flex items-center justify-center"
            >
              <img 
                src={indiaMap} 
                alt="Our Service Network in India" 
                className="h-full w-full object-contain drop-shadow-2xl filter brightness-[1.02]"
              />

              {/* Pulse Wave Effects on Image Dots */}
              {activePoints.map((point, index) => (
                <div 
                  key={index} 
                  className="absolute pointer-events-none" 
                  style={{ top: `${point.top}%`, left: `${point.left}%` }}
                >
                  {/* Multiple Concentric 3D Waves */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-4 h-4 rounded-full border border-red-500/60 animate-[ping_2s_linear_infinite] opacity-60"></div>
                    <div className="absolute w-8 h-8 rounded-full border border-red-400/40 animate-[ping_2.5s_linear_infinite] delay-300 opacity-40"></div>
                    <div className="absolute w-12 h-12 rounded-full border border-red-300/20 animate-[ping_3s_linear_infinite] delay-700 opacity-20"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
