import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Deep Rich Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#011c14] via-[#023f2f] to-[#01120d]"></div>
      
      {/* Central Glowing Radial Spotlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-40 pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at center, rgba(34, 197, 94, 0.3) 0%, transparent 60%)' }}
      ></div>
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.07] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-green-50/90 mb-12 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Join India's most trusted FMCG distribution network and unlock exclusive profit margins and logistical support.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05, translateY: -4 }}
            whileTap={{ scale: 0.95 }}
            href="#apply" 
            className="inline-block bg-white text-green-950 px-12 py-5 rounded-2xl font-black text-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all tracking-wider uppercase border border-white/10 hover:bg-green-50"
          >
            Start Your Journey Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
