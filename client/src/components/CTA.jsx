import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-green-900"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-[900] mb-8 tracking-tighter">Ready to Scale Your Business?</h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            Join India's most trusted FMCG distribution network and unlock exclusive profit margins and logistical support.
          </p>
          <motion.a 
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.95 }}
            href="#apply" 
            className="inline-block bg-white text-green-700 px-12 py-5 rounded-2xl font-[900] text-xl shadow-[0_20px_50px_rgba(255,255,255,0.2)] hover:shadow-[0_30px_60px_rgba(255,255,255,0.4)] transition-all tracking-wider uppercase"
          >
            Start Partnering Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
