import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Shield, Users, ShoppingCart, Globe, Truck, Award, TrendingUp } from 'lucide-react';
import indiaMap from '../assets/fac5c8f6-2029-442f-93ff-66c4d9cfc1fd.webp';

const Hero = () => {



  const activePoints = [
    { name: 'Rajasthan', top: 41.0, left: 15.3 },
    { name: 'Uttar Pradesh', top: 33.0, left: 37.0 },
    { name: 'Madhya Pradesh', top: 55.0, left: 32.0 },
    { name: 'Bihar', top: 41.9, left: 58.0 },
    { name: 'West Bengal', top: 55.0, left: 65.9 },
    { name: 'Assam', top: 34.3, left: 86.2 },
  ];

  const floatingStats = [
    { 
      id: 1, 
      icon: Users, 
      label: '1000+ Retailers', 
      sub: 'Connected Daily', 
      pos: 'top-[10%] -left-[10%]', 
      delay: 0,
      color: 'green'
    },
    { 
      id: 2, 
      icon: Truck, 
      label: '24/7 Delivery', 
      sub: 'Express Supply Chain', 
      pos: 'bottom-[15%] -left-[5%]', 
      delay: 0.5,
      color: 'blue'
    },
    { 
      id: 3, 
      icon: Award, 
      label: '30+ Years', 
      sub: 'Unmatched Trust', 
      pos: 'top-[25%] -right-[15%]', 
      delay: 1,
      color: 'red'
    },
    { 
      id: 4, 
      icon: TrendingUp, 
      label: '15+ States', 
      sub: 'Growing Network', 
      pos: 'bottom-[10%] -right-[10%]', 
      delay: 1.5,
      color: 'orange'
    },
  ];

  return (
    <section className="relative pt-20 md:pt-32 pb-10 md:pb-24 overflow-hidden bg-white">
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
              Connecting Retailers <br className="hidden md:block" />
              with India's Top <br className="hidden md:block" />
              <span className="text-green-600">FMCG Brands</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed font-bold"
            >
              We are committed to supplying top quality FMCG products across multiple states with a strong distribution network.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10 md:mb-20"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#apply" 
                className="bg-[#0f7643] text-white px-8 py-4 rounded-xl font-extrabold flex items-center gap-3 shadow-xl shadow-green-900/20 transition-all text-base"
              >
                Become an Authorized Distributor <span>&rarr;</span>
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="border-[3px] border-gray-100 text-gray-700 px-8 py-4 rounded-xl font-extrabold hover:border-green-600 hover:text-green-700 hover:bg-green-50 transition-all text-base"
              >
                Apply for Partnership
              </motion.a>
            </motion.div>


          </div>

          <div className="lg:w-1/2 relative w-full flex items-center justify-center lg:justify-end py-12">
            {/* Background Glows */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-40 pointer-events-none z-0"
              style={{ background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.15) 0%, transparent 70%)' }}
            ></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative inline-block mt-8 lg:mt-0"
            >
              {/* Mobile Trust Badge - Above Fold */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 z-30 flex lg:hidden items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl border border-gray-100 w-max"
              >
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                  <Shield size={14} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-gray-900 leading-none mb-1">30+ Years Trust</div>
                  <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-none">500+ Distributors</div>
                </div>
              </motion.div>

              {/* Map Image */}
              <img 
                src={indiaMap} 
                alt="Our Service Network in India" 
                className="w-full h-auto md:w-auto md:h-[550px] lg:h-[700px] block drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] filter brightness-[1.02] relative z-10"
              />

              {/* Floating Stat Badges */}
              {floatingStats.map((stat) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    opacity: { duration: 0.8, delay: stat.delay + 0.5 },
                    y: { 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: stat.delay 
                    }
                  }}
                  className={`absolute ${stat.pos} z-20 hidden xl:flex items-center gap-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-white/50 group hover:scale-105 transition-transform duration-300`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    stat.color === 'green' ? 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white' :
                    stat.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' :
                    stat.color === 'red' ? 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white' :
                    'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white'
                  }`}>
                    <stat.icon size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-gray-900 tracking-tight leading-none mb-1">{stat.label}</div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none">{stat.sub}</div>
                  </div>
                </motion.div>
              ))}

              {/* Pulse Wave Effects on Image Dots - Futuristic Speed */}
              {activePoints.map((point, index) => (
                <div 
                  key={index} 
                  className="absolute z-20 group cursor-pointer" 
                  style={{ top: `${point.top}%`, left: `${point.left}%`, transform: 'translate(-50%, -50%)' }}
                >
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-gray-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg whitespace-nowrap shadow-xl">
                      {point.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>

                  {/* Multiple Concentric 3D Waves - Triple Pulse Ring */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-4 h-4 md:w-6 md:h-6 rounded-full border border-red-500/80 animate-[ping_1.5s_linear_infinite] opacity-60"></div>
                    <div className="absolute w-8 h-8 md:w-12 md:h-12 rounded-full border border-red-400/50 animate-[ping_2s_linear_infinite] delay-200 opacity-40"></div>
                    <div className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full border border-red-300/30 animate-[ping_2.5s_linear_infinite] delay-400 opacity-20"></div>
                    {/* Small solid dot for precision */}
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-600 rounded-full shadow-[0_0_12px_rgba(220,38,38,0.7)] group-hover:scale-150 transition-transform duration-300"></div>
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
